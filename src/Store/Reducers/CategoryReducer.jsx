import { createSlice } from "@reduxjs/toolkit";


const CategorySclice = createSlice({
    name:"category",
    initialState:{
        category:[],
    },
    reducers:{
        getCategory:(state,action)=>{
            // console.log(state,action)
            state.category = action.payload
        },
        
    }
})

export default CategorySclice.reducer
export const {getCategory} = CategorySclice.actions