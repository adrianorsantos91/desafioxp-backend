const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    amount: DataTypes.DECIMAL,
  }, {
    timestamps: false
  });

  // User.associate = (models) => {
  //   User.hasMany(models.Investment,
  //     { foreignkey: 'userId', as: 'investments'});
  // };

  return User;
}

module.exports = User;
