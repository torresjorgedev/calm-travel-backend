# Calm Travel - Backend

Este proyecto forma parte de la evaluación final del módulo Backend de la Diplomatura en Desarrollo Web Full Stack (UTN BA).  
---

## Descripción

**Calm Travel** es una API para la gestión de un sistema de viajes y servicios de una pagina comercial de turismo. Permite administrar destinos, categorías y usuarios, incluyendo registro, login y control de roles (admin/usuario).  
Está pensada como base para un futuro desarrollo full stack, donde este backend pueda integrarse a un mi anterior proyecto de frontend.

---

## Esquema de la Base de Datos

La base de datos utilizada es **MongoDB**, con las siguientes colecciones principales:

### **Usuarios**
```json
{
  "_id": "ObjectId",
  "nombre": "Jorge Torres",
  "email": "jorge@example.com",
  "password": "hashed_password",
  "role": "admin"
}
```

### **Categorías**
```json
{
  "_id": "ObjectId",
  "nombre": "Aventura"
}
```

### **Destinos**
```json
{
  "_id": "ObjectId",
  "nombre": "Patagonia",
  "descripcion": "Excursión por montañas y lagos",
  "precio": 450000,
  "categoria": "ObjectId (Categoría)",
  "imagen": "patagonia.jpg"
}
```

---

## Tecnologías Utilizadas

- Node.js  
- Express.js  
- MongoDB y Mongoose  
- JWT (Json Web Token)  
- dotenv  
- bcryptjs  
- express-validator  
- nodemon (entorno de desarrollo)

---

## Instrucciones para Ejecutar el Proyecto

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/torresjorgedev/calm-travel-backend.git
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   Crear un archivo `.env` en la raíz del proyecto basado en el ejemplo `.env.example`:
   ```env
   PORT=5000
   MONGO_URI=mongodb://127.0.0.1:27017/calm_travel_back
   JWT_SECRET=password
   ```

4. **Ejecutar el servidor**
   ```bash
   npm run dev
   ```
   o en producción:
   ```bash
   npm start
   ```

El servidor se iniciará en `http://localhost:5000`.

---

## Endpoints Disponibles

### **Auth**
| Método | Endpoint | Descripción |
|---------|-----------|-------------|
| POST | /api/auth/register | Registro de nuevo usuario |
| POST | /api/auth/login | Inicio de sesión y generación de token JWT |

### **Usuarios**
| Método | Endpoint | Descripción |
|---------|-----------|-------------|
| GET | /api/users | Obtener todos los usuarios (solo admin) |
| GET | /api/users/:id | Obtener un usuario por ID |
| DELETE | /api/users/:id | Eliminar usuario (solo admin) |

### **Categorías**
| Método | Endpoint | Descripción |
|---------|-----------|-------------|
| GET | /api/categories | Listar todas las categorías |
| POST | /api/categories | Crear categoría (solo admin) |
| PUT | /api/categories/:id | Actualizar categoría (solo admin) |
| DELETE | /api/categories/:id | Eliminar categoría (solo admin) |

### **Destinos**
| Método | Endpoint | Descripción |
|---------|-----------|-------------|
| GET | /api/destinations | Listar todos los destinos |
| GET | /api/destinations/:id | Obtener destino por ID |
| POST | /api/destinations | Crear destino (solo admin) |
| PUT | /api/destinations/:id | Actualizar destino (solo admin) |
| DELETE | /api/destinations/:id | Eliminar destino (solo admin) |

---

## 🧪 Ejemplos de Datos Mock (JSON)

### **Registro de Usuario**
```json
{
  "nombre": "Jorge Torres",
  "email": "jorge@example.com",
  "password": "123456"
}
```

### **Login**
```json
{
  "email": "jorge@example.com",
  "password": "123456"
}
```

### **Categoría**
```json
{
  "nombre": "Escapadas"
}
```

### **Destino**
```json
{
  "nombre": "Bariloche",
  "descripcion": "Montañas, nieve y lagos patagónicos",
  "precio": 550000,
  "categoria": "ObjectId de categoría existente",
  "imagen": "bariloche.jpg"
}
```

---

## 🧾 Notas Finales

Este proyecto fue desarrollado con fines educativos.  
La estructura, autenticación y manejo de roles fueron diseñados para reflejar buenas prácticas del entorno profesional, buscando versatilidad no solo para un proyecto de una página de turismo sino con otras orientaciones comerciales. 
---
**Autor:** Jorge Torres  // (torresjorgedev@gmail.com) 
**Diplomatura Desarrollo Web Full Stack - UTN Buenos Aires**
