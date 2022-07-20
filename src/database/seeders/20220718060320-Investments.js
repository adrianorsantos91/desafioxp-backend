module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Investments',
    [{
      id: 1,
      userId: 1,
      quantityAsset: 10,
      price: 50.00,
      published: new Date('2011-08-01T19:58:00.000Z'),
      updated: new Date('2011-08-01T19:58:51.000Z'),
    },
    {
      id: 2,
      userId: 2,
      quantityAsset: 10,
      price: 20.00,
      published: new Date('2011-08-01T19:58:00.000Z'),
      updated: new Date('2011-08-01T19:58:51.000Z'),
    },
    {
      id: 3,
      userId: 1,
      quantityAsset: 10,
      price: 5.00,
      published: new Date('2011-08-01T19:58:00.000Z'),
      updated: new Date('2011-08-01T19:58:51.000Z'),
    },
  ])
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Investments', null, {});
  },
};


