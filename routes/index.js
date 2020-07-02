const router = require('express').Router()
const LogOutController = require('../controllers/logoutController')
const registerRoute = require('./register')
const homeRoute = require('./home')
const bookRoute = require('./books')
// const userRoute = require('./user')
const loginRoute = require('./login')


function checkSession(req,res,next){
  if(req.session.user){
    next()
  }else{
    res.send('anda harus login terlebih dahulu')
  }
}
router.get('/logout',LogOutController.out)
router.get('/', homeRoute)
router.use('/register',registerRoute)
router.use('/login', loginRoute)
router.use('/books', bookRoute)
// route.use('/users', userRoute)

module.exports = router