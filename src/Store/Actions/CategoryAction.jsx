import { Axios } from "../../Utils/Axios";
import { getCategory } from "../Reducers/CategoryReducer";

export const asyncCategory = () =>async (dispatch,getState)=>{
    try {
        const {data} = await Axios.post("/api/categories")
        dispatch(getCategory(data))
    } catch (error) {
        console.log(error)
    }
}
