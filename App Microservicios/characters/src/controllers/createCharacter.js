module.exports = (req, res) => {
  const newCharacter = req.body;
  res.status(200).send("creating character");
};
