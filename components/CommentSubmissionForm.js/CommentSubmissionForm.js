// components/CommentSubmissionForm.js
import React, { useState } from 'react';

function CommentSubmissionForm({ postId, onCommentSubmit }) {
  const [comment, setComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() === '') return; // Prevent empty comments

    onCommentSubmit(comment);
    setComment('');
  };

  return (
    <div className="comment-submission-form">
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Leave a comment..."
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CommentSubmissionForm;
