import React,{useState} from "react";
import { CgProfile } from "react-icons/cg";
import {
  BsThreeDots,
  BsHeart,
  BsSend,
  BsSave,
  BsHeartFill,
} from "react-icons/bs";
import { FaRegComment } from "react-icons/fa";

const Post = ({ username ,college,content, image, user_profile }) => {
  console.log(username);


  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };


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
            <span className="truncate	text-[10px]">{college}</span>
            </div>
           
          </div>
          <div className="flex gap-2 items-center">
            <button className="text-blue-400 font-base border border-2 border-blue-400 px-4 py-1 cursor-pointer hover:bg-blue-400 hover:text-white rounded-md">
              Follow
            </button>
            <div className="cursor-pointer">
              <BsThreeDots style={{ fontSize: "1.1rem" }} />
            </div>
          </div>
        </header>
      
        <main className="w-full h-auto my-4">
          <div className= {`w-full h-full text-gray-600 my-6 cursor-pointer ${expanded ? "" : "line-clamp-2"}`}  onClick={()=>toggleExpansion()}>{content}</div>
          {
        image ? <img
            src={image}
            alt="postImage"
            className="w-full h-full object-cover"
          />:null
       }
        </main>

        <footer className="w-full h-[90px] rounded-md ">
          <div className="w-full h-full rounded-b-md flex flex-col py-2">
            <div className="flex w-full justify-between items-center">
              <div className="flex">
                <div className="p-2 cursor-pointer">
                  <BsHeart style={{ fontSize: "20px" }} />
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
                20 likes
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Post;
