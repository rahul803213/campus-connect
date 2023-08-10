
export const  fetchPostData = async () => {
    try {
        console.log({'env is working':process.env.render_link})
      const response = await fetch(`${process.env.render_link}}/post`);
      const jsonData = await response.json();
      return jsonData;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };