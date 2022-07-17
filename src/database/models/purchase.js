const Stock = (sequelize, DataTypes) => {
  const Stock = sequelize.define("Stock", {
    id: {
      type: DataTypes.INTEGER,
      primarykey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTERGER,
      foreignkey: true
    },
    stockId:{
      type: DataTypes.INTERGER,
      foreignkey: true
    },
    qtdeAtivo: DataTypes.STRING
  }, {
    timestamps: false
  });

  Stock.associate = (models) => {
    Stock.belongsTo(models.User,
      { foreignkey: 'userId', as: 'user' });
  };

  return Stock;
}

module.exports = Stock;
