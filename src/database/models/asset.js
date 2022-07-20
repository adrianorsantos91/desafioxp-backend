const Asset = (sequelize, DataTypes) => {
  const Asset = sequelize.define("Asset", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    quantityAsset: DataTypes.INTEGER,
    price: DataTypes.DECIMAL(10,2),
  }, {
    timestamps: false
  });

  return Asset;
}

module.exports = Asset;
