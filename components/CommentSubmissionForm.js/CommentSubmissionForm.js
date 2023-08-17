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
    <div className="flex  p-3 gap-2 ">
     <div className="w-[30px] h-[30px] rounded-5xl flex items-center justify-center">
              <img
                src={user_profile}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                className="rounded-full"
              />
            </div>
      <form onSubmit={handleCommentSubmit} className='w-full flex items-end justify-end text-xs'>
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="comment here.."
          className='w-full p-2  border-b focus:border-b-green-400 outline-none rounded-md'
        />
        {comment!=='' && (
          <button type="submit" className='p-2 px-4 rounded-md text-blue-500 hover:text-white ' >Post</button>
        )}
      </form>
    </div>
  );
}

export default CommentSubmissionForm;
