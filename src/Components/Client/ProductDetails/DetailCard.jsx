import React, { useState } from 'react'
import { baseUrl } from '../../../Utils/Axios'

const DetailCard = ({product}) => {
  const [pictures,setPictures] = useState(product.pictures)
  const [pictureView,setPictureView] = useState(baseUrl+pictures[0])
  console.log(pictureView)
  return (
    <div className='w-full flex items-center md:mt-10 mt-2 flex-col border-b pb-10'>
          <div className='md:w-[45vh] md:h-[45vh] lg:h-[50vh] xl:w-[60vh] xl:h-[60vh] rounded md:rounded-none overflow-hidden p-1 border-2 border-[#e6e6e672]'>
            <img src={pictureView} className='w-full h-full cursor-pointer object-contain' alt="" />
          </div>
          <div className='md:w-[80%] w-full h-[9vh] relative md:mt-5 mt-3' >
            <div className='h-full flex items-center gap-3 w-full overflow-x-auto py-1'>
              {pictures.map((picture,index)=><img onClick={()=> 0 < pictures.length && setPictureView(baseUrl+pictures[index])} key={picture+'gh'} src={baseUrl+picture} className='h-full rounded cursor-pointer' alt="" />)}
            </div>
            <div className='back w-8 h-8 border absolute top-1/2 -right-4 rounded-full text-2xl md:flex hidden items-center justify-center -translate-y-1/2 bg-white shadow-[3px_3px_5px_rgba(200,200,200,.5)]'>
                <i className="ri-arrow-right-s-line"></i>
            </div>
            <div className='prev w-8 h-8 border absolute top-1/2 -left-4 rounded-full text-2xl md:flex hidden items-center justify-center -translate-y-1/2 bg-white shadow-[-3px_3px_5px_rgba(200,200,200,.5)]'>
                <i className="ri-arrow-left-s-line"></i>
            </div>
          </div>
        </div>
  )
}

export default DetailCard
