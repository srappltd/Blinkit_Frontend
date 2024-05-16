import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate} from 'react-router-dom'
import Button from './AdminComponent/Button'
import SidebarLeft from './AdminComponent/SidebarLeft'
import SidebarRight from './AdminComponent/SidebarRight'
import { isAdmin } from '../../Utils/JwtToken'
import { useDispatch, useSelector } from 'react-redux'
import { asyncAdminUserData, asyncBannersList, asyncBrandsList, asyncCategoriesList, asyncClientsList, asyncCouponsList, asyncOrdersList, asyncPostersList, asyncProductsList, asyncTransactionsList } from '../../Store/Actions/AdminAction'

const Home = () => {
    const [menuClose,setMenuClose] = useState(false)
    const [menuSlide,setMenuSlide] = useState(false)
    const {pathname} = useLocation()
    const dispatch = useDispatch()
    const menuCloseBtn = () =>{
        setMenuClose(prev=>!prev)
    }
    const menuSlideBtn = () =>{
        setMenuSlide(prev=>!prev)
    }
    window.onresize = (e)=>{
        console.log(e.currentTarget.innerWidth<450)
        // console.log() 
        e.currentTarget.innerWidth < 450 ? location.reload() : ''
    }
    const {admin} = useSelector(state=>state.AdminReducer)
    const [menuLeft,setMenuLeft] = useState(false)
    const handleEventBtn = (e) =>{
        e.target.classList.contains("menuLeftBtn") ? setMenuLeft(prev=>!prev) : setMenuLeft(false)
    }
    useEffect(()=>{
        dispatch(asyncAdminUserData())
        dispatch(asyncOrdersList())
        dispatch(asyncBannersList())
        dispatch(asyncCategoriesList())
        dispatch(asyncPostersList())
        dispatch(asyncCouponsList())
        dispatch(asyncClientsList())
        dispatch(asyncTransactionsList())
        dispatch(asyncProductsList())
        dispatch(asyncBrandsList())
    },[pathname])
  return (
    isAdmin() ? 
    <div onClick={handleEventBtn} className='w-full h-screen overflow-hidden flex'>
        <SidebarLeft menuClose={menuClose} menuSlide={menuSlide} menuSlideBtn={menuSlideBtn} menuCloseBtn={menuCloseBtn} />
        <SidebarRight menuClose={menuClose} menuLeft={menuLeft} menuSlide={menuSlide} menuSlideBtn={menuSlideBtn} menuCloseBtn={menuCloseBtn} />
    </div> : window.location.href = '/admin/login'
  )
}

export default Home
