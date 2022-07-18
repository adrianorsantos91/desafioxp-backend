module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkinsert('Investments',
    [{
      id: 1,
      userId: 1,
      assetId: 1,
      quantityAssets: 10,
    },
    {
      id: 2,
      userId: 2,
      assetId: 2,
      quantityAssets: 10,
    },
    {
      id: 3,
      userId: 1,
      assetId: 3,
      quantityAssets: 10,
    },
  ])
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Investments', null, {});
  },
};


