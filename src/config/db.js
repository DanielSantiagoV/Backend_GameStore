import { MongoClient } from "mongodb";
import 'dotenv/config';

const client = new MongoClient(process.env.MONGO_URI || 'mongodb://localhost:27017/tienda_videojuegos');
let db;

export async function connect() {
    try {
        const mongoUri = process.env.MONGO_URI || 'mongodb://localhost:27017/tienda_videojuegos';
        const dbName = process.env.DB_NAME || 'tienda_videojuegos';
        
        console.log(`🔗 Conectando a MongoDB: ${mongoUri}`);
        
        await client.connect();
        db = client.db(dbName);
        console.log("✅ Conectado a MongoDB exitosamente");
        
        // Crear índices para optimizar consultas
        await createIndexes();
        
        return db;
    } catch (error) {
        console.error("❌ Error al conectar con MongoDB:", error);
        console.log("💡 Asegúrate de que MongoDB esté ejecutándose en tu sistema");
        throw error;
    }
}

export function getDB() {
    if (!db) throw new Error("Base de datos no disponible. Asegúrate de conectar primero.");
    return db;
}

// Función para crear índices en las colecciones
async function createIndexes() {
    try {
        // Índices para la colección de productos
        await db.collection('productos').createIndex({ nombre: 1 });
        await db.collection('productos').createIndex({ tipo: 1 });
        await db.collection('productos').createIndex({ precio: 1 });
        
        // Índices para la colección de ventas
        await db.collection('ventas').createIndex({ producto: 1 });
        await db.collection('ventas').createIndex({ fecha: -1 });
        await db.collection('ventas').createIndex({ total: 1 });
        
        console.log("📊 Índices creados correctamente");
    } catch (error) {
        console.error("❌ Error al crear índices:", error);
    }
}

// Función para cerrar la conexión
export async function closeConnection() {
    try {
        await client.close();
        console.log("🔌 Conexión a MongoDB cerrada");
    } catch (error) {
        console.error("❌ Error al cerrar conexión:", error);
    }
}