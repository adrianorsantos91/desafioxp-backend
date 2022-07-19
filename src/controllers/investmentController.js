const investmentService = require('../services/investimentService');

const createdPurchase = async (req, res) => {
  const email = res.locals.payload;
  const purchase = await investmentService.createdPurchase(email, req.body);

  if (!purchase) {
    return res.status(400).json({ message: '"assetId" not found' });
  }
  return res.status(201).json(purchase);
};

module.exports = {
  createdPurchase,
};
