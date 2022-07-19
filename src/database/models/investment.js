const Investment = (sequelize, DataTypes) => {
  const Investment = sequelize.define("Investment", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      foreignkey: true
    },
    assetId: {
      type: DataTypes.INTEGER,
      // foreignkey: true
    },
    quantityAsset: DataTypes.INTEGER
  }, {
    timestamps: false
  });

  Investment.associate = (models) => {
    Investment.belongsTo(models.User,
      { foreignkey: 'userId', as: 'user' });
  };

  return Investment;
}

module.exports = Investment;
