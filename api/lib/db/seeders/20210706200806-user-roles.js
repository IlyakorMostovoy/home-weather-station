"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("roles", [
      { name: "user", createdAt: new Date(), updatedAt: new Date() },
      { name: "moderator", createdAt: new Date(), updatedAt: new Date() },
      { name: "admin", createdAt: new Date(), updatedAt: new Date() },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("roles", null);
  },
};
