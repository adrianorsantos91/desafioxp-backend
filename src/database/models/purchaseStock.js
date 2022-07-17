const PurchaseStock = (sequelize, DataTypes) => {
  const PurchaseStock = sequelize.define("PurchaseStock", {
    purchaseId: {
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

  PurchaseStock.associate =(models) => {
    models.Stock.belongsToMany(models.Purchase,
      {
        through: PurchaseStock,
        foreignkey: 'stockId',
        otherKey: 'purchaseId',
        as: 'purchases',
      });

      models.Purchase.belongsToMany(models.Stock,
        {
          through: PurchaseStock,
          foreignkey: 'purchaseId',
          otherKey: 'stockId',
          as: 'stocks',
        });

  };

  return PurchaseStock;
}

module.exports = PurchaseStock;
