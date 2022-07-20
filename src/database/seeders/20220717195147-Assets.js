module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Assets',
    [{
      id: 1,
      quantityAsset: 1000,
      price: 50.00
    },
    {
      id: 2,
      quantityAsset: 2000,
      price: 20.05
    },
    {
      id: 3,
      quantityAsset: 500,
      price: 5.15
    },
  ])
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Assets', null, {});
  },
};

