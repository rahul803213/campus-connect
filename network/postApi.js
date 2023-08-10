
export const  fetchPostData = async () => {
    try {
      const response = await fetch("http://localhost:4000/post");
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };