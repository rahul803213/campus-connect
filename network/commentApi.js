import { BASE_URL } from "@/ClientHelper/config";


export const fetchCommentsApi = async (postId) => {
    const result = await fetch(`${BASE_URL}/comment/${postId}`);
    const data = await result.json();
    console.log({"comments fetched":data.comments});
    return data.comments;
   
}







