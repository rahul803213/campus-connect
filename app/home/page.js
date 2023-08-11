"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import Sidebar from "@/components/sidebar/sidebar.component";
import Header from "@/components/Header/Header.component";
import NewsHighlight from "@/components/NewsBar/NewsBar.Component";
import Post from "@/components/Post/Post.component";
import { setCurrentUser } from "@/redux/user/userSlice";
import PostCreate from "@/components/PostCreate/postcreate.component";
import { fetchPostData } from "@/network/postApi";
import { useSelector,useDispatch } from 'react-redux';

//Import ends here


function Home() {
  const user = useSelector(state => state.userReducer.user.user_id);

  const dispatch = useDispatch();
  const [post, setPost] = useState();

  useEffect(() => {
    const fetchData = async () => {
      
        const data = await fetchPostData();
     setPost(data);
       // setPosts(data);
     
    };

    fetchData();
  // const postArray = JSON.parse(sessionStorage.getItem('postArray'))
    const storedUserDetails = JSON.parse(sessionStorage.getItem("userDetails"));
    console.log({"storedUserDetails":storedUserDetails});
    if (storedUserDetails) {
      dispatch(setCurrentUser(storedUserDetails));
    }
  }, [dispatch]);

  return (
      
  <div className="flex flex-col sm:flex-row justify-center gap-4 border border-2 border-blue-400 mb-[20px] w-full">
    <Sidebar />
    <div className="flex flex-col w-full sm:w-3/6  border border-red-900 ">
      <PostCreate user={user}/>
      {post ? (
        post.map((data) => (
          <Post
            key={data._id}
            username={data.poster.username}
            content={data.content}
            image={data.image}
            user_profile={data.poster.profileImage}
          />
          // console.log(data.poster.username)
        ))
      ) : (
        <h1>No Post</h1>
      )}
    </div>

    {/* <NewsHighlight name="Latest News"/> */}
    <div className="flex-col gap-4 w-2/6 hidden sm:flex bg-gray-100 h-fit pb-4">
      <NewsHighlight name="Trending " />
      <NewsHighlight name="News Highlights" />
    </div>
  </div>
  );
}

export default Home;
