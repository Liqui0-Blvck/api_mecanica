// pagoRoutes.js
const express = require('express')
const router = express.Router()
const pagoController = require('../controllers/pagoController')
const autenticacionMiddleware = require('../middleware/autenticacionMiddleware')
const autorizacionMiddleware = require('../middleware/autorizacionMiddleware')

// Rutas para pagos públicas (sin autenticación)
router.post('/pagos', pagoController.crearPago)

// Rutas para pagos protegidas (requieren autenticación)
router.get('/pagos', autenticacionMiddleware, pagoController.obtenerPagos)
// Puedes agregar más rutas protegidas según tus necesidades

module.exports = router
