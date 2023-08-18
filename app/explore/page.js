'use client'
import React, { useEffect, useState } from 'react';
import UserList from '@/components/userList/UserList';
import { fetchAllUserApi } from '@/network/userApi';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [input,setInput] = useState('');
  const isLoggedIn = useSelector(state => state.userReducer.LoggedIn)
const Router = useRouter();
  const filteredSearchResults = searchResults.filter(result => result.username.toLowerCase().includes(input.toLowerCase()));
  useEffect(()=>{
    if (!isLoggedIn) {
        Router.push('/reglogin');
      } else {
        const getAllUser = async () => {
          try {
            const response = await fetchAllUserApi();
            setSearchResults(response);
          } catch (error) {
            console.error('Error fetching user data:', error);
          } finally {
           // setIsLoading(false); // Set loading to false once data is fetched or an error occurs
          }
        };
        getAllUser();
      }
  },[isLoggedIn])

  const handleChange = (e) => {
      const {name,value} = e.target;
      setInput(value)
  }

  return (
    <div className="container mx-auto p-6" >
      <div className="flex items-center space-x-4 mb-4">
        <input
          className="border border-gray-300 p-2 rounded-md w-64"
          type="text"
          name="input"
          placeholder="Search for users..."
          onChange={handleChange}
        />
      
      </div>
      <div>
        {filteredSearchResults.map((user, index) => (
          <UserList key={index} name={user.username} imageUrl={user.profileImage} id={user._id} />
        ))}
      </div>
    </div>
  );
};

export default App;
