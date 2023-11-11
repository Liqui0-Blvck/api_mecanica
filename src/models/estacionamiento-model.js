const { DataTypes } = require('sequelize')
const db = require('../config/database')

const EstacionamientoModel = db.define('Estacionamiento', {
  id: { type: DataTypes.STRING, allowNull: false, unique: true },
  ubicacion: { type: DataTypes.STRING, allowNull: false },
  precioPorHora: { type: DataTypes.FLOAT, allowNull: false }
})

module.exports = EstacionamientoModel
