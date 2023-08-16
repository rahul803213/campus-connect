import { BASE_URL } from "@/ClientHelper/config";

export const createDetailsApi = async(formData)=> {
    const response = await fetch(`${BASE_URL}/detail/create`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(formData)
    })
    const data = await response.json();
    if(response.ok ){
        return {success:true,data:data,message:'Student Added Successfully.'}
    }
    else{
        return{success:false,message:data}
    }
}

export const fetchDetialsApi = async() => {
    try{
        const response = await fetch(`${BASE_URL}/detail/fetch`);
      
        return   response.json();
        


    }
    catch(error){
     //  console.log(error);
       throw error;
    }
};