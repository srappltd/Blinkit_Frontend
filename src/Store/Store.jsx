import { configureStore } from "@reduxjs/toolkit";
import PosterReducer from './Reducers/PosterReducer'
import CategoryReducer from './Reducers/CategoryReducer'
import IsLoggoedInReducer from './Reducers/isLoggedInReducer'
import AdminReducer from './Reducers/AdminReducer'
export const Store = configureStore({
    reducer:{
        PosterReducer,
        CategoryReducer,
        IsLoggoedInReducer,
        AdminReducer
    }
})

