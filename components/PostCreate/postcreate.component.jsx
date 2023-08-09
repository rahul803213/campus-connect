"use client"
import React, { useState } from 'react';

const PostCreate = () => {
  const [postContent, setPostContent] = useState('');

  const handlePostSubmit = (e) => {
    e.preventDefault();
    // Handle the post submission logic here
    console.log('Post content:', postContent);
    setPostContent('');
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <form onSubmit={handlePostSubmit}>
        <textarea
          className="w-full border border-gray-300 rounded-lg p-2 mb-2 resize-none"
          rows="3"
          placeholder="What do you want to share?"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        ></textarea>
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            disabled={!postContent.trim()}
          >
            Post
          </button>
          <div className="text-gray-400 text-sm">
            {postContent.length}/300
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostCreate;
