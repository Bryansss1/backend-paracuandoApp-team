"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tags extends Model {
    static associate(models) {
      Tags.hasMany(models.Publications, {
        as: "publications",
        foreignKey: "tag_id",
      });
    }
  }
  Tags.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Tags",
      tableName: "tags",
    }
  );
  return Tags;
};
