import { getDB } from '../config/db.js';
import { ObjectId } from 'mongodb';

// Clase para manejar operaciones de productos con MongoDB driver
class Producto {
  constructor(data) {
    this.nombre = data.nombre;
    this.tipo = data.tipo;
    this.precio = data.precio;
    this.cantidad = data.cantidad || 0;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  // Validar datos del producto
  static validate(data) {
    const errors = [];
    
    if (!data.nombre || data.nombre.trim().length === 0) {
      errors.push('El nombre es obligatorio');
    } else if (data.nombre.length > 100) {
      errors.push('El nombre no puede exceder 100 caracteres');
    }
    
    if (!data.tipo || !['juego', 'consola'].includes(data.tipo)) {
      errors.push('El tipo debe ser "juego" o "consola"');
    }
    
    if (!data.precio || data.precio <= 0) {
      errors.push('El precio debe ser mayor que 0');
    }
    
    if (data.cantidad === undefined || data.cantidad < 0) {
      errors.push('La cantidad debe ser mayor o igual a 0');
    }
    
    return errors;
  }

  // Crear un nuevo producto
  static async create(data) {
    const errors = this.validate(data);
    if (errors.length > 0) {
      throw new Error(errors.join(', '));
    }

    const db = getDB();
    const producto = new Producto(data);
    
    const result = await db.collection('productos').insertOne(producto);
    return { ...producto, _id: result.insertedId };
  }

  // Obtener todos los productos
  static async findAll() {
    const db = getDB();
    return await db.collection('productos').find({}).sort({ createdAt: -1 }).toArray();
  }

  // Obtener producto por ID
  static async findById(id) {
    const db = getDB();
    try {
      return await db.collection('productos').findOne({ _id: new ObjectId(id) });
    } catch (error) {
      return null;
    }
  }

  // Actualizar producto
  static async updateById(id, data) {
    const errors = this.validate(data);
    if (errors.length > 0) {
      throw new Error(errors.join(', '));
    }

    const db = getDB();
    const updateData = {
      ...data,
      updatedAt: new Date()
    };

    const result = await db.collection('productos').findOneAndUpdate(
      { _id: new ObjectId(id) },
      { $set: updateData },
      { returnDocument: 'after' }
    );

    return result;
  }

  // Eliminar producto
  static async deleteById(id) {
    const db = getDB();
    const result = await db.collection('productos').findOneAndDelete({ _id: new ObjectId(id) });
    return result;
  }

  // Verificar si hay stock suficiente
  static async tieneStock(productoId, cantidadRequerida) {
    const producto = await this.findById(productoId);
    return producto && producto.cantidad >= cantidadRequerida;
  }

  // Descontar stock
  static async descontarStock(productoId, cantidad) {
    const db = getDB();
    
    const result = await db.collection('productos').findOneAndUpdate(
      { 
        _id: new ObjectId(productoId),
        cantidad: { $gte: cantidad }
      },
      { 
        $inc: { cantidad: -cantidad },
        $set: { updatedAt: new Date() }
      },
      { returnDocument: 'after' }
    );

    if (!result) {
      throw new Error('Stock insuficiente');
    }

    return result;
  }

  // Buscar productos por tipo
  static async findByType(tipo) {
    const db = getDB();
    return await db.collection('productos').find({ tipo }).toArray();
  }

  // Buscar productos por rango de precio
  static async findByPriceRange(minPrice, maxPrice) {
    const db = getDB();
    return await db.collection('productos').find({
      precio: { $gte: minPrice, $lte: maxPrice }
    }).toArray();
  }
}

export default Producto;
