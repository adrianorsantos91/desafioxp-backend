const { User, Asset, Investment } = require('../database/models');

/* Validação: Quantidade de ativo a ser comprada não pode ser maior que a quantidade disponível na corretora */

const createdPurchase = async ({ codCliente, codAtivo, qtdeAtivo }) => {
  const user = await User.findOne({ where: { id: codCliente } });

  const { count } = await Asset.findAndCountAll({ where: { id: codAtivo } });

  if (count === 0) return false;

  const asset = await Asset.findOne({ where: { id: codAtivo } });

  if (asset.quantityAsset < qtdeAtivo) return 'quantity';

  if (user.amount < qtdeAtivo * asset.price) return 'amount';

  await Investment.create({
    userId: codCliente, quantityAsset: qtdeAtivo, price: asset.price });
    // Cria um novo registro de compra;

  // await InvestmentAsset.create({ investmentId: investment.id, assetId: codAtivo });

  await Asset.update({ quantityAsset: asset.quantityAsset - qtdeAtivo },
    { where: { id: codAtivo } }); // Atualiza a qtde disponivel na corretora;

  await User.update({ amount: user.amount - qtdeAtivo * asset.price },
    { where: { id: codCliente } }); // Atualiza o saldo do cliente;

  return asset;
};

module.exports = {
  createdPurchase,
};
