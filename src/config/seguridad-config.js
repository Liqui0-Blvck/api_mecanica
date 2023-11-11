// seguridadConfig.js
const helmet = require('helmet')
const cors = require('cors')
const express = require('express')

module.exports = (app) => {
  // Configuración de seguridad con Helmet
  app.use(helmet())

  // Configuración de CORS
  app.use(cors())

  // Parseo de cuerpo de solicitud JSON
  app.use(express.json())

  // Parseo de cuerpos de solicitud codificados
  app.use(express.urlencoded({ extended: false }))
}
