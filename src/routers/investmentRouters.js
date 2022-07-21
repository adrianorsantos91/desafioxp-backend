const express = require('express');
const investmentController = require('../controllers/investmentController');
const { validateContainsFields } = require('../middleware/validateInvestment');
// const authenticationMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/comprar', validateContainsFields, investmentController.createdPurchase);
router.post('/vender', validateContainsFields, investmentController.createdSale);

module.exports = router;
