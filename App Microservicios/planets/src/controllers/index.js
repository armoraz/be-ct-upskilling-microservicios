const catchedAsync = require("../utils/catchedAsync");

module.exports = {
  getPlanets: catchedAsync(require("./getPlantes")),
  createPlanet: catchedAsync(require("./createPlanet")),
};
