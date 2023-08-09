import React from "react";
import Sidebar from "@/components/sidebar/sidebar.component";
import Header from "@/components/Header/Header.component";
import NewsHighlight from "@/components/NewsBar/NewsBar.Component";
import Post from "@/components/Post/Post.component";
import PostCreate from "@/components/PostCreate/postcreate.component";
function home() {
  return (
    <div className="flex flex-col items-center gap-10 ">
      <Header />
      <div className="flex flex-row justify-center  gap-[100px] mx-20">
        <Sidebar />
        <div className="flex flex-col w-[50vw]"> 
        <PostCreate />
        <Post />
        <Post />
        <Post />
        <Post />
        </div>
        {/* <NewsHighlight name="Latest News"/> */}
        <div className="flex flex-col gap-10">
        <NewsHighlight name="Trending "/>
        <NewsHighlight name="News Highlights"/>
        </div>
       
       
      </div>
    </div>
  );
}

export default home;
