const { authenticateToken } = require('../utils/JWTToken');

const authenticationMiddleware = (req, res, next) => {
    const token = req.headers.authorization;

    const payload = authenticateToken(token);

    res.locals.payload = payload;

    next();
};

module.exports = authenticationMiddleware;
