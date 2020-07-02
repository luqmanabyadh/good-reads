const route = require('express').Router()

const homeRoute = require('./home')
const bookRoute = require('./books')
// const userRoute = require('./user')
const loginRoute = require('./login')
const accountRoute = require('./account')

function checkSession(req, res, next) {
  if (req.session.userId) {
    next()
  } else {
    res.redirect('/')
  }
}

function checkOut(req, res, next) {
  req.session.userId = null
  next()
}

route.get('/', checkOut, homeRoute)
route.use('/login', loginRoute)

route.use(checkSession)
route.use('/books', bookRoute)
route.use('/account', accountRoute)
// route.use('/users', userRoute)

module.exports = route