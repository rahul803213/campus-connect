import { BASE_URL } from '@/ClientHelper/config';
export const  fetchPostData = async () => {
    try {
      //  console.log({'env is working':process.env.NEXT_PUBLIC_BACKEND})
      const response = await fetch(`${BASE_URL}/post`);
      const jsonData = await response.json();
     // sessionStorage.setItem('postArray' ,JSON.stringify(jsonData));
    return jsonData;
    } catch (error) {
      return { success: false, message: 'An error occurred while performing the action.' };

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
        const response = await  fetch(url,{
            method:"POST",
            
            body:fd
          });
          const jsonData = await response.json();
          if(response.ok)
          return { success: true, data:jsonData, message: response.message };
        else{
          return { success: false, message: 'An error occurred while performing the action.' };
        }
    }
    catch(error){
      return { success: false, message: 'An error occurred while performing the action.' };
      }
    }