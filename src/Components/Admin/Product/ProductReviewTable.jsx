import React from 'react'
import { Link } from 'react-router-dom'

const ProductReviewTable = () => {
  return (
    <div className='w-full flex-shrink-0 py-3 overflow-x-auto'>
          <table className='xl:w-full w-[900px] h-[20px] overflow-x-auto'>
              <thead className='w-full grid grid-cols-6 gap-3 py-2 border-y text-sm'>
                <th className='w-11 text-start pl-3'>
                  SL
                </th>
                <th className='w-full text-start pl-3'>
                Product Image
                </th>
                <th className='w-full text-start pl-3'>
                Product Name
                </th>
                <th className='w-full text-start pl-3'>
                Customer Info
                </th>
                <th className='w-full text-start pl-3'>
                Review
                </th>
                <th className='w-full text-start pl-3'>
                Rating
                </th>
                
              </thead>
              <tbody>
                <tr className='w-full h-16 grid grid-cols-6 gap-3 py-2 items-center text-sm'>
                  <td className='pl-3'>01</td>
                  <td className='pl-3 flex items-center'><img src="https://efood-admin.6amtech.com/storage/app/public/category/2021-02-26-603892f899576.png" className='w-11 rounded' alt="" /></td>
                  <td className='pl-3 text-zinc-600'>Ice Cream</td>
                  <td className='pl-3 text-zinc-600 text-xs font-medium'>Abhay Gautam <br />+91 62*********</td>
                  <td className='pl-3 text-zinc-600'>The food is always goo</td>
                  <td className='pl-3 pr-3 py-1 rounded font-medium text-xs text-blue-500 w-fit'>5 ⭐</td>

                </tr>
                <tr className='w-full h-16 grid grid-cols-6 gap-3 py-2 items-center text-sm'>
                  <td className='pl-3'>01</td>
                  <td className='pl-3 flex items-center'><img src="https://efood-admin.6amtech.com/storage/app/public/category/2021-02-26-603892f899576.png" className='w-11 rounded' alt="" /></td>
                  <td className='pl-3 text-zinc-600'>Ice Cream</td>
                  <td className='pl-3 text-zinc-600 text-xs font-medium'>Abhay Gautam <br />+91 62*********</td>
                  <td className='pl-3 text-zinc-600'>The food is always goo</td>
                  <td className='pl-3 pr-3 py-1 rounded font-medium text-xs text-blue-500 w-fit'>5 ⭐</td>

                </tr>
                <tr className='w-full h-16 grid grid-cols-6 gap-3 py-2 items-center text-sm'>
                  <td className='pl-3'>01</td>
                  <td className='pl-3 flex items-center'><img src="https://efood-admin.6amtech.com/storage/app/public/category/2021-02-26-603892f899576.png" className='w-11 rounded' alt="" /></td>
                  <td className='pl-3 text-zinc-600'>Ice Cream</td>
                  <td className='pl-3 text-zinc-600 text-xs font-medium'>Abhay Gautam <br />+91 62*********</td>
                  <td className='pl-3 text-zinc-600'>The food is always goo</td>
                  <td className='pl-3 pr-3 py-1 rounded font-medium text-xs text-blue-500 w-fit'>5 ⭐</td>

                </tr>
                <tr className='w-full h-16 grid grid-cols-6 gap-3 py-2 items-center text-sm'>
                  <td className='pl-3'>01</td>
                  <td className='pl-3 flex items-center'><img src="https://efood-admin.6amtech.com/storage/app/public/category/2021-02-26-603892f899576.png" className='w-11 rounded' alt="" /></td>
                  <td className='pl-3 text-zinc-600'>Ice Cream</td>
                  <td className='pl-3 text-zinc-600 text-xs font-medium'>Abhay Gautam <br />+91 62*********</td>
                  <td className='pl-3 text-zinc-600'>The food is always goo</td>
                  <td className='pl-3 pr-3 py-1 rounded font-medium text-xs text-blue-500 w-fit'>5 ⭐</td>

                </tr>
                <tr className='w-full h-16 grid grid-cols-6 gap-3 py-2 items-center text-sm'>
                  <td className='pl-3'>01</td>
                  <td className='pl-3 flex items-center'><img src="https://efood-admin.6amtech.com/storage/app/public/category/2021-02-26-603892f899576.png" className='w-11 rounded' alt="" /></td>
                  <td className='pl-3 text-zinc-600'>Ice Cream</td>
                  <td className='pl-3 text-zinc-600 text-xs font-medium'>Abhay Gautam <br />+91 62*********</td>
                  <td className='pl-3 text-zinc-600'>The food is always goo</td>
                  <td className='pl-3 pr-3 py-1 rounded font-medium text-xs text-blue-500 w-fit'>5 ⭐</td>

                </tr>
                
                
                
              </tbody>
          </table>
        </div>
  )
}

export default ProductReviewTable
