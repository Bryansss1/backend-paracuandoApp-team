"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tags extends Model {
    static associate(models) {
      Tags.hasMany(models.PublicationsTags, { as: "publicationTag" });
      Tags.hasMany(models.UsersTags, { as: "usersTags" });
    }
  }
  Tags.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
      image_url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Tags",
    }
  );
  return Tags;
};
