module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Emps', [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'example@example.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Emps', null, {});
  },
};