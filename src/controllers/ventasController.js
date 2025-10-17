import Venta from '../models/Venta.js';
import Producto from '../models/Producto.js';

// Controlador para obtener todas las ventas
export async function getVentas(req, res, next) {
    try {
        const ventas = await Venta.findAll();
        
        res.status(200).json({
            message: "Ventas obtenidas correctamente",
            ventas
        });
    } catch (error) {
        next(error);
    }
}

// Controlador para obtener una venta por ID
export async function getVenta(req, res, next) {
    try {
        const venta = await Venta.findById(req.params.id);
        
        if (!venta || venta.length === 0) {
            return res.status(404).json({
                error: "Venta no encontrada"
            });
        }
        
        res.status(200).json({
            message: "Venta obtenida correctamente",
            venta: venta[0]
        });
    } catch (error) {
        next(error);
    }
}

// Controlador para crear una nueva venta
export async function postVenta(req, res, next) {
    try {
        const { producto, cantidadVendida } = req.body;

        // Obtener el producto para verificar precio
        const productoEncontrado = await Producto.findById(producto);
        if (!productoEncontrado) {
            return res.status(404).json({
                error: "Producto no encontrado"
            });
        }

        // Crear la venta con el precio del producto
        const ventaData = {
            producto,
            cantidadVendida,
            precioUnitario: productoEncontrado.precio
        };

        const ventaGuardada = await Venta.create(ventaData);

        res.status(201).json({
            message: "Venta registrada correctamente",
            venta: ventaGuardada
        });
    } catch (error) {
        next(error);
    }
}

// Controlador para obtener estadísticas de ventas
export async function getEstadisticasVentas(req, res, next) {
    try {
        const estadisticas = await Venta.getStatistics();
        
        res.status(200).json({
            message: "Estadísticas obtenidas correctamente",
            estadisticas
        });
    } catch (error) {
        next(error);
    }
}

// Controlador para obtener ventas por rango de fechas
export async function getVentasPorFecha(req, res, next) {
    try {
        const { fechaInicio, fechaFin } = req.query;
        
        if (!fechaInicio || !fechaFin) {
            return res.status(400).json({
                error: "Se requieren fechaInicio y fechaFin"
            });
        }

        const ventas = await Venta.findByDateRange(fechaInicio, fechaFin);

        res.status(200).json({
            message: "Ventas por fecha obtenidas correctamente",
            ventas
        });
    } catch (error) {
        next(error);
    }
}
