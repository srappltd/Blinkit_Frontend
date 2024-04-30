import React from 'react'

const SearchBox = () => {
  return (
    <div className='w-full flex justify-between items-center mt-3 md:text-sm text-xs'>
          <div className='md:w-3/12 w-3/5 flex items-center border rounded border-red-300'>
            <input type="text" className='w-3/4 px-3 outline-none font-medium ' placeholder='Search by id & title'/>
            <button className='py-2 bg-red-500 text-white w-1/4'>Search</button>
          </div>
          <button className='w-28 border py-2 rounded border-red-300 font-medium hover:text-white hover:bg-red-500 gap-2 flex items-center justify-center'>
            <i className="ri-download-2-line"></i>
            Export
          </button>
        </div>
  )
}

export default SearchBox
