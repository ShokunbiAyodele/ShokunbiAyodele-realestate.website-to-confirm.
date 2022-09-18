const express = require('express');
const controllers = require('../controllers/loginController');
const passport = require('passport')
const router = express.Router()

//google Auth
router.get('/google',passport.authenticate('google',{failWithError: true,scope:['profile']}))

//@desc google auth callback
//@router GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', {failureRedirect :
    '/'}), (req,res) => { 
        res.redirect('/')
    })


    //@desc logout user
//@router GET /auth/logout/
router.get('/', controllers.logoutUser)

    module.exports = router;