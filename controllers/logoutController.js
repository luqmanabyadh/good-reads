
class LogOutController{
  static out(req,res){
    
      delete req.session.user      
   
    req.app.locals.message = "berhasil Logout"
    res.redirect('/')
  }
} 

module.exports =LogOutController