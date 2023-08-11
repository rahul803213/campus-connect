import { BASE_URL } from '@/ClientHelper/config';
export const  fetchPostData = async () => {
    try {
      //  console.log({'env is working':process.env.NEXT_PUBLIC_BACKEND})
      const response = await fetch(`${BASE_URL}/post`);
      const jsonData = await response.json();
      sessionStorage.setItem('postArray' ,JSON.stringify(jsonData));
      return jsonData;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  export const CreatePost = async (content) => {
    try{
        const url= `${BASE_URL}/post/create`;
        const fd = new FormData();
        //console.log(formData);
        for (const key in content) {
          if (content.hasOwnProperty(key)) {
            fd.append(key, content[key]);
          }
        }
        const data = await  fetch(url,{
            method:"POST",
            
            body:fd
          })
        return await data.json();
    }
    catch(error){
console.log({"error in create post function":error})    }
  }