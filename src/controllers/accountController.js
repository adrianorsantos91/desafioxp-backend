const accountService = require('../services/accountService');

const createdDeposit = async (req, res) => {
  const userAmount = await accountService.createdDeposit(req.body);
  return res.status(201).json(userAmount);
};

const createdDraft = async (req, res) => {
  const userAmount = await accountService.createdDraft(req.body);
  return res.status(201).json(userAmount);
};

const getClientById = async (req, res) => {
  const { id } = req.params;
  const client = await accountService.getClientById(id);
  return res.status(200).json(client);
};

module.exports = {
  createdDeposit,
  createdDraft,
  getClientById,
};
