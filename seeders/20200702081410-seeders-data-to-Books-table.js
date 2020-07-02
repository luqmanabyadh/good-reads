'use strict';

const books = require('../data/books.json')

books.forEach((book) => {
  book.createdAt = new Date();
  book.updatedAt = new Date();
})

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books', books, {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Books', null, {});
  }
};