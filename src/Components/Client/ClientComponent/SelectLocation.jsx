import React from 'react'
import { Link,useNavigate } from 'react-router-dom'

const SelectLocation = ({selectLocationRef,selectLocaiton,setSelectLocation}) => {
  const navigator =  useNavigate()
  return (
    <div ref={selectLocationRef} className={`md:w-1/3 w-full p-4 bg-white shadow-[0px_2px_10px_rgba(200,200,200,.5)] fixed md:top-20 top-16 md:left-28 left-0 rounded ${selectLocaiton ? 'block' : 'hidden' }`}>
      <h1 className='font-medium text-lg md:text-sm'>Change Location</h1>
      <i onClick={()=>setSelectLocation(prev=>!prev)} className="ri-close-line text-2xl absolute cursor-pointer top-3 right-3"></i>
      <div className='w-full flex items-center md:flex-row flex-col md:gap-3 gap-3 mt-3 font-medium text-xs'>
        <Link to={'/current-location'} className='py-3 px-3 bg-green-700 w-full md:w-fit font-bold text-base md:font-medium md:text-sm text-center md:text-start text-white rounded flex-shrink-0'>Detect my location</Link>
        <div className='w-9 h-9 border flex items-center justify-center m-auto rounded-full text-xs font-semibold shrink-0'>OR</div>
        <input type="text" className='w-full py-3 px-4 border rounded outline-none tracking-wider text-base md:text-sm' placeholder='Search delevery location' />
      </div>
    </div>
  )
}

export default SelectLocation
