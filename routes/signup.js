const express = require('express');
const controllers = require('../controllers/signupController');
const { ensureGuest, ensureAuth } = require('../middleware/auth');
const router = express.Router()

router.get('/register',ensureGuest,controllers.registerUser)
router.get('/signup',ensureGuest,controllers.signUpPage)
router.post('/signup',controllers.createUser)

module.exports = router;