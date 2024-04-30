import React, { useState } from 'react'
import loginImage from '../../assets/logn.jpeg'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { asyncIsLoggedIn } from '../../Store/Actions/isLoggedInAction'
import { isAuthoticated } from '../../Utils/JwtToken'


const Login = () => {
    document.title = 'Blinkit - Login'
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [loginForm,setLoginForm] = useState({email:'',password:''})
    const loginOnChangeHander = (e) =>{
        const {name,value} = e.target
        setLoginForm({...loginForm,[name]:value})
    }
    const loginFormHander = (e) =>{
        e.preventDefault()
        const {email,password} = loginForm
        if(email && password){ 
            dispatch(asyncIsLoggedIn(loginForm))
            const id = toast.loading("Please Wait...")
            setTimeout(() => {
                toast.done(id)
                navigate('/')
            }, 3000);
        }else{
             toast.warn("Please fill all field required!")
            }
    }
  return (
    !isAuthoticated()?<div className={`w-full h-screen flex items-end bg-white top-0 left-0 bg-[url(${loginImage})] bg-cover bg-center`}>
        <div className='w-full h-2/3 bg-white shadow-[10px_-25px_30px_rgba(255,255,255)] flex items-center flex-col sm:pt-16 pt-5'>
            <img src="https://cdn.grofers.com/layout-engine/2023-11/app_logo.svg" alt="" />
            <h2 className='font-bold sm:text-3xl text-2xl text-zinc-700'>India's last minute app</h2>
            <h3 className='font-semibold sm:text-xl text-lg text-zinc-600'>Log in</h3>
            <form action="" onSubmit={loginFormHander} className='lg:w-2/6 md:w-1/2 sm:w-2/3 w-full sm:px-0 px-5'>
                <div className='flex flex-col'>
                    <label className='font-semibold text-sm'>Email</label>
                    <input type="email" placeholder='Enter Email Address' name='email' onChange={loginOnChangeHander} value={loginForm.email} className='py-3 px-3 font-medium tracking-wider text-xs border rounded' />
                </div>
                <div className='flex flex-col mt-4'>
                    <label className='font-semibold text-sm'>Password</label>
                    <input type="password" placeholder='Enter Password' name='password' onChange={loginOnChangeHander} value={loginForm.password} className='py-3 px-3 font-medium tracking-wider text-xs border rounded' />
                </div>
                
                <button className='w-full mt-4 rounded uppercase py-3 px-3 flex items-center justify-center bg-green-600 text-white font-semibold'>Login</button>
                <h1 className='font-medium text-zinc-700 mt-4 text-center'>Don't have an account? <Link to={'/register'} className='underline text-black'>Register Now</Link></h1>  
            </form>
            <ToastContainer/>
            <h1 className='font-medium text-xs text-zinc-500 mt-4'>By continuing, you agree to our <Link className='underline text-black'>Terms of service</Link> & <Link className='underline text-black'>Privacy policy</Link></h1>
        </div>
    </div> : navigate("/")
  )
}

export default Login
