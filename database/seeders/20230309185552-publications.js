"use strict";

const { UUID } = require("sequelize");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.bulkInsert("publications", [
        {
          user_id: UUID,
          publication_type_id: "2",
          city_id: "1",
          title: "Concierto en Buenos Aires",
          description:
            "Se realizara un concierto de soda estereo el siguiente martes 14 de marzo",
          content: "Info de concierto",
        },
        {
          user_id: UUID,
          publication_type_id: "1",
          city_id: "1",
          title: "Feria de ventas Buenos Aires",
          description:
            "Una maravillosa exposicion de los mejores emprendimientos locales en uno de los mejores centros de la ciudad",
          content: "Propuesta de exposicion de emprendimientos",
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
      "publications",
      {
        title: [null],
      },
      { transaction }
    );
  },
};
