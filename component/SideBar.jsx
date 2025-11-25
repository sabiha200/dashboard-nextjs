import React from 'react'
import { BiStoreAlt } from 'react-icons/bi'
import { BsPeople, BsWallet2 } from 'react-icons/bs'
import { GoInbox } from 'react-icons/go'
import { HiOutlinePresentationChartLine } from 'react-icons/hi'
import { HiArrowPathRoundedSquare } from 'react-icons/hi2'

const SideBar = () => {
  return (
    <div className='px-[25px]'>
        <div className='border-b-2 border-gray-300'>
            <div className='flex gap-3 w-[200px] items-center p-4 bg-[#7364DB] text-white rounded-lg '>
            <HiOutlinePresentationChartLine className='text-2xl ' />
            <h3>Dashboard</h3>
        </div>
        <div className='flex gap-3 w-[200px] items-center p-4  text-gray-500 rounded-lg  '>
            <BiStoreAlt className='text-2xl ' />
            <h3>Products</h3>
        </div>
        <div className='flex gap-3 w-[200px] items-center p-4  text-gray-500 rounded-lg '>
            <GoInbox className='text-2xl ' />
            <h3>Orders</h3>
        </div>
        <div className='flex gap-3 w-[200px] items-center p-4  text-gray-500 rounded-lg '>
            <BsWallet2 className='text-2xl ' />
            <h3>Payment</h3>
        </div>
        <div className='flex gap-3 w-[200px] items-center p-4  text-gray-500 rounded-lg'>
            <HiArrowPathRoundedSquare className='text-2xl ' />
            <h3>Transactions</h3>
        </div>
         <div className='flex gap-3 w-[200px] items-center p-4  text-gray-500 rounded-lg'>
            <BsPeople className='text-2xl ' />
            <h3>Clients</h3>
        </div>
        </div>
    </div>
  )
}

export default SideBar