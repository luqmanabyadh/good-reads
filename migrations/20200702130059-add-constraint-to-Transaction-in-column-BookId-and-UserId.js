'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addConstraint('Transactions', {
        fields: ['BookId'],
        type: 'foreign key',
        name: 'custom_fkey_BookId',
        references: { //Required field
          table: 'Books',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      }),
      queryInterface.addConstraint('Transactions', {
        fields: ['UserId'],
        type: 'foreign key',
        name: 'custom_fkey_UserId',
        references: { //Required field
          table: 'Users',
          field: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      })
    ])
  },

  down: (queryInterface, Sequelize) => {

    return Promise.all([
      queryInterface.removeConstraint('Transactions', 'custom_fkey_UserId'),
      queryInterface.removeConstraint('Transactions', 'custom_fkey_BookId')
    ])

  }
};
