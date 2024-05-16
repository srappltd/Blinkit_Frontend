import axios from "axios";

export const baseUrl = 'https://blinkit-backend-lsqu.onrender.com/'
// export const baseUrl = 'http://localhost:3000'
export const Axios = axios.create({
    baseURL:baseUrl,
    withCredentials: true,
})




// const expiryTime = new Date();
            // expiryTime.setTime(expiryTime.getTime() + (1 * 60 * 60 * 1000)); // 1 hour in milliseconds
    
            // // Convert the expiry time to a string format that can be used in the cookie
            // const expiryDate = expiryTime.toUTCString();
            // document.cookie = `admin_token=${data.token}; expires=${expiryDate}; path=/;`;