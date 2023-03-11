"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class States extends Model {
    static associate(models) {
      States.belongsTo(models.Countries, {
        as: "country",
        foreignKey: "country_id",
      });
    }
  }
  States.init(
    {
      country_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "States",
    }
  );
  return States;
};
