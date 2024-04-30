import { createSlice } from "@reduxjs/toolkit";

const PosterSlice = createSlice({
    name:"posters",
    initialState:{
        posters:[]
    },
    reducers:{
        getPosters:(state,action)=>{
            state.posters = action.payload
            // console.log(state,action)
        }
    }
})

export default PosterSlice.reducer
export const {getPosters} = PosterSlice.actions