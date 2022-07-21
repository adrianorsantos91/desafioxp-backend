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
    quantityAsset: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.DECIMAL,
    },
    published: {
      type: DataTypes.STRING
    },
    updated: {
      type: DataTypes.STRING
    }
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
