import React, { useEffect } from 'react'
import {Route,Routes, useLocation} from 'react-router-dom'
import Cookie from 'js-cookie'
import ClientRoutes from './Components/Client/ClientRoutes'
import { ScreenResizeDisable } from './Utils/ScreenResizeDisable'
import ClientDeshboard from './Components/Client/Deshboard'
import CategoryDetails from './Components/Client/CategoryDetails'
import ProductDetails from './Components/Client/ProductDetails/ProductDetails'
import Cart from './Components/Client/Cart'
import Login from './Components/Client/Login'
import Register from './Components/Client/Register'
import Acount from './Components/Client/Acount/Acount'
import MyProfile from './Components/Client/Acount/MyProfile'
import MyAddress from './Components/Client/Acount/MyAddress'
import NewAddress from './Components/Client/Acount/NewAddress'
import MyOrders from './Components/Client/Acount/MyOrders'
import MyWallet from './Components/Client/Acount/MyWallet'

// admin pages
import Home from './Components/Admin/Home'
import SignIn from './Components/Admin/Login'
import AdminDeshboard from './Components/Admin/Deshboard/Deshboard'
import OrderList from './Components/Admin/Orders/OrderList'
import Category from './Components/Admin/Category/Category'
import SubCategory from './Components/Admin/Category/SubCategory'
import Brand from './Components/Admin/Brand/Brand'
import Product from './Components/Admin/Product/Product'
import ProductAdd from './Components/Admin/Product/ProductAdd'
import ProductReview from './Components/Admin/Product/ProductReview'
import Banner from './Components/Admin/Banner/Banner'
import Coupon from './Components/Admin/Coupon/Coupon'
import UsersList from './Components/Admin/Users/UsersList'
import Notification from './Components/Admin/Notification/Notification'
import PaymentList from './Components/Admin/VerifiyPayment/PaymentList'
import Navbar from './Components/Client/ClientComponent/Navbar'
import ErrorPage from './ErrorPage'
import Setting from './Components/Admin/Setting'
import CartBtn from './Components/Client/ClientComponent/CartBtn'
import Footer from './Components/Client/ClientComponent/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { asyncCheckClient } from './Store/Actions/isLoggedInAction'
import { ToastContainer } from 'react-toastify'

const App = () => {
  const dispatch = useDispatch()
  const {pathname} = useLocation()
  useEffect(()=>{
    ScreenResizeDisable()
    dispatch(asyncCheckClient())
  },[])
  const {isCheckClient} = useSelector(state=>state.IsLoggoedInReducer)
  console.log(isCheckClient)
  return (
    <div className='w-fullselect-none select-none'>
      <ToastContainer/>
      
      {/* {pathname.split("/")[1] != 'register' && pathname.split("/")[1] != 'login' ? <Navbar/> : '' } */}
        <Routes>
          {/* // client  */}
          <Route path='/' Component={ClientDeshboard}/>
          <Route path='/cn/:id' Component={CategoryDetails} />
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
          
          {/* // admin panel  */}
          <Route path='/admin/login' Component={SignIn} />
          <Route path='/admin' Component={Home}>
            <Route path='/admin/deshboard' Component={AdminDeshboard}/>
            <Route path='/admin/orders' Component={OrderList}/>
            <Route path='/admin/category' Component={Category}/>
            <Route path='/admin/sub-category' Component={SubCategory}/>
            <Route path='/admin/brand' Component={Brand}/>
            <Route path='/admin/products' Component={Product}/>
            <Route path='/admin/add-product' Component={ProductAdd}/>
            <Route path='/admin/product-review/:id' Component={ProductReview}/>
            <Route path='/admin/banner' Component={Banner}/>
            <Route path='/admin/coupon' Component={Coupon}/>
            <Route path='/admin/notification' Component={Notification}/>
            <Route path='/admin/user-list' Component={UsersList}/>
            <Route path='/admin/add-user' Component={Notification}/>
            <Route path='/admin/verify-payment' Component={PaymentList}/>
            {/* //setting  */}
            <Route path='/admin/setting' Component={Setting}/>
          </Route>
        </Routes>
        
        {/* {pathname.split("/")[1] != 'cart' ?? pathname.split("/")[1] != 'admin'  ? <CartBtn/> : "" } */}
        
        {/* {pathname.split("/")[1] != 'register' && pathname.split("/")[1] != 'login' ? <Footer/> : '' } */}
    </div>
  )
}

export default App
