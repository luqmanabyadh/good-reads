const route = require('express').Router()
const HomeController = require('../controllers/homeController')

route.get('/', HomeController.home) 

module.exports = route