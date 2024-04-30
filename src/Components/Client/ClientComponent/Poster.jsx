import React from 'react'
import { baseUrl } from '../../../Utils/Axios'
import Loader from '../../../Loader/Loader'

const Poster = ({posters}) => {
  return (
    <>
    <div className='w-full md:grid flex items-center md:grid-cols-4 sm:grid-cols-2 grid-cols-1 overflow-x-auto gap-4 mt-5 md:px-5 overflow-y-hidden'>
      {posters.posters.length > 0 && posters.posters.map(poster=>(
        <div key={poster._id} className='w-full h-[200px] rounded-md overflow-hidden flex-shrink-0'>
            <img src={baseUrl+poster.url} className='w-full h-full' alt="" />
        </div>
      ))}
        
        
    </div>
    </>
  )
}

export default Poster
