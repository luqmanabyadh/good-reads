const { User, Book, Transaction } = require('../models/index')

class loginController {

  static getLogin(req, res) {
    let session = req.session.user
    res.render('./login.ejs',{session})
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
        let session = req.session.user
        res.render('error',{err,session})
      })
  }

}

module.exports = loginController