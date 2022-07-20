const express = require('express');
const accountController = require('../controllers/accountController');
// const authenticationMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/deposito', accountController.createdDeposit);
router.post('/saque', accountController.createdDraft);
router.get('/:id', accountController.getClientById);

module.exports = router;
