import React, { useRef } from 'react'
import SecondBox from './SecondBox'
import FilterBox from './FilterBox'
import SearchBox from './SearchBox'
import { Link } from 'react-router-dom'
import OrderTable from './OrderTable'
import Topbar from '../AdminComponent/Topbar'
import { useReactToPrint } from 'react-to-print'

function OrderList() {
  const tablePrintRef = useRef()

  const printOrderTableHandler = useReactToPrint({
    content:()=>tablePrintRef.current
  })
  return (
    <div className='w-full'>
      <Topbar icon={'https://efood-admin.6amtech.com/public/assets/admin/img/icons/all_orders.png'} title={'All Orders'}/>
      <div className='w-full border rounded-md flex flex-col gap-3 mt-5'>
        <div className='w-full p-5'>
          <FilterBox />
          <SecondBox />
          <SearchBox printOrderTableHandler={printOrderTableHandler}/>
        </div>
        <OrderTable tablePrintRef={tablePrintRef}/>
      </div>
    </div>
  )
}

export default OrderList
