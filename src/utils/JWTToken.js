const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET || 'akldhkjladadhjksvdhj';
// https://datatracker.ietf.org/doc/html/rfc7519#section-4.1
const jwtConfig = {
    // expiresIn: '7d',
    algorithm: 'HS256',
};

const generateJWTToken = (payload) =>
    jwt.sign(payload, SECRET, jwtConfig);

const authenticateToken = (token) => {
    if (!token) {
        const notFoundToken = { status: 401, message: 'Token not found' };
        throw notFoundToken;
    }

    try {
        const introspection = jwt.verify(token, SECRET, jwtConfig);
        return introspection;
    } catch (e) {
        console.log('error', e.message);
        const tokenInvalid = { status: 401, message: 'Expired or invalid token' };
        throw tokenInvalid;
    }
};

module.exports = {
    generateJWTToken,
    authenticateToken,
};
