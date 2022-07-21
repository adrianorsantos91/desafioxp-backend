const { Op } = require('sequelize');
const { User, Asset, Investment, InvestmentAsset } = require('../database/models');
/* Validação: Quantidade de ativo a ser comprada não pode ser maior que a quantidade disponível na corretora */

const updateTablesByPurchase = async (user, result, asset, { userId, assetId, quantityAsset }) => {
  const averagePrice = (result.quantityAsset * result.price
    + asset.price * quantityAsset) / (result.quantityAsset + quantityAsset);

  await Investment.update({ userId,
    quantityAsset: result.quantityAsset + quantityAsset,
    price: averagePrice }, {
    where: { [Op.and]: [{ id: result.id }, { userId }] } });

 const amount = parseFloat(user.amount) - parseFloat(quantityAsset * asset.price);

 await User.update({ amount }, { where: { id: userId } }); // Atualiza o saldo do cliente;

 await Asset.update({
  quantityAsset: parseFloat(asset.quantityAsset) - parseFloat(quantityAsset) },
  { where: { id: assetId } });
};
const checkUserWithAsset = async (investWithAsset, asset, purchase) => {
  const { userId, assetId, quantityAsset } = purchase;
  const [result] = investWithAsset.filter((inv) =>
  inv.userId === userId && inv.assets[0].id === assetId);
  const user = await User.findOne({ where: { id: userId } });
  if (!result) {
    const newInvestment = await Investment.create({ userId, quantityAsset, price: asset.price });
    await InvestmentAsset.create({ investmentId: newInvestment.id, assetId });
  }

  if (result) {
    await updateTablesByPurchase(user, result, asset, purchase);
  }
};

// const updateTablesInSale = async (result, asset, { userId, quantityAsset }) => {
//   const user = await User.findOne({ where: { id: userId } });
//   await Investment.update({
//     quantityAsset: result.quantityAsset - quantityAsset,
//     }, {
//     where: { [Op.and]: [{ id: result.id }, { userId }] } });
//     const amount = parseFloat(user.amount) + parseFloat(quantityAsset * asset.price);
//    await User.update({ amount }, { where: { id: userId } });
//    await Asset.update({ quantityAsset: asset.quantityAsset + quantityAsset });
// };

const checkAssetBySale = async (investWithAsset, asset, sale) => {
  const { userId, assetId, quantityAsset } = sale;
  const [result] = investWithAsset.filter((inv) =>
  inv.userId === userId && inv.assets[0].id === assetId);

  if (result.quantityAsset < quantityAsset) return false;
  // await updateTablesInSale(result, asset, sale);
  const user = await User.findOne({ where: { id: userId } });
  await Investment.update({
    quantityAsset: result.quantityAsset - quantityAsset,
    }, {
    where: { [Op.and]: [{ id: result.id }, { userId }] } });
    const amount = parseFloat(user.amount) + parseFloat(quantityAsset * asset.price);
   await User.update({ amount }, { where: { id: userId } });
   await Asset.update({
    quantityAsset: parseFloat(asset.quantityAsset) + parseFloat(quantityAsset) },
    { where: { id: assetId } });

  return result;
};

const getInvestimentWithAssetById = async (userId) => {
  const investWithAsset = await Investment.findAll({ where: { userId },
    include: { model: Asset,
      as: 'assets',
    attributes: { exclude: ['quantityAsset'] },
    through: { attributes: [] },
  } });
  return investWithAsset;
};
const createdPurchase = async (purchase) => {
  const { userId, assetId, quantityAsset } = purchase;

  const user = await User.findOne({ where: { id: userId } });

  const { count } = await Asset.findAndCountAll({ where: { id: assetId } });

  if (count === 0) return false;

  const asset = await Asset.findOne({ where: { id: assetId } });

  if (asset.quantityAsset < quantityAsset) return 'quantity';

  if (user.amount < quantityAsset * asset.price) return 'amount';

  const investWithAsset = await getInvestimentWithAssetById(userId);

  await checkUserWithAsset(investWithAsset, asset, purchase);

  return {
    id: asset.id,
    userId,
    quantityAsset: parseInt(asset.quantityAsset, 10),
    price: parseFloat(asset.price) };
};

const createdSale = async (sale) => {
  const { userId, assetId } = sale;
  const { count } = await Asset.findAndCountAll({ where: { id: assetId } });
  if (count === 0) return false;
  const asset = await Asset.findOne({ where: { id: assetId } });

  const investWithAsset = await Investment.findAll({ where: { userId },
    include: { model: Asset,
      as: 'assets',
    attributes: { exclude: ['quantityAsset'] },
    through: { attributes: [] },
  } });

  const result = await checkAssetBySale(investWithAsset, asset, sale);

  if (!result) return 'quantity';

    return {
      id: asset.id,
      userId,
      quantityAsset: parseInt(asset.quantityAsset, 10),
      price: parseFloat(asset.price),
    };
};

module.exports = {
  createdPurchase,
  createdSale,
};
