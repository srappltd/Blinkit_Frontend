import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { baseUrl } from '../../../Utils/Axios'

const UsersTable = () => {
  const {clients} = useSelector(state=>state.AdminReducer)
  console.log(clients)
  const clientViewHandler = orderid=>{
    console.log('view '+orderid)
  }
  const clientPrintHandler = orderid =>{
    console.log('print '+orderid)
    
  }
  return (
    <div className='w-full flex-shrink-0 overflow-x-auto py-3'>
          <table className='w-[1900px] h-[20px]'>
              <thead className='w-full grid grid-cols-8 gap-3 py-2 border-y text-sm'>
                <th className='w-11 text-start pl-3'>
                  SL
                </th>
                <th className='w-11 text-start pl-3'>
                  clientID
                </th>
                
                <th className='w-full text-start pl-3'>
                Customer Name
                </th>
                <th className='w-full text-start pl-3'>
                Customer Info
                </th>
                <th className='w-full text-start pl-3'>
                Total Orders
                </th>
                <th className='w-full text-start pl-3'>
                Available Points
                </th>
                <th className='w-full text-start pl-3'>
                Order Status
                </th>
                <th className='w-full text-start pl-3'>
                Actions
                </th>
              </thead>
              <tbody>
                {clients.success && clients.clients.map((client,index)=>(
                  <tr className='w-full h-16 grid grid-cols-8 gap-3 py-2 items-center text-sm'>
                    <td className='pl-3 w-11'>{index < 9 ? "0"+(index+1) : index+1 }</td>
                    <td className='pl-3 w-11'>{client._id}</td>
                    <td className='pl-3 flex items-center gap-3'><img src={baseUrl+client.picture}  className='w-10 h-10 shrink-0 rounded-full border object-cover' alt="" /> {client.username}</td>
                    <td className='pl-3 text-sm font-medium mt-2 overflow-hidden w-full'>{client.email} <br /><p className='mt-2 leading-[1]'>+91 {client.mobile}</p></td>
                    <td className='pl-3 text-zinc-600'>{client.orders.length}</td>
                    <td className='pl-3 text-zinc-600'>0</td>
                    <td className={`pl-3 pr-3 py-1 rounded font-medium text-xs ${client.isActive ? 'text-blue-500' : 'text-red-500' } bg-blue-100 w-fit`}>{client.isActive ? 'Active' : 'Block' }</td>
                    <td className='pl-3 flex items-center gap-3'>
                    <div onClick={()=>clientViewHandler(client._id)} className='w-7 h-7 cursor-pointer border flex items-center justify-center rounded border-red-300 text-red-500'><i className="ri-eye-line"></i></div>
                      <div onClick={()=>clientPrintHandler(client._id)} className='w-7 h-7 cursor-pointer border flex items-center justify-center rounded border-green-300 text-green-500'><i className="ri-printer-line"></i></div>
                    </td>
                  </tr>
                ))}

                
              </tbody>
          </table>
        </div>
  )
}

export default UsersTable
