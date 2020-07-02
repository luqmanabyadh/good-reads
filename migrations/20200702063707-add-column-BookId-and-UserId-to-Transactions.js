'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn('Transactions', 'BookId', { type: Sequelize.INTEGER }),
      queryInterface.addColumn('Transactions', 'UserId', { type: Sequelize.INTEGER })
    ])
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('Transactions', 'UserId', {}),
      queryInterface.removeColumn('Transactions', 'BookId', {})
    ])
  }
};
