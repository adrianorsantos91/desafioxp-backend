const { Asset, Investment } = require('../database/models');
const { notFoundClient } = require('../utils/errorMessage');

const listClientWithAsset = async (assetIds, client) => {
  const clientWithAsset = await assetIds.map(({ assets }) => {
    const result = {
      clientId: client.dataValues.id,
      assetId: assets[0].id,
      quantityAsset: client.dataValues.quantityAsset,
      price: parseFloat(client.dataValues.price),
    };
    return result;
  });
  return clientWithAsset;
};

const getClientById = async (id) => {
  const [client] = await Investment.findAll({ where: { id } });
  if (!client) throw notFoundClient;
  const assetIds = await Investment.findAll({
    where: { userId: id },
    include: { model: Asset,
    as: 'assets',
    attributes: { exclude: ['quantityAsset', 'price'] },
    through: { attributes: [] },
  } });

  const userWithAsset = listClientWithAsset(assetIds, client);

  return userWithAsset;
};

module.exports = {
  getClientById,
};
