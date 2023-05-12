const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema({
  conversationId:{
    type: String,
  },
  sender:{
    type: String,
  },
  read:{
    type: Boolean,default: false
  },
  text:{
    type: String,
  },
  postId:{
    type: String,
  },
  createdAt:{
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("message", MessageSchema);



