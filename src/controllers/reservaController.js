// reservaController.js
const ReservaModel = require('../models/reserva-model')

exports.crearReserva = async (req, res) => {
  try {
    const nuevaReserva = req.body
    const reservaCreada = await ReservaModel.create(nuevaReserva)
    res.status(201).json(reservaCreada)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al crear la reserva' })
  }
}

exports.obtenerReservas = async (req, res) => {
  try {
    const reservas = await ReservaModel.findAll()
    res.status(200).json(reservas)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al obtener reservas' })
  }
}

// Otros métodos para obtenerReservaPorId, actualizarReserva, eliminarReserva, etc.
