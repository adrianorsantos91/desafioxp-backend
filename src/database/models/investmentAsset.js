const InvestmentAsset = (sequelize, DataTypes) => {
  const InvestmentAsset = sequelize.define("InvestmentAsset", {
    investmentId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignkey: true
    },
    assetId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      foreignkey: true
    },
  });

  InvestmentAsset.associate = (models) => {
    models.Asset.belongsToMany(models.Investment,
      {
        through: InvestmentAsset,
        foreignkey: 'assetId',
        otherKey: 'investmentId',
        as: 'investments',
      });

      models.Investment.belongsToMany(models.Asset,
        {
          through: InvestmentAsset,
          foreignkey: 'investmentId',
          otherKey: 'assetId',
          as: 'assets',
        });
  };

  return InvestmentAsset;
}

module.exports = InvestmentAsset;
