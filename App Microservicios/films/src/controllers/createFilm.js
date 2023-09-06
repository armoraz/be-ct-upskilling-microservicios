module.exports = (req, res) => {
  const newFilm = req.body;
  res.status(200).send("creating film");
};
