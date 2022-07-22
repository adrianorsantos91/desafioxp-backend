const { User } = require('../database/models');
const { generateJWTToken } = require('../utils/JWTToken');

const authentication = async ({ email }) => {
  const user = await User.findOne({
    attributes: { exclude: ['password'] },
    where: { email },
  });

  if (!user) {
    return false;
  }

  const token = generateJWTToken(user.email);
  return { token };
};

module.exports = {
  authentication,
};
