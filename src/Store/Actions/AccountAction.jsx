import { toast } from "react-toastify"
import { Axios } from "../../Utils/Axios"

export const asyncNewAddressForm = (addressForm) => async (dispatch,state)=>{
    try {
        
        const {data} = await Axios.post("/api/client/address/add",addressForm)
        data.success ? toast.success(data.data.message) : toast.info(data.message)
    } catch (error) {
        const ds = error.response.data.message.split(':')
        ds.splice(0,2)
        toast.error(ds.join(' '))
    }
}
export const asyncDeleteAddress = (id,setAddresssMessage) => async (dispatch,state)=>{
    try {
        const {data} = await Axios.post(`/api/client/address/delete/${id}`)
        setAddresssMessage(data.message)
        data.success ? toast.success(data.message) : toast.info(data.message)
    } catch (error) {
        toast.error(error.response.data.message)
    }
}
