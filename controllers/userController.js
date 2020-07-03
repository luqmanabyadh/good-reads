const {User} = require('../models')
class UserController{
  static getUser(req,res){
    let id = req.session.userId
    
    User.findAll({
      where:{ id }
    })
    .then(data=>{
      let session = req.session.userId
      res.render('user',{data,session})
    })
  }
}

module.exports =UserController