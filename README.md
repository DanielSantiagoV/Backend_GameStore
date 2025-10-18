# 🎮 Backend GameStore - Sistema de Control de Inventario

<div align="center">
  <img src="https://media.tenor.com/_mOMxTWntRcAAAAi/pepe-gaming.gif" alt="Pepe Gaming" width="300" height="200">
</div>

> **Sistema de Gestión de Inventario para Tienda de Videojuegos**  
> *Interfaz de usuario moderna y responsiva para la gestión completa de productos y ventas*

## 🔗 Frontend Repository

**Repositorio del Frontend:** [Frontend GameStore](https://github.com/DanielSantiagoV/Game_Store.git)

El frontend está desarrollado con HTML, CSS y JavaScript vanilla, conectándose a este backend a través de las APIs documentadas.

## 🔗 Videos sustentación
**Parte1:** [Backend](https://youtu.be/TTiMNBuULb8)
**Parte2:**  [Fronted](https://youtu.be/mhJwC_7tgP8)

## 📋 Descripción del Proyecto

Este es el backend completo para un sistema de control de inventario de una tienda de videojuegos y consolas. El sistema permite gestionar productos (juegos y consolas) y registrar ventas con validación automática de stock.

### 🎯 **Objetivo del Sistema**

El sistema está diseñado para resolver las necesidades de gestión de inventario de una tienda de videojuegos, proporcionando:

- **Control de Stock**: Seguimiento en tiempo real del inventario
- **Gestión de Ventas**: Registro automático con validación de disponibilidad
- **Reportes**: Análisis de productos y ventas
- **Escalabilidad**: Arquitectura preparada para crecimiento
- **Seguridad**: Validación robusta y manejo de errores

### 🏗️ **Arquitectura del Sistema**

#### **Patrón de Arquitectura: MVC (Model-View-Controller)**

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend API   │    │   Database      │
│   (HTML/CSS/JS) │◄──►│   (Node.js)     │◄──►│   (MongoDB)     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

#### **Componentes del Backend**

- **Framework**: Node.js + Express (servidor web robusto)
- **Base de datos**: MongoDB (driver nativo para máximo rendimiento)
- **Validación**: Express-validator (validación de entrada robusta)
- **Estructura**: Modular (separación de responsabilidades)
- **CORS**: Configurado para comunicación cross-origin
- **Manejo de errores**: Centralizado y consistente

#### **Flujo de Datos**

```
Request → Routes → Validation → Controller → Database → Response
    ↓         ↓         ↓           ↓          ↓         ↓
  HTTP    Express   Express-   Business    MongoDB   JSON
         Router    Validator    Logic      Driver    Response
```

### 🚀 **Características Principales**

#### **Gestión de Productos**
- ✅ **CRUD Completo**: Crear, Leer, Actualizar, Eliminar productos
- ✅ **Validación Robusta**: Campos obligatorios, tipos de datos, rangos
- ✅ **Búsqueda Avanzada**: Por nombre, tipo, rango de precios
- ✅ **Paginación Inteligente**: Navegación eficiente en grandes datasets
- ✅ **Ordenamiento**: Múltiples criterios de ordenamiento
- ✅ **Importación Masiva**: Carga de datos desde archivos JSON
- ✅ **Exportación**: Backup completo de datos

#### **Sistema de Ventas**
- ✅ **Validación de Stock**: Previene ventas sin inventario
- ✅ **Operaciones Atómicas**: Consistencia garantizada en transacciones
- ✅ **Historial Completo**: Seguimiento de todas las ventas
- ✅ **Población de Datos**: Información completa del producto en ventas
- ✅ **Fechas Automáticas**: Timestamps automáticos

#### **Características Técnicas**
- ✅ **Manejo de Errores Centralizado**: Respuestas consistentes
- ✅ **Validación de Entrada**: Express-validator integrado
- ✅ **CORS Configurado**: Comunicación con frontend
- ✅ **Variables de Entorno**: Configuración segura
- ✅ **Logging**: Registro de operaciones y errores
- ✅ **Documentación API**: Endpoints completamente documentados

### 🔧 **Tecnologías Utilizadas**

#### **Backend Stack**
- **Node.js**: Runtime de JavaScript del lado del servidor
- **Express.js**: Framework web minimalista y flexible
- **MongoDB**: Base de datos NoSQL orientada a documentos
- **MongoDB Driver**: Driver nativo para máximo rendimiento

#### **Middleware y Utilidades**
- **Express-validator**: Validación de entrada de datos
- **CORS**: Manejo de Cross-Origin Resource Sharing
- **dotenv**: Gestión de variables de entorno
- **nodemon**: Auto-reload en desarrollo

#### **Patrones de Diseño**
- **MVC**: Separación de responsabilidades
- **Repository Pattern**: Abstracción de acceso a datos
- **Middleware Pattern**: Procesamiento de requests
- **Error Handling**: Manejo centralizado de errores

## 📦 Requisitos de Instalación

### 🖥️ **Prerrequisitos del Sistema**

#### **Sistema Operativo**
- **Windows**: 10 o superior (recomendado Windows 11)
- **macOS**: 10.15 (Catalina) o superior
- **Linux**: Ubuntu 18.04+, CentOS 7+, o distribución compatible

#### **Software Requerido**

| Software | Versión Mínima | Versión Recomendada | Propósito |
|----------|----------------|---------------------|-----------|
| **Node.js** | 18.0.0 | 20.x LTS | Runtime de JavaScript |
| **npm** | 9.0.0 | 10.x | Gestor de paquetes |
| **MongoDB** | 5.0 | 7.0 | Base de datos |
| **Git** | 2.30 | 2.40+ | Control de versiones |

#### **Recursos del Sistema**
- **RAM**: Mínimo 4GB, recomendado 8GB
- **Almacenamiento**: 2GB libres
- **Conexión**: Internet para MongoDB Atlas

### 🔍 **Verificación de Instalación**

#### **Verificar Node.js y npm**
```bash
# Verificar Node.js
node --version
# Salida esperada: v18.x.x o superior

# Verificar npm
npm --version
# Salida esperada: 9.x.x o superior

# Verificar instalación global
npm list -g --depth=0
```

#### **Verificar MongoDB (Local)**
```bash
# Verificar MongoDB local
mongod --version
# Salida esperada: db version v5.x.x

# Verificar que MongoDB esté corriendo
mongo --eval "db.runCommand('ping')"
# Salida esperada: { "ok" : 1 }
```

#### **Verificar Git**
```bash
# Verificar Git
git --version
# Salida esperada: git version 2.x.x

# Configurar Git (si es necesario)
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@ejemplo.com"
```

### 🚨 **Solución de Problemas Comunes**

#### **Error: Node.js no encontrado**
```bash
# Windows (usando Chocolatey)
choco install nodejs

# macOS (usando Homebrew)
brew install node

# Linux (Ubuntu/Debian)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### **Error: npm no encontrado**
```bash
# Reinstalar npm
npm install -g npm@latest

# Verificar instalación
npm --version
```

#### **Error: MongoDB no encontrado**
```bash
# Windows: Descargar desde https://www.mongodb.com/try/download/community
# macOS: brew install mongodb-community
# Linux: Seguir guía oficial de MongoDB
```

### 📋 **Checklist de Instalación**

- [ ] Node.js 18+ instalado y funcionando
- [ ] npm 9+ instalado y funcionando
- [ ] MongoDB configurado (Atlas o local)
- [ ] Git configurado con usuario
- [ ] Conexión a internet estable
- [ ] Editor de código (VS Code recomendado)
- [ ] Postman instalado (para pruebas de API)

## 🔧 Instalación y Configuración

### 📥 **Paso 1: Clonar el Repositorio**

#### **Clonación Básica**
```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/Backend_GameStore.git

# Navegar al directorio
cd Backend_GameStore

# Verificar estructura
ls -la
```

#### **Clonación con SSH (Recomendado)**
```bash
# Si tienes SSH configurado
git clone git@github.com:tu-usuario/Backend_GameStore.git
cd Backend_GameStore
```

#### **Verificar Clonación**
```bash
# Verificar que se clonó correctamente
git status
# Debe mostrar: "On branch main"

# Verificar estructura del proyecto
tree backend/ -I node_modules
```

### 📦 **Paso 2: Instalar Dependencias**

#### **Instalación Básica**
```bash
# Navegar al directorio backend
cd backend

# Instalar dependencias
npm install

# Verificar instalación
npm list --depth=0
```

#### **Instalación con Verificación**
```bash
# Instalar con logs detallados
npm install --verbose

# Verificar integridad
npm audit

# Corregir vulnerabilidades (si las hay)
npm audit fix
```

#### **Verificar Dependencias Instaladas**
```bash
# Verificar dependencias principales
npm list express mongodb cors dotenv express-validator

# Verificar dependencias de desarrollo
npm list nodemon
```

### ⚙️ **Paso 3: Configurar Variables de Entorno**

#### **Crear Archivo .env**
```bash
# Crear archivo .env en backend/
touch .env

# O en Windows
type nul > .env
```

#### **Configuración Completa del .env**
```env
# ===========================================
# CONFIGURACIÓN DEL SERVIDOR
# ===========================================
PORT=3000
NODE_ENV=development

# ===========================================
# CONFIGURACIÓN DE MONGODB
# ===========================================
# MongoDB Atlas (Recomendado para producción)
MONGO_URI=mongodb+srv://usuario:password@cluster.mongodb.net/gamestore

# MongoDB Local (Para desarrollo)
# MONGO_URI=mongodb://localhost:27017/gamestore

# ===========================================
# CONFIGURACIÓN DE CORS
# ===========================================
CORS_ORIGIN=http://localhost:5500

# ===========================================
# CONFIGURACIÓN DE LOGGING
# ===========================================
LOG_LEVEL=info

# ===========================================
# CONFIGURACIÓN DE SEGURIDAD
# ===========================================
# JWT_SECRET=tu-secreto-super-seguro-aqui
# API_KEY=tu-api-key-aqui
```

#### **Ejemplos de Configuración**

##### **MongoDB Atlas (Recomendado)**
```env
# Ejemplo real de MongoDB Atlas
MONGO_URI=mongodb+srv://admin:miPassword123@cluster0.abc123.mongodb.net/gamestore?retryWrites=true&w=majority
```

##### **MongoDB Local**
```env
# Para desarrollo local
MONGO_URI=mongodb://localhost:27017/gamestore
```

##### **MongoDB con Autenticación**
```env
# Con usuario y contraseña
MONGO_URI=mongodb://usuario:password@localhost:27017/gamestore?authSource=admin
```

### 🚀 **Paso 4: Iniciar el Servidor**

#### **Modo Desarrollo (Recomendado)**
```bash
# Iniciar con nodemon (auto-reload)
npm run dev

# Salida esperada:
# [nodemon] 2.0.20
# [nodemon] to restart at any time, enter `rs`
# [nodemon] watching path(s): *.*
# [nodemon] watching extensions: js,mjs,cjs,json
# [nodemon] starting `node server.js`
# MongoDB connected
# Servidor escuchando en puerto 3000
```

#### **Modo Producción**
```bash
# Iniciar servidor de producción
npm start

# Salida esperada:
# MongoDB connected
# Servidor escuchando en puerto 3000
```

#### **Verificar que el Servidor Funciona**
```bash
# En otra terminal, probar la API
curl http://localhost:3000/api/productos

# Debe devolver: [] (array vacío si no hay productos)
```

### 🔧 **Configuración Avanzada**

#### **Configuración de MongoDB Atlas**

1. **Crear Cuenta en MongoDB Atlas**
   - Ir a [cloud.mongodb.com](https://cloud.mongodb.com)
   - Crear cuenta gratuita
   - Verificar email

2. **Crear Cluster**
   - Seleccionar plan gratuito (M0)
   - Elegir región más cercana
   - Crear cluster

3. **Configurar Acceso**
   - Crear usuario de base de datos
   - Configurar IP whitelist (0.0.0.0/0 para desarrollo)
   - Obtener string de conexión

4. **Obtener String de Conexión**
   ```
   mongodb+srv://<username>:<password>@cluster0.abc123.mongodb.net/<dbname>?retryWrites=true&w=majority
   ```

#### **Configuración de MongoDB Local**

1. **Instalar MongoDB**
   ```bash
   # Windows (usando Chocolatey)
   choco install mongodb
   
   # macOS (usando Homebrew)
   brew tap mongodb/brew
   brew install mongodb-community
   
   # Linux (Ubuntu)
   wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -
   sudo apt-get install -y mongodb-org
   ```

2. **Iniciar MongoDB**
   ```bash
   # Windows
   net start MongoDB
   
   # macOS/Linux
   brew services start mongodb-community
   # o
   sudo systemctl start mongod
   ```

3. **Verificar Conexión**
   ```bash
   # Conectar a MongoDB
   mongo
   
   # En la shell de MongoDB
   use gamestore
   db.runCommand("ping")
   ```

### 🧪 **Paso 5: Verificar Instalación**

#### **Pruebas Básicas**
```bash
# 1. Verificar que el servidor responde
curl http://localhost:3000/api/productos

# 2. Verificar logs del servidor
# Debe mostrar: MongoDB connected

# 3. Verificar base de datos
# Conectar a MongoDB y verificar colecciones
```

#### **Pruebas Avanzadas**
```bash
# Crear producto de prueba
curl -X POST http://localhost:3000/api/productos \
  -H "Content-Type: application/json" \
  -d '{"nombre":"Test Product","tipo":"juego","precio":100000,"cantidad":10}'

# Verificar que se creó
curl http://localhost:3000/api/productos
```

### 🚨 **Solución de Problemas de Instalación**

#### **Error: Puerto 3000 en uso**
```bash
# Encontrar proceso que usa el puerto
netstat -ano | findstr :3000

# Terminar proceso (Windows)
taskkill /PID <PID> /F

# O cambiar puerto en .env
PORT=3001
```

#### **Error: MongoDB no conecta**
```bash
# Verificar que MongoDB esté corriendo
mongod --version

# Verificar string de conexión
echo $MONGO_URI

# Probar conexión manual
mongo "mongodb+srv://..."
```

#### **Error: Dependencias no se instalan**
```bash
# Limpiar caché de npm
npm cache clean --force

# Eliminar node_modules y package-lock.json
rm -rf node_modules package-lock.json

# Reinstalar
npm install
```

### 📋 **Checklist de Configuración**

- [ ] Repositorio clonado correctamente
- [ ] Dependencias instaladas sin errores
- [ ] Archivo .env creado y configurado
- [ ] MongoDB conectado (Atlas o local)
- [ ] Servidor iniciado sin errores
- [ ] API responde en http://localhost:3000
- [ ] Logs muestran "MongoDB connected"
- [ ] Pruebas básicas funcionan

## 🌐 Variables de Entorno

### 📋 **Tabla de Variables de Entorno**

| Variable | Descripción | Ejemplo | Requerido | Categoría |
|----------|-------------|---------|-----------|-----------|
| `PORT` | Puerto del servidor | `3000` | No (default: 3000) | Servidor |
| `NODE_ENV` | Entorno de ejecución | `development` | No (default: development) | Servidor |
| `MONGO_URI` | URL de conexión a MongoDB | `mongodb+srv://...` | **Sí** | Base de Datos |
| `CORS_ORIGIN` | Origen permitido para CORS | `http://localhost:5500` | No | Seguridad |
| `LOG_LEVEL` | Nivel de logging | `info` | No (default: info) | Logging |
| `JWT_SECRET` | Secreto para JWT | `mi-secreto-super-seguro` | No | Seguridad |
| `API_KEY` | Clave de API | `abc123def456` | No | Seguridad |

### 🔧 **Configuración Detallada de Variables**

#### **Variables del Servidor**
```env
# Puerto del servidor (3000-65535)
PORT=3000

# Entorno de ejecución
NODE_ENV=development  # development, production, test

# Timeout para requests (milisegundos)
REQUEST_TIMEOUT=30000

# Límite de tamaño de body (bytes)
BODY_LIMIT=10mb
```

#### **Variables de Base de Datos**
```env
# MongoDB Atlas (Recomendado)
MONGO_URI=mongodb+srv://usuario:password@cluster.mongodb.net/gamestore

# MongoDB Local
MONGO_URI=mongodb://localhost:27017/gamestore

# MongoDB con opciones
MONGO_URI=mongodb+srv://usuario:password@cluster.mongodb.net/gamestore?retryWrites=true&w=majority&maxPoolSize=10

# Timeout de conexión (milisegundos)
MONGO_TIMEOUT=5000

# Pool de conexiones
MONGO_POOL_SIZE=10
```

#### **Variables de Seguridad**
```env
# CORS - Orígenes permitidos
CORS_ORIGIN=http://localhost:5500,http://localhost:3000

# JWT - Secreto para tokens
JWT_SECRET=tu-secreto-super-seguro-de-al-menos-32-caracteres

# API Key - Para autenticación
API_KEY=abc123def456ghi789

# Rate Limiting - Requests por minuto
RATE_LIMIT=100

# Session Secret
SESSION_SECRET=otro-secreto-para-sesiones
```

#### **Variables de Logging**
```env
# Nivel de logging
LOG_LEVEL=info  # error, warn, info, debug, verbose

# Archivo de logs
LOG_FILE=logs/app.log

# Rotación de logs
LOG_MAX_SIZE=10m
LOG_MAX_FILES=5
```

### 🗄️ **Configuración de MongoDB Atlas**

#### **Paso 1: Crear Cuenta y Cluster**
1. **Registrarse en MongoDB Atlas**
   - Ir a [cloud.mongodb.com](https://cloud.mongodb.com)
   - Hacer clic en "Try Free"
   - Completar formulario de registro
   - Verificar email

2. **Crear Cluster**
   ```
   Plan: M0 (Free Tier)
   Cloud Provider: AWS, Google Cloud, o Azure
   Region: Elegir la más cercana
   Cluster Name: cluster0 (o personalizado)
   ```

3. **Configurar Acceso a la Red**
   ```
   Network Access → Add IP Address
   - Para desarrollo: 0.0.0.0/0 (cualquier IP)
   - Para producción: IP específica de tu servidor
   ```

#### **Paso 2: Configurar Usuario de Base de Datos**
1. **Crear Usuario**
   ```
   Database Access → Add New User
   Username: admin (o tu preferencia)
   Password: Generar automáticamente o crear personalizada
   Database User Privileges: Read and write to any database
   ```

2. **Verificar Usuario**
   ```
   Username: admin
   Password: [tu-password]
   Database: admin
   ```

#### **Paso 3: Obtener String de Conexión**
1. **Conectar a tu Cluster**
   ```
   Clusters → Connect → Connect your application
   Driver: Node.js
   Version: 4.1 or later
   ```

2. **Copiar String de Conexión**
   ```
   mongodb+srv://admin:<password>@cluster0.abc123.mongodb.net/?retryWrites=true&w=majority
   ```

3. **Personalizar String de Conexión**
   ```env
   # String básico
   MONGO_URI=mongodb+srv://admin:password123@cluster0.abc123.mongodb.net/gamestore
   
   # String con opciones avanzadas
   MONGO_URI=mongodb+srv://admin:password123@cluster0.abc123.mongodb.net/gamestore?retryWrites=true&w=majority&maxPoolSize=10&serverSelectionTimeoutMS=5000&socketTimeoutMS=45000
   ```

#### **Paso 4: Configurar Base de Datos**
1. **Crear Base de Datos**
   ```javascript
   // Conectar a MongoDB Compass o shell
   use gamestore
   
   // Crear colecciones
   db.createCollection("productos")
   db.createCollection("ventas")
   ```

2. **Verificar Conexión**
   ```bash
   # Probar conexión desde terminal
   mongo "mongodb+srv://admin:password123@cluster0.abc123.mongodb.net/gamestore"
   ```

### 🏠 **Configuración de MongoDB Local**

#### **Instalación en Windows**
```bash
# Usando Chocolatey
choco install mongodb

# Usando Scoop
scoop install mongodb

# Descarga manual
# Ir a https://www.mongodb.com/try/download/community
# Descargar e instalar MongoDB Community Server
```

#### **Instalación en macOS**
```bash
# Usando Homebrew
brew tap mongodb/brew
brew install mongodb-community

# Iniciar servicio
brew services start mongodb-community
```

#### **Instalación en Linux (Ubuntu/Debian)**
```bash
# Importar clave pública
wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | sudo apt-key add -

# Crear archivo de lista
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list

# Actualizar paquetes
sudo apt-get update

# Instalar MongoDB
sudo apt-get install -y mongodb-org

# Iniciar servicio
sudo systemctl start mongod
sudo systemctl enable mongod
```

#### **Configuración de MongoDB Local**
```env
# Conexión básica
MONGO_URI=mongodb://localhost:27017/gamestore

# Con autenticación
MONGO_URI=mongodb://usuario:password@localhost:27017/gamestore?authSource=admin

# Con opciones
MONGO_URI=mongodb://localhost:27017/gamestore?maxPoolSize=10&serverSelectionTimeoutMS=5000
```

### 🔒 **Configuración de Seguridad**

#### **Variables de Entorno Seguras**
```env
# JWT Secret (mínimo 32 caracteres)
JWT_SECRET=mi-secreto-super-seguro-de-al-menos-32-caracteres-para-jwt

# API Key (generar aleatoriamente)
API_KEY=abc123def456ghi789jkl012mno345pqr678

# Session Secret
SESSION_SECRET=otro-secreto-para-sesiones-de-usuario

# Encryption Key (para datos sensibles)
ENCRYPTION_KEY=clave-de-encriptacion-de-32-bytes
```

#### **Configuración de CORS**
```env
# Desarrollo
CORS_ORIGIN=http://localhost:5500,http://localhost:3000

# Producción
CORS_ORIGIN=https://tu-dominio.com,https://www.tu-dominio.com

# Múltiples orígenes
CORS_ORIGIN=http://localhost:5500,https://staging.tu-dominio.com,https://tu-dominio.com
```

### 📊 **Configuración de Logging**

#### **Variables de Logging**
```env
# Nivel de logging
LOG_LEVEL=info  # error, warn, info, debug, verbose

# Archivo de logs
LOG_FILE=logs/app.log

# Rotación de logs
LOG_MAX_SIZE=10m
LOG_MAX_FILES=5

# Logs en consola
LOG_CONSOLE=true

# Logs de base de datos
LOG_DB_QUERIES=false
```

#### **Configuración de Logs**
```javascript
// Ejemplo de configuración de logging
const logConfig = {
  level: process.env.LOG_LEVEL || 'info',
  file: process.env.LOG_FILE || 'logs/app.log',
  maxSize: process.env.LOG_MAX_SIZE || '10m',
  maxFiles: process.env.LOG_MAX_FILES || 5,
  console: process.env.LOG_CONSOLE === 'true'
};
```

### 🧪 **Validación de Configuración**

#### **Script de Validación**
```bash
# Crear script de validación
cat > validate-env.js << 'EOF'
const requiredVars = ['MONGO_URI'];
const missingVars = requiredVars.filter(var => !process.env[var]);

if (missingVars.length > 0) {
  console.error('❌ Variables de entorno faltantes:', missingVars);
  process.exit(1);
}

console.log('✅ Todas las variables requeridas están configuradas');
console.log('🔗 MongoDB URI:', process.env.MONGO_URI ? 'Configurado' : 'No configurado');
console.log('🌐 Puerto:', process.env.PORT || 3000);
console.log('🔒 CORS Origin:', process.env.CORS_ORIGIN || 'No configurado');
EOF

# Ejecutar validación
node validate-env.js
```

#### **Verificación de Conexión**
```bash
# Probar conexión a MongoDB
node -e "
const { MongoClient } = require('mongodb');
const uri = process.env.MONGO_URI;
if (!uri) {
  console.error('❌ MONGO_URI no configurado');
  process.exit(1);
}
MongoClient.connect(uri)
  .then(() => console.log('✅ MongoDB conectado'))
  .catch(err => console.error('❌ Error de conexión:', err.message));
"
```

### 📋 **Checklist de Variables de Entorno**

- [ ] `MONGO_URI` configurado correctamente
- [ ] `PORT` definido (o usando default 3000)
- [ ] `NODE_ENV` configurado apropiadamente
- [ ] `CORS_ORIGIN` configurado para frontend
- [ ] Variables de seguridad configuradas (si aplica)
- [ ] Logging configurado apropiadamente
- [ ] Conexión a MongoDB verificada
- [ ] Variables de entorno no expuestas en código
- [ ] Archivo `.env` en `.gitignore`
- [ ] Documentación de variables actualizada

## 📚 API Endpoints

### 🎯 Productos

#### Listar Productos (con filtros y paginación)

```http
GET /api/productos
```

**Parámetros de consulta:**
- `page`: Número de página (default: 1)
- `limit`: Elementos por página (default: 10)
- `search`: Búsqueda por nombre
- `tipo`: Filtro por tipo (`juego` o `consola`)
- `minPrecio`: Precio mínimo
- `maxPrecio`: Precio máximo
- `sort`: Campo de ordenamiento (default: `createdAt`)
- `order`: Orden (`asc` o `desc`, default: `desc`)

**Ejemplo de petición:**
```bash
curl "http://localhost:3000/api/productos?page=1&limit=5&search=PS5&tipo=consola&sort=precio&order=asc"
```

**Respuesta:**
```json
{
  "total": 25,
  "page": 1,
  "pages": 5,
  "items": [
    {
      "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
      "nombre": "PS5",
      "tipo": "consola",
      "precio": 3200000,
      "cantidad": 10,
      "createdAt": "2023-09-05T10:30:00.000Z",
      "updatedAt": "2023-09-05T10:30:00.000Z"
    }
  ]
}
```

#### Obtener Producto por ID

```http
GET /api/productos/:id
```

**Ejemplo:**
```bash
curl http://localhost:3000/api/productos/64f8a1b2c3d4e5f6a7b8c9d0
```

**Respuesta:**
```json
{
  "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
  "nombre": "PS5",
  "tipo": "consola",
  "precio": 3200000,
  "cantidad": 10,
  "createdAt": "2023-09-05T10:30:00.000Z",
  "updatedAt": "2023-09-05T10:30:00.000Z"
}
```

#### Crear Producto

```http
POST /api/productos
Content-Type: application/json
```

**Cuerpo de la petición:**
```json
{
  "nombre": "Nintendo Switch OLED",
  "tipo": "consola",
  "precio": 1800000,
  "cantidad": 15
}
```

**Ejemplo con curl:**
```bash
curl -X POST http://localhost:3000/api/productos \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Nintendo Switch OLED",
    "tipo": "consola", 
    "precio": 1800000,
    "cantidad": 15
  }'
```

**Respuesta exitosa:**
```json
{
  "message": "Producto creado correctamente",
  "producto": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d1",
    "nombre": "Nintendo Switch OLED",
    "tipo": "consola",
    "precio": 1800000,
    "cantidad": 15,
    "createdAt": "2023-09-05T10:35:00.000Z",
    "updatedAt": "2023-09-05T10:35:00.000Z"
  }
}
```

#### Actualizar Producto

```http
PUT /api/productos/:id
Content-Type: application/json
```

**Ejemplo:**
```bash
curl -X PUT http://localhost:3000/api/productos/64f8a1b2c3d4e5f6a7b8c9d1 \
  -H "Content-Type: application/json" \
  -d '{
    "nombre": "Nintendo Switch OLED",
    "tipo": "consola",
    "precio": 1750000,
    "cantidad": 20
  }'
```

#### Eliminar Producto

```http
DELETE /api/productos/:id
```

**Ejemplo:**
```bash
curl -X DELETE http://localhost:3000/api/productos/64f8a1b2c3d4e5f6a7b8c9d1
```

#### Importar Productos (Bulk)

```http
POST /api/productos/import
Content-Type: application/json
```

**Cuerpo de la petición:**
```json
[
  {
    "nombre": "Xbox Series S",
    "tipo": "consola",
    "precio": 1500000,
    "cantidad": 8
  },
  {
    "nombre": "God of War Ragnarok",
    "tipo": "juego",
    "precio": 250000,
    "cantidad": 30
  }
]
```

**Ejemplo con curl:**
```bash
curl -X POST http://localhost:3000/api/productos/import \
  -H "Content-Type: application/json" \
  -d '[
    {
      "nombre": "Xbox Series S",
      "tipo": "consola",
      "precio": 1500000,
      "cantidad": 8
    },
    {
      "nombre": "God of War Ragnarok", 
      "tipo": "juego",
      "precio": 250000,
      "cantidad": 30
    }
  ]'
```

#### Exportar Productos

```http
GET /api/productos/export
```

**Ejemplo:**
```bash
curl http://localhost:3000/api/productos/export -o productos.json
```

### 💰 Ventas

#### Listar Ventas

```http
GET /api/ventas
```

**Ejemplo:**
```bash
curl http://localhost:3000/api/ventas
```

**Respuesta:**
```json
[
  {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d2",
    "producto": {
      "_id": "64f8a1b2c3d4e5f6a7b8c9d0",
      "nombre": "PS5",
      "tipo": "consola",
      "precio": 3200000,
      "cantidad": 8
    },
    "cantidadVendida": 2,
    "fecha": "2023-09-05T11:00:00.000Z",
    "createdAt": "2023-09-05T11:00:00.000Z",
    "updatedAt": "2023-09-05T11:00:00.000Z"
  }
]
```

#### Registrar Venta

```http
POST /api/ventas
Content-Type: application/json
```

**Cuerpo de la petición:**
```json
{
  "producto": "64f8a1b2c3d4e5f6a7b8c9d0",
  "cantidadVendida": 2
}
```

**Ejemplo con curl:**
```bash
curl -X POST http://localhost:3000/api/ventas \
  -H "Content-Type: application/json" \
  -d '{
    "producto": "64f8a1b2c3d4e5f6a7b8c9d0",
    "cantidadVendida": 2
  }'
```

**Respuesta exitosa:**
```json
{
  "message": "Venta registrada",
  "venta": {
    "_id": "64f8a1b2c3d4e5f6a7b8c9d3",
    "producto": "64f8a1b2c3d4e5f6a7b8c9d0",
    "cantidadVendida": 2,
    "fecha": "2023-09-05T11:15:00.000Z",
    "createdAt": "2023-09-05T11:15:00.000Z",
    "updatedAt": "2023-09-05T11:15:00.000Z"
  }
}
```

## 🧪 Pruebas con Postman

### 1. Configurar Postman

1. Abrir Postman
2. Crear nueva colección: "GameStore API"
3. Configurar variable de entorno: `base_url = http://localhost:3000`

### 2. Colección de Pruebas

#### Crear Producto
```http
POST {{base_url}}/api/productos
Content-Type: application/json

{
  "nombre": "PlayStation 5",
  "tipo": "consola",
  "precio": 3200000,
  "cantidad": 10
}
```

#### Listar Productos
```http
GET {{base_url}}/api/productos?page=1&limit=10
```

#### Registrar Venta
```http
POST {{base_url}}/api/ventas
Content-Type: application/json

{
  "producto": "{{producto_id}}",
  "cantidadVendida": 1
}
```

## 📊 Scripts de Utilidad

### Sembrar Datos de Prueba

```bash
npm run seed:productos
```

**Datos que se insertan:**
- PS5 (consola) - $3,200,000
- Xbox Series X (consola) - $2,900,000  
- Nintendo Switch (consola) - $1,800,000
- Zelda TOTK (juego) - $280,000
- God of War (juego) - $220,000

### Exportar Datos

```bash
npm run export:productos
```

## 🔗 Frontend Repository

**Repositorio del Frontend:** [Frontend GameStore](https://github.com/DanielSantiagoV/Game_Store.git)

El frontend está desarrollado con HTML, CSS y JavaScript vanilla, conectándose a este backend a través de las APIs documentadas.

## 📁 Estructura del Proyecto

```
Backend_GameStore/
├── backend/
│   ├── config/
│   │   └── db.js                 # Configuración MongoDB
│   ├── controllers/
│   │   ├── productoController.js # Lógica de productos
│   │   └── ventaController.js     # Lógica de ventas
│   ├── routes/
│   │   ├── productoRoutes.js     # Rutas de productos
│   │   ├── ventaRoutes.js        # Rutas de ventas
│   │   └── validar.js            # Middleware validación
│   ├── middlewares/
│   │   └── errorHandler.js       # Manejo de errores
│   ├── scripts/
│   │   ├── seedProductos.js      # Script de datos iniciales
│   │   └── exportProductos.js    # Script de exportación
│   ├── .env                      # Variables de entorno
│   ├── server.js                # Punto de entrada
│   ├── package.json             # Dependencias y scripts
│   └── README.md                # Esta documentación
├── .gitignore                   # Archivos ignorados por Git
└── README.md                    # Documentación principal
```

## 🚨 Códigos de Error

| Código | Descripción | Ejemplo |
|--------|-------------|---------|
| 200 | Éxito | Operación completada |
| 201 | Creado | Producto/venta creada |
| 400 | Error de validación | Datos inválidos |
| 404 | No encontrado | Producto inexistente |
| 500 | Error del servidor | Error interno |

### Ejemplos de Respuestas de Error

**Error de validación:**
```json
{
  "errors": [
    {
      "msg": "El nombre es obligatorio",
      "param": "nombre",
      "location": "body"
    }
  ]
}
```

**Stock insuficiente:**
```json
{
  "error": "Stock insuficiente"
}
```

**Producto no encontrado:**
```json
{
  "error": "Producto no encontrado"
}
```

## 🛠️ Desarrollo

### Scripts Disponibles

```bash
# Desarrollo (con auto-reload)
npm run dev

# Producción
npm start

# Sembrar datos
npm run seed:productos

# Exportar datos
npm run export:productos
```

### Dependencias

```json
{
  "dependencies": {
    "cors": "^2.8.5",
    "dotenv": "^16.4.5", 
    "express": "^4.19.2",
    "express-validator": "^7.2.1",
    "mongodb": "^6.9.0"
  },
  "devDependencies": {
    "nodemon": "^3.1.7"
  }
}
```

## 📝 Notas Técnicas

- **Base de datos**: MongoDB con driver nativo (no Mongoose)
- **Validación**: Express-validator para entrada de datos
- **CORS**: Configurado para `http://localhost:5500`
- **Manejo de errores**: Middleware centralizado
- **Operaciones atómicas**: Para garantizar consistencia de stock
- **Paginación**: Implementada en listado de productos
- **Filtros**: Búsqueda, tipo, rango de precios

## 🤝 Contribución

1. Fork el proyecto
2. Crear rama para feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver `LICENSE` para más detalles.

## 👨‍💻 Autor


- GitHub: [DanielSantiagoV](https://github.com/DanielSantiagoV)
- Email: vinascodaniel@gmail.com

---

**¡El backend está listo para conectar con el frontend! 🚀**
