// autorizacionMiddleware.js
const autorizacionMiddleware = (rolPermitido) => {
  return async (req, res, next) => {
    try {
      // Verificar si el usuario tiene el rol necesario
      if (req.usuario.rol !== rolPermitido) {
        throw new Error()
      }

      // Continuar con la ejecución del siguiente middleware o controlador
      next()
    } catch (error) {
      console.error(error)
      res.status(403).json({ error: 'Acceso prohibido' })
    }
  }
}

module.exports = autorizacionMiddleware
