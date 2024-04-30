import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Axios } from '../../../Utils/Axios'
import { isAuthoticated } from '../../../Utils/JwtToken'
import Navbar from '../ClientComponent/Navbar'
import Footer from '../ClientComponent/Footer'
import CartBtn from '../ClientComponent/CartBtn'
import PorductCenterPart from './PorductCenterPart'
import Loader from '../../../Loader/Loader'

const ProductDetails = () => {
  const [id,setId] = useState('')
  const { search } = useLocation()
  const [product, setProduct] = useState({})
  const navigate = useNavigate()
  const getProductFind = async () => {
    const { data } = await Axios.post(`/api/product-details${search}`)
    setProduct(data)
  }
  useEffect(() => { getProductFind() }, [])
  console.log(product)

  return (
    isAuthoticated() ? <>
      <Navbar />
      
        {product.success ? <PorductCenterPart setId={setId} key={product._id} product={product.product}/> : <Loader heightLoader={'100vh'}/> }
      <CartBtn id={id}/>
      <Footer />
    </> : navigate('/login')
  )
}

export default ProductDetails
