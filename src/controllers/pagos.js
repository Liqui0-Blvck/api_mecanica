// pagoController.js
const PagoModel = require('../models/pago-model')

exports.crearPago = async (req, res) => {
  try {
    const nuevoPago = req.body
    const pagoCreado = await PagoModel.create(nuevoPago)
    res.status(201).json(pagoCreado)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al crear el pago' })
  }
}

exports.obtenerPagos = async (req, res) => {
  try {
    const pagos = await PagoModel.findAll()
    res.status(200).json(pagos)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al obtener pagos' })
  }
}

// Otros métodos para obtenerPagoPorId, actualizarPago, eliminarPago, etc.
