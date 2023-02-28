"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.bulkInsert("publications", [
        {
          profile_id: "2",
          publication_type_id: "2",
          tag_id: "6",
          city_id: "1",
          title: "Concierto en Buenos Aires",
          description:
            "Se realizara un concierto de soda estereo el siguiente martes 14 de marzo",
          content: "Info de concierto",
          picture: "image.png",
          image_url: "https://image.com",
        },
        {
          profile_id: "1",
          publication_type_id: "1",
          tag_id: "9",
          city_id: "1",
          title: "Feria de ventas Buenos Aires",
          description:
            "Una maravillosa exposicion de los mejores emprendimientos locales en uno de los mejores centros de la ciudad",
          content: "Propuesta de exposicion de emprendimientos",
          picture: "image.png",
          image_url: "https://image.com",
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
