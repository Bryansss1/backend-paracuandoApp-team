"use strict";

const { UUID } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.bulkInsert("publications_images", [
        {
          publication_id: UUID,
          image_url: "https://image.com.co",
          order: 1,
        },
      ]);
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(
      "publications_images",
      {
        id: [null],
      },
      { transaction }
    );
  },
};
