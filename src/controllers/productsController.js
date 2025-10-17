import Producto from '../models/Producto.js';

// Controlador para obtener todos los productos
export async function getProducts(req, res, next) {
    try {
        const productos = await Producto.findAll();
        res.status(200).json({
            message: "Productos obtenidos correctamente",
            productos
        });
    } catch (error) {
        next(error);
    }
}

// Controlador para obtener un producto por ID
export async function getProduct(req, res, next) {
    try {
        const producto = await Producto.findById(req.params.id);
        if (!producto) {
            return res.status(404).json({
                error: "Producto no encontrado"
            });
        }
        res.status(200).json({
            message: "Producto obtenido correctamente",
            producto
        });
    } catch (error) {
        next(error);
    }
}

// Controlador para crear un nuevo producto
export async function postProduct(req, res, next) {
    try {
        const productoGuardado = await Producto.create(req.body);
        
        res.status(201).json({
            message: "Producto creado correctamente",
            producto: productoGuardado
        });
    } catch (error) {
        next(error);
    }
}

// Controlador para actualizar un producto
export async function putProduct(req, res, next) {
    try {
        const producto = await Producto.updateById(req.params.id, req.body);
        
        if (!producto) {
            return res.status(404).json({
                error: "Producto no encontrado"
            });
        }
        
        res.status(200).json({
            message: "Producto actualizado correctamente",
            producto
        });
    } catch (error) {
        next(error);
    }
}

// Controlador para eliminar un producto
export async function deleteProduct(req, res, next) {
    try {
        const producto = await Producto.deleteById(req.params.id);
        
        if (!producto) {
            return res.status(404).json({
                error: "Producto no encontrado"
            });
        }
        
        res.status(200).json({
            message: "Producto eliminado correctamente"
        });
    } catch (error) {
        next(error);
    }
}