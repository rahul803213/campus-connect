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
    .then((result) => {
      // Now that the post is saved, let's populate the 'poster' field before sending the response
      return Post.populate(result, { path: 'poster' });
    })
    .then((populatedPost) => {
      res.json(populatedPost);
    })
    .catch((err) => console.log(err));
};

const fetchPost = async (req, res) => {
  const posts = await Post.find().sort({createdAt:-1}).populate("poster", "-password").lean();
  res.json(posts);
};

const likePostInServer = async (req,res) => {
 try{
  const {postId} =req.params;
  const {user_id} =req.body;
  const post = await Post.findById(postId);

    if (post) {
      if (!post.likedBy.includes(user_id)) {
        post.likedBy.push(user_id);
        post.likeCount = post.likedBy.length;
      } else {
        post.likedBy = post.likedBy.filter((id) => id !== user_id);
        post.likeCount = post.likedBy.length;
      }
      post.isLiked = post.likedBy.includes(user_id);

      await post.save();
      res.status(200).json({ message: 'Like status updated successfully' });
    } else {
      res.status(404).json({ error: 'Post not found' });
    }
  }
    catch (error) {
      res.status(500).json({ error: 'Server error' });
    }
}


module.exports = {
  createPost,
  fetchPost,
  likePostInServer
};
