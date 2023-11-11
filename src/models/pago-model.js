const { DataTypes } = require('sequelize')
const db = require('../config/database')

const PagoModel = db.define('Pago', {
  fecha: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  hora: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  metodosPago: { type: DataTypes.STRING, allowNull: false }
})

module.exports = PagoModel
