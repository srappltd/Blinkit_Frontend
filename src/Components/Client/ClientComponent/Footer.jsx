import React from 'react'
import { Link } from 'react-router-dom'
import SocialMediaIcon from './SocialMediaIcon'
import FooterTop from './FooterTop'

const Footer = () => {
  return (
    <div className='w-full md:px-20 px-5 pt-5 border-t'>
      <FooterTop/>
      <div className='w-full grid md:grid-cols-3 grid-cols-1 mt-5 border-t py-4'>
        <div className='hidden md:block text-xs font-medium text-slate-600'>
        © Blink Commerce Private Limited (formerly known as Grofers India Private Limited), 2016-2024
        </div>
        <div className='flex items-center justify-between md:justify-start gap-3 md:font-semibold font-bold text-slate-600'>
            <h2>Download App</h2>
            <img src="https://blinkit.com/d61019073b700ca49d22.png" className='w-[25%] md:w-[20%]' alt="" />
            <img src="https://blinkit.com/8ed033800ea38f24c4f0.png" alt="" className='w-[25%] md:w-[20%]' />
        </div>
        <SocialMediaIcon/>
      </div>
    </div>
  )
}

export default Footer
