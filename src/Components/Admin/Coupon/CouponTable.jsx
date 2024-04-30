import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { asyncCouponRemove } from '../../../Store/Actions/AdminAction'

const CouponTable = () => {
  document.title = 'Blankit Admin - CouponList'
  const dispatch = useDispatch()
  const {coupons} = useSelector(state=>state.AdminReducer)
  const couponEditHandler = couponid =>{
    console.log(couponid)
  }
  const couponDeleteHandler = couponid =>{
    dispatch(asyncCouponRemove(couponid))
    
  }
  return (
    <div className='w-full flex-shrink-0 py-3 overflow-x-auto'>
          <table className='md:w-full w-[700px] h-[20px] overflow-x-auto'>
              <thead className='w-full grid grid-cols-8 gap-3 py-2 border-y text-sm'>
                <th className='w-11 text-start pl-3'>
                  SL
                </th>
                <th className='w-11 text-start pl-3'>
                  Coupon Name
                </th>
                <th className='w-full text-start pl-3'>
                Coupon
                </th>
                <th className='w-full text-start pl-3'>
                Amount
                </th>
                <th className='w-full text-start pl-3'>
                Coupon Type
                </th>
                <th className='w-full text-start pl-3'>
                Duration
                </th>
                <th className='w-full text-start pl-3'>
                Status
                </th>
                <th className='w-full text-start pl-3'>
                Actions
                </th>
              </thead>
              <tbody>
                {coupons.success && coupons.coupons.map((coupon,index)=>(
                  <tr key={coupon._id} className='w-full grid grid-cols-8 gap-3 py-2 items-center text-sm'>
                    <td className='pl-3'>{`${index < 9 ? "0" + (index + 1) : (index + 1)}`}</td>
                    <td className='pl-3'>{coupon.title}</td>
                    <td className='pl-3 text-zinc-600 font-bold'>Code: {coupon.couponCode} <br /><span className='text-xs font-medium text-zinc-400'>Discount on amount</span></td>
                    <td className='pl-3 text-zinc-600'>{coupon.discountPercent}%</td>
                    <td className='pl-3 text-zinc-600'>Percent</td>
                    <td className='pl-3 text-zinc-600 font-medium text-xs'>{coupon.startDate} - <br /> {coupon.expireDate}</td>
                    <td className='pl-3 text-xs font-medium'>
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" hidden checked={coupon.status ? true : false} className="sr-only peer"/>
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                    </td>
                    <td className='pl-3 flex items-center gap-3'>
                    <div onClick={() => couponEditHandler(coupon._id)} className='w-7 h-7 cursor-pointer border flex items-center justify-center rounded border-green-300 text-green-500'><i className="ri-pencil-line"></i></div>
                      <div onClick={() => couponDeleteHandler(coupon._id)} className='w-7 cursor-pointer h-7 border flex items-center justify-center rounded border-red-300 text-red-500'><i className="ri-delete-bin-2-line "></i></div>
                    </td>
                  </tr>
                ))}
                
              </tbody>
          </table>
        </div>
  )
}

export default CouponTable
