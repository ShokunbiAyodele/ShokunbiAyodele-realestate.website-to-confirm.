const mongoose = require("mongoose");

const EmailSubSchema = new mongoose.Schema({
  email:{
    type: String,
  },
  subscribe:{
    type: Boolean,default: false
  },
  createdAt:{
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("emailsub", EmailSubSchema);



