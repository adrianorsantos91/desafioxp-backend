const express = require('express');
const accountController = require('../controllers/accountController');
const { validateContainsFields } = require('../middlewares/validateAccount');
const authenticateToken = require('../middlewares/auth.middeware');

const router = express.Router();

router.get('/:id', authenticateToken, accountController.getClientById);
router.post('/deposito', authenticateToken,
  validateContainsFields, accountController.createdDeposit);
router.post('/saque', authenticateToken,
  validateContainsFields, accountController.createdDraft);

module.exports = router;
