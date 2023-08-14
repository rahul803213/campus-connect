import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { RWebShare } from "react-web-share";
import Alert from "../Alert/Alert";
import {
  BsThreeDots,
  BsHeart,
  BsSend,
  BsSave,
  BsHeartFill,
} from "react-icons/bs";
import {
  FacebookShareButton,
  FacebookIcon,
  PinterestShareButton,
  PinterestIcon,
  RedditShareButton,
  RedditIcon,
  WhatsappShareButton,
  WhatsappIcon,
  LinkedinShareButton,
  LinkedinIcon,
} from 'next-share';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FaRegComment } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { likePost } from "@/redux/post/postSlice";
import { LikePost } from "@/network/postApi";
import { followOtherUser } from "@/network/userApi";

const Post = ({ username, college, content, image, user_profile,id,isLiked,likeCount,likedBy,postowner }) => {
  console.log(username);
  const dispatch=useDispatch();
  const user_id = useSelector(state => state.userReducer.user.user_id);

  const [expanded, setExpanded] = useState(false);
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState('');
  const toggleExpansion = () => {
    setExpanded(!expanded);
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


const handleFollowButton = async(celeb_id) => {
         try{
               const response =     await followOtherUser(celeb_id,user_id);
                    if (response.success) {
                      setMessage(response.message);
                      setMessageType('success');
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
      <div className="w-full h-auto my-4 bg-  rounded-md font-serif px-2 hover:shadow-lg ">
        <header className="flex justify-between items-center px-2 h-[50px]">
          <div className="flex gap-2 items-center">
            {/* user-profile */}
            <div className="w-[50px] h-[50px]  rounded-5xl flex items-center justify-center">
              <img
                src={user_profile}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                className="rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="h-full w-full font-bold">{username}</span>
              {/* <span className="truncate	text-[10px]">{college}</span> */}
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <button className="text-blue-400 font-base border border-2 border-blue-400 px-4 py-1 cursor-pointer hover:bg-blue-400 hover:text-white rounded-md"
             onClick={()=> handleFollowButton(postowner)}
            >
              Follow
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
            <div className="flex items-center gap-2 px-4">
              <BsHeartFill style={{ fontSize: "20px" }} />
              <p className="text-zinc-600 font-lg font-semibold font-sans">
                {likeCount} likes
              </p>
            </div>
            {message && <Alert type={messageType} message={message} />}
          </div>
        </footer>
      </div>
    </>
  );
};

export default Post;
