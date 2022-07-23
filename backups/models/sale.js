const Sale = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sale', {
    id: {
      type: DataTypes.INTEGER,
      primarykey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTERGER,
      foreignkey: true,
    },
    assetId: {
      type: DataTypes.INTERGER,
      foreignkey: true,
    },
    quantityAssets: DataTypes.INTEGER,
  }, {
    timestamps: false,
  });

  Sale.associate = (models) => {
    Sale.belongsTo(models.User,
      { foreignkey: 'userId', as: 'user' });
  };

  return Sale;
};

module.exports = Sale;
