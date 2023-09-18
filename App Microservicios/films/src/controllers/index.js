const { catchedAsync } = require("../../../characters/src/utils");

module.exports = {
  getFilms: catchedAsync(require("./getFilms")),
  createFilm: catchedAsync(require("./createFilm")),
};
