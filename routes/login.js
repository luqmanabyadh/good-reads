const express = require('express')
const route = express.Router()
const loginController = require('../controllers/loginController')

route.get('/', loginController.getLogin)
route.post('/', loginController.postLogin)

module.exports = route