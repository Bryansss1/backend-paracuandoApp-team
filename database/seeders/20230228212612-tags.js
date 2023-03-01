"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.bulkInsert("tags", [
        {
          name: "Ropa y accesorios",
        },
        {
          name: "Deportes",
        },
        {
          name: "Conciertos",
        },
        {
          name: "Meet & Greet",
        },
        {
          name: "E-sport",
        },
        {
          name: "Pop/Rock",
        },
        {
          name: "Tecnologia",
        },
        {
          name: "Hogar y Decoracion",
        },
        {
          name: "Abastecimiento",
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
      "tags",
      {
        name: [null],
      },
      { transaction }
    );
  },
};
