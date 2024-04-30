import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Axios, baseUrl } from "../../../Utils/Axios";

const MyOrders = () => {
  const [orders,setOrders] = useState([])
  const getOrders = async ()=>{
    try {
      const {data} = await Axios.post("/api/client/orders")
      setOrders(data)
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    getOrders()
  },[])
  console.log(orders)
  return (
    <div className="w-full h-full relative">
      <div className="w-full px-5 h-[12%] border-b flex items-center justify-between">
        <h1 className="font-semibold text-base text-slate-700">My Orders</h1>
      </div>
      <div className="w-full h-[88%] lg:px-5 py-2">
          <div className="orders w-full flex h-[38px] items-center gap-2 border border-slate-300">
            <input type="text" className="w-full px-3 h-full outline-none text-xs tracking-wider font-medium rounded-sm" placeholder="Search your orders here" />
            <button className="text-xs font-semibold h-full bg-blue-500 text-white py-2 px-2 flex-shrink-0">Search Orders</button>
          </div>
          <div className="w-full mt-2 h-[calc(100%-45px)] overflow-y-auto overflow-x-hidden flex flex-col gap-2 p-2">
            {orders.success && orders.orders.map(order=>(
              <Link to={`/order/${order._id}`} key={order._id} className="order w-full h-[80px]  py-3 flex gap-4 shadow-[0_0_5px_rgba(230,230,230)] hover:shadow-[0_0_5px_rgba(210,210,210)] p-2">
                <div className="img w-16 h-16  flex-shrink-0 border rounded overflow-hidden flex items-center justify-center">
                  <img src={baseUrl+order.productInfo[0].product.pictures[0]} className="" alt="" />
                </div>
                <div className="lg:w-[70%] w-full">
                  <h1 className="text-[13px] font-medium tracking-wider text-ellipsis line-clamp-2 leading-[1.2]">{order.productInfo[0].product.title}</h1>
                  <h1 className="mt-1 text-sm text-zinc-500 font-semibold">₹{order.totalAmount}</h1>
                </div>
                <div className="w-[30%] hidden py-2 pl-2 lg:flex flex-col items-end text-xs gap-2">
                  <div className="flex font-semibold items-center  gap-2"><h1 className="w-3 h-3 bg-green-600 rounded-full flex-shrink-0"></h1> Delivered on Feb 12, 2024</div>
                  <h1>Your item has been delivered</h1>
                </div>
              </Link>
            ))}
          </div>
        <h1 className="font-semibold text-xl absolute">
          {/* Oops, you haven't placed an order yet. */}
        </h1>
      </div>
    </div>
  );
};

export default MyOrders;
