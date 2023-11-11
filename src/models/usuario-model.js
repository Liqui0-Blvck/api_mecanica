const { DataTypes } = require('sequelize')
const db = require('../config/database')

const UsuarioModel = db.define('Usuario', {
  nombre: { type: DataTypes.STRING, allowNull: false },
  apellido: { type: DataTypes.STRING, allowNull: false },
  rut: { type: DataTypes.STRING, allowNull: false, unique: true },
  correo: { type: DataTypes.STRING, allowNull: false, unique: true },
  contraseña: { type: DataTypes.STRING, allowNull: false },
  numeroTelefonico: { type: DataTypes.STRING, allowNull: false }
})

module.exports = UsuarioModel
