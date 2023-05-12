const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  PostId: {
    type: String,
    required: true,
  },
  image_url: {
    type: [],
  },
  image_publicIds: {
    type: [],
  },
  purpose: {
    type: String,
    required: true,
  },
  propertyType: {
    type: String,
    required: true,
  },
  subType: {
    type: String,
    required: true,
  },
  numberOfBedrooms: {
    type: String,
    required: true,
  },
  numberOfBathrooms: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  numberOfToilets: {
    type: String,
    required: true,
  },
  landSize: {
    type: String,
    required: true,
  },
  funished: {
    type: String,
  },
  serviced: {
    type: String,
  },
  newlyBuilt: {
    type: String,
  },
  stateName: {
    type: String,
    required: true,
  },
  LocalityName: {
    type: String,
    required: true, 
  },
  selectAreaName: {
    type: String,
    required: true,
  },
  areaType: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  installment: {
    type: String,
  },
  initialAmount: {
    type: String,
  },
  monthlyPayment: {
    type: String,
  },
  periodOfPayment: {
    type: String,
  },
  youtube_video_link: {
  },
  instagram_video_link: {
    type: String,
  },
  likes: {
    type: Number,
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
