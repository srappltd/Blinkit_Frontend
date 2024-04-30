import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { asyncDeleteAddress } from '../../../Store/Actions/AccountAction'

const AddressCard = ({addresss,handler}) => {
  const dispatch = useDispatch()
  const {address,alternateMobile,city,client,currentLocation,fullname,landmark,mobile,pincode,state,_id} = addresss
  const {addressDeleteHandler,addressEditHandler} = handler
  return (
    <div className='address-set w-full p-2 border rounded'>
              <div className='w-full flex justify-between items-center py-1'>
                <h1 className='font-semibold py-1 px-2 bg-zinc-200 text-xs rounded-sm'>Home</h1>
                <div className='flex items-center gap-3'>
                  <div onClick={()=>addressEditHandler(_id)} className='w-5 h-5 cursor-pointer border flex items-center justify-center rounded-sm border-blue-400 text-blue-500 text-base'>
                  <i className="ri-pencil-line"></i>
                  </div>
                  <div onClick={()=>addressDeleteHandler(_id)} className='w-5 h-5 cursor-pointer border flex items-center justify-center rounded-sm border-red-300 text-red-500 text-base'>
                  <i className="ri-delete-bin-6-line"></i>
                  </div>
                </div>
              </div>
              <div className='w-full mt-[2px]'>
                <h1 className='font-semibold text-slate-800 '><span className='uppercase'>{fullname}</span> <Link className='text-slate-500 ml-5'>(+91 {mobile})</Link> </h1>
                <p className='mt-1 w-4/5 font-medium text-[13px] leading-[1.2] text-slate-600'>{`${address}, ${currentLocation}, ${city}, ${landmark}, ${state} - ${pincode}`}</p>
              </div>
            </div>
  )
}

export default AddressCard
