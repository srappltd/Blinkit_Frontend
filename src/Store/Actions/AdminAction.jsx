import { toast } from "react-toastify"
import { Axios } from "../../Utils/Axios"
import { getAdmin, getBanners, getBrands, getCategories, getClients, getCoupons, getOrders, getPosters, getProducts, getTransactions } from "../Reducers/AdminReducer"


export const asyncAdminUser = (adminForm,navigate) => async (dispatch,state)=>{
    try {
        const id = toast.loading("Please Wait...",{position:"top-center"})
        const {data} = await Axios.post("/api/admin/signin",adminForm)
        if(data.success){
            dispatch(getAdmin(data))
            toast.done(id)
            localStorage.setItem("admin_token",data.admin.isAdmin)
            navigate("/admin/deshboard")
            toast.success(data.message)
        }
    } catch (error) {
        toast.error(error)
    }
}

export const asyncAdminLogout = (navigate) => async (dispatch,state)=>{
    const {data} = await Axios.get("/api/admin/logout")
    console.log(data)
    if(data.success){
        localStorage.removeItem("admin_token")
        toast.success("Successfully logout!")
        navigate("/admin/login")
    }
}

export const asyncAdminUserData = () => async (dispatch,state) => {
    try {
        const {data} = await Axios.post("/api/admin/deshboard/current")
        dispatch(getAdmin(data))
    } catch (error) {
        
    }
}


// order ---------
export const asyncOrdersList = () => async (dispatch,state) => {
    try {
        const {data} = await Axios.post("/api/orders")
        dispatch(getOrders(data))
    } catch (error) {
        
    }
}

//client -------------
export const asyncClientsList = () => async (dispatch,state) => {
    try {
        const {data} = await Axios.post("/api/clients")
        dispatch(getClients(data))
    } catch (error) {
        
    }
}

// poster ------------
export const asyncPostersList = () => async (dispatch,state) => {
    try {
        const {data} = await Axios.post("/api/posters")
        dispatch(getPosters(data))
    } catch (error) {
        
    }
}
export const asyncPosterAdd = (posterFormData) => async (dispatch,state) => {
    try {
        const id = toast.loading("Please Wait...",{position:'top-center'})
        const {data} = await Axios.post(`/api/admin/poster/add`,posterFormData)
        setTimeout(async()=>{
            data.success && toast.success(data.message)
            data.success && toast.done(id)
            data.success && location.reload()
        },3000)
    } catch (error) {
        
    }
}
export const asyncPosterRemove = (posterid) => async (dispatch,state) => {
    try {
        const id = toast.loading("Please Wait...",{position:'top-center'})
        const {data} = await Axios.post(`/api/admin/poster/delete/${posterid}`)
        setTimeout(async()=>{
            data.success && toast.success(data.message)
            data.success && toast.done(id)
            data.success && location.reload()
        },3000)
    } catch (error) {
        
    }
}

// banner ------------------
export const asyncBannersList = () => async (dispatch,state) => {
    try {
        const {data} = await Axios.post("/api/banners")
        dispatch(getBanners(data))
    } catch (error) {
        
    }
}
export const asyncBannerAdd = (bannerFormData) => async (dispatch,state) => {
    try {
        const id = toast.loading("Please Wait...",{position:'top-center'})
        const {data} = await Axios.post(`/api/admin/banner/add`,bannerFormData)
        setTimeout(async()=>{
            data.success && toast.success(data.message)
            data.success && toast.done(id)
            data.success && location.reload()
        },3000)
    } catch (error) {
        
    }
}
export const asyncBannerRemove = (bannerid) => async (dispatch,state) => {
    try {
        const id = toast.loading("Please Wait...",{position:'top-center'})
        const {data} = await Axios.post(`/api/admin/banner/delete/${bannerid}`)
        setTimeout(async()=>{
            data.success && toast.success(data.message)
            data.success && toast.done(id)
            data.success && location.reload()
        },3000)
    } catch (error) {
        console.log(error)
    }
}

// transaction -------------
export const asyncTransactionsList = () => async (dispatch,state) => {
    try {
        const {data} = await Axios.post("/api/transactions")
        dispatch(getTransactions(data))
    } catch (error) {
        
    }
}

