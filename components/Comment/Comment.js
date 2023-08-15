// components/Comment.js
import React, { useState } from 'react';

function Comment({ comment, postId }) {
  const [reply, setReply] = useState('');

  const handleReplySubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          postId,
          content: reply,
          parentCommentId: comment._id,
        }),
      });

      if (response.ok) {
        setReply('');
        // Update state to show the new reply
        // Implement your own logic to manage state and rerender comments
      } else {
        console.error('Error submitting reply:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting reply:', error);
    }
  };

  return (
    <div>
      <p>{comment.content}</p>
      <form onSubmit={handleReplySubmit}>
        <textarea
          value={reply}
          onChange={(e) => setReply(e.target.value)}
          placeholder="Leave a reply..."
        />
        <button type="submit">Reply</button>
      </form>
      {comment.replies.map((reply) => (
        <Comment key={reply._id} comment={reply} postId={postId} />
      ))}
    </div>
  );
}

export default Comment;
