const InvestmentAsset = (sequelize, DataTypes) => {
  const InvestmentAsset = sequelize.define("InvestmentAsset", {
    investmentId: {
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
