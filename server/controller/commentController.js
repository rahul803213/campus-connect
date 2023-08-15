// routes/comments.js

const Comment = require('../models/Comments');

// Create a comment
const CreateComment =  async (req, res) => {
  try {
    const { postId, content, parentCommentId ,userId} = req.body;

    const newComment = new Comment({
      postId,
      content,
      userId,
      parentComment: parentCommentId,
    });

    await newComment.save();

    // If parentCommentId is provided, update the parent comment's replies array
    if (parentCommentId) {
      const parentComment = await Comment.findById(parentCommentId);
      parentComment.replies.push(newComment);
      await parentComment.save();
    }

    res.json({ success: true, comment: newComment });
  } catch (error) {
    console.error('Error creating comment:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
}

// Fetch comments for a post
//router.get('/:postId'
const fetchComment =  async (req, res) => {
  try {
    const { postId } = req.params;
    const comments = await Comment.find({ postId })
      .populate('replies')
      .populate('userId')
      .exec();

    res.json({ success: true, comments });
  } catch (error) {
    console.error('Error fetching comments:', error);
    res.status(500).json({ success: false, error: 'Server error' });
  }
}
module.exports = {
    CreateComment,
    fetchComment
}

