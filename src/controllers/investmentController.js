const investmentService = require('../services/investimentService');

const createdPurchase = async (req, res) => {
  // const email = res.locals.payload;
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

const createdSale = async (req, res) => {
  const sale = await investmentService.createdSale(req.body);
  if (sale === 'quantity') {
    return res.status(400).json({ message: '"quantityAsset" unavailable in wallet' });
  }
  return res.status(201).json(sale);
};

module.exports = {
  createdPurchase,
  createdSale,
};
