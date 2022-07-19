const { User, Asset } = require('../database/models');

/* Validação: Quantidade de ativo a ser comprada não pode ser maior que a quantidade disponível na corretora */

const createdPurchase = async (email, { _codCliente, codAtivo, _qtdeAtivo }) => {
  const user = await User.findOne({ where: { email } });
  console.log('asset', user);
  const { count } = await Asset.findAndCountAll({ where: { id: codAtivo } });
  console.log('asset', count);
  if (count === 0) return false;

  const asset = await Asset.findOne({ where: { id: codAtivo } });
  console.log('asset', asset);
  return user;
};

module.exports = {
  createdPurchase,
};
