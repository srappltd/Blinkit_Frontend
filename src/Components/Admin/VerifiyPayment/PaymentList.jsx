import React from 'react'
import SecondBox from '../Deshboard/SecondBox'
import SearchBox from './SearchBox'
import PaymentTable from './PaymentTable'
import Topbar from '../AdminComponent/Topbar'

function PaymentList() {
  return (
    <div className='w-full'>
      <Topbar icon={'https://efood-admin.6amtech.com/public/assets/admin/img/icons/all_orders.png'} title={'Verify Offline Payments'}/>
      <div className='w-full border rounded-md flex flex-col gap-3 mt-5'>
        <div className='w-full p-3'>
          <SearchBox/>
        </div>
        <PaymentTable/>
      </div>
    </div>
  )
}

export default PaymentList
