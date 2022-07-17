const Stock = (sequelize, DataTypes) => {
  const Stock = sequelize.define("Stock", {
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

  return Stock;
}

module.exports = Stock;
