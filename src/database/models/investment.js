const Investment = (sequelize, DataTypes) => {
  const Investment = sequelize.define("Investment", {
    id: {
      type: DataTypes.INTEGER,
      primarykey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTERGER,
      foreignkey: true
    },
    assetsId: {
      type: DataTypes.INTERGER,
      foreignkey: true
    },
    quantityAssets: DataTypes.INTEGER
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
