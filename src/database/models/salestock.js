const SaleStock = (sequelize, DataTypes) => {
  const SaleStock = sequelize.define("SaleStock", {
    saleId: {
      type: DataTypes.INTEGER,
      primarykey: true,
      foreignkey: true
    },
    stockId:{
      type: DataTypes.INTERGER,
      primarykey: true,
      foreignkey: true
    }
  }, {
    timestamps: false
  });

  SaleStock.associate =(models) => {
    models.Stock.belongsToMany(models.Sale,
      {
        through: SaleStock,
        foreignkey: 'stockId',
        otherKey: 'saleId',
        as: 'purchases',
      });

      models.Sale.belongsToMany(models.Stock,
        {
          through: SaleStock,
          foreignkey: 'purchaseId',
          otherKey: 'saleId',
          as: 'stocks',
        });

  };

  return SaleStock;
}

module.exports = SaleStock;
