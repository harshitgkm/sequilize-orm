'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('Emps', 'username');
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Emps');
  }
};
