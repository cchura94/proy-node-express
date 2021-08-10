'use strict';
const bcrypt = require("bcrypt")

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     let BCRYPT_SALT_ROUNDS = 12;
    const hashedPassword = await bcrypt.hash("admin12345", BCRYPT_SALT_ROUNDS);

     await queryInterface.bulkInsert('Usuarios', [{
      username: 'admin',
      email: 'admin@gmail.com',
      password: hashedPassword,
      estado: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
