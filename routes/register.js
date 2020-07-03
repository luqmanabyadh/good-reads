const route = require('express').Router()
const RegisterController = require('../controllers/registerController')

route.get('/',RegisterController.getData)
route.post('/',RegisterController.postData)


module.exports = route
