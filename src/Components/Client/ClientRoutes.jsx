import React from 'react'
import Navbar from './ClientComponent/Navbar'
import {Route,Routes,useLocation} from 'react-router-dom'
import Deshboard from './Deshboard'
import Location from './ClientComponent/SelectLocation'
import Footer from './ClientComponent/Footer'
import CategoryDetails from './CategoryDetails'
import ProductDetails from './ProductDetails/ProductDetails'
import Login from './Login'
import Register from './Register'
import Cart from './Cart'
import ErrorPage from '../../ErrorPage'
import Acount from './Acount/Acount'
import MyProfile from './Acount/MyProfile'
import MyAddress from './Acount/MyAddress'
import MyOrders from './Acount/MyOrders'
import MyWallet from './Acount/MyWallet'
import NewAddress from './Acount/NewAddress'
import CartBtn from './ClientComponent/CartBtn'
const ClientRoutes = () => {
  const {pathname} = useLocation()
  return (
    <div className='w-full'>
      {pathname.split("/")[1] != 'register' && pathname.split("/")[1] != 'login' ? <Navbar/> : '' }
        <Routes>
          <Route path='/' Component={Deshboard}/>
          <Route path='/cn' Component={CategoryDetails} />
          <Route path='/product-details' Component={ProductDetails} />
          <Route path='/cart' Component={Cart} />
          <Route path='/login' Component={Login} />
          <Route path='/register' Component={Register} />
          <Route path='/account' Component={Acount}>
            <Route path='/account/profile' Component={MyProfile}/>
            <Route path='/account/my-address' Component={MyAddress}/>
            <Route path='/account/new-address' Component={NewAddress}/>
            <Route path='/account/my-orders' Component={MyOrders}/>
            <Route path='/account/my-wallet' Component={MyWallet}/>
          </Route>
          <Route path='*' Component={ErrorPage} />
        </Routes>
        {pathname.split("/")[1] != 'cart' ? <CartBtn/> : "" }
        
        {pathname.split("/")[1] != 'register' && pathname.split("/")[1] != 'login' ? <Footer/> : '' }
        
    </div>
  )
}

export default ClientRoutes
