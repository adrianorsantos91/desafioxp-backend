const validateContainsFields = (req, res, next) => {
  const { userId, amount } = req.body;

  if (userId === undefined) {
    return res.status(400).json(
      { message: '"userId" is required' },
    );
  }

  if (amount === undefined) {
    return res.status(400).json(
      { message: '"amount" is required' },
    );
  }

  next();
};

module.exports = {
  validateContainsFields,
};
