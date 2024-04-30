import { createSlice } from "@reduxjs/toolkit";

const isLoggedInSlice = createSlice({
    name:"auth",
    initialState:{
        isLoggedin:{},
        isCheckClient:{},
    },
    reducers:{
        getLoggedIn:(state,action)=>{
            // console.log(state,action)
            state.isLoggedin = action.payload
        },
        getIsCheckClient:(state,action)=>{
            // console.log(state,action)
            state.isCheckClient = action.payload
        },
        
    }
})

export default isLoggedInSlice.reducer
export const {getLoggedIn,getIsCheckClient} = isLoggedInSlice.actions