const express = require('express')
const app = express()
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const flash = require('express-flash')
const methodOverride = require('method-override')
const connectDB = require('./config/database')
const logger = require('morgan')
const passport = require('passport')
const session  = require('express-session')
const MongoStore = require('connect-mongo')
const axios = require('axios')
const format =  require('node-time-ago')


//routes
const userdashboardLogin = require('./routes/login')
const signupPage  =require('./routes/signup')
const addProperty = require('./routes/property')
const googleAuthentication = require('./routes/auth')
const userProfile = require('./routes/userProfile')
const passwordReset = require('./routes/forgotPasswordMenu')
const conversationRoute = require('./routes/conversation')
const messagesRoute = require('./routes/messages')
const getUsers = require('./routes/getUser');
const getUserpost = require('./routes/userPost');
const emailsubscription = require('./routes/emailnewsletter');
const pagenavLink = require('./routes/websitesNavLinks')





//port 
const PORT =process.env.PORT || 3000



app.use(flash());



//load a config 
require('dotenv').config({path: './config/.env'})
connectDB()

//passport config
require('./config/passport')(passport)


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))

//Use forms for put / delete
app.use(methodOverride("_method"));


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
app.use('/getPost', getUserpost)
app.use('/', emailsubscription)
app.use('/conversation', conversationRoute)
app.use('/users', getUsers)
app.use('/message', messagesRoute)
app.use('/', signupPage)
app.use('/', addProperty)
app.use('/', userProfile)
app.use('/', passwordReset)
app.use('/auth', googleAuthentication)
app.use('/', pagenavLink)
app.use('/', require('./routes/index'))
app.use('/about', require('./routes/about'))
app.use('/logout', require('./routes/auth'))
app.use('/', require('./routes/useractivities')) 




// app.listen(PORT,()=>{
//    console.log(`Server is running on port ${PORT} YOU better go catch it!!!`)
// })


// api to fetch the last record inserted
// const getUser = async(conversationId) => {
//   const response =await axios.get('http://localhost:3000/message/'+conversationId);
//   return response
// }

io.on('connection',(socket) => {
  console.log('a user connected');
  socket.on('sendMessage', (data) => {
    console.log(data)
    const receivedamessage = {
      sender : data.sender,
      text : data.text,
      conversationId : data.conversationId,
      createdAt : format(Date.now())
    }
        io.emit('newMessage',receivedamessage);  
  });
})

const server = http.listen(PORT, () => {
  const { port } = server.address();
  console.log(`Listening on port ${port}`);
});



