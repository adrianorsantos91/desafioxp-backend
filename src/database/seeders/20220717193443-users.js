module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkinsert('Users',
    [{
      id: 1,
      displayName: 'Adriano Santos',
      email: 'adriano@gmail.com',
      password: '123456',
      saldo: '500',
    },
    {
      id: 2,
      displayName: 'Rodrigo Souza',
      email: 'rodrigo@gmail.com',
      password: '654321',
      saldo: '200',
    }
  ])
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
