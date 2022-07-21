const { User } = require('../database/models');

const createdDeposit = async (client) => {
  const cliente = await User.findOne({ where: { id: client.userId } });
  if (!cliente) {
    const errorMessage = { status: 400, message: '"client" not found' };
    throw errorMessage;
  }

  const newAmount = parseFloat(cliente.amount) + parseFloat(client.amount);

  await User.update({ amount: newAmount },
    { where: { id: client.userId } });

  return { id: client.userId, amount: newAmount };
};

const createdDraft = async (client) => {
  const cliente = await User.findOne({ where: { id: client.userId } });
  if (!cliente) {
    const errorMessage = { status: 400, message: '"client" not found' };
    throw errorMessage;
  }
  const newAmount = parseFloat(cliente.amount) - parseFloat(client.amount);

  await User.update({ amount: newAmount },
    { where: { id: client.userId } });

  return { id: client.userId, amount: newAmount };
};

const getClientById = async (id) => {
  const client = await User.findOne({
    attributes: { exclude: ['displayName', 'email', 'password'] },
    where: { id } });

  return { id: client.id, amount: parseFloat(client.amount) };
};

module.exports = {
  createdDeposit,
  createdDraft,
  getClientById,
};
