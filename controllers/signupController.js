const { uuid } = require("../helper/helper");
const User = require("../models/User");
const validator = require('validator')


exports.signUpPage = (req,res)=>{
    if(req.user){return res.redirect('/')}
    res.render('signup.ejs',{
        title : "Signup Page"
    })
}

exports.registerUser = (req,res)=> {
    if(!req.user){res.render('register.ejs')}
    
}
    exports.createUser = (req,res,next) => {
        const validationErrors = []
        if (!validator.isEmail(req.body.email)) validationErrors.push({ msg: 'Please enter a valid email address.' })
        if (!validator.isLength(req.body.password, { min: 8 })) validationErrors.push({ msg: 'Password must be at least 8 characters long'})
        if (req.body.password !== req.body.confirmPassword) validationErrors.push({ msg: 'Passwords do not match' })
      
        if (validationErrors.length) {
          req.flash('errors', validationErrors)
          return res.redirect('../signup')
        }
        req.body.email = validator.normalizeEmail(req.body.email, { gmail_remove_dots: false })
            const acountId = uuid()

            const user = new User({
                acountId : acountId,
                displayName : req.body.firstName + ' ' + req.body.middleName,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password
              })
                User.findOne({$or : [{email: req.body.email}]}, (error, existingUser) => {
                if(error){return next(error)}
                if(existingUser){
                    req.flash('errors', {message : "Email already exist"})
                    return res.redirect('../signup')
                }
                user.save((err) => {
                if (err) { return next(err) }
                req.logIn(user, (err) => {
                if (err) {
                    return next(err)
                }
                console.log('you are logged in')
                req.flash('errors', {message : "Account successfully created"})
                 res.redirect('/')
                })
          })
            }) 
        }