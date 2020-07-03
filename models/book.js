'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    get booksProfile() {
      return `${this.book_name} by ${this.author_name}`
    }

    static associate(models) {
      // define association here
      Book.belongsToMany(models.User, { through: 'Transactions' })
    }
  };
  Book.init({
    author_name: DataTypes.STRING,
    book_name: DataTypes.STRING,
    stocks: DataTypes.INTEGER,
    img_url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Book',
  });
  return Book;
};