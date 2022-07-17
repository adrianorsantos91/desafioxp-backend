const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primarykey: true,
      autoIncrement: true
    },
    saldo: DataTypes.FLOAT,
  }, {
    timestamps: false
  });

  User.associate = (models) => {
    User.hasMany(models.Purchase,
      { foreignkey: 'userId', as: 'purchases'});
  };

  return User;
}

module.exports = User;
