const express = require('express');
const assetController = require('../controllers/assetController');
// const authenticationMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/ativos/:id', assetController.getAssetById);

module.exports = router;
