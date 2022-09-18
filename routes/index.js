const express = require('express');
const controllers = require('../controllers/loginController');
const { ensureAuth } = require('../middleware/auth');
const router = express.Router()



router.get('/',controllers.homeIndex)
module.exports = router;