const router = require('express').Router()
const HomeController = require('../controllers/homeController')

router.get('/', HomeController.home)

module.exports = router