import React from 'react'
import { Link } from 'react-router-dom'
import Loader from '../../../Loader/Loader'
import { baseUrl } from '../../../Utils/Axios'

const Category = ({categories}) => {
  return (
    <div className='w-full md:grid gap-2 md:grid-cols-10 flex items-center mt-5 overflow-x-auto'>
        {categories.categories.length > 0 ? categories.categories.map(category=>(
          category.products.length > 0 &&
            <Link key={category._id} to={`/cn/${category._id}`} className='md:w-full w-28 md:h-fit flex-shrink-0'>
            <img src={baseUrl+category.categoryImage} className='w-full' alt="" />
            </Link>
        )) : <Loader/> }
        
        
        
    </div>
  )
}

export default Category
