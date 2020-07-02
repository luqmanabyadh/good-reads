const express = require('express')
const route = express.Router()
const bookController = require('../controllers/bookController')

route.get('/', bookController.list)
route.get('/buy/:id', bookController.buyNewBooks)

module.exports = route