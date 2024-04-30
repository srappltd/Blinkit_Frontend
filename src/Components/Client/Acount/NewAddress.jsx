import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { asyncNewAddressForm } from "../../../Store/Actions/AccountAction";

const NewAddress = () => {
  const dispatch = useDispatch()
  const [addressForm,setAddressForm] = useState({fullname:"",mobile:"",pincode:"",address:"",city:"",state:"",landmark:"",alternateMobile:"",currentLocation:""})
  const addressOnchangeHandler = (e) => {
    const {name,value} = e.target
    setAddressForm({...addressForm,[name]:value})
  }
  const addressSubmitHandler = (e)=>{
    e.preventDefault()
    const {fullname,mobile,pincode,address,city,state,landmark,alternateMobile,currentLocation} = addressForm
    if(fullname && mobile && pincode && address && city && state && landmark && alternateMobile && currentLocation){
      dispatch(asyncNewAddressForm(addressForm))
      setAddressForm({fullname:"",mobile:"",pincode:"",address:"",city:"",state:"",landmark:"",alternateMobile:"",currentLocation:""})
    }else{
      toast("Please fill the all fields required!")
    }
  }
  // console.log(addressForm)
  return (
    <div className="w-full h-full relative">
      <div className="w-full px-5 h-[12%] border-b flex items-center justify-between">
        <h1 className="font-semibold text-base text-slate-700">New Address</h1>
      </div>
      <form onSubmit={addressSubmitHandler} className="w-full h-[88%] overflow-y-auto p-4">
        <div className="w-full grid grid-cols-2 gap-5">
          <div className="w-full">
            <h1 className="font-semibold text-xs text-slate-700">Fullname</h1>
            <input value={addressForm.fullname} onChange={addressOnchangeHandler}
              type="text"
              placeholder="Enter Fullname"
              name="fullname"
              className="w-full text-xs mt-[2px] tracking-wider border px-3 py-[10px] outline-none border-slate-300 rounded"
            />
          </div>
          <div className="w-full">
            <h1 className="font-semibold text-xs text-slate-700">
              Mobile Number
            </h1>
            <input value={addressForm.mobile} onChange={addressOnchangeHandler}
              type="text"
              name="mobile"
              placeholder="Enter Mobile Number"
              className="w-full text-xs mt-[2px] tracking-wider border px-3 py-[10px] outline-none border-slate-300 rounded"
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-5 mt-2">
          <div className="w-full">
            <h1 className="font-semibold text-xs text-slate-700">Pincode</h1>
            <input value={addressForm.pincode} onChange={addressOnchangeHandler}
              type="text"
              name="pincode"
              placeholder="Enter Pincode"
              className="w-full text-xs mt-[2px] tracking-wider border px-3 py-[10px] outline-none border-slate-300 rounded"
            />
          </div>
          <div className="w-full">
            <h1 className="font-semibold text-xs text-slate-700">
              Current Location
            </h1>
            <input value={addressForm.currentLocation} onChange={addressOnchangeHandler}
              type="text"
              name="currentLocation"
              placeholder="Enter Current Location"
              className="w-full text-xs mt-[2px] tracking-wider border px-3 py-[10px] outline-none border-slate-300 rounded"
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-1 gap-5 mt-2">
          <div className="w-full">
            <h1 className="font-semibold text-xs text-slate-700">Address</h1>
            <textarea onChange={addressOnchangeHandler}
              type="text"
              name="address"
              placeholder="Address (Area and Street)"
              value={addressForm.address}
              className="w-full text-xs mt-[2px] tracking-wider border px-3 py-[10px] outline-none border-slate-300 rounded"
            >{addressForm.address}</textarea>
          </div>
        </div>

        <div className="w-full grid grid-cols-2 gap-5 mt-1">
          <div className="w-full">
            <h1 className="font-semibold text-xs text-slate-700">City</h1>
            <input value={addressForm.city} onChange={addressOnchangeHandler}
              type="text"
              name="city"
              placeholder="Enter City"
              className="w-full text-xs mt-[2px] tracking-wider border px-3 py-[10px] outline-none border-slate-300 rounded"
            />
          </div>
          <div className="w-full">
            <h1 className="font-semibold text-xs text-slate-700">State</h1>
            <input value={addressForm.state} onChange={addressOnchangeHandler}
              type="text"
              placeholder="Enter State"
              name="state"
              className="w-full text-xs mt-[2px] tracking-wider border px-3 py-[10px] outline-none border-slate-300 rounded"
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-5 mt-2">
          <div className="w-full">
            <h1 className="font-semibold text-xs text-slate-700">
              Landmark (Optional)
            </h1>
            <input value={addressForm.landmark} onChange={addressOnchangeHandler}
              type="text"
              name="landmark"
              placeholder="Enter Landmark"
              className="w-full text-xs mt-[2px] tracking-wider border px-3 py-[10px] outline-none border-slate-300 rounded"
            />
          </div>
          <div className="w-full">
            <h1 className="font-semibold text-xs text-slate-700">
              Alternate Phone (optional)
            </h1>
            <input value={addressForm.alternateMobile} onChange={addressOnchangeHandler}
              type="text"
              name="alternateMobile"
              placeholder="Enter Mobile Number"
              className="w-full text-xs mt-[2px] tracking-wider border px-3 py-[10px] outline-none border-slate-300 rounded"
            />
          </div>
        </div>

          <ToastContainer/>
        <div className="flex items-center justify-between w-full mt-4">
          <button
            type="reset"
            className="py-2 px-10 font-medium border bg-zinc-200 rounded-sm"
          >
            Reset
          </button>
          <button
            type="submit"
            className="py-2 px-10 font-medium border bg-green-700 text-white rounded-sm"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewAddress;
