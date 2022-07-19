const SaleAsset = (sequelize, DataTypes) => {
  const SaleAsset = sequelize.define("SaleAsset", {
    saleId: {
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

  SaleAsset.associate =(models) => {
    models.Asset.belongsToMany(models.Sale,
      {
        through: SaleAsset,
        foreignkey: 'assetId',
        otherKey: 'saleId',
        as: 'purchases',
      });

      models.Sale.belongsToMany(models.Asset,
        {
          through: SaleAsset,
          foreignkey: 'saleId',
          otherKey: 'assetId',
          as: 'assets',
        });

  };

  return SaleAsset;
}

module.exports = SaleAsset;
