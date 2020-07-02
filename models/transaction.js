'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transaction extends Model {
    static associate(models) {
      // define association here
      // Transaction.belongsTo(models.User)
      // Transaction.belongsTo(models.Book)
    }
  };
  Transaction.init({
    BookId: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER,
    amount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Transaction',
  });
  return Transaction;
};