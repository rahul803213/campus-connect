const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  postId: String,
  content: String,
  userId:{ type:mongoose.Types.ObjectId,ref:'User'},
  parentComment: { type: mongoose.Schema.Types.ObjectId, ref: 'Comment' },
  replies: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
});

module.exports = mongoose.model('Comment', commentSchema);