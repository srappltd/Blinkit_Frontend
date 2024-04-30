import React from 'react'
import { Link } from 'react-router-dom'

const Setting = () => {
  return (
    <div className='w-full'>
        <div className='w-full flex justify-between items-center py-4 border-b'>
            <h1 className='font-semibold text-2xl'>Setting</h1>
            <Link to={'/admin/deshboard'} className='py-2 px-5 bg-red-600 text-white rounded-sm text-sm font-medium'>Deshboard</Link>
        </div>
        <div className='w-full py-4 md:flex items-start gap-5'>
            <div className='md:w-[30%] w-full rounded p-3 border shadow-[0px_5px_10px_rgba(220,220,220,1)] text-sm font-medium text-zinc-600'>
                <Link to={'/admin/profile'} className='w-full flex items-center gap-3 py-1 bg-red-50 rounded-sm px-5'><i className="ri-account-box-line"></i> Basic Information</Link>
                <Link to={'/admin/password'} className='w-full flex items-center gap-3 py-1 bg-red-50 rounded-sm px-5 mt-2'><i className="ri-lock-line"></i> Password</Link>
            </div>
            <div className='md:w-[70%] w-full rounded mt-4 md:mt-0'>
                <div className='w-full h-40 relative'>
                    <div className='w-full h-32 border bg-zinc-200 rounded'></div>
                    <div className='w-24 h-24  absolute left-1/2 bottom-1 -translate-x-1/2'>
                        <img src="https://efood-admin.6amtech.com/storage/app/public/admin/2023-09-13-650156f48dc51.png" className='w-full h-full object-cover rounded-full border-[3px] border-white overflow-hidden' alt="" />
                        <div className='w-7 h-7 bg-zinc-50 absolute rounded-full bottom-0 right-0 flex shadow-[5px_5px_10px_rgba(220,220,220,1)] items-center justify-center'>
                        <i className="ri-pencil-line"></i>
                        </div>
                    </div>
                </div>
                <div className='w-full mt-5 rounded border shadow-[0px_5px_10px_rgba(230,230,230,1)]'>
                    <div className='w-full py-3 flex items-center px-3 gap-2 font-semibold border-b'>
                        <i className="ri-error-warning-fill rotate-180 text-xl"></i> Basic information
                    </div>
                    <div className='w-full py-3 px-3 text-sm'>
                        <div className='w-full md:flex gap-4 items-center'>
                            <div className='md:w-[30%] w-full font-medium'>
                                <h1 className='py-2'>Full Name*</h1>
                            </div>
                                <div className='md:w-[70%] w-full grid grid-cols-2 gap-2'>
                                    <input type="text" className='border w-full py-2 rounded px-3' placeholder='First Name' />
                                    <input type="text" className='border w-full py-2 rounded px-3' placeholder='Last Name' />
                                </div>
                        </div>
                        <div className='w-full md:flex gap-4 items-center mt-7'>
                            <div className='md:w-[30%] w-full font-medium'>
                                <h1 className='py-2'>Phone (optional)</h1>
                            </div>
                                <div className='md:w-[70%] w-full grid grid-cols-1'>
                                    <input type="text" className='border w-full py-2 rounded px-3' placeholder='Enter Phone Number' />
                                </div>
                        </div>
                        <div className='w-full md:flex gap-4 items-center mt-7'>
                            <div className='md:w-[30%] w-full font-medium'>
                                <h1 className='py-2'>Email</h1>
                            </div>
                                <div className='md:w-[70%] w-full grid grid-cols-1'>
                                    <input type="text" className='border w-full py-2 rounded px-3' placeholder='Enter Email' />
                                </div>
                        </div>
                        <div className='w-full flex justify-end mt-5 font-semibold'>
                            <button className='py-2 px-5 bg-red-500 text-white text-sm rounded'>Save changes</button>
                        </div>
                    </div>

                </div>
                <div className='w-full mt-5 rounded border shadow-[0px_5px_10px_rgba(230,230,230,1)]'>
                    <div className='w-full py-3 flex items-center px-3 gap-2 font-semibold border-b'>
                    <i className="ri-lock-fill text-xl"></i> Change your password
                    </div>
                    <div className='w-full py-3 px-3 text-sm'>
                        <div className='w-full md:flex gap-4 items-center mt-7'>
                            <div className='md:w-[30%] w-full font-medium'>
                                <h1 className='py-2'>New Password</h1>
                            </div>
                                <div className='md:w-[70%] w-full'>
                                    <input type="text" className='border w-full py-2 rounded px-3' placeholder='Enter new password' />
                                </div>
                        </div>
                        <div className='w-full md:flex gap-4 items-center mt-5'>
                            <div className='md:w-[30%] w-full font-medium'>
                                <h1 className='py-2'>Confirm Password</h1>
                            </div>
                                <div className='md:w-[70%] w-full'>
                                    <input type="text" className='border w-full py-2 rounded px-3' placeholder='Confirm your new password' />
                                </div>
                        </div>
                        <div className='w-full flex justify-end mt-5 font-semibold'>
                            <button className='py-2 px-5 bg-red-500 text-white text-sm rounded'>Save changes</button>
                        </div>
                    </div>

                </div>
                
            </div>
        </div>
    </div>
  )
}

export default Setting
