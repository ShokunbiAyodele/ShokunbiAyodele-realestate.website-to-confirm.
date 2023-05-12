const express = require('express')
const router = express.Router()
const controllers = require('../controllers/userpost');
const { ensureAuth } = require('../middleware/auth');



router.get('/:postId',controllers.getUserPost)

module.exports = router;