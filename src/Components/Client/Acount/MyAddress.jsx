import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AddressCard from './AddressCard'
import { Axios } from '../../../Utils/Axios'
import { ToastContainer } from 'react-toastify'
import { asyncDeleteAddress } from '../../../Store/Actions/AccountAction'
import { useDispatch } from 'react-redux'

const MyAddress = () => {
  const dispatch = useDispatch()
  const [addresssMessage, setAddresssMessage] = useState('')
  const [addresss, setAddresss] = useState({})
  const getAddress = async () => {
    const { data } = await Axios.post("/api/client/address/all-address")
    setAddresss(data)
  }
  const addressEditHandler = (id) => {
    console.log(id)
  }
  const addressDeleteHandler = (id) => {
    dispatch(asyncDeleteAddress(id, setAddresssMessage))
    console.log(addresssMessage)

  }
  useEffect(() => {
    getAddress()
  }, [addresssMessage])
  return (
    <div className='w-full h-full'>
      <div className='w-full px-5 h-[12%] border-b flex items-center justify-between'>
        <h1 className='font-semibold text-base text-slate-700'>My Address</h1>
        <Link to={'/account/new-address'} className='py-2 px-4 bg-green-600 text-white font-semibold rounded-sm'>Add New Address</Link>
      </div>
      <div className='w-full h-[88%] relative p-3 overflow-y-auto'>
        {addresss.success && addresss.addresss.length == 0 ?
          <div className='flex items-center justify-center flex-col absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <img src="https://blinkit.com/c55c5f6ddd0e42607e6c.png" alt="" />
            <h1 className='font-medium text-lg'>You have no saved addresses</h1>
            <h2 className='text-sm text-slate-400'>Tell us where you want your orders delivered</h2>
          </div> : ''}
        <div className='flex flex-col gap-3 w-full relative z-10'>
          {addresss.success && addresss.addresss.map(address => (
            <AddressCard key={address._id} addresss={address} handler={{ addressDeleteHandler, addressEditHandler }} />
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}

export default MyAddress
