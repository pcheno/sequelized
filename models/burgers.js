module.exports = function (sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false, //no null values
      validate: {
        len: [1, 150]  //burger name is between 1 and 150 chars
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0  //default valute not eaten
    }
  });
  return Burger;
};