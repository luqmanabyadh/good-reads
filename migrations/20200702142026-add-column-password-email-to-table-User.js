'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('Users', 'email', { type: Sequelize.STRING }),
      queryInterface.addColumn('Users', 'password', { type: Sequelize.STRING })
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Users', 'email', { type: Sequelize.STRING }),
      queryInterface.removeColumn('Users', 'password', { type: Sequelize.STRING })
    ])
  }
};
