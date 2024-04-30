import Cookie from "js-cookie"
export const SetJwtToken = (token)=>{
    localStorage.setItem("token",token)
}


export const isAuthoticated = ()=>{
    return !!localStorage.getItem("token")
}

export const isAdmin = () =>{
    return localStorage.getItem("admin_token") == "ADMIN"
}