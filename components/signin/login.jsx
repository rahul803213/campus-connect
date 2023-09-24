"use client";
import React, { useState } from "react";
import { BASE_URL } from "@/ClientHelper/config";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SignInUser } from "@/network/userApi";
import { setCurrentUser } from "@/redux/user/userSlice";
import { useSelector, useDispatch } from "react-redux";
import { setTokenInLocal } from "@/ClientHelper/authHelper";
import Alert from "../Alert/Alert";
import { SignInUserWithRegNo } from "@/network/userApi";


function Login() {
  const dispatch = useDispatch();
  const Router = useRouter();
  const [loading,setLoading] = useState(false);
  const [formData, setFormData] = useState({
    reg_no: "1910510822",
    password: "666666",
  });
  //handle change function
  const handlechange = (event) => {
    const { value, name } = event.target;

    setFormData({ ...formData, [name]: value });
  };
 const [message,setMessage] = useState(null);
 const [messageType,setMessageType] =useState('');
  const redux_redux_user = useSelector((state) => state.userReducer.user);
  console.log({ "redux-user": redux_redux_user });

//handle submit functions
  const handleSubmit = async (event) => {
    event.preventDefault();
   // const url = `${BASE_URL}/user/login`
   setLoading(true);
    if (formData.reg_no == "" || formData.password == "")
      return res.json({ error: "one of two or may both is empty" });
    try {
      
      const data = await SignInUserWithRegNo(formData);

      const result= data.data;
      console.log(result);
      if(data.success){
       
        console.log({"After login result":result})
        setTokenInLocal(result.user_token);//set Token for user
        dispatch(setCurrentUser(result));//redux takes userReducer.user
        sessionStorage.setItem('userDetails' ,JSON.stringify(result));
 
    //   console.log( formData );
      Router.push("/home");
       setMessageType('success');
       setMessage(data.message);
      }
      else{
        setMessageType('error');
        setMessage(data.message);
      }
     
    } catch (error) {
      console.error("error fetching data at SignIn Component", error);
    }
    setLoading(false);
    // console.log(formData);
  };

  return (
    <div className="flex flex-1  flex-col justify-center px-4 lg:px-8  h-full w-full md:w-1/2 gap-8 items-center py-2 md:py-0">
      <div className=" w-full sm:max-w-sm  p-2">
        {/* <img className="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" /> */}
        <h2 className=" text-center text-xl lg:text-4xl font-extrabold tracking-tight text-gray-700 font-serif capitalize ">
          Sign in to your account
        </h2>
      </div>

      <div className="w-full sm:max-w-sm  p-2">
        <form className="flex flex-col space-y-6 py-2" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium leading-6 text-gray-900 ">
             Registration Number
            </label>
            <div className="mt-2">
              <input
                onChange={handlechange}
               // id="email"
                name="reg_no"
                type="text"
                value={formData.reg_no}
                autoComplete="email"
                required
                className="p-2 block w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-sm font-medium leading-6 text-gray-900 ">
                Password
              </label>
              <div className="text-sm">
              <Link
            prefetch
            href="/signup"  //register
            className="cursor-pointer font-normal leading-6 text-indigo-600 hover:text-indigo-800 font-serif"
          >
            forgot password
          </Link>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                onChange={handlechange}
                name="password"
                value={formData.password}
                type="password"
                autoComplete="current-password"
                required
                className="p-2 block w-full rounded-md border-0  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-800"
            >
              {/* focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 */}
            {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Not a member?&nbsp;
          <Link
            prefetch
            href="/register-new"  //register
            className="cursor-pointer font-normal leading-6 text-indigo-600 hover:text-indigo-800 font-serif"
          >
            Register
          </Link>
          {message && <Alert type={messageType} message={message}  />}
        </p>
      </div>
    </div>
  );
}

export default Login;
