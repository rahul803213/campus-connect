import React,{useState} from 'react';

const Comment = ({ username, content,profileImage }) => {
  const [expanded,setExpanded]= useState(false);
  const toggleExpansion = () => {
    setExpanded(
      !expanded
    )
  }
  return (
    <div className={`flex p-2  ${expanded ? "" : "line-clamp-1"}`} onClick={()=>toggleExpansion()}>
      <div>
        <img src={profileImage} className="w-[30px] h-[30px] rounded-full bg-gray-300 mr-2"/>
      </div>
      <div>
        <p className="font-semibold">{username}</p>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Comment;
