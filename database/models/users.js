<<<<<<< HEAD
"use strict";
const { Model } = require("sequelize");

/**
 * @openapi
 * components:
 *   schema:
 *     sign-up:
 *       type: object
 *       properties:
 *         first_name:
 *           type: string
 *           example: Paco
 *         last_name:
 *           type: string
 *           example: Garcia
 *         email:
 *           type: string
 *           example: paco@gmail.com
 *         password:
 *           type: string
 *           example: Paco123
 *     login:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: paco@gmail.com
 *         password:
 *           type: string
 *           example: Paco123
 *     forgottenPassword:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           example: paco@gmail.com
 *     myProfiles:
 *       type: object
 *       properties:
 *         results:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *               example: 740273ca-b792-4129-a050-2fc01957d94d
 *             first_name:
 *               type: string
 *               example: Juana
 *             last_name:
 *               type: string
 *               example: De Arco
 *             email:
 *               type: string
 *               example: example@email.com
 *             username:
 *               type: string
 *               example: example@email.com
 *             image_url:
 *               type: string
 *               example: null
 *             profiles:
 *               type: array
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 6
 *                 user_id:
 *                   type: string
 *                   example: 740273ca-b792-4129-a050-2fc01957d94d
 *                 role_id:
 *                   type: integer
 *                   example: 1
 *                 created_at:
 *                   type: string
 *                   example: 2023-02-09T23:32:03.233Z
 *                 updated_at:
 *                   type: string
 *                   example: 2023-02-09T23:32:03.233Z
 */

module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      Users.belongsTo(models.Countries, {
        as: "country",
        foreignKey: "country_id",
      });
      Users.hasMany(models.Profiles, { as: "profiles", foreignKey: "user_id" });
    }
  }
  Users.init(
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
      },
      first_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      last_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isEmail: true,
        },
      },
      username: {
        allowNull: true,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email_verified: {
        type: DataTypes.DATE,
      },
      token: {
        type: DataTypes.TEXT,
      },
      code_phone: {
        type: DataTypes.STRING,
      },
      phone: {
        type: DataTypes.STRING,
      },
      country_id: DataTypes.INTEGER,
      image_url: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Users",
      tableName: "users",
      underscored: true,
      timestamps: true,
      scopes: {
        view_public: {
          attributes: [
            "id",
            "first_name",
            "last_name",
            "country_id",
            "image_url",
          ],
        },
        view_same_user: {
          attributes: [
            "id",
            "first_name",
            "last_name",
            "country_id",
            "image_url",
            "email",
            "username",
            "code_phone",
            "phone",
          ],
        },
        auth_flow: {
          attributes: ["id", "first_name", "last_name", "email", "username"],
        },
        view_me: {
          attributes: [
            "id",
            "first_name",
            "last_name",
            "email",
            "username",
            "image_url",
          ],
        },
      },
      hooks: {
        beforeCreate: (user, options) => {
          if (user.email) {
            let emailLowercase = String(user.email).toLocaleLowerCase();
            user.email = emailLowercase;
            user.username = emailLowercase;
          }
        },
      },
    }
  );
  return Users;
};
=======
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    static associate(models) {
      Users.belongsTo(models.Countries, { as: 'country', foreignKey: 'country_id' })
      Users.hasMany(models.Profiles, { as: 'profiles', foreignKey: 'user_id' })
    }
  }
  Users.init({
    id: {
      type:DataTypes.UUID,
      primaryKey: true
    },
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    last_name:{
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    },
    username: {
      allowNull: true,
      type: DataTypes.STRING
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING
    },
    email_verified: {
      type: DataTypes.DATE
    },
    token: {
      type: DataTypes.TEXT
    },
    code_phone: {
      type: DataTypes.STRING,
    },
    phone: {
      type: DataTypes.STRING
    },
    country_id: DataTypes.INTEGER,
    image_url: {
      type: DataTypes.STRING 
    },
  }, {
    sequelize,
    modelName: 'Users',
    tableName: 'users',
    underscored: true,
    timestamps: true,
    scopes: {
      view_public: {attributes: ['id', 'first_name', 'last_name', 'country_id', 'image_url']},
      view_same_user: {attributes: ['id', 'first_name', 'last_name', 'country_id', 'image_url','email', 'username', 'code_phone', 'phone']},
      auth_flow: {attributes: ['id', 'first_name', 'last_name', 'email', 'username',]},
      view_me: {attributes: ['id', 'first_name', 'last_name', 'email', 'username','image_url']}
    },
    hooks: {
      beforeCreate: (user, options) => {
        if (user.email){
          let emailLowercase = String(user.email).toLocaleLowerCase()
          user.email = emailLowercase
          user.username = emailLowercase
        }
      }
    }
  });
  return Users;
};
>>>>>>> aee7d4966f36d62b3a26ad1a7dc2e1b5647503b9
