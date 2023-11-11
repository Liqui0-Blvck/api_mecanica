// reservaRoutes.js
const express = require('express')
const router = express.Router()
const reservaController = require('../controllers/reservaController')
const autenticacionMiddleware = require('../middleware/autenticacion-middleware')
const autorizacionMiddleware = require('../middleware/autorizacion-middleware')

// Rutas para reservas públicas (sin autenticación)
router.post('/reservas', reservaController.crearReserva)

// Rutas para reservas protegidas (requieren autenticación)
router.get('/reservas', autenticacionMiddleware, reservaController.obtenerReservas)
// Puedes agregar más rutas protegidas según tus necesidades

module.exports = router
