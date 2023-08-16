import { BASE_URL } from "@/ClientHelper/config";


export const SignInUser = async (formData) => {
    const url = `${BASE_URL}/user/login`
    try{
        const response = await fetch(
            url,
    
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": BASE_URL
              },
              body: JSON.stringify(formData),
            }
          );
          const data= await response.json();
          if(response.ok){
            return {success:'true',message:'You are Signed In Now',data:data}
          }
          else{
            return {success:'false',message:'Something Went Wrong'}
          }
    }
    catch(error){
        console.log({"Error at Sign In Function":error})
    }

}


export const SignUpUser = async (formData) => {
     try{
        const fd = new FormData();
        console.log(formData);
        for (const key in formData) {
          if (formData.hasOwnProperty(key)) {
            fd.append(key, formData[key]);
          }
        }
        // fd.append('image',profile_picture);
      const res = await   fetch(`${BASE_URL}/user/register`, {
          method: "POST",
          headers:{
            "Access-Control-Allow-Origin": BASE_URL,
          },
          body: fd,
        })
        
        const data=  await res.json();
        console.log({"data before success alert":data});
        return {success:true,message:'You are Successfully SignUp.',user:data}
          
     }
     catch(error){
       return {success:false,message:`Something Went Wrong ${error}`}
     }
}


export const followOtherUser = async(celeb_id,follower_id)=> {
       try{
              const response = await fetch(`${BASE_URL}/user/${celeb_id}/follow`,{
                method:'POST',
                headers:{
                  'Content-Type':'application/json'
                },
                body:JSON.stringify({follower_id})
              })
              if(response.ok){
                const data = await response.json();
                return {success:true,message:'You are following Now',data:data}
              }else{
                console.log(response);
                return {success:false,message:'Something Went Wrong'}
              }
       }
       catch(error){
        throw error
       }
}


export const SendVerificationMailApi = async(registration_number)=>{
  const response = await fetch(`${BASE_URL}/user/sendmail`,{
    method:'POST',
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify({registration_number})
  })
  const data = await response.json();
  console.log({data:data})
  if(response.ok){
    return {success:true,data:data,message:"Email Verification Sent"}
  }
  else{
    return {success:false,message:data.error};
  }
  
}