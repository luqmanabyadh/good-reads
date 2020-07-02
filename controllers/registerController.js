const {User} = require('../models')
class RegisterController{
  static getData(req,res){
    res.render('register')
  }

  static postData(req,res){
    let {name,email,password} = req.body
    User.create({
      name,email,password
    })
    .then(data=>{
      req.app.locals.message = "Berhasil login"
      res.redirect('/')
    })
    .catch(err=>{error,{err}})
  }
}

module.exports = RegisterController