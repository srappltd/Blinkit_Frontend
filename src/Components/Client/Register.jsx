import React, { useState } from 'react'
import loginImage from '../../assets/logn.jpeg'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import { useDispatch, useSelector } from 'react-redux'
import { asyncIsRegister } from '../../Store/Actions/isLoggedInAction'
import { getLoggedIn } from '../../Store/Reducers/isLoggedInReducer'

const Register = () => {
    document.title = 'Blinkit - Register'
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {isLoggedin,isCheckClient} = useSelector(state=>state.IsLoggoedInReducer)
    const [formData,setFormData] = useState({username:"",email:"",mobile:"",password:""})
    const registerOnChangeHandler = (e)=>{
        const {name,value} = e.target
        setFormData({...formData,[name]:value})
    }
    console.log(isLoggedin)
    const registerFormSubmitHandler = (e)=>{
        e.preventDefault()
        const {username,email,mobile,password} = formData
        if(username && email && mobile && password){
            dispatch(asyncIsRegister(formData))
            navigate('/')
        }else{
            toast.info("Please fill the all fields required!")
        }
    }
  return (
    <div className={`w-full h-screen flex items-end bg-white top-0 left-0 bg-[url(${loginImage})] bg-cover bg-center`}>
        <div className='w-full sm:h-[85%] bg-white shadow-[10px_-25px_30px_rgba(255,255,255)] flex items-center flex-col sm:pt-10 pt-5'>
            <img src="https://cdn.grofers.com/layout-engine/2023-11/app_logo.svg" alt="" />
            <h2 className='font-bold sm:text-3xl text-2xl text-zinc-700'>India's last minute app</h2>
            <h3 className='font-semibold sm:text-xl text-lg text-zinc-600'>Log in</h3>
            <form onSubmit={registerFormSubmitHandler} className='lg:w-2/6 md:w-1/2 sm:w-2/3 w-full sm:px-0 px-5'>
            <div className='flex flex-col'>
                    <label className='font-semibold text-sm'>Username</label>
                    <input type="text" name='username' onChange={registerOnChangeHandler} placeholder='Enter Username' className='py-3 px-3 font-medium tracking-wider text-xs border rounded' />
                </div>
                <div className='flex flex-col mt-2'>
                    <label className='font-semibold text-sm'>Email</label>
                    <input type="email" name='email' onChange={registerOnChangeHandler} placeholder='Enter Email Address' className='py-3 px-3 font-medium tracking-wider text-xs border rounded' />
                </div>
                <div className='flex flex-col mt-2'>
                    <label className='font-semibold text-sm'>Mobile</label>
                    <input type="tel" name='mobile' onChange={registerOnChangeHandler} placeholder='Enter Mobile number' className='py-3 px-3 font-medium tracking-wider text-xs border rounded' />
                </div>
                <div className='flex flex-col mt-2'>
                    <label className='font-semibold text-sm'>Password</label>
                    <input type="password" name='password' onChange={registerOnChangeHandler} placeholder='Enter Password' className='py-3 px-3 font-medium tracking-wider text-xs border rounded' />
                </div>
                <button className='w-full mt-4 rounded uppercase py-3 px-3 flex items-center justify-center bg-green-600 text-white font-semibold'>Register</button>
                <h1 className='font-medium text-zinc-700 mt-4 text-center'>Allready registered? <Link to={'/login'} className='underline text-black'>Login</Link></h1>
                <ToastContainer/>
            </form>
            <h1 className='font-medium text-xs text-zinc-500 mt-4 mb-4'>By continuing, you agree to our <Link className='underline text-black'>Terms of service</Link> & <Link className='underline text-black'>Privacy policy</Link></h1>
        </div>
    </div>
  )
}

export default Register
