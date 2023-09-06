module.exports = (req, res) => {
  const newPlanet = req.body;
  res.status(200).send("creating planet");
};
