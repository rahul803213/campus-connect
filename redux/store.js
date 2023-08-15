import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice"
import postReducer from "./post/postSlice"
import commentReducer from "./comment/commentSlice"
import logger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'; // Import Redux Thunk middleware


import { setupListeners } from "@reduxjs/toolkit/dist/query";



export const store = configureStore({
    reducer:{
      userReducer,
      postReducer,
      commentReducer
    },
    middleware:[logger,thunkMiddleware]
});
setupListeners(store.dispatch);
