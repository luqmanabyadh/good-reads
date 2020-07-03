const route = require('express').Router()
const UserController = require('../controllers/userController')

route.get('/',UserController.getUser)


module.exports =route