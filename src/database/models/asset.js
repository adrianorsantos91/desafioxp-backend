const Asset = (sequelize, DataTypes) => {
  const Asset = sequelize.define('Asset', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    quantityAsset: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.INTEGER,
    },
  }, {
    timestamps: false,
  });

  return Asset;
};

module.exports = Asset;
