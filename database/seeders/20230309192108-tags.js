"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.bulkInsert("tags", [
        {
          name: "Ropa y accesorios",
          description:
            "Publicacion relacionada con accesorios para las personas y prendas para vestir",
          image_url: "https//:image1.com",
        },
        {
          name: "Deportes",
          description: "Prendas, accesorios relacionados con deportes.",
          image_url: "https//:image2.com",
        },
        {
          name: "Conciertos",
          description: "Conciertos venideros en tu area mas cercana",
          image_url: "https//:image3.com",
        },
        {
          name: "Meet & Greet",
          description:
            "Espacio en el que una figura publica socializa con el publico",
          image_url: "https//:image4.com",
        },
        {
          name: "E-sport",
          description: "Junta de deportes electrónicos",
          image_url: "https//:image5.com",
        },
        {
          name: "Pop/Rock",
          description:
            "Espacio donde hay ventas, reuniones y musica en vivo de pop y rock",
          image_url: "https//:image6.com",
        },
        {
          name: "Tecnologia",
          description:
            "Junta donde se socializa todos los avances venideros y por venir de toda la rama de la tecnología",
          image_url: "https//:image7.com",
        },
        {
          name: "Hogar y Decoracion",
          description: "Venta de accesorios y artículos para decorar tu hogar",
          image_url: "https//:image8.com",
        },
        {
          name: "Abastecimiento",
          description:
            "Ventas de emprendimientos y marcas reconocidas para que puedas abastecer tu hogar",
          image_url: "https//:image9.com",
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
