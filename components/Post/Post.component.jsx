import React, { use, useState } from "react";

import Alert from "../Alert/Alert";
import Comment from "../Comment/Comment";
import { useEffect } from "react";
import CommentSubmissionForm from "../CommentSubmissionForm.js/CommentSubmissionForm";
import {
  BsThreeDots,
  BsHeart,
  BsSend,
  BsSave,
  BsHeartFill,
} from "react-icons/bs";

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FaRegComment } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { fetchComments } from "@/redux/comment/commentAction";
import { likePost } from "@/redux/post/postSlice";
import { LikePost } from "@/network/postApi";
import { followOtherUser } from "@/network/userApi";
import { BASE_URL } from "@/ClientHelper/config";
import { fetchCommentsApi, fetchCommentsWithoutApi, handleCommentSubmit } from "@/network/commentApi";
import { addComment, addCommentEveryTime, setComments ,loadMoreComments} from "@/redux/comment/commentSlice";
const Post = ({ username, college, content, image, user_profile,id,isLiked,likeCount,likedBy,postowner }) => {
  console.log(username);
  const dispatch=useDispatch();
  const user_id = useSelector(state => state.userReducer.user.user_id);
  const commenter_image= useSelector(state => state.userReducer.user.user_profile)
  const comments = useSelector(state => state.commentReducer.comments[id]);
  const loadMoreCount = useSelector(state => state.commentReducer.loadMoreCounts[id]);

  //const commentsForPost = comments.filter((comment) => comment.postId === id);

  //const comments = comment.filter(c => .postId == id);
     console.log({"comments from redux":comments})
  const [expanded, setExpanded] = useState(false);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState('');


  useEffect(() => {
    const fetchData = async () => {
    
      const data = await fetchCommentsWithoutApi();
      const result = await data.comments;
       console.log({"data data":result})
   dispatch(addComment(result));
    };
    const fetchDataa = async () => {
    
      const data = await fetchCommentsApi(id);
      const result = await data.comments;
       console.log({"data data":result})
   dispatch(setComments({postId:id,comments:result}));
    };
  
          fetchDataa();
   // dispatch(fetchComments(id));
    
  }, [dispatch]);
  const handleLoadMoreComments = () => {
    dispatch(loadMoreComments({ postId: id }));
  };
  const handleLessComments = () => {
    dispatch(setComments({ postId: id ,comments:comments}));
  };
  const visibleComments = comments?.slice(0, loadMoreCount);


  const toggleExpansion = () => {
    setExpanded(!expanded);
  };





  const  handleCommentSubmit = async (comment) => {
    try {
      const response = await fetch(`${BASE_URL}/comment/create`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          postId: id, // Assuming you have a `post` object in your component
          content: comment,
          userId: user_id, // Assuming you have the user's name available
        }),
      });
  
      if (response.ok) {
        const newCommentData = await response.json();
        dispatch(addCommentEveryTime({postId:id,comment:newCommentData.comment}));
        console.log({"newcomment created":newCommentData.comment})
        // Handle the successful response, maybe update the state
      } else {
        console.error('Error submitting comment:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };





  






   const handleLikeClick = async (post_id) => {
            try{
              await LikePost(post_id,user_id);
              dispatch(likePost({userId:user_id,postId:post_id}))
            }  
            catch(error){
              throw error;
            }
}  

 const [follow,setFollow]= useState('follow');

const handleFollowButton = async(celeb_id) => {
         try{
               const response =     await followOtherUser(celeb_id,user_id);
                    if (response.success) {
                      setMessage(response.message);
                      setMessageType('success');
                  follow=='follow' ?     setFollow('unfollow') : setFollow('follow')
                     // setPostData(response.data); // Set the returned data
                    } else {
                      setMessage(response.message);
                      setMessageType('error');
                    }

         }
         catch(error){
          throw error;
         }
}


  return (
    <>
      {/* must remove mx-auto from below div */}
      <div className="w-full h-auto my-4 bg-white  rounded-md font-serif px-2 hover:shadow-lg   ">
        <header className="flex justify-between items-center px-2 h-[50px]">
          <div className="flex gap-2 items-center">
            {/* user-profile */}
            <div className="w-[40px] h-[40px]  rounded-5xl flex items-center justify-center">
              <img
                src={user_profile}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="h-full w-full font-bold">{username}</span>
               <span className="truncate	text-[10px]">{college}</span> 
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <button className="text-blue-400 font-base border border-2 border-blue-400 px-4 py-1 cursor-pointer hover:bg-blue-400 hover:text-white rounded-md"
             onClick={()=> handleFollowButton(postowner)}
            >
             {follow}
            </button>
            <div className="cursor-pointer">
              <BsThreeDots style={{ fontSize: "1.1rem" }} />
            </div>
          </div>
        </header>

        <main className="w-full h-auto my-4">
          <div
            className={`w-full h-full text-gray-600 my-6 cursor-pointer ${
              expanded ? "" : "line-clamp-2"
            }`}
            onClick={() => toggleExpansion()}
          >
            {content}
          </div>
          {image ? (
            <img
              src={image}
              alt="postImage"
              className="w-full h-full object-cover"
            />
          ) : null}
        </main>

        <footer className="w-full h-[90px] rounded-md ">
          <div className="w-full h-full rounded-b-md flex flex-col py-2">
            <div className="flex w-full justify-between items-center">
              <div className="flex">
                <div className="p-2 cursor-pointer">
                 {likedBy.includes(user_id) ? <FavoriteIcon className={`text-xl text-red-600`} onClick={()=> handleLikeClick(id)} />
                 :
                 <FavoriteBorderIcon className={`text-xl`} onClick={()=> handleLikeClick(id)} />
                 }
                </div>
                <div className="p-2 cursor-pointer">
                  <FaRegComment style={{ fontSize: "20px" }} />
                </div>
                <div className="p-2 cursor-pointer">
                   <BsSend style={{ fontSize: "20px" }} /> 
                 
                </div>
              </div>
              <div className="flex p-2 cursor-pointer">
                <BsSave style={{ fontSize: "20px" }} />
              </div>
            </div>
            <div className="flex items-center gap-2 px-2 ">
             
              <p className="text-zinc-600 font-lg  font-sans ">
                {likeCount} likes
              </p>
            </div>
            <CommentSubmissionForm
          postId={id}
          onCommentSubmit={handleCommentSubmit}
          user_profile={commenter_image}
          
        />
            {message && <Alert type={messageType} message={message} />}
          </div>
        </footer>
       
        
        <div className={`py-2 px-4 mt-3 }`} >
        {  visibleComments?.map((comment) => (
          <Comment key={comment._id} username={comment.userId.username} profileImage={comment.userId.profileImage}  content={comment.content}  />
        ))}
        {/* Load more button */}
        {loadMoreCount < comments?.length && (
        <button onClick={handleLoadMoreComments}>See More</button>
      )}
      {loadMoreCount === comments?.length && (
        <button onClick={handleLessComments}>See Less</button>
      )}
      </div>
      </div>
    </>
  );
};

export default Post;
