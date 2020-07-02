


class HomeController{
  static home(req,res){
    let message = req.app.locals.message
    delete req.app.locals.message || null
   res.render('home',{message})
    
  }
}
module.exports = HomeController