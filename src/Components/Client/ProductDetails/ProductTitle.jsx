import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Axios } from '../../../Utils/Axios'
import {ToastContainer,Icons,toast} from 'react-toastify'


const ProductTitle = ({product,setId}) => {
  
  const addToCartHander = async (id) =>{
    const {data} = await Axios.post(`/api/client/cart/add/${id}`)
    setId(id)
    if(data.success) return toast.success(data.message)
    else return toast.warn(data.message);
  }
  return (
    <>
    <div className='w-full border-b pt-2'>
          {/* <h2 className='font-medium text-xs cursor-pointer text-slate-600'><span className='hover:text-green-500'>Home</span> / <span className='hover:text-green-500'>Biscuit Gift Pack</span> / <span className='hover:text-green-500'>Parle Center Filled Biscuits (Choco, Milano Collection)</span></h2> */}
          <h1 className='font-bold md:text-2xl text-lg mt-1 mb-1'>Parle Center Filled Biscuits (Choco, Milano Collection)</h1>
          <span className='font-semibold py-1 px-2 bg-slate-100 rounded-full text-xs'><i className="ri-time-line"></i> 13 MINS </span>
          <Link className='py-3 flex items-center gap-1 font-semibold md:text-lg text-base text-green-600'>View all by Parle <i className="ri-arrow-right-s-fill"></i></Link>
        </div>
        <div className='w-full py-4'>
          <h3 className='font-semibold text-slate-600 text-xs'>Select Unit</h3>
          <div className='flex gap-4 mt-5'>
            <button className='py-5 px-5 rounded-lg border flex flex-col items-center justify-center relative'>
              <span className='font-semibold text-xs'>1 x {product.productDetails.unit}</span>
              <h2 className='font-bold'>₹{product.sellingPrice} <span className='text-xs text-zinc-400 font-semibold'>MRP <del>₹{product.mainPrice}</del></span></h2>
              <div  className='absolute -top-1 left-1/2 -translate-x-1/2'>
                <svg width="56" height="17" viewBox="0 0 56 17" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#clip0_2_44)"><path d="M4.5 0.5H51.5V12.5C51.5 14.7091 49.7091 16.5 47.5 16.5H8.5C6.29086 16.5 4.5 14.7091 4.5 12.5V0.5Z" fill="url(#paint0_linear_2_44)"></path></g><path d="M0 4.5L4.5 0.5V4.5H0Z" fill="#336CCE"></path><path d="M56 4.5L51.5 0.5V4.5H56Z" fill="#336CCE"></path><defs><linearGradient id="paint0_linear_2_44" x1="24.7149" y1="0.483896" x2="24.7149" y2="15.07" gradientUnits="userSpaceOnUse"><stop stopColor="#4F86E4"></stop><stop offset="0.182292" stopColor="#90B6F9"></stop><stop offset="0.295972" stopColor="#548DEF"></stop><stop offset="1" stopColor="#538CEE"></stop></linearGradient><clipPath id="clip0_2_44"><rect width="47" height="16" fill="white" transform="translate(4.5 0.5)"></rect></clipPath></defs></svg>
                <h1 className='w-full pl-1 absolute cursor-pointer top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[9px] font-bold text-white leading-none'>{product.discount}% OFF</h1>
              </div>
            </button>
            
            
          </div>
          <h2 className='font-semibold text-xs text-zinc-600 mt-2'>(Inclusive of all taxes)</h2>
          <button onClick={()=>addToCartHander(product._id)} className='font-semibold border rounded active:bg-green-600 active:text-white transition-all duration-150 text-green-600 py-1 px-5 mt-3 border-green-600'>Add</button>
          <ToastContainer/>

          <div className='w-full'>
            <h2 className='md:font-semibold font-bold md:text-sm text-base text-zinc-700 mt-3'>Why shop from blinkit?</h2>
            <div className='flex w-full gap-2 items-center mt-4'>
              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/10_minute_delivery.png" className='w-12 h-12 rounded-full object-cover' alt="" />
              <div>
                <h2 className='md:font-medium font-bold text-zinc-800 md:text-xs text-sm'>Superfast Delivery</h2>
                <h3 className='font-medium text-zinc-600 mt-1 text-xs'>Get your order delivered to your doorstep at the earliest from dark stores near you.</h3>
              </div>
            </div>
            <div className='flex w-full gap-2 items-center mt-4'>
              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/Best_Prices_Offers.png" className='w-12 h-12 rounded-full object-cover' alt="" />
              <div>
                <h2 className='md:font-medium font-bold text-zinc-800 md:text-xs text-sm'>Best Prices & Offers</h2>
                <h3 className='font-medium text-zinc-600 mt-1 text-xs'>Best price destination with offers directly from the manufacturers.</h3>
              </div>
            </div>
            <div className='flex w-full gap-2 items-center mt-4'>
              <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/Wide_Assortment.png" className='w-12 h-12 rounded-full object-cover' alt="" />
              <div>
                <h2 className='md:font-medium font-bold text-zinc-800 md:text-xs text-sm'>Wide Assortment</h2>
                <h3 className='font-medium text-zinc-600 mt-1 text-xs'>Choose from 5000+ products across food, personal care, household & other categories.</h3>
              </div>
            </div>
            
          </div>
        </div>
    </>
  )
}

export default ProductTitle
