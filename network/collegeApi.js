import { BASE_URL } from "@/ClientHelper/config";

export const collegeCreateApi = async(formData ) => {
    try{
            const response = await fetch(`${BASE_URL}/college/create`,{
                method:'POST',
                headers:{

                'Content-Type':'application/json'
                },
                body: JSON.stringify(formData)
            })
            const data = await response.json();
            if(response.ok) {
                return { success:true, data:data,message:"college Created Succesfully."}
            }
            else{
                return { success:false,message:data}
            }
    }
    catch(error){
        throw error
    }
}

export const fetchCollegesApi = async() =>{
    const response = await fetch(`${BASE_URL}/college`);
    return await response.json();
}