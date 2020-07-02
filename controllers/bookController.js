const { Book, Transaction, User } = require('../models/index')

class bookController {
  static list(req, res) {
    Book.findAll()
      .then(data => {
        let session = req.session.user
        res.render('./booklist.ejs', { data, session})
      })
      .catch(err => {
        let session = req.session.user
        res.render('error',{err,session})
      })
  }

  static buyNewBooks(req, res) {
    const AuthorId = +req.params.id
    let { name, UserId } = req.body
    Transaction.create({
      name,
      AuthorId,
      UserId
    })
      .then(data => {
        res.send({ data })
      })
      .catch(err => {
        let session = req.session.user
        res.render('error',{err,session})
      })
  }

}
module.exports = bookController