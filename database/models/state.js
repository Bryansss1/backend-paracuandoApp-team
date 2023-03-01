"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class State extends Model {
    static associate(models) {
      State.hasMany(models.Cities, { as: "state", foreignKey: "state_id" });
      State.belongsTo(models.Countries, {
        as: "country",
        foreignKey: "country_id",
      });
    }
  }
  State.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      country_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "State",
      tableName: "state",
    }
  );
  return State;
};
