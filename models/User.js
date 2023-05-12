const mongoose = require('mongoose')
const bcrypt = require("bcrypt")


const UserSchema = new mongoose.Schema({
  email:{type: String, unique:true},
  usernameField:{type: String,unique: true},
  displayName:{type: String,require : true},
  firstName:  {type: String,require : true},
  lastName:   {type: String,require : true},
  phoneNumber:   {type: String,unique: true},
  WhatsAppNumber:   {type: String,default:''},
  countryCode:   {type: String,require: true},
  callingCode:   {type: String,require: true},
  passwordResetToken:{type: String,default:'default'},
  governmentDOC:{type: String,default: ''},
  selfiePicture:{type: String, default:''},
  businessCACDoc:{type: String,default:''},
  profilePic:{type: String, default : ''},
  ProfilePicPublicId:{type: String, default : ''},
  userWebsiteUrl:{type: String},
  domainName:   {type: String,require: true},
  officeStateName:   {type: String,default : ''},
  officeLocalGovname:   {type: String,default : ''},
  officeAddress:   {type: String,default : ''},
  aboutYourOrganization:   {type: String,default : ''},
  organizattionSericeProvided:   {type: String,default : ''}, 
  busiinessState:   {type: String,default : ''},
  businessAxis:   {type: String,default : ''},
  busiinessCategory:   {type: String,default : ''},
  faceBook:   {type: String,default : ''},
  twitter:   {type: String,default : ''},
  linkedln:  {type: String,default : ''},
  instagram:  {type: String,default : ''},
  createdAt:  {type: Date,default: Date.now},
  acountId:   {type: String},
  usertype:   {type: String},
  password:String,
})

UserSchema.pre('save', function save(next) {
  const user = this
  if (!user.isModified('password')) { return next() }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) { return next(err)}
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) { return next(err) }
      user.password = hash
      next()
    })
  })
})

/**
 * Helper method for validating user's password.
 */
 UserSchema.methods.comparePassword = function comparePassword(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
    cb(err, isMatch)
  })
}



module.exports = mongoose.model('User',UserSchema)