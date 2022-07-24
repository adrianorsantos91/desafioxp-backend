const notFoundAsset = { status: 404, message: 'Asset not found' };
const errorQuantity = { status: 400, message: '"quantityAsset" is not available' };
const errorAmount = { status: 400, message: '"amount" is not available' };
const notFoundClient = { status: 404, message: 'Client not found' };
const errorQuantityWallet = { status: 400, message: '"quantityAsset" unavailable in wallet' };

module.exports = {
 notFoundAsset,
 errorQuantity,
 errorAmount,
 notFoundClient,
 errorQuantityWallet,
};
