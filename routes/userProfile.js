const express = require('express');
const controllers = require('../controllers/userProfile');
const { ensureGuest, ensureAuth } = require('../middleware/auth');
const router = express.Router()



router.get('/profile/:id',ensureAuth,controllers.userPofile)


module.exports = router;