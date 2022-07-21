const { Asset, Investment } = require('../database/models');

const getClientById = async (id) => {
  const [client] = await Investment.findAll({ where: { id } });
  const assetIds = await Investment.findAll({
    where: { userId: id },
    include: { model: Asset,
    as: 'assets',
    attributes: { exclude: ['quantityAsset', 'price'] },
    through: { attributes: [] },
  } });

  const clientWithAsset = await assetIds.map(({ assets }) => {
    const result = {
      userId: client.dataValues.id,
      assetId: assets[0].id,
      quantityAsset: client.dataValues.quantityAsset,
      price: parseFloat(client.dataValues.price),
    };
    return result;
  });

  return clientWithAsset;
};

module.exports = {
  getClientById,
};
