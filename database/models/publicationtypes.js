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
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      name: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING
      },
      publication_id: {
        type: DataTypes.INTEGER
      },
      tag_id: {
        type: DataTypes.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    },
    {
      sequelize,
      modelName: "PublicationTypes",
      tableName: "publication_types",
    }
  );
  return PublicationTypes;
};
