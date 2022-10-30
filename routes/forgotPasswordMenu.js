const express = require('express');
const controllers = require('../controllers/forgetPasswordController');
const { ensureGuest, ensureAuth } = require('../middleware/auth');
const router = express.Router()


router.get('/forgotpassword',ensureGuest,controllers.forgetPassWordPage)
router.post('/getforgetPasswordEmail',controllers.sendPasswordResetEmail)
router.get('/password/:id/:token',controllers.getNewPassword)
router.put('/resetpassword/:id/:token',controllers.resetNewPassword)

module.exports = router;
