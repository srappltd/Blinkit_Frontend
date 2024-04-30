import React from 'react'
import { Link } from 'react-router-dom'

const ThirdBox = () => {
    return (
        <div className='w-full border rounded-md px-3 pb-3'>
            <div className='flex justify-between items-center py-3 border-b'>
                <h1 className='font-semibold text-sm'>Top Selling Products</h1>
                <Link className='font-semibold text-blue-400 text-sm'>View All</Link>
            </div>
            <div className='w-full flex items-center justify-between p-3 bg-[#F8F9FB] rounded mt-2'>
                <div className='flex items-center gap-3'>
                    <img src="https://efood-admin.6amtech.com/storage/app/public/product/2021-02-01-60171610bf3c0.png" className='w-12 h-12 border rounded' alt="" />
                    <h1 className='font-semibold'>Ice Cream</h1>
                </div>
                <h1 className='py-1 px-3 rounded bg-[#FFF0F0] font-semibold text-red-500 text-xs'>Sold: 20 </h1>
            </div>
            <div className='w-full flex items-center justify-between p-3 bg-[#F8F9FB] rounded mt-2'>
                <div className='flex items-center gap-3'>
                    <img src="https://efood-admin.6amtech.com/storage/app/public/product/2021-02-01-60171610bf3c0.png" className='w-12 h-12 border rounded' alt="" />
                    <h1 className='font-semibold'>Ice Cream</h1>
                </div>
                <h1 className='py-1 px-3 rounded bg-[#FFF0F0] font-semibold text-red-500 text-xs'>Sold: 20 </h1>
            </div>
            <div className='w-full flex items-center justify-between p-3 bg-[#F8F9FB] rounded mt-2'>
                <div className='flex items-center gap-3'>
                    <img src="https://efood-admin.6amtech.com/storage/app/public/product/2021-02-01-60171610bf3c0.png" className='w-12 h-12 border rounded' alt="" />
                    <h1 className='font-semibold'>Ice Cream</h1>
                </div>
                <h1 className='py-1 px-3 rounded bg-[#FFF0F0] font-semibold text-red-500 text-xs'>Sold: 20 </h1>
            </div>
            <div className='w-full flex items-center justify-between p-3 bg-[#F8F9FB] rounded mt-2'>
                <div className='flex items-center gap-3'>
                    <img src="https://efood-admin.6amtech.com/storage/app/public/product/2021-02-01-60171610bf3c0.png" className='w-12 h-12 border rounded' alt="" />
                    <h1 className='font-semibold'>Ice Cream</h1>
                </div>
                <h1 className='py-1 px-3 rounded bg-[#FFF0F0] font-semibold text-red-500 text-xs'>Sold: 20 </h1>
            </div>
            <div className='w-full flex items-center justify-between p-3 bg-[#F8F9FB] rounded mt-2'>
                <div className='flex items-center gap-3'>
                    <img src="https://efood-admin.6amtech.com/storage/app/public/product/2021-02-01-60171610bf3c0.png" className='w-12 h-12 border rounded' alt="" />
                    <h1 className='font-semibold'>Ice Cream</h1>
                </div>
                <h1 className='py-1 px-3 rounded bg-[#FFF0F0] font-semibold text-red-500 text-xs'>Sold: 20 </h1>
            </div>
            
        </div>
    )
}

export default ThirdBox
