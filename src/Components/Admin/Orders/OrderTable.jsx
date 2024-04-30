import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { asyncOrdersList } from '../../../Store/Actions/AdminAction'

const Table = ({tablePrintRef}) => {
  const {orders} = useSelector(state=>state.AdminReducer)
  const orderViewHandler = orderid=>{
    console.log('view '+orderid)
  }
  const orderPrintHandler = orderid =>{
    console.log('print '+orderid)
    
  }
  return (
    <div className='w-full flex-shrink-0 overflow-x-auto py-3'>
          <table ref={tablePrintRef} className='w-[1700px] h-[20px]'>
              <thead className='w-full grid grid-cols-9 gap-3 py-2 border-y text-sm'>
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
                Branch
                </th>
                <th className='w-full text-start pl-3'>
                Total Amount
                </th>
                <th className='w-full text-start pl-3'>
                Order Status
                </th>
                <th className='w-full text-start pl-3'>
                Order Type
                </th>
                <th className='w-full text-start pl-3'>
                Actions
                </th>
                
              </thead>
              <tbody>
                {orders.success && orders.orders.map((order,index)=>(
                  <tr key={order._id} className='w-full h-16 grid grid-cols-9 gap-3 py-2 items-center text-sm'>
                    <td className='pl-3'>{`${index <9 ? "0"+(index+1) : (index+1) }`}</td>
                    <td className='pl-3 w-[200px]'>{order._id}</td>
                    <td className='pl-3 text-zinc-600'>07 Nov 2023 <br />06:59 PM</td>
                    <td className='pl-3 text-xs font-medium'>{order.customerInfo.username} <br /><p className='mt-2'>+91 {order.customerInfo.mobile}</p></td>
                    <td className='pl-3 pr-3 py-1 rounded font-medium text-xs text-blue-500 bg-blue-100 w-fit'>Main Branch</td>
                    <td className='pl-3 text-zinc-600'>₹{order.totalAmount} <br />Paid</td>
                    <td className='pl-3 pr-3 py-1 rounded font-medium text-xs text-blue-500 bg-blue-100 w-fit'>{order.orderStatus}</td>
                    <td className='pl-3 pr-3 py-1 rounded font-medium text-xs text-blue-500 bg-blue-100 w-fit'>{order.orderType}</td>
                    <td className='pl-3 flex items-center gap-3'>
                      <div onClick={()=>orderViewHandler(order._id)} className='w-7 h-7 cursor-pointer border flex items-center justify-center rounded border-red-300 text-red-500'><i className="ri-eye-line"></i></div>
                      <div onClick={()=>orderPrintHandler(order._id)} className='w-7 h-7 cursor-pointer border flex items-center justify-center rounded border-green-300 text-green-500'><i className="ri-printer-line"></i></div>
                    </td>
                  </tr>
                ))}
              </tbody>
          </table>
        </div>
  )
}

export default Table
