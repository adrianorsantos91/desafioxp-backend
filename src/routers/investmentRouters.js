const express = require('express');
const investmentController = require('../controllers/investmentController');
// const authenticationMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/comprar', investmentController.createdPurchase);
// router.post('/vender', investmentController);

module.exports = router;
