const newTea = (req, res, next) => {
  res.json({ message: "POST new tea" });
};

export default { newTea };
