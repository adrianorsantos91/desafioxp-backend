module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('InvestmentAssets',
    [
      {
        investmentId: 1,
        assetId: 1,
      },
      {
        investmentId: 2,
        assetId: 2,
      },
      {
        investmentId: 3,
        assetId: 3,
      },

    ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('InvestmentAssets', null, {});
  },
};
