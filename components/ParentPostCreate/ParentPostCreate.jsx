"use client";
import React, { useState } from "react";
import Link from "next/link";
import {BsImage,BsCalendar2Event} from 'react-icons/bs'
import {GrArticle} from 'react-icons/gr'
import {RiArticleLine} from 'react-icons/ri'
import PostCreate from "../PostCreate/postcreate.component";

import { useEffect } from "react";
import { CreatePost } from "@/network/postApi";
import { useDispatch } from "react-redux";
import { addPost } from "@/redux/post/postSlice";
import { useSelector } from "react-redux";
import Alert from "../Alert/Alert";

const ParentPostCreate = ( ) => {
 const user_id = useSelector(state => state.userReducer.user.user_id);
 const dispatch= useDispatch();
 const [loading,setLoading] = useState(false);
 const [selectedFile, setSelectedFile] = useState(null);

 const [message, setMessage] = useState(null);
 const [messageType, setMessageType] = useState('');
 const [cvisible,setCvisible] = useState(false);

  const [content, setContent] = useState({
    poster_id: '',
    content: "",
    file: "",
  });


  useEffect(() => {
    setContent({ ...content, poster_id: user_id });
  }, [user_id]);

  //console.log({ user: user });

  const handlechange = (event) => {
    const { value, name } = event.target;

    setContent({ ...content, [name]: value });
   //  setContent({...content,poster_id:user_id})
   console.log(content);
  };

  const handleFileChange = (e) => {
    setContent({
      ...content,
      [e.target.name]: e.target.files[0],
    });
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handlePostSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    setContent({ ...content, poster_id: user_id });
    console.log({ data: content });
    if(!content.content && !content.file){
        setMessage("Empty Can't Be Posted!");
        setMessageType('error');
        setLoading(false)
        return; 
    }

    const response = await CreatePost(content);


    if (response.success) {
      setMessage("Data posted Successfully");
      setMessageType('success');
     // setPostData(response.data); // Set the returned data
    } else {
      setMessage(response.message);
      setMessageType('error');
    }

   

    console.log({ "data after post create post": response.data });
    // Handle the post submission logic here
  //  console.log("Post content:", content);
dispatch(addPost(response.data));
  
    setContent({content: "",
    file: "",poster_id:user_id});
    console.log("i am running")
    setSelectedFile(null)
    setTimeout(() => {
      setMessage(null);
    }, 1000);
    setLoading(false);
  };
  const selectedFileName = selectedFile ? selectedFile.name : '';

  return (
   <>
     { cvisible ?  <PostCreate /> : ''}
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
            <div>{selectedFileName}</div>
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
            disabled={loading}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all w-[100px] sm:w-[150px]  "
            // disabled={!content.content.trim()}
          >
           {loading ?' Posting...' : 'Post'}
          </button>
          {message && <Alert type={messageType} message={message} />}
      
        </div>
      </form>
    </div>
    </>
  );
};

export default ParentPostCreate;
