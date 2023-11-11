// estacionamientoRoutes.js
const express = require('express')
const router = express.Router()
const estacionamientoController = require('../controllers/estacionamientoController')
const autenticacionMiddleware = require('../middleware/autenticacion-middleware')
const autorizacionMiddleware = require('../middleware/autorizacion-middleware')

// Rutas para estacionamientos públicas (sin autenticación)
router.post('/estacionamientos', estacionamientoController.crearEstacionamiento)

// Rutas para estacionamientos protegidas (requieren autenticación)
router.get('/estacionamientos', autenticacionMiddleware, estacionamientoController.obtenerEstacionamientos)
// Puedes agregar más rutas protegidas según tus necesidades

module.exports = router
