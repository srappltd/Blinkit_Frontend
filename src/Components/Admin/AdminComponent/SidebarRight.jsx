import React from 'react'
import {Link, Outlet } from 'react-router-dom'
import NavbarRight from './NavbarRight'

function SidebarRight({menuSlide,menuClose,menuSlideBtn,menuCloseBtn,menuLeft}) {
  return (
    <div className={`${menuSlide ? 'lg:w-[95vw]' : 'lg:w-4/5' } w-full h-screen transition-all duration-300`}>
        <NavbarRight menuLeft={menuLeft} menuSlide={menuSlide} menuCloseBtn={menuCloseBtn}/>
        <div className='w-full h-[92vh] overflow-y-auto p-5'>
          <Outlet />
        </div>
    </div>
  )
}

export default SidebarRight
