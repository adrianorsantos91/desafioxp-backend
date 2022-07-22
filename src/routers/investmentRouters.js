const express = require('express');
const investmentController = require('../controllers/investmentController');
const { validateContainsFields } = require('../middlewares/validateInvestment');
const authenticateToken = require('../middlewares/auth.middeware');

const router = express.Router();

router.post('/comprar', authenticateToken,
  validateContainsFields, investmentController.createdPurchase);
router.post('/vender', authenticateToken,
  validateContainsFields, investmentController.createdSale);

module.exports = router;
