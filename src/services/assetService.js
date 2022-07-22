const { Asset } = require('../database/models');
const { notFoundAsset } = require('../utils/errorMessage');

const getAssetById = async (id) => {
  const asset = await Asset.findOne({ where: { id } });
  if (!asset) throw notFoundAsset;
  const assetFloat = {
    id: asset.id,
    quantityAsset: parseInt(asset.quantityAsset, 10),
    price: parseFloat(asset.price) };

  return assetFloat;
};

module.exports = {
  getAssetById,
};
