const { User, Book, Transaction } = require('../models/index')

class loginController {

  static getLogin(req, res) {
    res.render('./login.ejs')
  }

  static postLogin(req, res) {
    User.findOne({ where: { email: req.body.email } })
      .then(user => {
        if (user) {
          if (user.password == req.body.password) {
            req.session.userId = user.id
            res.redirect(`/books`)  //ini mengarah ke halaman user yg isi nya menampilkan data user atau profil
          } else {
            console.log('invalid password / email')
          }
        } else {
          console.log(' user not found')
        }
      })
      .catch(err => {
        res.send(err)
      })
  }

}

module.exports = loginController