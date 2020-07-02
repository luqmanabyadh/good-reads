const router = require('express').Router()
const RegisterController = require('../controllers/registerController')

router.get('/',RegisterController.getData)
router.post('/',RegisterController.postData)


module.exports = router
