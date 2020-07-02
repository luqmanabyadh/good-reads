


class HomeController{
  static home(req,res){
    let message = req.app.locals.message
    delete req.app.locals.message || null
    let session = req.session.user
   res.render('home',{message,session})
    
  }
}
module.exports = HomeController