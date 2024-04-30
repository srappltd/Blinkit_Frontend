import React from 'react'

const ProductDetailBox = ({items}) => {
    return (
        <div className='items flex flex-col'>
            <h1 className='md:font-medium font-bold text-sm'>{items.title}</h1>
            <h3 className='text-slate-500 font-normal text-sm line-clamp-2 w-full'>{items.des}</h3>
        </div>
    )
}

export default ProductDetailBox
