const Asset = (sequelize, DataTypes) => {
  const Asset = sequelize.define("Asset", {
    id: {
      type: DataTypes.INTEGER,
      primarykey: true,
      autoIncrement: true
    },
    quantityAssets: DataTypes.INTEGER,
    price: DataTypes.DECIMAL
  }, {
    timestamps: false
  });

  return Asset;
}

module.exports = Asset;
