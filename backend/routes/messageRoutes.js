const express = require('express')
const { sendMessage } = require('../controlers/messageControllers')
const { protect } = require('../middlewares/authMiddleware')

const router = express.Router()

router.route('/').post(protect , sendMessage)
// router.route('/:chatId').get(protect , allMessages)

module.exports = router