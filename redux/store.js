import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/userSlice"

import { setupListeners } from "@reduxjs/toolkit/dist/query";



export const store = configureStore({
    reducer:{
      userReducer
    }
});
setupListeners(store.dispatch);
