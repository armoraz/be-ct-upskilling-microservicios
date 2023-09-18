const { FilmError } = require("../utils/errors");

module.exports = (req, res, next) => {
  const { name } = req.body;
  if (name) next();
  else throw new FilmError("Falta nombre de la película", 400);
};
