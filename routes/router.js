const express = require('express')
const controller = require('../controllers/controller')
const router = express.Router()

router.use('/post', controller.post)
router.use('/create', controller.add)
router.use('/', controller.get)

module.exports = router