const response = require("../utils/response");

module.exports = (req, res) => {
  const newFilm = req.body;
  response(res, 200, newFilm);
};
