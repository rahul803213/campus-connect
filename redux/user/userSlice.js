import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:''
}

export const user = createSlice({
    name:"user",
    initialState,
    reducers:{
        setCurrentUser : (state,action) =>{
            state.user=action.payload
        }
    }
});

export const {setCurrentUser} = user.actions;
export default user.reducer;