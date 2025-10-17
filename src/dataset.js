import { connect, getDB, closeConnection } from './config/db.js';
import 'dotenv/config';
import Producto from './models/Producto.js';
import Venta from './models/Venta.js';

// Datos de prueba para la tienda de videojuegos
const productosPrueba = [
  {
    nombre: "PlayStation 5",
    tipo: "consola",
    precio: 3200000,
    cantidad: 15
  },
  {
    nombre: "Xbox Series X",
    tipo: "consola", 
    precio: 3000000,
    cantidad: 12
  },
  {
    nombre: "Nintendo Switch",
    tipo: "consola",
    precio: 1800000,
    cantidad: 20
  },
  {
    nombre: "FIFA 24",
    tipo: "juego",
    precio: 150000,
    cantidad: 50
  },
  {
    nombre: "Call of Duty: Modern Warfare III",
    tipo: "juego",
    precio: 180000,
    cantidad: 30
  },
  {
    nombre: "The Legend of Zelda: Tears of the Kingdom",
    tipo: "juego",
    precio: 200000,
    cantidad: 25
  },
  {
    nombre: "Spider-Man 2",
    tipo: "juego",
    precio: 220000,
    cantidad: 18
  },
  {
    nombre: "Mario Kart 8 Deluxe",
    tipo: "juego",
    precio: 160000,
    cantidad: 35
  }
];

// Función para poblar la base de datos
async function poblarBaseDatos() {
  try {
    // Conectar a MongoDB
    await connect();
    console.log("✅ Conectado a MongoDB");

    const db = getDB();

    // Limpiar colecciones existentes
    await db.collection('productos').deleteMany({});
    await db.collection('ventas').deleteMany({});
    console.log("🧹 Colecciones limpiadas");

    // Insertar productos de prueba
    const productosCreados = [];
    for (const productoData of productosPrueba) {
      const producto = await Producto.create(productoData);
      productosCreados.push(producto);
    }
    console.log(`📦 ${productosCreados.length} productos creados`);

    // Crear algunas ventas de prueba
    const ventasPrueba = [
      {
        producto: productosCreados[0]._id, // PlayStation 5
        cantidadVendida: 2,
        precioUnitario: productosCreados[0].precio
      },
      {
        producto: productosCreados[3]._id, // FIFA 24
        cantidadVendida: 5,
        precioUnitario: productosCreados[3].precio
      },
      {
        producto: productosCreados[1]._id, // Xbox Series X
        cantidadVendida: 1,
        precioUnitario: productosCreados[1].precio
      }
    ];

    const ventasCreadas = [];
    for (const ventaData of ventasPrueba) {
      const venta = await Venta.create(ventaData);
      ventasCreadas.push(venta);
    }
    console.log(`🛒 ${ventasCreadas.length} ventas creadas`);

    console.log("📊 Base de datos poblada exitosamente");
    console.log("🎮 Tienda de videojuegos lista para usar!");

  } catch (error) {
    console.error("❌ Error al poblar la base de datos:", error);
  } finally {
    // Cerrar conexión
    await closeConnection();
    console.log("🔌 Conexión cerrada");
    process.exit(0);
  }
}

// Ejecutar solo si es llamado directamente
if (import.meta.url === `file://${process.argv[1]}`) {
  poblarBaseDatos();
}

export default poblarBaseDatos;