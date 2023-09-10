const { response } = require("../utils");

module.exports = (req, res) => {
  const newCharacter = req.body;
  response(res, 200, newCharacter);
};
