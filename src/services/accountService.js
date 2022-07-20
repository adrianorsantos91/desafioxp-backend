const { User } = require('../database/models');

const createdDeposit = async (client) => {
  const cliente = await User.findOne({ where: { id: client.codCliente } });
  if (!cliente) {
    const errorMessage = { status: 400, message: '"client" not found' };
    throw errorMessage;
  }
  const newAmount = parseFloat(cliente.amount) + client.valor;
  console.log('newAmount: %s', newAmount);
  await User.update({ amount: newAmount },
    { where: { id: client.codCliente } });

  return { id: client.codCliente, amount: newAmount };
};

module.exports = {
  createdDeposit,
};
