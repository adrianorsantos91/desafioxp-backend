module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkinsert('Assets',
    [{
      id: 1,
      quantityAssets: 1000,
      price: 50.00
    },
    {
      id: 2,
      quantityAssets: 2000,
      price: 20.00
    },
    {
      id: 3,
      quantityAssets: 500,
      price: 5.00
    },
  ])
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Assets', null, {});
  },
};

