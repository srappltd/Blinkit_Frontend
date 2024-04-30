import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { asyncBrandsRemove } from '../../../Store/Actions/AdminAction'

const BrandTable = () => {
  document.title = 'Blankit Admin - BrandList'
  const dispatch = useDispatch()
  const {brands} = useSelector(state=>state.AdminReducer)
  console.log(brands)
  const bandsEditHandler = brandid =>{
    console.log(brandid)

  }
  const bandsDeleteHandler = brandid =>{
    console.log(brandid)
    dispatch(asyncBrandsRemove(brandid))
  }
  return (
    <div className='w-full flex-shrink-0 py-3 overflow-x-auto'>
          <table className='md:w-full w-[700px] h-[20px] overflow-x-auto'>
              <thead className='w-full grid grid-cols-5 gap-3 py-2 border-y text-sm'>
                <th className='w-11 text-start pl-3'>
                  SL
                </th>
                <th className='w-full text-start pl-3'>
                Brand
                </th>
                <th className='w-full text-start pl-3'>
                Status
                </th>
                <th className='w-full text-start pl-3'>
                Brand Items
                </th>
                <th className='w-full text-start pl-3'>
                Actions
                </th>
                
              </thead>
              <tbody>
                {brands.success && brands.brands.map((brand,index)=>(
                  <tr className='w-full h-16 grid grid-cols-5 gap-3 py-2 items-center text-sm'>
                    <td className='pl-3'>{`${index < 9 ? "0" + (index + 1) : (index + 1)}`}</td>
                    <td className='pl-3 text-zinc-600'>{brand.title}</td>
                    <td className='pl-3 text-xs font-medium'>
                    <label className="inline-flex items-center cursor-pointer">
                      <input type="checkbox" hidden checked={brand.status ? true : false } className="sr-only peer"/>
                      <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                    </label>
                    </td>
                    <td className='pl-3 pr-3 py-1 rounded font-medium text-xs text-blue-500 bg-blue-100 w-fit'>{brand.products.length}</td>
                    <td className='pl-3 flex items-center gap-3'>
                      <div onClick={() => bandsEditHandler(brand._id)} className='w-7 h-7 cursor-pointer border flex items-center justify-center rounded border-green-300 text-green-500'><i className="ri-pencil-line"></i></div>
                      <div onClick={() => bandsDeleteHandler(brand._id)} className='w-7 cursor-pointer h-7 border flex items-center justify-center rounded border-red-300 text-red-500'><i className="ri-delete-bin-2-line "></i></div>
                    </td>
                  </tr>
                ))}

                
                
                
              </tbody>
          </table>
        </div>
  )
}

export default BrandTable
