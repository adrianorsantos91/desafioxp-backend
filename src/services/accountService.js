const { User } = require('../database/models');
const { notFoundClient } = require('../utils/errorMessage');

const createdDeposit = async (client) => {
  const cliente = await User.findOne({ where: { id: client.userId } });

  if (!cliente) {
    throw notFoundClient;
  }

  const newAmount = parseFloat(cliente.amount) + parseFloat(client.amount);

  await User.update({ amount: newAmount },
    { where: { id: client.userId } });

  return client;
};

const createdDraft = async (client) => {
  const user = await User.findOne({ where: { id: client.userId } });
  if (!user) {
    throw notFoundClient;
  }
  const newAmount = parseFloat(user.amount) - parseFloat(client.amount);

  await User.update({ amount: newAmount },
    { where: { id: client.userId } });

  return client;
};

const getClientById = async (id) => {
  const client = await User.findOne({
    attributes: { exclude: ['displayName', 'email', 'password'] },
    where: { id } });

  if (!client) {
    throw notFoundClient;
  }
  const listClient = { id: client.id, amount: parseFloat(client.amount) };
  return listClient;
};

module.exports = {
  createdDeposit,
  createdDraft,
  getClientById,
};
