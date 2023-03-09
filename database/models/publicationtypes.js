"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PublicationTypes extends Model {
    static associate(models) {
      PublicationTypes.hasMany(models.Publications, {
        as: "publications",
        foreignKey: "publication_type_id",
      });
    }
  }
  PublicationTypes.init(
    {
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "PublicationTypes",
    }
  );
  return PublicationTypes;
};
