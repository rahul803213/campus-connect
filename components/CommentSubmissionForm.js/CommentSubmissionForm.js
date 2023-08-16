// components/CommentSubmissionForm.js
import React, { useState } from 'react';

function CommentSubmissionForm({ postId, onCommentSubmit,user_profile }) {
  const [comment, setComment] = useState('');

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (comment.trim() === '') return; // Prevent empty comments

    onCommentSubmit(comment);
    setComment('');
  };

  return (
    <div className="flex flex-row p-3 gap-3 ">
     <div className="w-[50px] h-[50px]  rounded-5xl flex items-center justify-center">
              <img
                src={user_profile}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                className="rounded-full"
              />
            </div>
      <form onSubmit={handleCommentSubmit} className='w-full'>
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Leave a comment..."
          className='w-[70%] p-2'
        />
        <button type="submit" className='w-[20%] p-2 border border-blue text-blue-500' >Comment</button>
      </form>
    </div>
  );
}

export default CommentSubmissionForm;
