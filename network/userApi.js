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
          return response.json();
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
      const res = await   fetch(url, {
          method: "POST",
          headers:{
            "Access-Control-Allow-Origin": BASE_URL,
          },
          body: fd,
        })
        
        return await res.json();
          
     }
     catch(error){
        console.log({"Error at userApi":error})
     }
}