'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('SaleAssets', {
      saleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
        references: {
          model: 'Sales',
          key: 'id',
        },
      },
      assetId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
        references: {
          model: 'Assets',
          key: 'id',
        },
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('SaleAssets');
  }
};
