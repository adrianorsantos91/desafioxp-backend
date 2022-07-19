const Purchase = (sequelize, DataTypes) => {
  const Purchase = sequelize.define("Purchase", {
    id: {
      type: DataTypes.INTEGER,
      primarykey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTERGER,
      foreignkey: true
    },
    assetId:{
      type: DataTypes.INTERGER,
      foreignkey: true
    },
    quantityAssets: DataTypes.DECIMAL
  }, {
    timestamps: false
  });

  Purchase.associate = (models) => {
    Purchase.belongsTo(models.User,
      { foreignkey: 'userId', as: 'user' });
  };

  return Purchase;
}

module.exports = Purchase;
