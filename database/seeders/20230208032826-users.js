'use strict'
const uuid = require('uuid')
const { Op } = require('sequelize')
const { hashPassword } = require('../../libs/bcrypt')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    const transaction = await queryInterface.sequelize.transaction()


    const usersSeeds = [
      {
        id: uuid.v4(),
        first_name: "Daniel",
        last_name: "Henao",
        email: "danihr1314@gmail.com",
        username: "danihr1314@gmail.com",
        password: hashPassword("54325432"),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: uuid.v4(),
        first_name: 'bryan',
        last_name: 'david',
        email: 'bryan@academlo.com',
        username: 'bryan@academlo.com',
        password: hashPassword('12345'),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]

    try {
      await queryInterface.bulkInsert('users', usersSeeds, { transaction })

      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  },

  async down(queryInterface, Sequelize) {

    const transaction = await queryInterface.sequelize.transaction();

    const userNames = ["danihr1314@gmail.com", "gregoria1540@gmail.com"];

    try {
      await queryInterface.bulkDelete(
        "users",

        {
          username: {
            [Op.or]: userNames,
          },
        },
        { transaction }
      );

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },
};

