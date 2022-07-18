module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Investments',
    [{
      id: 1,
      userId: 1,
      assetId: 1,
      quantityAsset: 10,
    },
    {
      id: 2,
      userId: 2,
      assetId: 2,
      quantityAsset: 10,
    },
    {
      id: 3,
      userId: 1,
      assetId: 3,
      quantityAsset: 10,
    },
  ])
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Investments', null, {});
  },
};


