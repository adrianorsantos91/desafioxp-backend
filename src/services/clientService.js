const { Asset, Investment } = require('../database/models');

const getClientById = async (id) => {
  const client = await Investment.findAll({
    attributes: { exclude: ['published', 'updated'] },
    where: { userId: id },
    include: { model: Asset,
    as: 'assets',
    attributes: { exclude: ['quantityAsset', 'price'] },
    through: { attributes: [] },
  } });

  return client;
};

module.exports = {
  getClientById,
};
