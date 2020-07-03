const route = require('express').Router()
const LogOutController = require('../controllers/logoutController')
const homeRoute = require('./home')
const bookRoute = require('./books')
const registerRoute = require('./register')
const userRoute = require('./user')
const loginRoute = require('./login')
const accountRoute = require('./account')
const ChartController = require('../controllers/chartController')

function checkSession(req, res, next) {
  if (req.session.userId) {
    next()
  } else {
    req.app.locals.message = "Harap login Terlebih dahulu"
    res.redirect('/')
  }
}

function checkOut(req, res, next) {
  req.session.userId = null
  next()
}

route.get('/register',registerRoute)
route.get('/chart',ChartController.getChart)
route.get('/', checkOut, homeRoute)
route.use('/login', loginRoute)
route.get('/logout',LogOutController.out)
route.use('/books', bookRoute)
route.use(checkSession)
route.use('/account', accountRoute)
route.use('/users', userRoute)

module.exports = route