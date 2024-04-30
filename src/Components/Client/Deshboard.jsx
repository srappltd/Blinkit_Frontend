import React, { useEffect, useState } from 'react'
import {Outlet, useNavigate} from 'react-router-dom'
import HeaderBanner from './ClientComponent/HeaderBanner'
import Poster from './ClientComponent/Poster'
import Category from './ClientComponent/Category'
import CategoryCards from './ClientComponent/CategoryCards'
import Navbar from './ClientComponent/Navbar'
import Footer from './ClientComponent/Footer'
import CartBtn from './ClientComponent/CartBtn'
import { useDispatch, useSelector } from 'react-redux'
import { asyncPosters } from '../../Store/Actions/PosterAction'
import { asyncCategory } from '../../Store/Actions/CategoryAction'
import Loader from '../../Loader/Loader'
import { asyncCheckClient } from '../../Store/Actions/isLoggedInAction'
import { SetJwtToken, isAuthoticated } from '../../Utils/JwtToken'

const Deshboard = () => {
  const dispatch = useDispatch()
  const {posters} = useSelector(state=>state.PosterReducer)

  const {category} = useSelector(state=>state.CategoryReducer)
  const navigate = useNavigate()
  const {isLoggedin,isCheckClient} = useSelector(state=>state.IsLoggoedInReducer)
  console.log(isLoggedin)
  if(!isLoggedin) return navigate("/login")
  if(isLoggedin.token){
    SetJwtToken(isLoggedin.token)
  }
  useEffect(()=>{
    dispatch(asyncPosters())
    dispatch(asyncCategory())
    dispatch(asyncCheckClient())
  },[])
  return (
    isAuthoticated() ? <>
    <Navbar/>
    <div className='w-full md:px-20 px-5'>
      <div className='w-full mt-16 pt-5'>
        <HeaderBanner/>
        {posters.success && <Poster posters={posters} />}
        {category.success && <Category categories={category}/>}
        
        {category.success ? category.categories.map(category=>(
          category.products.length > 0 && <CategoryCards key={category._id} category={category}/>
        )) : <Loader/>}

      </div>
    </div>
    <CartBtn/>
    <Footer/>
    </> : navigate("/login")
  )
}

export default Deshboard
