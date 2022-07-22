const express = require('express');
const accountController = require('../controllers/accountController');
const { validateContainsFields } = require('../middlewares/validateAccount');
// const authenticationMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/:id', accountController.getClientById);
router.post('/deposito', validateContainsFields, accountController.createdDeposit);
router.post('/saque', validateContainsFields, accountController.createdDraft);

module.exports = router;
