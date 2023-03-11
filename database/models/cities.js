"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cities extends Model {
    static associate(models) {
      Cities.belongsTo(models.States, { as: "state", foreignKey: "state_id" });
      Cities.hasMany(models.Publications, { as: "publication" });
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
    }
  );
  return Cities;
};
