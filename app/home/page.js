"use client";
import React, { useState } from "react";
import { useEffect } from "react";
import Sidebar from "@/components/sidebar/sidebar.component";
import Header from "@/components/Header/Header.component";
import NewsHighlight from "@/components/NewsBar/NewsBar.Component";
import Post from "@/components/Post/Post.component";
import { removeCurrentUser, setCurrentUser } from "@/redux/user/userSlice";
import PostCreate from "@/components/PostCreate/postcreate.component";
import { fetchPostData } from "@/network/postApi";
import { useSelector,useDispatch } from 'react-redux';
import { useRouter } from "next/navigation";
import { setPosts } from "@/redux/post/postSlice";
import PostParent from "@/components/PostParent./PostParent";
import Spinner from "@/components/Spinner/Spinner";
import { getTokenFromLocal, removeTokenFromLocalMeansLogout } from "@/ClientHelper/authHelper";
//Import ends here


const areEqual = (prevProps, nextProps) => {
  // Only re-render if the user prop changes
  return prevProps.posts === nextProps.posts;
};


const MemoizedPostParent = React.memo(PostParent, areEqual);

function Home(props) {
  const Router = useRouter();
  //const dispatch = useDispatch();
 // const user = useSelector(state=> state.userReducer.user);
  //const post = useSelector(state=> state.postReducer.posts);
  // console.log({"post from reduc":post})
   const token = getTokenFromLocal();
  


  
 // const [post, setPost] = useState();
  /* useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
    
        const data = await fetchPostData();
     dispatch(setPosts(data));
       // setPosts(data);
       const storedUserDetails = JSON.parse(sessionStorage.getItem('userDetails'));
       if(storedUserDetails) {
         dispatch(setCurrentUser(storedUserDetails));
       }
     
    };
    
    fetchData();
  // const postArray = JSON.parse(sessionStorage.getItem('postArray'));
  setLoading(false);
  
  }, [dispatch]); */


  

  if (Router.isFallback) {
    <h1>Data is loading</h1>;
  }


  return ( 
     <> { 
      !(token) ? Router.push('/signin'):
     
  <div className="flex flex-col sm:flex-row justify-center gap-4  mb-[20px] w-[80%]">
    <Sidebar />
    <div className="flex flex-col w-full sm:w-3/6   ">
      <PostCreate   />
     <PostParent />
    </div>

    {/* <NewsHighlight name="Latest News"/> */}
    <div className="flex-col gap-4 w-2/6 hidden sm:flex bg-gray-100 h-fit pb-4">
      <NewsHighlight name="Trending " />
      <NewsHighlight name="News Highlights" />
    </div>
  </div>
     }
  </> 
  );
}

export default Home;
