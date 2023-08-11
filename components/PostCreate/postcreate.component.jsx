"use client";
import React, { useState } from "react";
import Link from "next/link";
import {BsImage,BsCalendar2Event} from 'react-icons/bs'
import {GrArticle} from 'react-icons/gr'
import {RiArticleLine} from 'react-icons/ri'

import { useEffect } from "react";
import { CreatePost } from "@/network/postApi";

const PostCreate = ({ user }) => {


  const [content, setContent] = useState({
    poster_id: '',
    content: "",
    file: "",
  });


  useEffect(() => {
    setContent({ ...content, poster_id: user });
  }, [user]);

  //console.log({ user: user });

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
    setContent({ ...content, poster_id: user });
    console.log({ data: content });

    const res = await CreatePost(content);

    console.log({ "data after post create post": res });
    // Handle the post submission logic here
  //  console.log("Post content:", content);
    setContent({});
  };

  return (
    <div className="bg-white rounded-lg p-4 shadow-md w-full">
      <form 
        onSubmit={handlePostSubmit}
        className=" flex flex-col gap-2"
      >
        <textarea
          className="w-full rounded-lg p-2 mb-2 resize-none border text-slate-500"
          rows="2"
          name="content"
          placeholder="share new post"
          value={content.content}
          onChange={handlechange}
        ></textarea>
        <div className='flex flex-wrap justify-evenly '>
          <label className=' w-fit flex flex-wrap items-center h-[40px] hover:bg-gray-200 px-4 rounded-lg'>
            <input 
              type="file" 
              name="file" 
              onChange={handleFileChange} 
              className="w-0 "
            />
            <BsImage className=' w-[20px] h-[20px] mr-2 text-blue-500'/>
            <span className='text-xs font-semibold text-gray-700 capitalize'>photo</span>
          </label>
          <Link 
            href='/events' 
            className=' w-fit flex flex-wrap items-center h-[40px] hover:bg-gray-200 px-4 rounded-lg' 
          >
            <BsCalendar2Event className=' w-[20px] h-[20px] mr-2 text-yellow-500'/>
            <span className='text-xs font-semibold text-gray-700 capitalize'>event</span>
          </Link>
          <Link 
            href='/article' 
            className=' w-fit flex flex-wrap items-center h-[40px] hover:bg-gray-200 px-4 rounded-lg'
          >
            <RiArticleLine className='  w-[20px] h-[20px] mr-2 text-orange-500'/>
            <span className='text-xs font-semibold text-gray-700 capitalize'>write article</span>
          </Link>
        </div>
        <div className="flex justify-end items-end  ">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all w-[100px] sm:w-[150px]  "
            // disabled={!content.content.trim()}
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostCreate;
