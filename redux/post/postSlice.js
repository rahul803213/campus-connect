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
            state.posts.push(action.payload)
        }
    }
})
export const {setPosts,addPost} = post.actions;
export default post.reducer;