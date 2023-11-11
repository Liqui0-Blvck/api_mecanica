// app.js
const express = require('express')
// const db = require('./config/database')// Importa la configuración de la base de datos
const seguridadConfig = require('./src/config/seguridad-config') // Importa la configuración de seguridad
const usuarioRoutes = require('./src/routes/usuario-routes')
const estacionamientoRoutes = require('./src/routes/estacionamiento-routes')
const reservaRoutes = require('./src/routes/reserva-routes')
const pagoRoutes = require('./src/routes/pago-routes')

const app = express()

// Configuración de seguridad
seguridadConfig(app)

// Conexión a la base de datos
// db.authenticate()
//   .then(() => console.log('Conexión a la base de datos establecida correctamente'))
//   .catch((error) => console.error('Error al conectar a la base de datos:', error))

// Rutas de la API
app.use('/api/usuarios', usuarioRoutes)
app.use('/api/estacionamientos', estacionamientoRoutes)
app.use('/api/reservas', reservaRoutes)
app.use('/api/pagos', pagoRoutes)

// Manejo de rutas no encontradas
app.use((req, res, next) => {
  res.status(404).json({ error: 'Ruta no encontrada' })
})

// Manejo de errores generales
app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ error: 'Error interno del servidor' })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`)
})
