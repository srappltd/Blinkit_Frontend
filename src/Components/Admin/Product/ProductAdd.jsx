import React, { useRef, useState } from 'react'
import Topbar from '../AdminComponent/Topbar'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { Axios } from '../../../Utils/Axios'
import { asyncProductAdd } from '../../../Store/Actions/AdminAction'
import { useNavigate } from 'react-router-dom'

const ProductAdd = () => {
  const productInput = useRef(null)
  const dispatch = useDispatch()
  const navigate =useNavigate()
  const [productLogo, setProductLogo] = useState("https://efood-admin.6amtech.com/public/assets/admin/img/icons/upload_img.png")
  const [productPictures, setProductPictures] = useState(null)
  const [productForm, setProductForm] = useState({
    title: "",
    subdescription: "",
    category: "",
    brand: "",
    mainPrice: "",
    sellingPrice: "",
    discount: "",
    availableFrom: "",
    availableTill: "",
    stockType: "",
    tag: '',
    unit: "",
    serialNumber: "",
    netWeight: "",
    seller: "",
    sellerFSSAI: "",
    support: "",
    returnPolicy: "",
    description: "",
  });
  const productLogoBtn = () => {
    productInput.current.click()
  }
  const productLogoOnChangeBtn = (e) => {
    setProductLogo(URL.createObjectURL(e.target.files[0]))
    setProductPictures(e.target.files)
  }

  const productOnchangeHandler = (e) => {
    const { name, value } = e.target
    setProductForm({ ...productForm, [name]: value })
  }
  const productFormSubmitHandler = async (e) => {
    e.preventDefault()

    const { title, subdescription, category, brand, mainPrice, sellingPrice, discount, availableFrom, availableTill, stockType, tag,
      unit, serialNumber, netWeight, seller, sellerFSSAI, support, returnPolicy, description, } = productForm

    if (title && subdescription && category && brand && mainPrice && sellingPrice && discount && availableFrom && availableTill && stockType && tag &&
      unit && serialNumber && netWeight && seller && sellerFSSAI && support && returnPolicy && description) {
      const formData = new FormData()
      for (let index = 0; index < productPictures.length; index++) {
        const file = productPictures[index];
        formData.append("pictures", file)
      }
      Object.entries(productForm).forEach(([key, value]) => {
        formData.append(key, value);
      });
      dispatch(asyncProductAdd(formData))
      navigate("/admin/products")
    }else{
      toast.error("All fill the fields required!")
    }
  }

  const { brands, categories } = useSelector(state => state.AdminReducer)
  return (
    <div className='w-full'>
      <Topbar icon={'https://efood-admin.6amtech.com/public/assets/admin/img/icons/category.png'} title={'Add New Product'} />
      <form id='productformform' className='w-full gap-3 mt-5' onSubmit={productFormSubmitHandler} encType="multipart/form-data">
        <div className='w-full grid gap-5 md:grid-cols-2 grid-cols-1'>
          <div className='w-full border  p-4 rounded-md'>
            <div className='text-sm'>
              <h1>Name (EN)</h1>
              <input onChange={productOnchangeHandler} type="text" className='w-full  font-medium mt-1 py-2 border rounded px-3' placeholder='New Product' name="title" id="" />
            </div>
            <div className='text-sm mt-5'>
              <h1>Short Description (EN)</h1>
              <textarea onChange={productOnchangeHandler} type="text" className=' w-full font-medium mt-1 resize-none py-2 border h-[150px] rounded px-3' name="subdescription" id="" placeholder='Short Description (+200 characters)'></textarea>
            </div>

          </div>
          <div className='w-full border  p-4 rounded-md relative h-[280px] md:h-full'>
            <h1 className='text-sm'>Product Image * ( Ratio 1:1 )</h1>
            <div onClick={productLogoBtn} className='w-[170px] h-[170px] rounded overflow-hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer'>
              <img src={productLogo} className='w-full h-full object-contain' alt="" />
              <input type="file" ref={productInput} name='pictures' onChange={productLogoOnChangeBtn} multiple hidden />
            </div>
          </div>
        </div>
        <div className='w-full grid gap-5 md:grid-cols-2 grid-cols-1 mt-5'>
          <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-5 border  p-4 rounded-md'>
            <div className='text-sm'>
              <h1>Brand*</h1>
              <select onChange={productOnchangeHandler} className='w-full mt-1 py-2  border rounded px-3' name="brand" id="">
                <option value="">Select Brand</option>
                {brands.success && brands.brands.map(brand => (
                  <option value={brand._id}>{brand.title}</option>
                ))}
              </select>
            </div>
            <div className='text-sm'>
              <h1>Category*</h1>
              <select onChange={productOnchangeHandler} className='w-full mt-1 py-2  border rounded px-3' name="category" id="">
                <option value="">Select Category</option>
                {categories.success && categories.categories.map(category => (
                  <option value={category._id}>{category.name}</option>
                ))}
              </select>
            </div>


          </div>
          <div className='w-full grid grid-cols-2 gap-5 border  p-4 rounded-md'>
            <div className='text-sm'>
              <h1>Main Price*</h1>
              <input onChange={productOnchangeHandler} type='text' className=' w-full mt-1 py-2 border rounded px-3' name="mainPrice" placeholder='EX : 100' id="" />
            </div>
            <div className='text-sm'>
              <h1>Selling Price*</h1>
              <input onChange={productOnchangeHandler} type='text' className=' w-full mt-1 py-2 border rounded px-3' name="sellingPrice" placeholder='EX : 80' id="" />
            </div>

            <div className='text-sm'>
              <h1>Discount Type</h1>
              <input onChange={productOnchangeHandler} type='text' className='w-full mt-1 py-2  border rounded px-3' name="discount" placeholder='EX : 5%' id="" />
            </div>
            <div className='text-sm'>
              <h1>Available From</h1>
              <input onChange={productOnchangeHandler} type='time' className='w-full mt-1 py-2  border rounded px-3' name="availableFrom" id="" />
            </div>
            <div className='text-sm'>
              <h1>Available Till</h1>
              <input onChange={productOnchangeHandler} type='time' className='w-full mt-1 py-2  border rounded px-3' name="availableTill" id="" />
            </div>

          </div>
        </div>
        <div className='w-full grid md:grid-cols-2 grid-cols-1 mt-5 gap-5 border  p-4 rounded-md'>
          <div className='text-sm'>
            <h1>Stock Type</h1>
            <select onChange={productOnchangeHandler} className='w-full mt-1 py-2  border rounded px-3' name="stockType" id="">
              <option disabled value="">---Select---</option>
              <option value="Unlimited">Unlimited</option>
              <option value="Daily">Daily</option>
              <option value="Fixed">Fixed</option>
            </select>
          </div>
          <div className='text-sm'>
            <h1>Search Tag</h1>
            <textarea onChange={productOnchangeHandler} type='text' className='w-full mt-1 py-2  border rounded px-3 resize-none h-[150px]' placeholder='Enter tag' name="tag" id=""></textarea>
          </div>
        </div>
        <h1 className='mt-5 font-semibold text-lg'>Product Details</h1>
        <div className='w-full grid grid-cols-2 gap-5 mt-[2px] border p-4 rounded-md'>
          <div className='text-sm'>
            <h1>Unit*</h1>
            <input onChange={productOnchangeHandler} type='text' className=' w-full mt-1 py-2 border rounded px-3' name="unit" placeholder='EX : 250 g' id="" />
          </div>
          <div className='text-sm'>
            <h1>Serial No.</h1>
            <input onChange={productOnchangeHandler} type='text' className='w-full mt-1 py-2  border rounded px-3' name="serialNumber" placeholder='EX : 5%' id="" />
          </div>
          <div className='text-sm'>
            <h1>Net Weight</h1>
            <input onChange={productOnchangeHandler} type='text' className=' w-full mt-1 py-2 border rounded px-3' name="netWeight" placeholder='EX : 300 g' id="" />
          </div>
          <div className='text-sm'>
            <h1>Seller</h1>
            <input onChange={productOnchangeHandler} type='text' className='w-full mt-1 py-2  border rounded px-3' name="seller" placeholder='EX : Seller' id="" />
          </div>
          <div className='text-sm'>
            <h1>Seller FSSAI</h1>
            <input onChange={productOnchangeHandler} type='text' className=' w-full mt-1 py-2 border rounded px-3' name="sellerFSSAI" placeholder='EX :  Seller FSSAI' id="" />
          </div>
          <div className='text-sm'>
            <h1>Support</h1>
            <input onChange={productOnchangeHandler} type='text' className='w-full mt-1 py-2  border rounded px-3' name="support" placeholder='EX : Email' id="" />
          </div>

          <div className='text-sm'>
            <h1>Return Policy*</h1>
            <textarea onChange={productOnchangeHandler} type='text' className=' w-full mt-1 py-2 border rounded px-3' name="returnPolicy" placeholder='EX : Return Policy' id=""></textarea>
          </div>
          <div className='text-sm'>
            <h1>Description*</h1>
            <textarea onChange={productOnchangeHandler} type='text' className=' w-full mt-1 py-2 border rounded px-3' name="description" placeholder='EX : Description' id=""></textarea>
          </div>



        </div>
        <div className='flex items-center justify-end mt-5 gap-3'>
          <button className='py-[6px] px-10 border rounded flex items-center gap-2' type='reset'>Clear</button>
          <button className='py-[6px] px-7 border rounded flex items-center gap-2 bg-red-600 text-white' type='submit'>Submit</button>
        </div>
      </form>
    </div>
  )
}

export default ProductAdd
