import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'
import Loader from '../../../Loader/Loader'
import { Axios, baseUrl } from '../../../Utils/Axios'

const BrandCards = ({uniqueBrands}) => {
    // console.log(uniqueBrands)
  return (
    uniqueBrands.length != 0 ?
    <div className='md:w-[25%] w-full border border-slate-200 flex md:flex-col items-start overflow-y-auto md:h-[100vh]'>
                {uniqueBrands.map(brand=>(
                <Link key={brand._id} to={`?brand=${brand._id}`} className='md:py-4 py-3 px-5 border-y md:w-full w-1/2 flex-shrink-0 font-medium text-slate-700 flex items-center gap-3 relative after:w-2 md:after:h-full after:absolute after:left-0 after:top-0 after:bg-green-600'>
                    <img src={baseUrl+brand.brandImage} className='w-12 h-12 pointer-events-none rounded bg-slate-100 object-cover object-top' alt="" />
                    {brand.title}
                </Link>

                ))}
            </div> : <Loader/>
  )
}

export default BrandCards
