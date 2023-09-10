const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
  const { name } = req.body;
  if (name) next();
  else throw new ClientError("Falta nombre del personaje", 400);
};
