const assetService = require('../services/assetService');

const getAssetById = async (req, res) => {
  const { id } = req.params;
  const asset = await assetService.getAssetById(id);
  return res.status(200).json(asset);
};

module.exports = {
  getAssetById,
};
