const Stock = (sequelize, DataTypes) => {
  const Stock = sequelize.define("Stock", {
    id: {
      type: DataTypes.INTEGER,
      primarykey: true,
      autoIncrement: true
    },
    qtdeAtivo: DataTypes.STRING,
    price: DataTypes.STRING
  }, {
    timestamps: false
  });

  return Stock;
}

module.exports = Stock;
