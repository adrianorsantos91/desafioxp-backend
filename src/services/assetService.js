const { Asset } = require('../database/models');

const getAssetById = async (id) => {
  const asset = await Asset.findOne({ where: { id } });
  return asset;
};

module.exports = {
  getAssetById,
};
