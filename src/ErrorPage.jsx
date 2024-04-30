import React from 'react'
import Navbar from './Components/Client/ClientComponent/Navbar'
import Footer from './Components/Client/ClientComponent/Footer'

const ErrorPage = () => {
  return (
    <>
    <Navbar/>
      <div className='w-full h-screen flex items-center justify-center font-semibold text-2xl'>
          404, Page not Found!😒
      </div>
      <Footer/>
    </>
  )
}

export default ErrorPage
