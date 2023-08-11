
export const  fetchPostData = async () => {
    try {
        console.log({'env is working':process.env.NEXT_PUBLIC_BACKEND})
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND}post`);
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };