// usuarioRoutes.js
const express = require('express')
const router = express.Router()
const usuarioController = require('../controllers/usuarioController')
const autenticacionMiddleware = require('../middleware/autenticacion-middleware')
const autorizacionMiddleware = require('../middleware/autorizacion-middleware')

// Rutas para usuarios públicas (sin autenticación)
router.post('/usuarios', usuarioController.crearUsuario)

// Rutas para usuarios protegidas (requieren autenticación)
router.get('/usuarios', autenticacionMiddleware, usuarioController.obtenerUsuarios)
// Puedes agregar más rutas protegidas según tus necesidades

module.exports = router
