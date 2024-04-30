import React from 'react'
import { NavLink } from 'react-router-dom'

const Button = ({to,classChange,text,menuSlide}) => { 
  return (
    <NavLink to={to} className={(e)=>{ return e.isActive ? `flex items-center gap-3 py-[6px] text-sm px-3 mt-1  font-[500] bg-red-50 text-red-400`: `flex items-center gap-3 py-[6px] text-sm px-3 mt-1 font-[500]`}}>
        <i className={`${classChange} text-xl`}></i> {`${menuSlide ? '' : text }  `}
    </NavLink>
  )
}

export default Button
