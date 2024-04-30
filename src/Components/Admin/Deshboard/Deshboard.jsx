import React from 'react'
import FirstBox from './FirstBox'
import SecondBox from './SecondBox'
import ThirdBox from './ThirdBox'
import ForthBox from './ForthBox'
import { isAdmin } from '../../../Utils/JwtToken'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Deshboard = () => {
    const {admin} = useSelector(state=>state.AdminReducer)
  return (
    <div className='w-full'>
        <div className=''>
            <h1 className='font-semibold text-xl text-red-500'>Welcome, Admin.</h1>
            <p className='font-semibold text-sm'>Monitor your business analytics and statistics</p>
        </div>
        <div className='w-full p-5 border  rounded-md flex flex-col gap-3 mt-5'>
            <div className='w-full flex items-center justify-between mb-3 mt-3'>
                <div className='flex items-center gap-3'>
                    <img src="https://efood-admin.6amtech.com/public/assets/admin/img/icons/business_analytics.png" className='w-5' alt="" />
                    <h1 className='text-sm font-semibold'>Business Analytics</h1>
                </div>
                <select name="" id="" className=' w-52 p-2 text-sm outline-none border rounded'>
                    <option value="">Overall Statistics</option>
                    <option value="">Today Statistics</option>
                    <option value="">This Month's Statistics</option>
                </select>
            </div>
            <FirstBox />
            <SecondBox/>
        </div>
        <div className='grid xl:grid-cols-3 grid-cols-1 gap-5 mt-5'>
            <ThirdBox/>
            <ForthBox/>
            <ThirdBox/>
        </div>
    </div>
  )
}

export default Deshboard
