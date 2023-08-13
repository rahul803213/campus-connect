const Post = require("../models/Post");
const User = require("../models/User");
const getDataUri = require('../utilities/dataUri');
const cloudinary = require('cloudinary').v2;
const createPost = async (req, res) => {
  const { poster_id, content } = req.body;
    const file = req.file;
    var profile_uri="";
    if(file){
      const data_uri = getDataUri(file);

      try {
        const uploadResult = await cloudinary.uploader.upload(data_uri.content);
        console.log("Upload result:", uploadResult);
        // return uploadResult;
        profile_uri = uploadResult.url;
      } catch (error) {
        console.error("Error uploading to Cloudinary:", error);
        // throw error; // Rethrow the error to propagate it to the calling code
      }
    }
   
    //console.log(data_uri)
   
   
  const post = new Post({
    poster: poster_id,
    content: content,
     image:profile_uri
  });
  post
    .save()
    .then((result) => res.json(result))
    .catch((err) => console.log(err));
};

const fetchPost = async (req, res) => {
  const posts = await Post.find().sort({createdAt:-1}).populate("poster", "-password").lean();
  res.json(posts);
};

module.exports = {
  createPost,
  fetchPost,
};
