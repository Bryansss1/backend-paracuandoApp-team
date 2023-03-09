"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Publications extends Model {
    static associate(models) {
      Publications.belongsTo(models.Users, {
        as: "user",
        foreignKey: "user_id",
      });
      Publications.belongsTo(models.PublicationTypes, {
        as: "publicationType",
        foreignKey: "publication_type_id",
      });
      Publications.belongsTo(models.Cities, {
        as: "city",
        foreignKey: "city_id",
      });
      Publications.belongsToMany(models.Users, { through: "Votes" });
      Publications.belongsToMany(models.Tags, { through: "PublicationsTags" });
    }
  }
  Publications.init(
    {
      user_id: DataTypes.UUID,
      publication_type_id: DataTypes.INTEGER,
      city_id: DataTypes.INTEGER,
      title: DataTypes.STRING,
      description: DataTypes.STRING,
      content: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Publications",
    }
  );
  return Publications;
};
