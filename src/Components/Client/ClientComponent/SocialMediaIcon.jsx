import React from 'react'
import { Link } from 'react-router-dom'

const SocialMediaIcon = () => {
  return (
    <div className='w-full md:flex hidden justify-end items-center gap-5'>
            <Link className='w-9 h-9 rounded-full text-lg bg-slate-200 shadow-[3px_3px_5px_rgba(210,210,210,.5)] border flex items-center justify-center'>
                <i className="ri-facebook-fill"></i>
            </Link>
            <Link className='w-9 h-9 rounded-full text-lg bg-slate-200 shadow-[3px_3px_5px_rgba(210,210,210,.5)] border flex items-center justify-center'>
                <i className="ri-instagram-fill"></i>
            </Link>
            <Link className='w-9 h-9 rounded-full text-lg bg-slate-200 shadow-[3px_3px_5px_rgba(210,210,210,.5)] border flex items-center justify-center'>
                <i className="ri-linkedin-fill"></i>
            </Link>
            <Link className='w-9 h-9 rounded-full text-lg bg-slate-200 shadow-[3px_3px_5px_rgba(210,210,210,.5)] border flex items-center justify-center'>
                <i className="ri-youtube-fill"></i>
            </Link>
        </div>
  )
}

export default SocialMediaIcon
