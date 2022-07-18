module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Users',
    [{
      id: 1,
      displayName: 'Adriano Santos',
      email: 'adriano@gmail.com',
      password: '123456',
      amount: 500.00,
    },
    {
      id: 2,
      displayName: 'Rodrigo Souza',
      email: 'rodrigo@gmail.com',
      password: '654321',
      amount: 200.00,
    }
  ])
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
