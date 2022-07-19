const { User, Asset, Investment } = require('../database/models');

/* Validação: Quantidade de ativo a ser comprada não pode ser maior que a quantidade disponível na corretora */

const createdPurchase = async ({ codCliente, codAtivo, qtdeAtivo }) => {
  const user = await User.findOne({ where: { id: codCliente } });

  const { count } = await Asset.findAndCountAll({ where: { id: codAtivo } });

  if (count === 0) return false;

  const asset = await Asset.findOne({ where: { id: codAtivo } });

  if (asset.quantityAsset < qtdeAtivo) return 'quantity';

  if (user.amount < qtdeAtivo * asset.price) return 'amount';

  const investment = await Investment.create({
    userId: codCliente, assetId: codAtivo, quantityAsset: qtdeAtivo });
    console.log('investments: %s', investment.id);
    console.log('userId: %s', investment.userId);
    console.log('assetId: %s', investment.assetId);
    console.log('quantityAsset: %s', investment.quantityAsset);

  /* await InvestmentAsset.create({ assetId: codAtivo, investmentId: investment.id }); */

  await Asset.update({ quantityAsset: asset.quantityAsset - qtdeAtivo },
    { where: { id: codAtivo } });

  await User.update({ amount: user.amount - qtdeAtivo * asset.price },
    { where: { id: codCliente } });

  return asset;
};

module.exports = {
  createdPurchase,
};
