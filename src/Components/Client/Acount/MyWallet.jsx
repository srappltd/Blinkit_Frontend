import React from 'react'

const MyWallet = () => {
  return (
    <div className='w-full h-full'>
        <div className="w-full px-5 h-[12%] border-b flex items-center justify-between">
          <h1 className="font-semibold text-base text-slate-700">My Wallet</h1>
        </div> 
        <div className='w-full h-[88%] p-3'>
          <div className='w-full p-5 bg-zinc-100/70 border rounded-lg flex items-center flex-col justify-center'>
            <h1 className='text-zinc-600'>My Balance:</h1>
            <h1 className='font-semibold text-3xl'>₹0</h1>
          </div>
        </div>
    </div>
  )
}

export default MyWallet
