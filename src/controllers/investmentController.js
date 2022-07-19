const investmentService = require('../services/investimentService');

const createdPurchase = async (req, res) => {
  // const email = res.locals.payload;
  console.log('bodyPost: %s', req.body);
  const purchase = await investmentService.createdPurchase(req.body);

  if (!purchase) {
    return res.status(400).json({ message: '"assetId" not found' });
  }

  if (purchase === 'quantity') {
    return res.status(400).json({ message: '"quantityAsset" is less than requested' });
  }

  if (purchase === 'amount') {
    return res.status(400).json({ message: '"amount" is less than requested' });
  }

  return res.status(201).json(purchase);
};

module.exports = {
  createdPurchase,
};
