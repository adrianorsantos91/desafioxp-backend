const accountService = require('../services/accountService');

const createdDeposit = async (req, res) => {
  const userAmount = await accountService.createdDeposit(req.body);
  return res.status(201).json(userAmount);
};

const createdDraft = async (req, res) => {
  const userAmount = await accountService.createdDraft(req.body);
  return res.status(201).json(userAmount);
};

module.exports = {
  createdDeposit,
  createdDraft,
};
