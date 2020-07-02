const { Book, Transaction, User } = require('../models/index')

class bookController {
  static list(req, res) {
    Book.findAll()
      .then(data => {
        res.render('./booklist.ejs', { data })
      })
      .catch(err => {
        res.send(err)
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
        res.send(err)
      })
  }

}
module.exports = bookController