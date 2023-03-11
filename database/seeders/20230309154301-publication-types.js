"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.bulkInsert("publication_types", [
        {
          name: "Marcas y tiendas",
          description: "Marcas, proveedores y tiendas que nos patrocinan",
        },
        {
          name: "Artistas y conciertos",
          description:
            "Seccion para encontrar los  artistas y conciertos programados para cada ciudad",
        },
        {
          name: "Torneos",
          description: "Competencias programadas hasta la fecha",
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
      "publication_types",
      {
        name: [null],
      },
      { transaction }
    );
  },
};
