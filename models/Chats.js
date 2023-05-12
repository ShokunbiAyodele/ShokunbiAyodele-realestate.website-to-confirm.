const mongoose = require("mongoose");

const ChatSchema = new mongoose.Schema({
  messagesArray:{
    type: [],
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  postUserId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  postId:{
    type: String,
    required: true,
  },
  createdAt:{
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Chat", ChatSchema);



