import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncAdminUser } from '../../Store/Actions/AdminAction'
import { Axios } from '../../Utils/Axios'
import { useNavigate } from 'react-router-dom'
import { isAdmin } from '../../Utils/JwtToken'
import { toast } from 'react-toastify'

const Login = () => {
    const [adminForm,setAdminForm] = useState({email:"",password:""})
    const dipatch = useDispatch()
    const navigate = useNavigate()
    const {admin} = useSelector(state=>state.AdminReducer)
    const adminFormOnChangeHandler = (e)=>{
        const {name,value} = e.target
        setAdminForm({...adminForm,[name]:value})
    }
    const adminSubmitFormHandler =async (e)=>{
        e.preventDefault()
        const {email,password} = adminForm
        if(email && password){
            dipatch(asyncAdminUser(adminForm,navigate))
            
            setTimeout(()=>{
                if(isAdmin()){
                    
                }
            },2000)
        }
    }
  return (
    !isAdmin() ? <div className='w-full flex'>
        <div className="w-1/2 hidden lg:block h-screen border-r relative bg-[url('https://efood-admin.6amtech.com/public/assets/admin/svg/components/login-bg.png')] bg-cover bg-center bg-no-repeat">
            <div className='absolute left-1/2 top-1/2 -translate-x-[10%] -translate-y-1/2'>
                <img src="https://efood-admin.6amtech.com/storage/app/public/restaurant/2023-01-05-63b65bf675169.png" className='h-14' alt="" />
                <h1 className='text-5xl mt-3'>Your</h1>
                <h1 className='text-5xl mt-2'>All Fresh Food</h1>
                <h1 className='text-5xl font-semibold text-red-500 mt-3'>In One Place....</h1>
            </div>
        </div>
        <div className="lg:w-1/2 w-full h-screen border-l lg:px-36 md:px-20 sm:px-10 px-5 py-32 sm:py-20">
            <div>
                <h1 className='font-bold sm:text-3xl text-xl'>Sign In</h1>
                <p className='font-medium text-zinc-400 mt-2 sm:text-lg text-sm'>Welcome Back</p>
                <p className='py-1 px-3 w-fit text-xs font-medium mt-3 text-red-600 rounded-full bg-red-100'>( Admin or employee sign in )</p>
                <form onSubmit={adminSubmitFormHandler} className='w-full mt-10'>
                    <div className='flex flex-col text-sm font-medium'>
                        <label htmlFor="">Your Email</label>
                        <input name='email' onChange={adminFormOnChangeHandler} value={adminForm.email} type="text" placeholder='Email@gmail.com' className='py-3 font-normal px-5 border rounded text-sm mt-1' />
                    </div>
                    <div className='flex flex-col text-sm font-medium mt-5'>
                        <label htmlFor="">Password</label>
                        <input name='password' onChange={adminFormOnChangeHandler} value={adminForm.password} type="password" placeholder='8+ characters required' className='py-3 font-normal px-5 border rounded text-sm mt-1' />
                    </div>
                    <div className='flex items-center gap-3 text-zinc-400 mt-5'>
                        <input type="checkbox"/> Remember Me
                    </div>
                    <button className='w-full py-3 text-sm mt-5 bg-red-500 text-white rounded font-medium'>Sign in</button>
                    
                </form>
            </div>
        </div>
    </div> : navigate('/admin/deshboard')
  )
}

export default Login
