"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Publications extends Model {
    static associate(models) {
      Publications.hasMany(models.PublicationTypes, {
        as: "publicationTypes",
        foreignKey: "publication_type_id",
      });
      Publications.hasMany(models.Tags, { as: "tags", foreignKey: "tag_id" });
      Publications.belongsTo(models.Profiles, {
        as: "profile",
        foreignKey: "profile_id",
      });
      Publications.belongsTo(models.Cities, {
        as: "city",
        foreignKey: "city_id",
      });
    }
  }
  Publications.init(
    {
      profile_id: DataTypes.BIGINT,
      publication_type_id: DataTypes.INTEGER,
      tag_id: DataTypes.INTEGER,
      city_id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      content: DataTypes.STRING,
      picture: DataTypes.STRING,
      image_url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Publications",
      tableName: "publications",
    }
  );
  return Publications;
};
