const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

const ConversationSchema = new mongoose.Schema({
  members:{
    type: [],
  },
  postId:{
    type: String,
  },
  chatCreated:{
    type: Boolean,default:false
  },
  createdAt:{
    type: Date,
    default: Date.now,
  },
},{ timestamps: true });

module.exports = mongoose.model("Conversation", ConversationSchema);



