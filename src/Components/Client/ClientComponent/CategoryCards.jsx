import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'

const CategoryCards = ({category}) => {
  return (
    <div  className='w-full gap-5 mt-5 md:px-5 pb-5 relative'>
        <div className='w-full flex justify-between items-center'>
            <h1 className='font-bold md:text-xl text-lg text-slate-700'>{category.name}</h1>
            <Link to={`/cn/${category._id}`} className='text-green-600 font-semibold md:text-lg'>see all</Link>
        </div>
        <div className='w-full flex items-center gap-5 mt-3 select-none overflow-x-auto pb-3'>
            {category.products.map(product=>(
                <Card key={product._id} product={product}/>
            ))}
        </div>
        <div className='back w-10 h-10 border absolute top-1/2 md:right-0 -right-4 rounded-full text-2xl flex items-center justify-center -translate-y-1/2 bg-white shadow-[3px_3px_5px_rgba(200,200,200,.5)]'>
            <i className="ri-arrow-right-s-line"></i>
        </div>
        <div className='prev w-10 h-10 border absolute top-1/2 md:left-0 -left-4 rounded-full text-2xl flex items-center justify-center -translate-y-1/2 bg-white shadow-[-3px_3px_5px_rgba(200,200,200,.5)]'>
            <i className="ri-arrow-left-s-line"></i>
        </div>
        
    </div>
  )
}

export default CategoryCards
