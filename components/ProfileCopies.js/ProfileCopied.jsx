'use client'
import React,{useState,useEffect} from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import Post from '../Post/Post.component';
import Spinner from '../Spinner/Spinner';
import { fetchPostData } from '@/network/postApi';
const LinkedInProfile = ({user}) => {
   // const followerCount = useSelector(state => state.userReducer.user.user_follower_count)
  //  const user = useSelector(state => state.userReducer.user);
  //  const profile_uri=user.user_profile;
   // console.log(profile_uri);
   var p = user._id;
   const [posts,setPosts] = useState('');
  const [loading,setLoading] = useState(false);
   useEffect(()=> {
    const fetchData = async () => {
        try {
          setLoading(true);
          const data = await fetchPostData(p);
          setPosts(data);
        } catch (error) {
          console.error('Error fetching post data:', error);
        } finally {
          setLoading(false);
        }
      };
    
      fetchData();
   },[p])

   console.log({"posts posts":posts});



    return (
        <div className="bg-white shadow-md p-4 sm:p-8 m-4 rounded-lg w-[80%] mx-auto">
            {/* Cover Image */}
            <div className="relative">
                <img className="w-full h-40 object-cover rounded-t-lg" src="https://i.stack.imgur.com/cEz3G.jpg" alt="Cover Image" />
                <div className="absolute left-4 ">
                    <Image height={100} width={100} className="w-16 h-16 rounded-full" src={user.profileImage} alt="Profile Picture" />
                </div>
                <button className="absolute top-4 right-4 bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600 focus:outline-none">Edit Cover</button>
            </div>

            {/* Profile Header */}
            <div className="flex flex-col items-center sm:flex-row sm:items-start mt-4">
                <div className="hidden sm:block w-16 h-16 rounded-full mb-4 pl-5 sm:mb-0 sm:mr-4"></div>
                <div>
                    <h1 className="text-xl font-semibold mb-2">{user.username}</h1>
                    <p className="text-gray-600 text-sm">Software Engineer</p>
                    <p className="text-gray-500 text-sm">San Francisco, CA</p>
                </div>
            </div>

            {/* Connect Button */}
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600 focus:outline-none">Connect</button>

            {/* Bio Section */}
            <div className="my-6">
                <h2 className="text-lg font-semibold mb-2">Bio</h2>
                <p className="text-gray-600">Passionate about web development and creating meaningful user experiences.</p>
            </div>

            {/* Experience Section */}
            <div className="my-6">
                <h2 className="text-lg font-semibold mb-2">Experience</h2>
                <div className="mb-4">
                    <h3 className="text-md font-semibold">Senior Developer</h3>
                    <p className="text-gray-600 text-sm">ABC Tech Solutions</p>
                    <p className="text-gray-500 text-sm">2018 - Present</p>
                </div>
                {/* Add more experience entries here */}
            </div>

            {/* Recent Activity Section */}
            <div className="my-6">
                <h2 className="text-lg font-semibold mb-2">Recent Activity</h2>

              
                { loading ? <Spinner className="left-1/2" /> :
        posts.length ? (
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
     
     
                {/* Add more activity entries here */}
            </div>

            {/* Skills Section */}
            <div className="my-6">
                <h2 className="text-lg font-semibold mb-2">Skills</h2>
                <ul className="list-disc ml-6">
                    <li>Web Development</li>
                    <li>JavaScript</li>
                    <li>React.js</li>
                    {/* Add more skills here */}
                </ul>
            </div>

            {/* Contact Info */}
            <div className="my-6">
                <h2 className="text-lg font-semibold mb-2">Contact</h2>
                <p className="text-gray-600 text-sm">Email: </p>
                <p className="text-gray-600 text-sm">Phone: (+91) 456-7890</p>
                {/* Add more contact info here */}
            </div>
        </div>
    );
};

export default LinkedInProfile;
