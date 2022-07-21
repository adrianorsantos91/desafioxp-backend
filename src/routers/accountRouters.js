const express = require('express');
const accountController = require('../controllers/accountController');
const { validateContainsFields } = require('../middleware/validateAccount');
// const authenticationMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/deposito', validateContainsFields, accountController.createdDeposit);
router.post('/saque', validateContainsFields, accountController.createdDraft);
router.get('/:id', accountController.getClientById);

module.exports = router;
