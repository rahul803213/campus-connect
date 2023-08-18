import React, { useState } from 'react'
import Post from '../Post/Post.component';
import { useEffect } from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { fetchPostData } from '@/network/postApi';
import { setPosts } from '@/redux/post/postSlice';
import Spinner from '../Spinner/Spinner';
import { BASE_URL } from '@/ClientHelper/config';
function PostParent() {
const dispatch = useDispatch();
const [loading,setLoading] = useState(false);
const posts = useSelector(state=> state.postReducer.posts);
console.log({"Posts ":posts});
     useEffect(()=> {
      setLoading(true);
      const fetchData = async () => {
    
        const res = await fetch(`${BASE_URL}/post`);
        const data = await res.json();
     dispatch(setPosts(data));
      };
    
    fetchData();
    setLoading(false);
     },[dispatch])
    
      

  return (
    <>
      { loading ? <Spinner className="left-1/2" /> :
        posts ? (
        posts.map((data) => (
          <Post
            key={data._id}
            username={data.poster.username}
            college={data.poster.academic_details.college}
            content={data.content}
            image={data.image}
            user_profile={data.poster.profileImage}
            isLiked={data.isLiked}
            likeCount={data.likeCount}
            id={data._id}
            likedBy={data.likedBy}
            postowner={data.poster._id}
          />
          // console.log(data.poster.username)
        ))
      ) : (
        <h1>No Post</h1>
      )
      }
     
    </>
  )
}




export default PostParent;
