///check controller for signupController.js thst does the work for agent and user sign up.
// check createUser function


// i have helper/helper.js  where i write a function to validate mobile number and this is been called in signupController::createUser()


//routes is where signup agent and user 


//lastly:  routes/userProfile.js is the one handling the userProfile to controller/userProfile.js 

//views contains the user and agent files and also 
// views/user/profile.ejs handles the user dashboard


//@created by Abdulafatah


const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const flash = require('express-flash')
const methodOverride = require('method-override')
const connectDB = require('./config/database')
const logger = require('morgan')
const passport = require('passport')
const session  = require('express-session')
const MongoStore = require('connect-mongo')

//routes
const userdashboardLogin = require('./routes/login')
const signupPage  =require('./routes/signup')
const googleAuthentication = require('./routes/auth')
const userProfile = require('./routes/userProfile')



//port 
const PORT =process.env.PORT || 3000

const app = express()

app.use(flash());



//load a config 
require('dotenv').config({path: './config/.env'})


//passport config
require('./config/passport')(passport)
connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))


//session middleware
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store :  MongoStore.create({
      mongoUrl: process.env.DB_STRING
  })
  }))


//passport middleware
app.use(passport.initialize())
app.use(passport.session())



app.use('/', userdashboardLogin)
app.use('/', signupPage)
app.use('/', userProfile)
app.use('/auth', googleAuthentication)
app.use('/', require('./routes/index'))
app.use('/about', require('./routes/about'))
app.use('/logout', require('./routes/auth'))


app.listen(PORT,()=>{
   console.log(`Server is running on port ${PORT} YOU better go catch it!!!`)
})


