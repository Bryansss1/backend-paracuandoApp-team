"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UsersTags extends Model {
    static associate(models) {
      UsersTags.belongsTo(models.Tags, { as: "model", foreignKey: "tag_id" });
      UsersTags.belongsTo(models.Users, { as: "user", foreignKey: "user_id" });
    }
  }
  UsersTags.init(
    {
      tag_id: DataTypes.INTEGER,
      user_id: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: "UsersTags",
    }
  );
  return UsersTags;
};
