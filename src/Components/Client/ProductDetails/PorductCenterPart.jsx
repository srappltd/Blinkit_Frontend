import React from 'react'
import DetailCard from './DetailCard'
import ProductTitle from './ProductTitle'
import ProductDetailBox from './ProductDetailBox'

const PorductCenterPart = ({product,setId}) => {
    return (
        <div className='w-full md:px-20 px-5 mt-16 grid md:grid-cols-2 grid-cols-1'>
            <div className='w-full md:border-r mt-2 md:border-b-0'>
                <h2 className='font-medium text-xs cursor-pointer text-slate-600 line-clamp-1'><span className='hover:text-green-500'>Home</span> / <span className='hover:text-green-500'>{product.category.name }</span> / <span className='hover:text-green-500'>{product.title}</span></h2>
                <DetailCard product={product} />
                <ProductTitle setId={setId} product={product} />
            </div>
            <div className='w-full relative md:pl-10 md:pr-20 md:py-7 py-4 flex flex-col items-start '>

                <div className='w-full md:border-none border-t pt-3 md:pt-0'>
                    <h1 className='font-semibold md:text-2xl text-xl'>Product Details</h1>
                    <div className='w-full flex flex-col gap-3 mt-3 pr-4'>
                        {/* {product.productDetails.serialNumber} */}
                        <ProductDetailBox items={{title:"Unit",des:product.productDetails.unit}} />
                        <ProductDetailBox items={{title:"Country Of Origin",des:'India'}} />
                        <ProductDetailBox items={{title:"FSSAI License",des:product.productDetails.serialNumber}} />
                        <ProductDetailBox items={{title:"Customer Care Details",des:product.productDetails.support}} />
                        <ProductDetailBox items={{title:"Return Policy",des:product.productDetails.returnPolicy}} />
                        <ProductDetailBox items={{title:"Expiry Date",des:'Please refer to the packaging of'}} />
                        <ProductDetailBox items={{title:"Net Weight",des:product.productDetails.netWeight}} />
                        <ProductDetailBox items={{title:"Seller",des:product.productDetails.seller}} />
                        <ProductDetailBox items={{title:"Seller FSSAI",des:product.productDetails.sellerFSSAI}} />
                        <ProductDetailBox items={{title:"Description",des:product.productDetails.description}} />
                        <ProductDetailBox items={{title:"Disclaimer",des:'Every effort is made to maintain the accuracy of all information. However, actual product packaging and materials may contain more and/or different information. It is recommended not to solely rely on the information presented.'}} />
                        
                    </div>
                </div>
            </div>
      </div>
        
    )
}

export default PorductCenterPart
