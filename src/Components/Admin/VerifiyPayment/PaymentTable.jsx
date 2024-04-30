import React from 'react'
import { Link } from 'react-router-dom'

const PaymentTable = () => {
  return (
    <div className='w-full flex-shrink-0 overflow-x-auto py-3'>
          <table className='md:w-full w-[1100px] h-[20px]'>
              <thead className='w-full grid grid-cols-8 gap-3 py-2 border-y text-sm'>
                <th className='w-11 text-start pl-3'>
                  SL
                </th>
                <th className='w-full text-start pl-3'>
                Order ID
                </th>
                <th className='w-full text-start pl-3'>
                Delivery Date
                </th>
                <th className='w-full text-start pl-3'>
                Customer Info
                </th>
                <th className='w-full text-start pl-3'>
                Payment Method	
                </th>
                <th className='w-full text-start pl-3'>
                Total Amount
                </th>
                <th className='w-full text-start pl-3'>
                Order Status
                </th>
                <th className='w-full text-start pl-3'>
                Actions
                </th>
                
              </thead>
              <tbody>
                <tr className='w-full h-16 grid grid-cols-8 gap-3 py-2 items-center text-sm'>
                  <td className='pl-3'>01.</td>
                  <td className='pl-3'>100108</td>
                  <td className='pl-3 text-zinc-600  font-medium text-xs'>07 Nov 2023 <br />06:59 PM</td>
                  <td className='pl-3 text-xs font-medium'>Anika Tahosin <br /><p className='mt-2'>+8**********</p></td>
                  <td className='pl-3 pr-3 py-1 rounded font-medium text-xs text-blue-500 bg-blue-100 w-fit'>Bank Payment</td>
                  <td className='pl-3 text-zinc-600 '>136.00$</td>
                  <td className='pl-3 pr-3 py-1 rounded font-medium text-xs text-blue-500 bg-blue-100 w-fit'>Pending</td>
                  <td className='pl-3 flex items-center gap-3'>
                    <Link className='py-2 px-3 bg-red-500 rounded whitespace-nowrap text-white font-medium text-sm'>Verify Payment</Link>
                  </td>
                </tr>

                
              </tbody>
          </table>
        </div>
  )
}

export default PaymentTable
