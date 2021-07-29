'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Personals', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codigo: {
        type: Sequelize.STRING
      },
      cargo: {
        type: Sequelize.STRING
      },
      nombres: {
        type: Sequelize.STRING
      },
      apellidos: {
        type: Sequelize.STRING
      },
      usuarioId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Usuarios",
          key: "id"
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Personals');
  }
};