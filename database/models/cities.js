"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cities extends Model {
    static associate(models) {
      Cities.belongsTo(models.State, { as: "city", foreignKey: "state_id" });
      Cities.hasMany(models.Publications, {
        as: "publications",
        foreignKey: "city_id",
      });
    }
  }
  Cities.init(
    {
      state_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Cities",
      tableName: "cities",
    }
  );
  return Cities;
};
