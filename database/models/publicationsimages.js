"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PublicationsImages extends Model {
    static associate(models) {
      PublicationsImages.belongsTo(models.Publications, {
        as: "publication",
        foreignKey: "publication_id",
      });
    }
  }
  PublicationsImages.init(
    {
      publication_id: DataTypes.UUID,
      image_url: DataTypes.STRING,
      order: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "PublicationsImages",
    }
  );
  return PublicationsImages;
};