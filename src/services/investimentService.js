const { Op } = require('sequelize');
const { User, Asset, Investment, InvestmentAsset } = require('../database/models');
const { getClientById } = require('./clientService');
/* Validação: Quantidade de ativo a ser comprada não pode ser maior que a quantidade disponível na corretora */

const createdPurchase = async ({ userId, assetId, quantityAsset }) => {
  const asset = await Asset.findOne({ where: { id: assetId } });
  const investWithAsset = await Investment.findAll({ where: { userId },
    include: { model: Asset,
      as: 'assets',
    attributes: { exclude: ['quantityAsset'] },
    through: { attributes: [] },
  } });

  const [result] = investWithAsset.filter((inv) =>
  inv.userId === userId && inv.assets[0].id === assetId);

  if (!result) {
    const newInvestment = await Investment.create({ userId,
      quantityAsset, price: asset.price });
    await InvestmentAsset.create({ investmentId: newInvestment.id, assetId });
  }

  if (result) {
    const averagePrice = (result.quantityAsset * result.price
      + asset.price * quantityAsset) / (result.quantityAsset + quantityAsset)
    await Investment.update({
      userId,
      quantityAsset: result.quantityAsset + quantityAsset,
      price: averagePrice }, {
      where: { [Op.and]: [{ id: result.id }, { userId }]}});
  }

  return investWithAsset;
};

const createdSale = async ({ userId, assetId, quantityAsset }) => {

};

module.exports = {
  createdPurchase,
  createdSale,
};

// // const user = await User.findOne({ where: { id: userId } });
// const { count } = await Asset.findAndCountAll({ where: { id: assetId } });
// if (count === 0) return false;
// const asset = await Asset.findOne({ where: { id: assetId } });
// // if (asset.quantityAsset < quantityAsset) return 'quantity';
// // if (user.amount < quantityAsset * asset.price) return 'amount';
// const investimentos = await Investment.findAll({ where: { userId } });
// const [result] = await investimentos.map(async ({ id }) => {
//   // console.log('id: %s', id);
//   const test = await InvestmentAsset.findOne({
//     where: { [Op.and]: [{ investmentId: id }, { assetId }] } });
//     console.log('Test: %s', test);
//     return test;
// });

// if (!result.test) {
//   console.log('result: %s', result.test);
//     const investmentId = await Investment.create({
//       userId, quantityAsset, price: asset.price });
//       // Cria um novo registro de compra;

//     await InvestmentAsset.create({ investmentId: investmentId.id, assetId });
// }
// // if (result.length === 0) {

// await Asset.update({ quantityAsset: asset.quantityAsset - quantityAsset },
//   { where: { id: assetId } }); // Atualiza a qtde disponivel na corretora;

// // await User.update({ amount: user.amount - quantityAsset * asset.price },
// //   { where: { id: userId } }); // Atualiza o saldo do cliente;

// return {
//   id: asset.id,
//   quantityAsset: parseInt(asset.quantityAsset, 10),
//   price: parseFloat(asset.price),
// };
