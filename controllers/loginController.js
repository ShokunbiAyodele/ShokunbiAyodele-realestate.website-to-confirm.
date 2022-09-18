const validator = require('validator')
const User = require('../models/User')
const passport = require('passport')

exports.loginPage = (req,res) =>{
      if(req.user){return res.redirect('/dashboard')}
        res.render('login.ejs',{title : 'Login'})
    }
    exports.homeIndex = (req,res) => {
      if(!req.user){res.render('index.ejs')}
    }

    exports.getuserdashboard =(req,res)=> {
      if(!req.user){res.redirect('/')}
      res.render('dashboard.ejs',{user: req.user})
    }

    // exports.logoutUser=(req,res) => {
    //     req.logout(error=> {
    //         if(!error){
    //             res.redirect('/')
    //         }
    //         else{
    //             console.log(error)
    //         }
    //     })
    // }

exports.loginconfirmation = (req,res,next) =>{
  const validationErrors = []
  if (!validator.isEmail(req.body.email)) validationErrors.push({ msg: 'Please enter a valid email address.' })
  if (validator.isEmpty(req.body.password)) validationErrors.push({ msg: 'Password cannot be blank.'})

  if (validationErrors.length) {
    req.flash('errors', validationErrors)
    return res.redirect('/login')
  }
  req.body.email = validator.normalizeEmail(req.body.email, { gmail_remove_dots: false })

  passport.authenticate('local', (err, user, info) => {
    if (err) { return next(err) }
    if (!user) {
      req.flash('errors', info)
      return res.redirect('/login')
    }
    req.logIn(user, (err) => {
      if (err) { return next(err) }
      req.flash('success', { msg: 'Success! You are logged in.' })
      res.redirect(req.session.returnTo || '/dashboard')
    })
  })(req, res, next)
}

exports.logoutUser = (req, res) => {
  req.logout(error => {
    req.session.destroy((err) => {
      if (err) console.log('Error : Failed to destroy the session during logout.', err)
      req.user = null
      res.redirect('/')
    })
  })
 

}
