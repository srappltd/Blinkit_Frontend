import React from 'react'

const FilterBox = () => {
    return (
        <div className='w-full mb-3 mt-3'>
            <div className='flex items-center gap-3'>
                <img src="https://efood-admin.6amtech.com/public/assets/admin/img/icons/business_analytics.png" className='w-5' alt="" />
                <h1 className='text-sm font-semibold'>Select date range</h1>
            </div>
            <div className='grid md:grid-cols-4 grid-cols-1 md:gap-5 gap-2 mt-5'>
                <div className='w-full'>
                    <h1 className='text-zinc-400 text-sm mb-2'>Select Branch</h1>
                    <select name="" id="" className='w-full p-2 text-sm cursor-pointer outline-none border rounded'>
                        <option value="">Overall Statistics</option>
                        <option value="">Today Statistics</option>
                        <option value="">This Month's Statistics</option>
                    </select>
                </div>
                <div className='w-full'>
                    <h1 className='text-zinc-400 text-sm mb-2'>Start Date</h1>
                    <input name="" type='date' id="" className='w-full p-2 text-sm cursor-pointer outline-none border rounded' />
                </div>
                <div className='w-full'>
                    <h1 className='text-zinc-400 text-sm mb-2'>Start Date</h1>
                    <input name="" type='date' id="" className='w-full p-2 text-sm outline-none border cursor-pointer rounded' />
                </div>
                <div className='w-full grid grid-cols-2 items-end gap-5 md:text-sm text-xs font-medium'>
                    <button type='reset' className='py-2 bg-zinc-100 w-full rounded'>Clear</button>
                    <button type='submit' className='py-2 bg-orange-400 text-white w-full rounded'>Show Data</button>
                </div>

            </div>
        </div>
    )
}

export default FilterBox
