"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import Sidebar from "@/components/sidebar/sidebar.component";
import Header from "@/components/Header/Header.component";
import NewsHighlight from "@/components/NewsBar/NewsBar.Component";
import Post from "@/components/Post/Post.component";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "@/redux/user/userSlice";
import PostCreate from "@/components/PostCreate/postcreate.component";
import { fetchPostData } from "@/network/postApi";
import { useSelector } from 'react-redux';

//Import ends here


function Home() {
  const user = useSelector(state => state.userReducer.user.user_id);

  const dispatch = useDispatch();
  const [post, setPost] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchPostData();
        setPost(data);
      } catch (error) {
        // Handle the error if needed
      }
    };

    fetchData();
    const storedUserDetails = JSON.parse(sessionStorage.getItem("userDetails"));
    console.log({"storedUserDetails":storedUserDetails});
    if (storedUserDetails) {
      dispatch(setCurrentUser(storedUserDetails));
    }
  }, [dispatch]);

  return (
    <div className="flex flex-col items-center gap-10 ">
      <Header />
      <div className="flex flex-row justify-center  gap-[100px] mx-20">
        <Sidebar />
        <div className="flex flex-col w-[50vw]">
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
        <div className="flex flex-col gap-10">
          <NewsHighlight name="Trending " />
          <NewsHighlight name="News Highlights" />
        </div>
      </div>
    </div>
  );
}

export default Home;
