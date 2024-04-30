import axios from "axios";

export const baseUrl = 'https://blinkit-backend-cilt.onrender.com/'
export const Axios = axios.create({
    baseURL:baseUrl,
    withCredentials: true,
})