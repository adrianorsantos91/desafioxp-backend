const validateContainsFields = (req, res, next) => {
  const { userId, assetId, quantityAsset } = req.body;

  if (userId === undefined) {
    return res.status(400).json(
      { message: '"userId" is required' },
    );
  }

  if (assetId === undefined) {
    return res.status(400).json(
      { message: '"assedId" is required' },
    );
  }

  if (quantityAsset === undefined) {
    return res.status(400).json(
      { message: '"quantityAsset" is required' },
    );
  }

  next();
};

module.exports = {
  validateContainsFields,
};
