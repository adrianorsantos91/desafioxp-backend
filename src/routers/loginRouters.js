const express = require('express');
const loginController = require('../controllers/loginController');
// const authenticationMiddleware = require('../middlewares/auth.middleware');

const router = express.Router();

router.post('/', loginController.authentication);

module.exports = router;
