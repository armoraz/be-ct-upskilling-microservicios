const express = require("express");
const morgan = require("morgan");
const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use("/films", require("./routes"));

server.use("*", (req, res) => {
  res.status(404).send("Not found");
});

server.use((err, req, res, next) => {
  let CODE = err.statusCode || 500;
  res.status(CODE).send({
    error: true,
    message: err.message,
  });
});

module.exports = server;
