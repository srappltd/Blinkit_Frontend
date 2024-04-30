import { Axios } from "../../Utils/Axios";
import { getPosters } from "../Reducers/PosterReducer";

export const asyncPosters = ()=>async (dispatch,getState)=>{
    try {
        const {data} = await Axios.post("/api/posters")
        
        dispatch(getPosters(data))
        // console.log(data)
    } catch (error) {
        console.log(error)
    }
}