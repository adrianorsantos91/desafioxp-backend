const PurchaseAsset = (sequelize, DataTypes) => {
  const PurchaseAsset = sequelize.define("PurchaseAsset", {
    purchaseId: {
      type: DataTypes.INTEGER,
      primarykey: true,
      foreignkey: true
    },
    assetId:{
      type: DataTypes.INTERGER,
      primarykey: true,
      foreignkey: true
    }
  }, {
    timestamps: false
  });

  PurchaseAsset.associate =(models) => {
    models.Asset.belongsToMany(models.Purchase,
      {
        through: PurchaseStock,
        foreignkey: 'assetId',
        otherKey: 'purchaseId',
        as: 'purchases',
      });

      models.Purchase.belongsToMany(models.Asset,
        {
          through: PurchaseStock,
          foreignkey: 'purchaseId',
          otherKey: 'assetId',
          as: 'assets',
        });

  };

  return PurchaseAsset;
}

module.exports = PurchaseAsset;
