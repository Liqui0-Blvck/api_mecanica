const { DataTypes } = require('sequelize')
const db = require('../config/database')

const ReservaModel = db.define('Reserva', {
  fechaCreacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  horaInicio: { type: DataTypes.DATE, allowNull: false },
  horaFin: { type: DataTypes.DATE, allowNull: false },
  precioTotal: { type: DataTypes.FLOAT, allowNull: false }
})

module.exports = ReservaModel
