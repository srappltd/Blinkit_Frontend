import React from 'react'
import { Link } from 'react-router-dom'

const FooterTop = () => {
  return (
    <div className='w-full gap-5 md:flex'>
        <div className='md:w-[40%] w-full'>
            <h1 className='md:font-semibold font-bold text-lg'>Useful Links</h1>
            <div className='w-full grid grid-cols-3 mt-2'>
                <Link to={'/'} className='text-slate-600 py-1 px-3 font-medium'>About</Link>
                <Link to={'/'} className='text-slate-600 py-1 px-3 font-medium'>Privacy</Link>
                <Link to={'/'} className='text-slate-600 py-1 px-3 font-medium'>Terms</Link>
                <Link to={'/'} className='text-slate-600 py-1 px-3 font-medium'>Partner</Link>
                <Link to={'/'} className='text-slate-600 py-1 px-3 font-medium'>Careers</Link>
                <Link to={'/'} className='text-slate-600 py-1 px-3 font-medium'>Express</Link>
                <Link to={'/'} className='text-slate-600 py-1 px-3 font-medium'>BLog</Link>
                <Link to={'/'} className='text-slate-600 py-1 px-3 font-medium'>Press</Link>
                <Link to={'/'} className='text-slate-600 py-1 px-3 font-medium'>Security</Link>
                <Link to={'/'} className='text-slate-600 py-1 px-3 font-medium'>Warehouse</Link>
                <Link to={'/'} className='text-slate-600 py-1 px-3 font-medium'>Lead</Link>
                <Link to={'/'} className='text-slate-600 py-1 px-3 font-medium'>COntact</Link>
                <Link to={'/'} className='text-slate-600 py-1 px-3 font-medium'>Resourse</Link>
            </div>

        </div>
        <div className='md:w-[60%] w-full mt-5 md:mt-0'>
            <h1 className='md:font-semibold font-bold justify-between md:justify-start text-lg flex gap-6 items-center'>Categories <Link className='text-green-500 font-medium text-sm'>see all</Link></h1>
            <div className='w-full grid md:grid-cols-3 grid-cols-2 mt-2'>
                <Link to={'/'} className='text-slate-600 py-1 px-3 font-medium'>Vegetables & Fruits</Link>
                <Link to={'/'} className='text-slate-600 py-1 px-3 font-medium'>Cold Drinks & Juices</Link>
                <Link to={'/'} className='text-slate-600 py-1 px-3 font-medium'>Bakery & Biscuits</Link>
                <Link to={'/'} className='text-slate-600 py-1 px-3 font-medium'>Dry Fruits, Masala & Oil</Link>
                <Link to={'/'} className='text-slate-600 py-1 px-3 font-medium'>Paan Corner</Link>
                <Link to={'/'} className='text-slate-600 py-1 px-3 font-medium'>Pharma & Wellness</Link>
                <Link to={'/'} className='text-slate-600 py-1 px-3 font-medium'>Personal Care</Link>
                <Link to={'/'} className='text-slate-600 py-1 px-3 font-medium'>Beauty & Cosmetics</Link>
                <Link to={'/'} className='text-slate-600 py-1 px-3 font-medium'>Toys & Games</Link>
                <Link to={'/'} className='text-slate-600 py-1 px-3 font-medium'>Print Store</Link>
                <Link to={'/'} className='text-slate-600 py-1 px-3 font-medium'>Magazines</Link>
                <Link to={'/'} className='text-slate-600 py-1 px-3 font-medium'>Ice Creams & Frozen Desserts</Link>
                <Link to={'/'} className='text-slate-600 py-1 px-3 font-medium'>Pet Care</Link>
                <Link to={'/'} className='text-slate-600 py-1 px-3 font-medium'>Home & Office</Link>
                <Link to={'/'} className='text-slate-600 py-1 px-3 font-medium'>Chicken, Meat & Fish</Link>
                <Link to={'/'} className='text-slate-600 py-1 px-3 font-medium'>Tea, Coffee & Health Drinks</Link>
                <Link to={'/'} className='text-slate-600 py-1 px-3 font-medium'>Munchies</Link>
                <Link to={'/'} className='text-slate-600 py-1 px-3 font-medium'>Atta, Rice & Dal</Link>
                <Link to={'/'} className='text-slate-600 py-1 px-3 font-medium'>Baby Care</Link>
                <Link to={'/'} className='text-slate-600 py-1 px-3 font-medium'>Books</Link>
            </div>

        </div>
        
      </div>
  )
}

export default FooterTop
