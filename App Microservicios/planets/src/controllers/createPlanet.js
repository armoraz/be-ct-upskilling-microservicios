const { response } = require("../utils");

module.exports = (req, res) => {
  const newPlanet = req.body;
  response(res, 200, "creating planet");
};
