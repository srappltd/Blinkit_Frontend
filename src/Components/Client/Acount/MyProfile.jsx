import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const {isCheckClient} = useSelector(state=>state.IsLoggoedInReducer)
  console.log(isCheckClient)
  const {_id,username,email,mobile,} = isCheckClient.client
  return (
    <div className="w-full h-full relative">
      <div className="w-full px-5 h-[12%] border-b flex items-center justify-between">
        <h1 className="font-semibold text-base text-slate-700">My Profile</h1>
      </div>
      <div className="w-full p-4">
        {/* <div className="w-full grid grid-cols-2 gap-5">
          <div className="w-full">
            <h1 className="font-semibold">First Name</h1>
            <input
              type="text"
              name="firstname"
              placeholder="Enter First name"
              className="w-full mt-1 tracking-wider border px-3 py-[8px] text-xs outline-none border-slate-300 rounded"
            />
          </div>
          <div className="w-full">
            <h1 className="font-semibold">Last Name</h1>
            <input
              type="text"
              name="lastname"
              placeholder="Enter Last name"
              className="w-full mt-1 tracking-wider border px-3 py-[8px] text-xs outline-none border-slate-300 rounded"
            />
          </div>
        </div> */}
        <div className="w-full grid grid-cols-2 gap-5 mt-3">
          <div className="w-full">
            <h1 className="font-semibold text-xs">Username</h1>
            <input
              type="text"
              name="username"
              value={username}  
              placeholder="Enter Username"
              className="w-full mt-1 tracking-wider border px-3 py-[8px] text-xs outline-none border-slate-300 rounded"
            />
          </div>
          <div className="w-full">
            <h1 className="font-semibold text-xs">Current Location</h1>
            <input
              type="text"
              name="currentLocation"
              placeholder="Enter Current Location"
              className="w-full mt-1 tracking-wider border px-3 py-[8px] text-xs outline-none border-slate-300 rounded"
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-5 mt-3">
          <div className="w-full">
            <h1 className="font-semibold text-xs">Email</h1>
            <input
              type="text"
              name="email"
              value={email}
              placeholder="Enter Email Address"
              className="w-full mt-1 tracking-wider border px-3 py-[8px] text-xs outline-none border-slate-300 rounded"
            />
          </div>
          <div className="w-full">
            <h1 className="font-semibold text-xs">Mobile</h1>
            <input
              type="text"
              value={mobile}
              name="mobile"
              placeholder="Enter Mobile Number"
              className="w-full mt-1 tracking-wider border px-3 py-[8px] text-xs outline-none border-slate-300 rounded"
            />
          </div>
        </div>
        <div className="w-full grid grid-cols-2 gap-5 mt-3">
          <div className="w-full">
            <h1 className="font-semibold text-xs">clientid</h1>
            <input
              type="text"
              disabled
              value={_id}
              placeholder="Enter clientid"
              className="w-full mt-1 tracking-wider border px-3 py-[8px] text-xs outline-none border-slate-300 rounded"
            />
          </div>
          
        </div>
        
        <div className="flex items-center justify-between w-full mt-3">
          <button type="reset" className="py-2 px-10 text-sm font-medium border bg-zinc-200 rounded-sm">Reset</button>
          <button type="submit" className="py-2 px-10 text-sm font-medium border bg-green-700 text-white rounded-sm">Update</button>
        </div>
      </div>
      <Link className="py-2 px-8 text-sm font-medium border bg-red-700 text-white rounded absolute bottom-4 right-4">Account Delete</Link>
    </div>
  );
};

export default MyProfile;
