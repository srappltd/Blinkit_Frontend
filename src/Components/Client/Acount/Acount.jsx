import React from 'react'
import { Link,Outlet, useNavigate } from 'react-router-dom'
import Navbar from '../ClientComponent/Navbar'
import Footer from '../ClientComponent/Footer'
import { useSelector } from 'react-redux'
import { isAuthoticated } from '../../../Utils/JwtToken'
import { Axios, baseUrl } from '../../../Utils/Axios'

const Acount = () => {
    const navigate = useNavigate()
    const {isCheckClient} = useSelector(state=>state.IsLoggoedInReducer)
    const logoutHandler = async () =>{
        const {data} = await Axios.get('/api/client/logout')
        if(data.success){
            console.log(data)
            localStorage.removeItem("token")
            navigate("/login")

        }

    }
  return (
    isAuthoticated() ? <>
    <Navbar/>
    <div className='w-full md:h-screen md:px-64 px-5 py-5 mt-16'>
        <div className="box w-full md:h-[70vh] h-full md:flex md:shadow-[0_0_10px_rgba(210,210,210,.5)] md:border rounded">
            <div className='md:w-[25%] w-full md:border-r md:h-full'>
                <div className='w-full p-3 flex items-center justify-center flex-col border-b pb-5'>
                    <div className='w-20 h-20 relative'>
                        <img src={isCheckClient && baseUrl+isCheckClient.client.picture} className='w-20 h-20 border bg-white rounded-full' alt="" />
                        <span className='w-6 h-6 border absolute cursor-pointer bottom-0 right-0 rounded-full flex items-center justify-center bg-white shadow-[2px_2px_5px_rgba(190,190,190,.5)]'>
                        <i className="ri-exchange-2-fill"></i>
                        </span>
                    </div>
                    <h1 className='font-bold text-slate-700 uppercase mt-2'>Abhay Gautam</h1>
                    <Link to={''} className='font-semibold text-xs text-slate-600'>+91 6260396658</Link>
                </div>
                <div className='w-full flex flex-col'>
                    <Link to={'/account/profile'} className='py-3 px-4 md:border-b md:w-full text-base w-full flex items-center gap-3 font-medium capitalize text-slate-700'>
                    <i className="ri-user-location-line font-medium text-lg"></i> My Profile
                    </Link>
                    <Link to={'/account/my-address'} className='py-3 px-4 md:border-b md:w-full text-base w-full flex items-center gap-3 font-medium capitalize text-slate-700'>
                    <i className="ri-user-location-line font-medium text-lg"></i> My Address
                    </Link>
                    <Link to={'/account/my-orders'} className='py-3 px-4 md:border-b md:w-full text-base w-full flex items-center gap-3 font-medium capitalize text-slate-700'>
                    <i className="ri-file-list-3-line font-medium text-lg"></i> My Orders
                    </Link>
                    <Link to={'/account/my-wallet'} className='py-3 px-4 md:border-b md:w-full text-base w-full flex items-center gap-3 font-medium capitalize text-slate-700'>
                    <i className="ri-wallet-line font-medium text-lg"></i> My Wallet
                    </Link>
                    <div onClick={logoutHandler} className='py-3 px-4 cursor-pointer md:border-b md:w-full text-base  w-full flex items-center gap-3 font-medium capitalize text-slate-700'>
                    <i className="ri-logout-box-r-line font-medium text-lg"></i> Logout
                    </div>
                </div>
            </div>
            <div className='md:w-[75%] w-full md:h-full h-[70vh]'>
                <Outlet/>
            </div>
        </div>
    </div>
    <Footer/>
    </> : navigate("/login")
  )
}

export default Acount
