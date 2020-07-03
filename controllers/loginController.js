const { User, Book, Transaction } = require('../models/index')

class loginController {

  static getLogin(req, res) {
    let session = req.session.userId
    res.render('./login.ejs',{session})
  }

  static postLogin(req, res) {
    let { email,password } = req.body  
    User.findOne({ where: { email,password } })
      .then(user => {
        if (user) {         
            req.session.userId = user.id
           
            res.redirect(`/books`)  //ini mengarah ke halaman user yg isi nya menampilkan data user atau profil
        
        } else {
          req.app.locals.message = "gagal login"
          res.redirect('/')
        }
      })
      .catch(err => {
        let session = req.session.userId
        res.render('error',{err,session})
      })
  }

}

module.exports = loginController