import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CategoryTable from './CategoryTable'
import Topbar from '../AdminComponent/Topbar'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { asyncCategoryAdd } from '../../../Store/Actions/AdminAction'

function OrderList() {
  const dispatch = useDispatch(null)
  const logoInput = useRef(null)
  const bannrInput = useRef(null)
  const [logoImage,setLogoImage] = useState(null)
  const [BannerImage,setBannerImage] = useState(null)
  const [categoryForm,setCategoryForm] = useState({name:""})
  const selectLogoBtn = () =>{
    logoInput.current.click()
  }
  const logoInputChange = (e)=>{
    setLogoImage(e.target.files[0])
  }
  const selectBannerBtn = () =>{
    bannrInput.current.click()
  }
  const bannerInputChange = (e)=>{
    setBannerImage(e.target.files[0])
  }

  const categoryOnChangeHandler = (e)=>{
    const {name,value} = e.target
    setCategoryForm({...categoryForm,[name]:value})
  }
  const categorySubmitHandler = (e)=>{
    e.preventDefault()
    if(categoryForm.name && logoImage && BannerImage){
      const formData = new FormData()
      formData.append("categoryImage",logoImage)
      formData.append("categoryBannerImage",BannerImage)
      Object.entries(categoryForm).forEach(([key,value])=>{
        formData.append(key,value)
      })
      dispatch(asyncCategoryAdd(formData))
    }else{
      toast.error("Please fill all the field required!")
    }
  }

  return (
    <div className='w-full'>
      <Topbar icon={'https://efood-admin.6amtech.com/public/assets/admin/img/icons/category.png'} title={'Add New Category'}/>
      <div className='w-full border rounded-md gap-3 mt-5'>
        <form className='w-full p-5' onSubmit={categorySubmitHandler}>
          <div>
            <h1 className='text-sm mb-1'>Name (EN)</h1>
            <input onChange={categoryOnChangeHandler} type="text" name='name' placeholder='New Category' className='border w-full py-2 text-sm rounded-sm px-3' />
          </div>
          <div className='grid md:grid-cols-2 grid-cols-1 gap-5 items-end'>
            <div className='w-full pt-20'>
            <img src={`${ logoImage ? URL.createObjectURL(logoImage) : 'https://efood-admin.6amtech.com/public/assets/admin/img/400x400/img2.jpg'}`} className='w-36 m-auto rounded-lg' alt="" />
              <p className='text-xs mt-4'>Category Image * <span className='text-red-600'>( Ratio 1:1 )</span></p>
              <div onClick={selectLogoBtn} className='w-full border rounded mt-2 flex text-sm font-medium cursor-pointer'>
                <input onChange={logoInputChange} name='categoryLogo' ref={logoInput} type="file" hidden className='logoInput w-full py-2 border'/>
                <div className='w-4/5 py-[10px] px-3 text-sm text-zinc-700 font-normal'>Choose File</div>
                <div className='w-1/5 flex items-center justify-center border-l'>Browse</div>
              </div>
            </div>
            <div className='w-full pt-10'>
              <img src={`${BannerImage ? URL.createObjectURL(BannerImage) : 'https://efood-admin.6amtech.com/public/assets/admin/img/900x400/img1.jpg'}`} className='w-full h-[300px] border object-contain mix-blend-multiply rounded-lg' alt="" />
              <p className='text-xs mt-4'>Category Image * <span className='text-red-600'>( Ratio 1:1 )</span></p>
              <div onClick={selectBannerBtn} className='w-full border rounded mt-2 flex text-sm font-medium cursor-pointer'>
                <input ref={bannrInput} name='categoryBanner' onChange={bannerInputChange} type="file" hidden className='bannerInput w-full py-2 border'/>
                <div className='w-4/5 py-[10px] px-3 text-sm text-zinc-700 font-normal'>Choose File</div>
                <div className='w-1/5 flex items-center justify-center border-l'>Browse</div>
              </div>
            </div>
          </div>
          <div className='w-full flex justify-end gap-5 mt-5'>
            <button className='py-2 px-10 border rounded' type='reset'>Clear</button>
            <button className='py-2 px-6 border rounded bg-red-600 text-white' type='submit'>Submit</button>
          </div>
        </form>
        <CategoryTable/>  
      </div>
    </div>
  )
}

export default OrderList
