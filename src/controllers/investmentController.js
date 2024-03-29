const investmentService = require('../services/investimentService');

const createdPurchase = async (req, res) => {
  // const email = res.locals.payload;
  const purchase = await investmentService.createdPurchase(req.body);

  return res.status(201).json(purchase);
};

const createdSale = async (req, res) => {
  const sale = await investmentService.createdSale(req.body);
  return res.status(201).json(sale);
};

module.exports = {
  createdPurchase,
  createdSale,
};
