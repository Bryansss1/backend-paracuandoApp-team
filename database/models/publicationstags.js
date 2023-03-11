"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PublicationsTags extends Model {
    static associate(models) {
      PublicationsTags.belongsTo(models.Tags, {
        as: "tag",
        foreignKey: "tag_id",
      });
      PublicationsTags.belongsTo(models.Publications, {
        as: "pubication",
        foreignKey: "publication_id",
      });
    }
  }
  PublicationsTags.init(
    {
      tag_id: DataTypes.INTEGER,
      publication_id: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "PublicationsTags",
    }
  );
  return PublicationsTags;
};
