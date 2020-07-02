'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Users',
      [
        {
          name: 'admin',
          email: 'admin@gmail.com',
          password: '123',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ], {})
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
