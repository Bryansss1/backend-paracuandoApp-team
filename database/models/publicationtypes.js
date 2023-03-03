"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PublicationTypes extends Model {
    static associate(models) {
      PublicationTypes.belongsTo(models.Publications, {
        as: "publication",
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
      tableName: "publication_types",
    }
  );
  return PublicationTypes;
};
