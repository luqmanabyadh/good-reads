const router = require('express').Router()
const UserController = require('../controllers/userController')

router.get('/',UserController.getUser)


module.exports =router