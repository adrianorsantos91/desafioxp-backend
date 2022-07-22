const notFoundAsset = { status: 400, message: 'Asset not found' };
const errorQuantity = { status: 400, message: '"quantityAsset" is not available' };
const errorAmount = { status: 400, message: '"amount" is not available' };
const notFoundClient = { status: 400, message: 'Client not found' };

module.exports = {
 notFoundAsset,
 errorQuantity,
 errorAmount,
 notFoundClient,
};
