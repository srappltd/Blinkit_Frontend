import React, { useRef, useState } from 'react'
import BrandTable from './BrandTable'
import Topbar from '../AdminComponent/Topbar'
import { toast } from 'react-toastify'
import { Axios } from '../../../Utils/Axios'
import { useDispatch } from 'react-redux'
import { asyncBrandsAdd } from '../../../Store/Actions/AdminAction'

function Brand() {
  const logoInput = useRef(null)
  const dispatch = useDispatch()
  const [logoImage,setLogoImage] = useState(null)
  const [brandLogo,setbrandLogo] = useState(null)
  const [brandForm,setBrandForm] = useState({title:""})
  const selectLogoBtn = () =>{
    logoInput.current.click()
  }
  const logoInputChange = (e)=>{
    setLogoImage(URL.createObjectURL(e.target.files[0]))
    setbrandLogo(e.target.files[0])
  }
  const brandFormOnChangeHandler = (e) =>{
    const {name,value} = e.target
    setBrandForm({...brandForm,[name]:value})
  }
  const brandFormSubmitHandler = async (e)=>{
    e.preventDefault()
    if(logoImage && brandForm.title){
      const formData = new FormData()
      formData.append("brandImage",brandLogo)

      Object.entries(brandForm).forEach(([key,value])=>{
        formData.append(key,value)
      })
      dispatch(asyncBrandsAdd(formData))
    }else{
      return toast.error("Please fill all the fields required!")
    }
  }
  return (
    <div className='w-full'>
      <Topbar icon={'https://efood-admin.6amtech.com/public/assets/admin/img/icons/category.png'} title={'Add New Brand'}/>
      <div className='w-full border rounded-md gap-3 mt-5'>
        <form className='w-full p-5' onSubmit={brandFormSubmitHandler} encType="multipart/form-data">
          <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-5'>
            <div className='w-full'>
              <h1 className='text-sm mb-1'>Brand Name (EN)</h1>
              <input type="text" name='title' onChange={brandFormOnChangeHandler} placeholder='New Brand' className='border outline-none w-full py-2 text-sm rounded-sm px-3' />
            </div>
          <div className='w-full pt-20'>
            <img src={`${ logoImage ? logoImage : 'https://efood-admin.6amtech.com/public/assets/admin/img/400x400/img2.jpg'}`} className='w-36 m-auto rounded-lg' alt="" />
              <p className='text-xs mt-4'>Brand Image * <span className='text-red-600'>( Ratio 1:1 )</span></p>
              <div onClick={selectLogoBtn} className='w-full border rounded mt-2 flex text-sm font-medium cursor-pointer'>
                <input onChange={logoInputChange} name='brandImage' ref={logoInput} type="file" hidden className='logoInput w-full py-2 border'/>
                <div className='w-4/5 py-[10px] px-3 text-sm text-zinc-700 font-normal'>Choose File</div>
                <div className='w-1/5 flex items-center justify-center border-l'>Browse</div>
              </div>
            </div>
          </div>
          <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-5'>
          </div>
          
          <div className='w-full flex md:justify-end justify-between gap-5 mt-5 text-sm'>
            <button className='py-2 px-10 border rounded' type='reset'>Clear</button>
            <button className='py-2 px-6 border rounded bg-red-600 text-white' type='submit'>Submit</button>
          </div>
        </form>
        <BrandTable/>
      </div>
    </div>
  )
}

export default Brand
