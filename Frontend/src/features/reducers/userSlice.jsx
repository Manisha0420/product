import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "users",
    initialState: {
        user: null,
    },

    reducers:{
        loginuser: ( state, action) =>{
            state.user = action.payload
        },
        logoutuser : (state )=>{
            state.user = null
        }
    }
})

export default userSlice.reducer
export const { loginuser ,logoutuser} = userSlice.actions;
