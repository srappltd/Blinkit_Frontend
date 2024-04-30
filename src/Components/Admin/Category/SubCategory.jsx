import React, { useRef, useState } from 'react'
import SubCategoryTable from './SubCategoryTable'
import Topbar from '../AdminComponent/Topbar'

function SubCategory() {
  const logoInput = useRef(null)
  const bannrInput = useRef(null)
  const [logoImage,setLogoImage] = useState(null)
  const [BannerImage,setBannerImage] = useState(null)
  const selectLogoBtn = () =>{
    logoInput.current.click()
  }
  const logoInputChange = (e)=>{
    setLogoImage(URL.createObjectURL(e.target.files[0]))
  }
  const selectBannerBtn = () =>{
    bannrInput.current.click()
  }
  const bannerInputChange = (e)=>{
    setBannerImage(URL.createObjectURL(e.target.files[0]))
  }
  return (
    <div className='w-full'>
      <Topbar icon={'https://efood-admin.6amtech.com/public/assets/admin/img/icons/category.png'} title={'Add New Sub Category'}/>
      <div className='w-full border rounded-md gap-3 mt-5'>
        <form className='w-full p-5'>
          <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-5'>
            <div className='w-full'>
              <h1 className='text-sm mb-1'>Sub Category Name (EN)</h1>
              <input type="text" placeholder='New Category' className='border outline-none w-full py-2 text-sm rounded-sm px-3' />
            </div>
            <div className='w-full'>
              <h1 className='text-sm mb-1'>Main Category*</h1>
              <select name="" className='w-full p-2 border text-sm outline-none' id="">
                <option value="">Select a category</option>
                <option value="">Pizza</option>
                <option value="">Samosa</option>
                <option value="">Select a category</option>
              </select>
              {/* <input type="text" placeholder='New Category' className='border w-full py-2 text-sm rounded-sm px-3' /> */}
            </div>
            
          </div>
          <div className='w-full flex md:justify-end justify-between gap-5 mt-5 text-sm'>
            <button className='py-2 px-10 border rounded' type='reset'>Clear</button>
            <button className='py-2 px-6 border rounded bg-red-600 text-white' type='submit'>Submit</button>
          </div>
        </form>
        <SubCategoryTable/>
      </div>
    </div>
  )
}

export default SubCategory
