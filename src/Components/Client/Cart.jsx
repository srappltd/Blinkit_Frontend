import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import useRazorpay from 'react-razorpay'
import Footer from './ClientComponent/Footer'
import Navbar from './ClientComponent/Navbar'
import { isAuthoticated } from '../../Utils/JwtToken'
import { Axios, baseUrl } from '../../Utils/Axios'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'

const Cart = () => {
    const [Razorpay] = useRazorpay()
    const [selectAddress, setSelectAddress] = useState(null)
    const [addresss, setAddresss] = useState({})
    const [price, setPrice] = useState({})
    const [carts, setcarts] = useState({})
    const priceRef = useRef()
    const navigate = useNavigate()
    const selectAddressHandler = (e) => {
        document.querySelectorAll(".selectIcon").forEach(elem => {
            elem.classList.remove("bg-green-600")
        })
        e.target.querySelector(".selectIcon").classList.toggle('bg-green-600')
        setSelectAddress(e.target.dataset.address)
    }
    const getCartData = async () => {
        const { data } = await Axios.post("/api/client/cart/allproduct")
        setcarts(data)
    }
    const getAddress = async () => {
        const { data } = await Axios.post("/api/client/address/all-address")
        setAddresss(data)
    }
    const cartItemIncrement = async (id) => {
        const { data } = await Axios.get(`/api/client/cart/product/increase/${id}`)
        if (data.success) {
            setPrice(data)
        }
    }
    const cartItemDicrement = async (id) => {
        const { data } = await Axios.get(`/api/client/cart/product/dicrease/${id}`)
        if (data.success) {
            setPrice(data)
        }
    }

    const { isCheckClient } = useSelector(state => state.IsLoggoedInReducer)

    const getPaymentHandler = async () => {
        try {
            if (!selectAddress) {
                return toast.info("Please select address!")
            }
            if(carts.carts.length == 0){
                return toast.info("Please Add to Cart Product!😒")
            }
            const tostId = toast.loading("Processing...", {
                position: "top-center",
            })
            const { data } = await Axios.post("/api/payment/create/orderid")
            if (!data.success) return toast.info("Transaction Faild!")
            const { id, amount } = data.orderid
            const options = {
                key: "rzp_test_DY07n0foL4nvsZ", // Enter the Key ID generated from the Dashboard
                amount: amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
                currency: "INR",
                name: "SR Shoping Limited",
                description: "Test Transaction",
                image: "https://blinkit.com/48167d399a1881b810d7.png",
                order_id: id, //This is a sample Order ID. Pass the `id` obtained in the response of createOrder().
                handler: async function (response) {
                    const { data } = await Axios.post('/api/payment/payment/verify', { response, address: selectAddress })
                    if (data.success && data.verifyPayment) {
                        toast(data.message)
                        toast.done(tostId)
                        // navigate("/account/my-orders")
                    }
                },
                prefill: {
                    name: isCheckClient.success && isCheckClient.client.username,
                    email: isCheckClient.success && isCheckClient.client.email,
                    contact: isCheckClient.success && isCheckClient.client.mobile,
                },
                notes: {
                    address: "Razorpay Corporate Office",
                },
                theme: {
                    color: "#3399cc",
                },
            };

            const rzp1 = new Razorpay(options);
            rzp1.on("payment.failed", function (response) {
                toast.error(response.error.description)
                toast.done(tostId)
            });

            rzp1.open();
        } catch (error) {
            toast.info(error.response.data.message)
        }
    }

    useEffect(() => {
        getCartData()
        getAddress()
    }, [price])
    return (
        isAuthoticated() ? <>
            <Navbar />
            <div className='sm:w-2/5 w-full sm:px-0 px-3 m-auto mt-20'>
                <h1 className='font-semibold text-lg'>My Cart</h1>
                <div className=' mt-3 bg-sky-50 rounded-lg w-full p-3'>
                    <div className='flex items-center gap-3'>
                        <img src="https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=180/assets/eta-icons/15-mins-filled.png" className='w-10 mix-blend-multiply' alt="" />
                        <div className='flex flex-col'>
                            <h1 className='font-semibold text-base leading-[1.2]'>Delivery in 10 minutes</h1>
                            <span className='text-xs font-medium text-zinc-700'>Shipment of {carts.success && carts.carts.length} items</span>
                        </div>
                    </div>
                    <div className='w-full flex flex-col mt-5 gap-4'>
                        {carts.success && carts.carts.map(cart => (
                            <div key={cart._id} className='card w-full flex items-center gap-2 relative'>
                                <div className='w-16 h-16 border rounded flex items-center justify-center shrink-0'>
                                    <img src={baseUrl + cart.product.pictures[0]} className='mix-blend-multiply' alt="" />
                                </div>
                                <div className=''>
                                    <h1 className='font-semibold mb-1 text-sm line-clamp-2'>{cart.product.title}</h1>
                                    <span className='text-xs font-medium text-zinc-700'>60 g</span>
                                    <h2 className='font-bold mt-1'>₹{cart.product.sellingPrice}</h2>
                                </div>
                                <div className='flex items-center justify-center gap-3 px-3 py-2 font-bold text-xs rounded bg-green-700 text-white absolute md:bottom-3 bottom-1 md:right-3 right-1'>
                                    <i onClick={() => cartItemDicrement(cart._id)} className="ri-subtract-line cursor-pointer"></i>
                                    <span ref={priceRef} >{cart.quantity}</span>
                                    <i onClick={() => cartItemIncrement(cart._id)} className="ri-add-fill cursor-pointer"></i>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
                <div className=' mt-3 bg-sky-50 rounded-lg w-full p-3'>
                    <h1 className='font-semibold text-base leading-[1.2]'>Bill details</h1>
                    <div className='w-full mt-4 text-xs font-medium text-zinc-600'>
                        <div className='flex justify-between '>
                            <h1><i className="ri-article-fill"></i> Item total</h1>
                            <span>₹{carts.totalPrice}</span>
                        </div>
                        <div className='flex justify-between mt-1'>
                            <h1><i className="ri-bike-fill"></i> Delivery charge</h1>
                            <span className='text-blue-600'><del className='text-zinc-700'>₹0</del> FREE</span>
                        </div>
                        <div className='flex justify-between mt-3 text-sm text-zinc-900'>
                            <h1><i className="ri-article-fill"></i> Grand total</h1>
                            <span>₹{carts.totalPrice}</span>
                        </div>

                    </div>


                </div>
                <div className=' mt-3 bg-sky-50 rounded-lg w-full p-3'>
                    <h1 className='font-semibold text-sm leading-[1.2]'>Cancellation Policy</h1>
                    <p className='font-medium text-zinc-600 mt-2 text-xs'>Orders cannot be cancelled once packed for delivery. In case of unexpected delays, a refund will be provided, if applicable.</p>
                </div>
                <div className=' mt-3 bg-sky-50 rounded-lg w-full p-3'>
                    <h1 className='font-semibold'>Select delivery address</h1>
                    <Link to={'/account/new-address'} className='py-2 px-3 mb-1 flex items-center gap-2 bg-white rounded border mt-2 font-medium text-green-600'><i className="ri-add-large-line font-semibold"></i> Add a new address</Link>
                    <span className='text-xs font-medium text-slate-600'>Your saved address</span>
                    <input type="text" value={selectAddress} className='hidden' />
                    <div className='w-full flex flex-col gap-2 mt-1'>
                        {addresss.success && addresss.addresss.map(address => (
                            <div key={address._id} onClick={selectAddressHandler} data-address={address._id} className='address w-full flex cursor-pointer gap-2 border p-2 rounded'>
                                <div className='w-4 h-4 overflow-hidden pointer-events-none flex-shrink-0 p-[2px] rounded-full border mt-1 border-slate-400'>
                                    <div className='selectIcon w-full h-full rounded-full'></div>
                                </div>
                                <div className='w-full pointer-events-none'>
                                    <h1 className='font-medium text-xs uppercase text-slate-700'>{address.fullname}</h1>
                                    <p className='text-sm tracking-wider'>{`${address.address}, ${address.currentLocation}, ${address.city}, ${address.landmark}, ${address.state} - ${address.pincode}`}</p>
                                    <Link to={`tel:${address.mobile}`} className='text-green-600 text-xs'>+91 {address.mobile}</Link>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                <div className=' mt-3 bg-sky-50 rounded-lg w-full p-3'>
                    <button onClick={getPaymentHandler} className='py-2 px-3 w-full bg-green-600 text-white rounded flex items-center justify-between'>
                        <div className='flex flex-col'>
                            <h1 className='font-semibold text-base leading-[1.2]'>Total ₹{carts.totalPrice}</h1>
                        </div>
                        <div className=' flex items-center gap-1 font-semibold text-lg'>Proceed <i className="ri-arrow-right-s-line"></i></div>
                    </button>
                </div>

            </div>
            <Footer />
        </> : navigate('/login')
    )
}

export default Cart
