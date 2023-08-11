"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { BiSolidShow, BiSolidHide } from "react-icons/bi";
import { BsFacebook, BsGoogle } from "react-icons/bs";
import { BASE_URL } from '@/ClientHelper/config';

// import CustomButton from "../CustomButton/CustomButton.component";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { headers } from "next/dist/client/components/headers";
import { responsiveFontSizes } from "@mui/material";
//import demoPost from '../assets/demoPost.jpg'

const SignInPage = () => {
  const Router = useRouter();
  const [form, setForm] = useState({
    email: "example123@gmail.com",
    password: "0123456789",
  });
  const [data,setData] = useState('');
  const [visibility, setVisibility] = useState(false);
  const handleClick = value => () => Router.push(value);

  //handle change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  //handle submit
  const handleSubmit =  async(e) =>{
    e.preventDefault();
    
    const url = `${BASE_URL}/user/login`;
    if(form.email=="" || form.password=="") return res.json({error:"one of two or may both is empty"});
    try{
        const response= await  fetch(url,
   
            {
                    method:"POST",
                    headers:{
                        'Content-Type':'application/json'
                    },
                    body:JSON.stringify(form)
                }
                )
            const result = await response.json();
            setData(result);
                  
        
            console.log({user_details:result});
            Router.push('/home');
    }
    catch(error){
        console.error('error fetching data',error)
    }
   
    
  }





  return (
    <>
      <div className="w-full rounded-md bg-white text-slate-900 flex flex-col items-center p-4 justify-between gap-2 h-full">
        <div className="flex flex-col flex-wrap w-full items-center p-3 ">
          <h2 className="text-2xl md:text-5xl font-serif font-semibold capitalize mt-4">
            welcome here!
          </h2>
          <h5 className="text-sm md:text-md text-slate-500 font-base mb-4 capitalize">
            Join our college based community
          </h5>

          {/* all email-Box of user*/}
       {/*    <div className=" p-3 flex flex-wrap flex-col w-full md:w-4/5 gap-2">
            <h2 className="text-sm md:text-md text-slate-500 ">
              Recents logins
            </h2>
            <div className=" p-3 flex flex-wrap justify-center gap-3">
              <AccountCircleIcon className="text-[93px]" />
              <AccountCircleIcon className="text-[93px]" />
            </div>
          </div>*/}
        </div> 

        {/* signIn information block */}
        <div  className="flex flex-col w-full bg-slate-200 rounded-lg px-2 py-4">
          {/* user detail */}
          <form onSubmit={handleSubmit} className=" flex flex-wrap w-full justify-center gap-4">
            <div className="w-[250px] h-[40px] bg-white text-slate-600 rounded-md">
              <input
                type="email"
                name="email"
                value={form.email}
                placeholder={form.email}
                onChange={handleChange}
                className="w-full text-lg font-mono font-base  rounded-md h-full px-3 outline-none border-2 focus:border-blue-400"
              />
            </div>
            <div className="w-[250px] h-[40px] bg-white text-slate-600 rounded-md flex ">
              <input
                type={visibility ? "text" : "password"}
                name="password"
                value={form.password}
                placeholder={form.password}
                onChange={handleChange}
                className="w-full text-lg font-mono font-base h-full px-3 outline-none rounded-l-md border-2 focus:border-blue-400"
              />
              <div
                className="w-[40xp] h-full border rounded-r-md flex items-center justify-center text-2xl p-2"
                onClick={() => setVisibility(!visibility)}
              >
                {visibility ? <BiSolidHide /> : <BiSolidShow />}
              </div>
            </div>
          

            <a href="/" className=" text-base mr-[200px] py-2 text-blue-600">
              forget password ...{" "}
            </a>

            <div className="flex flex-col w-full mt-2 items-center gap-2 p-2">
              <Button nf  type="submit">Sign In</Button>
            </div>
          </form>
          <div className=" w-full relative mt-2 p-4">
            <div className="h-[1px] w-full bg-slate-500" />
            <p className="absolute bg-slate-200 z-10 text-xs sm:text-sm left-[50%] top-[50%] transition-all -translate-x-1/2 -translate-y-1/2 px-2 sm:px-4 text-slate-900 ">
              {" "}
              Or continue with{" "}
            </p>
          </div>

          <div className="flex flex-wrap p-4 items-center justify-center gap-4 text-xl ">
            <BsFacebook className="cursor-pointer transition-all hover:ring-indigo-600 hover:ring-2 rounded-full" />
            <BsGoogle className="cursor-pointer transition-all hover:ring-indigo-600 hover:ring-2 rounded-full" />
          </div>

          <div className="flex flex-col w-full mt-2 items-center gap-2 p-2">
            <Button nf onClick={handleClick('signup')}>
              Register
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;

const Item3 = ({ profileUrl, email }) => {
  return (
    <div className="w-[100px] h-[100px] bg-slate-100 text-slate-600 rounded-lg flex flex-col items-center justify-between p-2">
      <div className="w-[50px] h-[50px] rounded-full flex justify-center items-center">
        <img
          src={profileUrl}
          alt="profile"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <p className="text-xs lg:text-md w-full truncate">{email}</p>
    </div>
  );
};

const Button = ({ children }) => {
  return (
    <div>
      <button
        className='capitalize border p-2 rounded-md w-[250px] lg:w-[350px] text-md font-base font-serif text-slate-600 hover:bg-slate-600 hover:text-white border-slate-600'
        
      >
        {children}
      </button>
    </div>
  );
};
