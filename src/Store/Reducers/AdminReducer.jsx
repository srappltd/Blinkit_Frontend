import { createSlice } from "@reduxjs/toolkit";


const AdminSlice = createSlice({
    name: "admin",
    initialState: {
        admin: null,
        isAdmin: false,
        orders: {},
        clients: {},
        products: {},
        posters: {},
        transactions: {},
        coupons: {},
        categories: {},
        banners: {},
        brands: {},
    },
    reducers: {
        getAdmin: (state, action) => {
            state.admin = action.payload
            state.isAdmin = true
        },
        getAdminLogout: (state, action) => {
            // console.log(state,action)
        },
        getOrders: (state, action) => {
            state.orders = action.payload
        },
        getClients: (state, action) => {
            state.clients = action.payload
        },
        getProducts: (state, action) => {
            state.products = action.payload
        },
        getPosters: (state, action) => {
            state.posters = action.payload
        },
        getTransactions: (state, action) => {
            state.transactions = action.payload
        },
        getCoupons: (state, action) => {
            state.coupons = action.payload
        },
        getCategories: (state, action) => {
            state.categories = action.payload
        },
        getBanners: (state, action) => {
            state.banners = action.payload
        },
        getBrands: (state, action) => {
            state.brands = action.payload
        },
        
    }
})

export default AdminSlice.reducer
export const { getAdmin, getAdminLogout, getOrders, getClients, getBanners, getCategories, getCoupons, getPosters, getProducts, getTransactions, getBrands } = AdminSlice.actions