import { getDB } from '../config/db.js';
import { ObjectId } from 'mongodb';
import Producto from './Producto.js';

// Clase para manejar operaciones de ventas con MongoDB driver
class Venta {
  constructor(data) {
    this.producto = new ObjectId(data.producto);
    this.cantidadVendida = data.cantidadVendida;
    this.precioUnitario = data.precioUnitario;
    this.total = data.cantidadVendida * data.precioUnitario;
    this.fecha = new Date();
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  // Validar datos de la venta
  static validate(data) {
    const errors = [];
    
    if (!data.producto) {
      errors.push('El producto es obligatorio');
    }
    
    if (!data.cantidadVendida || data.cantidadVendida <= 0) {
      errors.push('La cantidad vendida debe ser mayor que 0');
    }
    
    if (!data.precioUnitario || data.precioUnitario <= 0) {
      errors.push('El precio unitario debe ser mayor que 0');
    }
    
    return errors;
  }

  // Crear una nueva venta
  static async create(data) {
    const errors = this.validate(data);
    if (errors.length > 0) {
      throw new Error(errors.join(', '));
    }

    // Verificar que el producto existe
    const producto = await Producto.findById(data.producto);
    if (!producto) {
      throw new Error('Producto no encontrado');
    }

    // Verificar stock
    if (!await Producto.tieneStock(data.producto, data.cantidadVendida)) {
      throw new Error('Stock insuficiente');
    }

    const db = getDB();
    const venta = new Venta(data);
    
    // Usar transacción para asegurar consistencia
    const session = db.client.startSession();
    
    try {
      await session.withTransaction(async () => {
        // Crear la venta
        const result = await db.collection('ventas').insertOne(venta, { session });
        
        // Descontar stock del producto
        await Producto.descontarStock(data.producto, data.cantidadVendida);
        
        return { ...venta, _id: result.insertedId };
      });
    } finally {
      await session.endSession();
    }

    const result = await db.collection('ventas').insertOne(venta);
    return { ...venta, _id: result.insertedId };
  }

  // Obtener todas las ventas
  static async findAll() {
    const db = getDB();
    return await db.collection('ventas').aggregate([
      {
        $lookup: {
          from: 'productos',
          localField: 'producto',
          foreignField: '_id',
          as: 'productoInfo'
        }
      },
      {
        $unwind: '$productoInfo'
      },
      {
        $project: {
          _id: 1,
          producto: 1,
          cantidadVendida: 1,
          precioUnitario: 1,
          total: 1,
          fecha: 1,
          createdAt: 1,
          updatedAt: 1,
          'productoInfo.nombre': 1,
          'productoInfo.tipo': 1,
          'productoInfo.precio': 1
        }
      },
      {
        $sort: { fecha: -1 }
      }
    ]).toArray();
  }

  // Obtener venta por ID
  static async findById(id) {
    const db = getDB();
    try {
      return await db.collection('ventas').aggregate([
        {
          $match: { _id: new ObjectId(id) }
        },
        {
          $lookup: {
            from: 'productos',
            localField: 'producto',
            foreignField: '_id',
            as: 'productoInfo'
          }
        },
        {
          $unwind: '$productoInfo'
        },
        {
          $project: {
            _id: 1,
            producto: 1,
            cantidadVendida: 1,
            precioUnitario: 1,
            total: 1,
            fecha: 1,
            createdAt: 1,
            updatedAt: 1,
            'productoInfo.nombre': 1,
            'productoInfo.tipo': 1,
            'productoInfo.precio': 1
          }
        }
      ]).toArray();
    } catch (error) {
      return null;
    }
  }

  // Obtener ventas por rango de fechas
  static async findByDateRange(fechaInicio, fechaFin) {
    const db = getDB();
    return await db.collection('ventas').aggregate([
      {
        $match: {
          fecha: {
            $gte: new Date(fechaInicio),
            $lte: new Date(fechaFin)
          }
        }
      },
      {
        $lookup: {
          from: 'productos',
          localField: 'producto',
          foreignField: '_id',
          as: 'productoInfo'
        }
      },
      {
        $unwind: '$productoInfo'
      },
      {
        $project: {
          _id: 1,
          producto: 1,
          cantidadVendida: 1,
          precioUnitario: 1,
          total: 1,
          fecha: 1,
          createdAt: 1,
          updatedAt: 1,
          'productoInfo.nombre': 1,
          'productoInfo.tipo': 1,
          'productoInfo.precio': 1
        }
      },
      {
        $sort: { fecha: -1 }
      }
    ]).toArray();
  }

  // Obtener estadísticas de ventas
  static async getStatistics() {
    const db = getDB();
    const result = await db.collection('ventas').aggregate([
      {
        $group: {
          _id: null,
          totalVentas: { $sum: '$total' },
          cantidadTotalVendida: { $sum: '$cantidadVendida' },
          promedioVenta: { $avg: '$total' },
          totalVentasCount: { $sum: 1 }
        }
      }
    ]).toArray();

    return result[0] || {
      totalVentas: 0,
      cantidadTotalVendida: 0,
      promedioVenta: 0,
      totalVentasCount: 0
    };
  }

  // Obtener ventas por producto
  static async findByProduct(productoId) {
    const db = getDB();
    return await db.collection('ventas').find({ producto: new ObjectId(productoId) }).toArray();
  }

  // Eliminar venta (con restauración de stock)
  static async deleteById(id) {
    const db = getDB();
    
    // Obtener la venta antes de eliminarla
    const venta = await db.collection('ventas').findOne({ _id: new ObjectId(id) });
    if (!venta) {
      return null;
    }

    // Restaurar stock del producto
    await db.collection('productos').findOneAndUpdate(
      { _id: venta.producto },
      { 
        $inc: { cantidad: venta.cantidadVendida },
        $set: { updatedAt: new Date() }
      }
    );

    // Eliminar la venta
    const result = await db.collection('ventas').findOneAndDelete({ _id: new ObjectId(id) });
    return result;
  }
}

export default Venta;
