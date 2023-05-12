const { uuid, validateMobileNumber, resetPasswordTemplate, transporter ,getPasswordResetURL,usePasswordHashToMakeToken} = require("../helper/helper");
const User = require("../models/User");
const validator = require('validator')
const jwt = require('jsonwebtoken')
const bcrypt = require("bcrypt")

exports.forgetPassWordPage = (req,res)=>{
    if(!req.user){
       res.render('resetPassword/forgetpassword.ejs')
    }
}
exports.getNewPassword = (req,res)=>{
    const parameter = req.params
    if(parameter){
        res.render('resetPassword/newPassword.ejs/',{parameter})
    }
}

exports.sendPasswordResetEmail = async (req, res) => {
    const email = req.body.email
    const  user = await User.findOne({ email : email })
    // console.log(user)
    if(!user){
        req.flash('errors', {msg : 'email does not exist'})
        return res.redirect('/forgotpassword')
    }
        
    const token = usePasswordHashToMakeToken(user)
   await User.updateOne({email:email},{passwordResetToken : token})
    const url = getPasswordResetURL(user,token)
    // res.json({message : url})
    const emailTemplate = resetPasswordTemplate(user, url)
    const sendEmail = () => {
      transporter.sendMail(emailTemplate, (err,info) => {
        if (err) {
            req.flash('errors', {msg : `error sending mail ${err}`})
        }
        req.flash('success', {msg : "please check your mail for reset password link"})
        console.log(`** Email sent: ${info.response}`)
      })
    }
    sendEmail()
  }

  exports.resetNewPassword = (req,res)=> {
      const validationErrors = []
      const userId = req.params.id
      const token = req.params.token
    if (!validator.isLength(req.body.password, { min: 8 })) validationErrors.push({ msg: 'Password must be at least 8 characters long' })
    if (req.body.password !== req.body.confirmPassword) validationErrors.push({ msg: 'Passwords do not match' })

    if (validationErrors.length) {
        req.flash('errors', validationErrors)
        return res.redirect('/password/'+ req.params.id+'/'+ req.params.token)
      }

      User.findOne({passwordResetToken:token})
    .then(user => {
        if(!user){req.flash('errors',{msg :'Password reset token is invalid or has expired.'})
        return res.redirect('/password/'+req.params.id+'/'+token)}
      const secret = user.password + "-" + user.createdAt
      const payload = jwt.decode(token, secret)
        bcrypt.genSalt(10, function(err, salt) {
          // Call error-handling middleware:
          if (err) return
          bcrypt.hash(req.body.password, salt, function(err, hash) {
            // Call error-handling middleware:
            if (err) return
            User.findOneAndUpdate({ _id: userId }, { password: hash,createdAt : Date.now(),passwordResetToken:'undefine'})
              .then(() => {
                req.flash('success',{msg:'Password changed successful'})
                return res.redirect('/login')
              })
              .catch(err => console.log(err))
          })
        })
    })
    // highlight-end
    .catch(() => {
      res.status(404).json("Invalid user")
    })
  }



