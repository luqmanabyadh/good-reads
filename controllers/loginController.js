const { User, Book, Transaction } = require('../models/index')

class loginController {

  static getLogin(req, res) {
    res.render('./login.ejs')
  }

  static postLogin(req, res) {
    let { email,password } = req.body  
    User.findAll({
      where:{email,password}
    })
      .then(dataUser => {
        req.session.user = data
        req.app.locals.message = "Berhasil login"
        res.redirect('/')  
      })
      .catch(err => {
        res.send(err)
      })
  }

}

module.exports = loginController