const passport = require('passport')
module.exports = {
    AuthenticateWithGoogle : get('/google',passport.authenticate('google',{scope:['profile']}))
}