const express = require('express');
const controllers = require('../controllers/loginController');
const { ensureGuest, ensureAuth } = require('../middleware/auth');
const router = express.Router()


router.get('/login',ensureGuest, controllers.loginPage)
router.post('/login',ensureGuest,controllers.loginconfirmation)
router.get('/dashboard',ensureAuth,controllers.getuserdashboard)


module.exports = router;