// coupons -----------------
export const asyncCouponsList = () => async (dispatch,state) => {
    try {
        const {data} = await Axios.post("/api/coupons")
        dispatch(getCoupons(data))
    } catch (error) {
        
    }
}
export const asyncCouponAdd = (couponFormData) => async (dispatch,state) => {
    try {
        const id = toast.loading("Please Wait...",{position:'top-center'})
        const {data} = await Axios.post(`/api/admin/coupon/add`,couponFormData)
        setTimeout(async ()=>{
            data.success && toast.success(data.message)
            data.success && toast.done(id)
            data.success && location.reload()
        },3000)
    } catch (error) {
        console.log(error)
    }
}
export const asyncCouponRemove = (couponid) => async (dispatch,state) => {
    try {
        const id = toast.loading("Please Wait...",{position:'top-center'})
        const {data} = await Axios.post(`/api/admin/coupon/delete/${couponid}`)
        setTimeout(()=>{
            data.success && toast.success(data.message)
            data.success && toast.done(id)
            data.success && location.reload()
        },3000)
    } catch (error) {
        console.log(error)
    }
}

// category ----------
export const asyncCategoriesList = () => async (dispatch,state) => {
    try {
        const {data} = await Axios.post("/api/categories")
        dispatch(getCategories(data))
    } catch (error) {
        
    }
}
export const asyncCategoryAdd = (categoryFormData) => async (dispatch,state) => {
    try {
        const id = toast.loading("Please Wait...",{position:'top-center'})
        const {data} = await Axios.post(`/api/admin/category/add`,categoryFormData)
        setTimeout(async()=>{
            data.success && toast.success(data.message)
            data.success && toast.done(id)
            data.success && location.reload()
        },3000)
    } catch (error) {
    }
}
export const asyncCategoryRemove = (categoryid) => async (dispatch,state) => {
    try {
        const id = toast.loading("Please Wait...",{position:'top-center'})
        const {data} = await Axios.post(`/api/admin/category/delete/${categoryid}`)
        setTimeout(async()=>{
            data.success && toast.success(data.message)
            data.success && toast.done(id)
            data.success && location.reload()
        },3000)
    } catch (error) {
        
    }
}


// products -----------
export const asyncProductsList = () => async (dispatch,state) => {
    try {
        const {data} = await Axios.post("/api/products")
        dispatch(getProducts(data))
    } catch (error) {
        
    }
}
export const asyncProductAdd = (productFormData) => async (dispatch,state) =>{
    try {
        const id = toast.loading("Please Wait...",{position:'top-center'})
        const {data} = await Axios.post("/api/admin/product/add",productFormData)
        setTimeout(async()=>{
            data.success && toast.done(id)
            data.success && toast.success(data.message)
            data.success && location.reload()
        },3000)
    } catch (error) {
        
    }
}
export const asyncProductRemove = (productid) => async (dispatch,state) =>{
    try {
        const id = toast.loading("Please Wait...",{position:'top-center'})
        const {data} = await Axios.post(`/api/admin/product/delete/${productid}`)
        setTimeout(async()=>{
            data.success && toast.success(data.message)
            data.success && toast.done(id)
            data.success && location.reload()
        },3000)
    } catch (error) {
        
    }
}


// brands ----------
export const asyncBrandsList = () => async (dispatch,state) => {
    try {
        const {data} = await Axios.post("/api/brands")
        console.log(data)
        dispatch(getBrands(data))
    } catch (error) {
        
    }
}
export const asyncBrandsAdd = (brandFormData) => async (dispatch,state) => {
    try {
        const id = toast.loading("Please Wait...",{position:'top-center'})
        const {data} = await Axios.post("/api/admin/brand/add",brandFormData)
        setTimeout(async()=>{
            data.success && toast.success(data.message)
            data.success && toast.done(id)
            data.success && location.reload()
        },3000)
    } catch (error) {
    }
}
export const asyncBrandsRemove = (brandid) => async (dispatch,state) => {
    try {
        const id = toast.loading("Please Wait...",{position:'top-center'})
        const {data} = await Axios.post(`/api/admin/brand/delete/${brandid}`)
        setTimeout(async()=>{
            data.success && toast.success(data.message)
            data.success && toast.done(id)
            data.success && location.reload()
        },3000)
    } catch (error) {
        
    }
}
