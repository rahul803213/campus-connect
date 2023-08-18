import React from 'react';
import { useRouter } from 'next/navigation';
const UserList = ({ name, imageUrl ,id}) => {
    const Router = useRouter();
    return(
  <div className="flex items-center space-x-4" onClick={()=>Router.push(`/profile/${id}`)}>
    <div className="rounded-full overflow-hidden w-16 h-16">
      <img className="w-full h-full" src={imageUrl} alt={`${name}'s profile`} />
    </div>
    <p className="text-lg font-semibold">{name}</p>
  </div>
)};

export default UserList;
