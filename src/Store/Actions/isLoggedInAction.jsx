import Cookies from 'js-cookie'
import { Axios } from "../../Utils/Axios";
import { getLoggedIn,getIsCheckClient } from "../Reducers/isLoggedInReducer";

export const asyncIsLoggedIn = (loginFormData) => async (dispatch,state)=>{
    try {
        const {data} = await Axios.post('/api/client/signin',loginFormData)
        localStorage.setItem("token",data.token)
        dispatch(getLoggedIn(data))
        
    } catch (error) {
        console.log(error)
    }
}

export const asyncIsRegister = (registerFormData) => async (dispatch,state)=>{
    try {
        const {data} = await Axios.post('/api/client/signup',registerFormData)
        localStorage.setItem("token",data.token)
        dispatch(getLoggedIn(data))
        
    } catch (error) {
        console.log(error)
    }
} 

export const asyncCheckClient = () =>async (dispatch)=>{
    try {
        const {data} = await Axios.post(`/api/client/token-verify`)
        dispatch(getIsCheckClient(data))
        
    } catch (error) {
        console.log(error)
    }
}