const express = require('express');
const clientController = require('../../src/controllers/clientController');
// const authenticationMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/ativos/:id', clientController.getClientById);

module.exports = router;
