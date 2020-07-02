const {Transaction, Book, User} = require('../models')

class AccountController {

  static showTransaction(req, res) {
    User.findOne({
      include: [{model : Book}],
      where : {
          id: req.session.userId
      }
  })
  .then( data => {
      res.render('./account.ejs', { data })
  })
  .catch( err => {
      res.send(err)
  })
  }

  static addTransaction(req, res) {
    const bookId = +req.body.bookId
    let dataTrans = {
      BookId : bookId,
      UserId : req.session.userId,
    }
    Book.findByPk(bookId)
    .then(book => {
      const total = book.stocks-1
      if(book.stocks == 0) {
        console.log('Out of stock')
      } else {
        return Book.update({
          stocks: total
        }, {
          where: {
            id: +bookId
          }
        })
      }
    })
    .then(data => {
      console.log()
      return Transaction.create(dataTrans)
    })
    .then(transaction => {
      res.redirect('/account')
    })
  }

  static deleteTransaction(req, res) {
    const id = +req.params.id
    Transaction.destroy({where: {BookId:id}})
    .then(() => {
      return User.findOne({
        include: [{model : Book}],
        where : {
            id: req.session.userId
        }
      })
    })
    .then(data => {
      res.render('account', {data})
    })
  }

}

module.exports = AccountController