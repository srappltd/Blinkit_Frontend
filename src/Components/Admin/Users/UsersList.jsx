import React from 'react'
import SearchBox from './SearchBox'
import UsersTable from './UsersTable'
import Topbar from '../AdminComponent/Topbar'

function UsersList() {
  return (
    <div className='w-full'>
      <Topbar icon={'https://efood-admin.6amtech.com/public/assets/admin/img/icons/customer.png'} title={'All Users'}/>
      <div className='w-full border rounded-md flex flex-col gap-3 mt-5'>
        <div className='w-full p-5'>
          <div className='w-full md:p-5 md:border rounded grid md:grid-cols-3 grid-cols-1 md:gap-4 gap-2 md:text-sm text-xs font-medium md:font-normal'>
            <div className="card w-full md:h-12 h-10 border rounded md:p-3 flex items-center justify-center gap-3">
              <i className="ri-wallet-2-line"></i> Customer Wallet
            </div>
            <div className="card w-full md:h-12 h-10 border rounded md:p-3 flex items-center justify-center gap-3">
            <i className="ri-award-line"></i> Customer Loyality Point
            </div>
            <div className="card w-full md:h-12 h-10 border rounded md:p-3 flex items-center justify-center gap-3">
              <i className="ri-wallet-2-line"></i> Subscribed Email
            </div>
            <div className="card w-full md:h-12 h-10 border rounded md:p-3 flex items-center justify-center gap-3">
              <i className="ri-wallet-2-line"></i> Customer Address
            </div>
          </div>
          <SearchBox/>
        </div>
        <UsersTable/>
      </div>
    </div>
  )
}

export default UsersList
