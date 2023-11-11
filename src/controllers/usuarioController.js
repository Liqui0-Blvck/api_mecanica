// usuarioController.js
const UsuarioModel = require('../models/usuario-model')

exports.crearUsuario = async (req, res) => {
  try {
    const nuevoUsuario = req.body
    const usuarioCreado = await UsuarioModel.create(nuevoUsuario)
    res.status(201).json(usuarioCreado)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al crear el usuario' })
  }
}

exports.obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await UsuarioModel.findAll()
    res.status(200).json(usuarios)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Error al obtener usuarios' })
  }
}

// Otros métodos como obtenerUsuarioPorId, actualizarUsuario, eliminarUsuario, etc.
