import { BASE_URL } from "@/ClientHelper/config";

export const fetchUniversityApi = async() => {
    try{
              const response = await fetch(`${BASE_URL}/university`);
               const data= await response.json();
               return data;
    }
    catch(error){
        throw error;
    }
}