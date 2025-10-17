// Middleware centralizado para el manejo de errores
export const errorHandler = (err, req, res, next) => {
  console.error('Error capturado:', err.stack);

  // Error de validación de Mongoose
  if (err.name === 'ValidationError') {
    const errors = Object.values(err.errors).map(e => e.message);
    return res.status(400).json({
      error: 'Error de validación',
      details: errors
    });
  }

  // Error de duplicado de Mongoose
  if (err.code === 11000) {
    const field = Object.keys(err.keyPattern)[0];
    return res.status(400).json({
      error: `El ${field} ya existe en la base de datos`
    });
  }

  // Error de ObjectId inválido
  if (err.name === 'CastError') {
    return res.status(400).json({
      error: 'ID de formato inválido'
    });
  }

  // Error de stock insuficiente (personalizado)
  if (err.message === 'Stock insuficiente') {
    return res.status(400).json({
      error: 'Stock insuficiente'
    });
  }

  // Error de producto no encontrado
  if (err.message === 'Producto no encontrado') {
    return res.status(404).json({
      error: 'Producto no encontrado'
    });
  }

  // Error de venta no encontrada
  if (err.message === 'Venta no encontrada') {
    return res.status(404).json({
      error: 'Venta no encontrada'
    });
  }

  // Error por defecto
  res.status(500).json({
    error: 'Error interno del servidor',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Algo salió mal'
  });
};

// Middleware para manejar rutas no encontradas
export const notFoundHandler = (req, res, next) => {
  res.status(404).json({
    error: 'Ruta no encontrada',
    message: `La ruta ${req.originalUrl} no existe`
  });
};
