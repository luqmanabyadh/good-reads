const express = require('express')
const route = express.Router()
const Controller = require('../controllers/loginController')

route.get('/', Controller.getLogin)
route.post('/', Controller.postLogin)

module.exports = route