const fetch = require('node-fetch')
const nodemailer = require('nodemailer')
const jwt = require('jsonwebtoken')

module.exports  = {
    uuid : ()  => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        });
      },

      validateMobileNumber : async (countryCode,phoneNumber,api_key)=> {
        const response = await fetch(`https://api.bigdatacloud.net/data/phone-number-validate?number=${phoneNumber}&countryCode=${countryCode}&key=${api_key}`)

        const result = await response.json()

        return result
      },

              // `secret` is passwordHash concatenated with user's
        // createdAt value, so if someone malicious gets the
        // token they still need a timestamp to hack it:
        usePasswordHashToMakeToken : ({
          password: passwordHash,
          _id: userId,
          createdAt
        }) => {
          // highlight-start
          const secret = passwordHash + "-" + createdAt
          const token = jwt.sign({ userId }, secret, {
            expiresIn: 3600 // 1 hour
          })
          // highlight-end
          return token
},

//transporter to send a reset password mail to user
 transporter : nodemailer.createTransport({
  service: "gmail",
  port : process.env.PORT || 3000,
  auth: {
    user: process.env.EMAIL_LOGIN,
    pass: process.env.EMAIL_PASSWORD
  },

}),

 //baase url
 getPasswordResetURL : (user, token)=> {
  return `http://localhost:${process.env.PORT}/password/${user._id}/${token}`

 },

resetPasswordTemplate : (user, url) => {
  const from = "noreply@gmail.com"
  const to = user.email
  const subject = "🌻Account Password Reset 🌻"
  const html = `
  <p>Hey ${user.displayName || user.email},</p>
  <p>We recieve a rewuest that you want to change your password!</p>
  <p>But don’t worry! You can use the following link to reset your password:</p>
  <a href=${url}>${url}</a>
  <p>If you don’t use this link within 1 hour, it will expire.</p>
  <p>Do something outside today! </p>
  <p>–Your friends at Backwoods</p>
  `

  return { from, to, subject, html }
},
  
}