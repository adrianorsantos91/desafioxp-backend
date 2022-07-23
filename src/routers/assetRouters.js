const express = require('express');
const assetController = require('../controllers/assetController');
const clientController = require('../controllers/clientController');
// const authenticateToken = require('../middlewares/auth.middeware');

const router = express.Router();

router.get('/:id', assetController.getAssetById);
router.get('/clientes/:id', clientController.getClientById);

module.exports = router;
