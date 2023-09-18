//Manejo de errores con funcion de orden superior y derivando al manejo de errores por defecto de express
//Recibe el controlador y lo devuelve con manejo de errores
module.exports = (fn) => (req, res, next) =>
  fn(req, res).catch((err) => next(err));
