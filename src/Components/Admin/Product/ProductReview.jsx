import React from 'react'
import ProductTable from './ProductTable'
import ProductReviewTable from './ProductReviewTable'
import Topbar from '../AdminComponent/Topbar'

const ProductReview = () => {
  return (
    <div className='w-full'>
      <Topbar icon={'https://efood-admin.6amtech.com/public/assets/admin/img/icons/review.png'} title={'Product Review'}/>
      <div className='w-full border rounded-md gap-3 mt-5'>
          <div className='w-full flex justify-between mt-5 px-5 md:text-sm text-xs font-medium'>
            <div className='flex items-center gap-2 font-medium'>
              <h1 className='text-lg'>Review list</h1>
              <span className='py-1 px-3 bg-zinc-200 rounded-full'>15</span>
            </div>
            <div className='md:w-3/12 w-full flex items-center border rounded border-red-300'>
                <input type="text" className='w-3/4 px-3 py-2' placeholder='Search by product name'/>
                <button className='py-2 bg-red-500 h-full text-white w-1/4'>Search</button>
            </div>
          </div>
          <ProductReviewTable/>
      </div>
    </div>
  )
}

export default ProductReview
