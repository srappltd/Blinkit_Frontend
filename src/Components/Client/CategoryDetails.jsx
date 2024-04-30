import React, { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import CategoryDetailCard from './ClientComponent/CategoryDetailCard'
import Navbar from './ClientComponent/Navbar'
import Footer from './ClientComponent/Footer'
import CartBtn from './ClientComponent/CartBtn'
import BrandCards from './ClientComponent/BrandCards'
import { Axios } from '../../Utils/Axios'
import { isAuthoticated } from '../../Utils/JwtToken'

const CategoryDetails = () => {
    const [products, setProducts] = useState([])
    const [uniqueBrands, setUniqueBrands] = useState([])
    const { pathname, search } = useLocation()
    const navigate = useNavigate()

    const getProducts = async ()=>{
        const {data} = await Axios.post(`/api/${pathname}`)
        if(data.success) setProducts(data.categoryProducts)
    }
    useEffect(()=>{
        getProducts()
    },[])
    
    const getFilterBrand = async () =>{
        const {data} = await Axios.post(`/api${pathname}`)
        if(data.success) setUniqueBrands(data.uniqueBrands)
    }
    const getBrandProduct = async () =>{
        const {data} = await Axios.post(`/api${pathname+search}`)
        if(search){
            setProducts(data.brandProducts)
        }else{
            setProducts(data.categoryProducts)
        }
    }
    
    useEffect(()=>{
        if(search != 'undefined'){
                getFilterBrand()
                getBrandProduct()
            }
    },[search])

    return (
        isAuthoticated()? <>
            <Navbar />
            <div className='w-full mt-16'>
                <div className='w-full flex overflow-x-auto md:grid fixed top-16 grid-cols-8 whitespace-nowrap md:h-10 z-40 items-center bg-white border-b md:px-20 px-5 md:shadow-[0_2px_5px_rgba(220,220,220,5)]'>
                    <Link className='py-2 px-4 hover:bg-slate-100 text-slate-600 font-medium text-sm'>Vegetables & Fruits</Link>
                    <Link className='py-2 px-4 hover:bg-slate-100 text-slate-600 font-medium text-sm'>Dairy & Breakfast</Link>
                    <Link className='py-2 px-4 hover:bg-slate-100 text-slate-600 font-medium text-sm'>Munchies</Link>
                    <Link className='py-2 px-4 hover:bg-slate-100 text-slate-600 font-medium text-sm'>Cold Drinks & Juices</Link>
                    <Link className='py-2 px-4 hover:bg-slate-100 text-slate-600 font-medium text-sm'>Instant & Frozen Food</Link>
                    <Link className='py-2 px-4 hover:bg-slate-100 text-slate-600 font-medium text-sm'>Bakery & Biscuits</Link>
                    <Link className='py-2 px-4 hover:bg-slate-100 text-slate-600 font-medium text-sm'>Vegetables & Fruits</Link>
                    <Link className='py-2 px-4 hover:bg-slate-100 text-slate-600 font-medium text-sm'>More <i className="ri-arrow-down-s-line"></i></Link>
                </div>
                <div className='w-full md:px-20 mt-24 md:flex pt-2'>
                    <BrandCards uniqueBrands={uniqueBrands} />
                    <div className='cardbox md:w-[75%] w-full h-full'>
                        <div className='w-full md:h-14 border-b flex md:flex-row flex-col gap-1 md:gap-0 md:items-center justify-between px-5 py-2 md:py-0'>
                            <h1 className='font-bold md:text-lg text-base text-slate-700'>Buy { products == 'undefined' ? products.name || products.title : '' }</h1>
                            <div className='flex items-center gap-3'>
                                <span className='font-medium md:text-xs text-base text-slate-600 whitespace-nowrap'>Sort By</span>
                                <select name="" id="" className='md:py-1 py-2 md:w-fit w-full px-4 border font-medium bg-white outline-none text-green-600 border-green-700/20 rounded'>
                                    <option value="">Relevance</option>
                                    <option value="">Price (High to Low)</option>
                                    <option value="">Price (Low to High)</option>
                                    <option value="">Discount (High to Low)</option>
                                    <option value="">Discount (Low to High)</option>
                                    <option value="">Name (A to Z)</option>
                                </select>

                            </div>
                        </div>
                        <CategoryDetailCard products={products} />

                    </div>
                </div>
            </div>
            <CartBtn />
            <Footer />
        </> : navigate("/login")
    )
}

export default CategoryDetails
