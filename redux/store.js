import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice"
import postReducer from "./post/postSlice"
import logger from 'redux-logger'

import { setupListeners } from "@reduxjs/toolkit/dist/query";



export const store = configureStore({
    reducer:{
      userReducer,
      postReducer
    },
    middleware:[logger]
});
setupListeners(store.dispatch);
