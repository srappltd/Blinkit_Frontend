import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Axios } from "../../../Utils/Axios";

const CartBtn = ({id}) => {
  const location = useLocation()
  console.log(location)
  const [carts, setcarts] = useState({});
  const getCartData = async () => {
    const { data } = await Axios.post("/api/client/cart/allproduct");
    setcarts(data);
  };
  useEffect(()=>{
    getCartData()
  },[id])
  return (
    carts.success && carts.carts.length ? <Link
      to={"/cart"}
      className="w-[95%] text-white z-40 bg-green-600 rounded px-3 py-1 flex md:hidden transition-all duration-700 items-center justify-between fixed bottom-5 left-1/2 -translate-x-1/2"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded bg-green-700 flex text-lg items-center justify-center object-cover overflow-hidden">
          <i className="ri-shopping-cart-2-line"></i>
        </div>
        <div className="">
          <h1 className="text-xs">{carts.carts.length} items</h1>
          <h2 className="font-semibold text-base">₹ {carts.totalPrice}</h2>
        </div>
      </div>
      <div className="text-lg font-semibold text-green-200">
        View Cart <i className="ri-arrow-right-s-fill"></i>
      </div>
    </Link> : ''
  );
};

export default CartBtn;
