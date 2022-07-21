const { Asset } = require('../database/models');

const getAssetById = async (id) => {
  const asset = await Asset.findOne({ where: { id } });
  const assetFloat = {
    id: asset.id,
    quantityAsset: parseInt(asset.quantityAsset, 10),
    price: parseFloat(asset.price) };

  return assetFloat;
};

module.exports = {
  getAssetById,
};
