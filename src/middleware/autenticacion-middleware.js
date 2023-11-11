// autenticacionMiddleware.js
const jwt = require('jsonwebtoken')
const { Usuario } = require('../models') // Asegúrate de importar el modelo de usuario correcto

const autenticacionMiddleware = async (req, res, next) => {
  try {
    // Obtener el token del encabezado de la solicitud
    const token = req.header('Authorization').replace('Bearer ', '')

    // Verificar el token
    const decoded = jwt.verify(token, 'tu_clave_secreta')

    // Buscar al usuario por el ID obtenido del token
    const usuario = await Usuario.findOne({ _id: decoded._id, 'tokens.token': token })

    // Verificar si el usuario existe
    if (!usuario) {
      throw new Error()
    }

    // Agregar el usuario y el token a la solicitud para que estén disponibles en rutas posteriores
    req.usuario = usuario
    req.token = token

    // Continuar con la ejecución del siguiente middleware o controlador
    next()
  } catch (error) {
    console.error(error)
    res.status(401).json({ error: 'No autorizado' })
  }
}

module.exports = autenticacionMiddleware
