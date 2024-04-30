import React from 'react'
import { Link } from 'react-router-dom'
import Loader from '../../../Loader/Loader'
import { baseUrl } from '../../../Utils/Axios'

const CategoryDetailCard = ({ products }) => {
    return (
        products.length != 0 ? <div className='w-full grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4 p-3'>
            {products.products.map(product=>(
                <Link key={product._id} to={`/product-details?product=${product._id}`} className='card w-full pb-3 border relative rounded-md overflow-hidden flex-shrink-0'>
                    <div className='h-[150px] w-full flex items-center justify-center overflow-hidden'>
                        <img src={baseUrl+product.pictures[0]} alt="" className='w-[80%]' />
                    </div>
                    <div className='discount absolute top-0 left-5'>
                        <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M28.9499 0C28.3999 0 27.9361 1.44696 27.9361 2.60412V27.9718L24.5708 25.9718L21.2055 27.9718L17.8402 25.9718L14.4749 27.9718L11.1096 25.9718L7.74436 27.9718L4.37907 25.9718L1.01378 27.9718V2.6037C1.01378 1.44655 0.549931 0 0 0H28.9499Z" fill="#538CEE"></path></svg>
                        <div className='w-full pl-1 absolute cursor-pointer top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[10px] font-bold text-white leading-none'>
                            14% OFF
                        </div>
                    </div>
                    <div className='w-full px-3 text-[10px] font-semibold uppercase'>
                        <Link className='py-[2px] px-2 bg-slate-100 rounded-xl'>
                            <i className="ri-time-line"></i> 10 Min
                        </Link>
                    </div>
                    <div className='w-full px-3 py-1'>
                        <h1 className='font-semibold text-base leading-[1.2] line-clamp-1'>{product.title}</h1>
                        <p className='font-medium text-slate-600 mt-2 text-xs'>15 g</p>
                        <div className='w-full flex justify-between items-center mt-3 font-medium text-xs'>
                            <div className='font-bold'>
                                <h1>₹{product.sellingPrice}</h1>
                                <del className='text-slate-500'>₹{product.mainPrice}</del>
                            </div>
                            <button data-id={product._id} className='w-1/2 border-2 py-2 px-3 font-bold uppercase text-green-600 rounded-md border-green-600'>Add</button>
                        </div>
                    </div>
                </Link>
            ))}
        </div> :<Loader/>
    )
}

export default CategoryDetailCard
