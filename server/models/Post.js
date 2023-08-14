const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    poster: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      //  required: true,
    },
    image: {
      type: String,
      // required: true,
      //  maxLength: [80, "Must be no more than 80 characters"],
    },
    content: {
      type: String,
      //   required: true,
      //  maxLength: [8000, "Must be no more than 8000 characters"],
    },
    likeCount: {
      type: Number,
      default: 0,
    },
    isLiked: {
      type: Boolean,
      default: 0,
    },
    commentCount: {
      type: Number,
      default: 0,
    },
    likedBy:{
      type:[ mongoose.Types.ObjectId],
      ref: "User",
    },
    edited: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Post", PostSchema);
