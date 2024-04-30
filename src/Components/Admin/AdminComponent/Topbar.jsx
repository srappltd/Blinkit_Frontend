import React from 'react'

const Topbar = ({icon,title}) => {
  return (
    <div className='flex items-center gap-2'>
        <img src={icon} className='w-6' alt="" />
        <h1 className='font-semibold text-lg'>{title}</h1>    
      </div>
  )
}

export default Topbar
