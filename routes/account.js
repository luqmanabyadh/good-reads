const express = require('express')
const route = express.Router()

const accountController = require('../controllers/accountController')

route.get('/', accountController.showTransaction)
route.post('/', accountController.addTransaction)
route.get('/cancel/:id', accountController.deleteTransaction)


module.exports = route