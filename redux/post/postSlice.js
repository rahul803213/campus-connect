import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts:[]
}

export const post = createSlice({
    name:"post",
    initialState,
    reducers:{
        setPosts : (state,action) => {
            state.posts= action.payload
        },
        addPost : (state,action) => {
            state.posts.unshift(action.payload)
        },
        likePost: (state,action) => {
             const {postId,userId} = action.payload;
             const post = state.posts.find(p => p._id===postId);
             if(post) {
                if (!post.likedBy.includes(userId)) {
                    post.likedBy.push(userId);
                    post.likeCount = post.likedBy.length;
                  } else {
                    post.likedBy = post.likedBy.filter((id) => id !== userId);
                    post.likeCount = post.likedBy.length;
                  }
                  post.isLiked = post.likedBy.includes(userId);
             }
        }
    }
})
export const {setPosts,addPost,likePost} = post.actions;
export default post.reducer;