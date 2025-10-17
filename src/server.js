import express from "express";
import 'dotenv/config';
import cors from "cors";
import rateLimit from "express-rate-limit";
import { connect } from "./config/db.js";
import productsRouter from "./routers/productsRouter.js";
import ventasRouter from "./routers/ventasRouter.js";
import { errorHandler, notFoundHandler } from "./middlewares/errorHandler.js";

// Configuración de la aplicación
const app = express();
const port = process.env.PORT || 3000;

// Configuración de CORS
app.use(cors({
    origin: [
        "http://localhost:5500",
        "http://127.0.0.1:5500",
        "http://localhost:5501",
        "http://127.0.0.1:5501",
        "http://localhost:5502",
        "http://127.0.0.1:5502",
        "http://localhost:3000",
        "http://127.0.0.1:3000"
    ], // Múltiples orígenes autorizados
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type"],
    credentials: false
}));

// Middleware para parsear JSON
app.use(express.json());

// Configuración de rate limiting
const limiter = rateLimit({
    windowMs: 60 * 1000, // 1 minuto
    max: 100, // máximo 100 requests por minuto
    message: {
        error: "Demasiadas solicitudes, intenta de nuevo más tarde"
    }
});

app.use(limiter);

// Rutas de la API
app.use("/api/productos", productsRouter);
app.use("/api/ventas", ventasRouter);

// Ruta de salud
app.get("/health", (req, res) => {
    res.json({ 
        message: "API funcionando correctamente",
        timestamp: new Date().toISOString()
    });
});

// Ruta raíz
app.get("/", (req, res) => {
    res.json({
        message: "API de Control de Inventario de Tienda de Videojuegos",
        version: "1.0.0",
        endpoints: {
            productos: "/api/productos",
            ventas: "/api/ventas",
            salud: "/health"
        }
    });
});

// Middleware para manejar rutas no encontradas
app.use(notFoundHandler);

// Middleware para manejo de errores
app.use(errorHandler);

// Iniciar servidor
const startServer = async () => {
    try {
        await connect();
        app.listen(port, () => {
            console.log(`🚀 Servidor ejecutándose en: http://localhost:${port}`);
            console.log(`📊 API de Control de Inventario de Videojuegos`);
        });
    } catch (error) {
        console.error("❌ Error al iniciar el servidor:", error);
        process.exit(1);
    }
};

// Manejo de errores no capturados
process.on('unhandledRejection', (err) => {
    console.error('❌ Error no manejado:', err);
    process.exit(1);
});

process.on('uncaughtException', (err) => {
    console.error('❌ Excepción no capturada:', err);
    process.exit(1);
});

// Iniciar la aplicación
startServer();