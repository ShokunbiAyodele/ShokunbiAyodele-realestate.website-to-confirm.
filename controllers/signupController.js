const { uuid, validateMobileNumber } = require("../helper/helper");
const User = require("../models/User");
const validator = require('validator')


exports.signup = (req,res)=>{
    if(!req.user){
       res.render('signup.ejs',{title : "User sign up"})
    }
}

exports.signUpPage = (req,res)=>{
    if(req.query.type ==='user'){
       res.render('usersignup.ejs',{title : "User sign up"})
    }else{
        res.render('agentsignup.ejs',{title : "User sign up"})
    }
}

exports.registerUser = (req,res)=> {
    if(!req.user){res.render('register.ejs')}
    
}
    exports.createUser = (req,res,next) => {
        let usertype
        if(req.body.type === "AGENT"){
            usertype = 'agenttUser'
        }
        else{
            usertype = 'clientUser'
        }
        const validationErrors = []

        let phoneNumber = req.body.phone
        let countryCode = req.body.countryCode
        const api_key =process.env.number_validate_apikey

        //call a big data endpoint to validate a user phone number
     validateMobileNumber(countryCode,phoneNumber,api_key).then(result =>{
          if(result.isValid !== true){validationErrors.push({ msg: 'You have entered an in correct phone number'})}

          savephoneNumber = Number(result.e164Format)

          //user email and password validation
        if (!validator.isEmail(req.body.email)) validationErrors.push({ msg: 'Please enter a valid email address.' })
        if (!validator.isLength(req.body.password, { min: 8 })) validationErrors.push({ msg: 'Password must be at least 8 characters long'})
        if (req.body.password !== req.body.confirmPassword) validationErrors.push({ msg: 'Passwords do not match' })

         if (validationErrors.length) {
          req.flash('errors', validationErrors)
          if(usertype==='user'){ return res.redirect('../signup?type=user')}
          else{ return res.redirect('../signup?type=agent')}
         
        }
        req.body.email = validator.normalizeEmail(req.body.email, { gmail_remove_dots: false })

        // //generate a user id
        const acountId = uuid()

        //create new user if all validations are true
             const user = new User({
                acountId : acountId,
                usertype : usertype,
                usernameField :req.body.email,
                phoneNumber : savephoneNumber,
                displayName : req.body.firstName + ' ' + req.body.middleName,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password
              })

              //search mongodb to confirm the the user email already exist before saving user properties
              User.findOne({$or : [{email: req.body.email}]}, (error, existingUser) => {
                if(error){return next(error)}
                if(existingUser){
                    req.flash('errors', {msg :"Email already exist"})
                    if(req.query.type==='user'){ return res.redirect('../signup?type=user')}
                    else{ return res.redirect('../signup?type=agent')}
                }
                user.save((err) => {
                if (err) { return next(err) }
                req.logIn(user, (err) => {
                if (err) {
                    return next(err)
                }
                console.log('you are logged in')
                req.flash('success', {msg : "Account successfully created"})
                 res.redirect('/dashboard')
                })
            })
        })

     })

}