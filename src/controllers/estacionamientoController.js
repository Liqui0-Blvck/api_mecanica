// estacionamientoController.js
const EstacionamientoModel = require('../models/estacionamiento-model')

exports.crearEstacionamiento = async (req, res) => {
  try {
    const nuevoEstacionamiento = req.body
    const estacionamientoCreado = await EstacionamientoModel.create(nuevoEstacionamiento)
    res.status(201).json(estacionamientoCreado)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al crear el estacionamiento' })
  }
}

exports.obtenerEstacionamientos = async (req, res) => {
  try {
    const estacionamientos = await EstacionamientoModel.findAll()
    res.status(200).json(estacionamientos)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al obtener estacionamientos' })
  }
}

// Otros métodos para obtenerEstacionamientoPorId, actualizarEstacionamiento, eliminarEstacionamiento, etc.
