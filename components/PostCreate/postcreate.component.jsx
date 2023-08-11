"use client"
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { BASE_URL } from '@/ClientHelper/config';
const PostCreate = () => {

  const user = useSelector(state => state.userReducer.user.user_id);
  const [content, setContent] = useState({
    poster_id: user ,
    content:'',
    file:''
  });
  console.log({"user":user})
  // console.log({"post_create_id":content});

   const handlechange = (event) => {
    const { value, name } = event.target;

    setContent({ ...content, [name]: value });
   // setContent({...content,poster_id:user})
   console.log(content);
  };

  const handleFileChange = (e) => {
    setContent({
      ...content,
      [e.target.name]: e.target.files[0],
    });
  };


  const handlePostSubmit = async (e) => {
    
    e.preventDefault();
    setContent({...content,poster_id:user});
    console.log({"data":content})
    const url= `${BASE_URL}/post/create`;
    const fd = new FormData();
    //console.log(formData);
    for (const key in content) {
      if (content.hasOwnProperty(key)) {
        fd.append(key, content[key]);
      }
    }
    const data = await  fetch(url,{
        method:"POST",
        
        body:fd
      })
    const res= await data.json();
    console.log({"data after post create post":res});
    // Handle the post submission logic here
    console.log('Post content:', content);
    setContent('');
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-md">
      <form onSubmit={handlePostSubmit}>
        <textarea
          className="w-full border border-gray-300 rounded-lg p-2 mb-2 resize-none"
          rows="3"
          name="content"
          placeholder="What do you want to share?"
          value={content.content}
          onChange={handlechange}
        ></textarea>
        <input type='file' name="file"  onChange={handleFileChange} /> 
        <div className="flex justify-between items-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
           // disabled={!content.content.trim()}
          >
            Post
          </button>
          <div className="text-gray-400 text-sm">
            {content.length}/300
          </div>
        </div>
      </form>
    </div>
  );
};

export default PostCreate;
