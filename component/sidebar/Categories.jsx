import React from 'react'
import { FiPlusSquare } from 'react-icons/fi'

const Categories = () => {
  return (
    <div className='flex flex-col gap-5 mt-8 text-gray-500 text-lg pb-7 border-b-2 border-gray-300'>
        <div className='flex justify-between'>
            <div>Laptops </div>
            <div className='w-5 h-5 rounded-md bg-pink-500 text-center text-sm text-black'>3 </div>
        </div>
       <div className='flex justify-between'>
            <div>Mobile phones </div>
            <div className='w-5 h-5 rounded-md bg-orange-500 text-center text-sm text-black'>3 </div>
        </div>
        <div>Desktops</div>
        <div className='flex justify-between'>
            <div>Accessories </div>
            <div className='w-5 h-5 rounded-md bg-yellow-500 text-center text-sm text-black'>3 </div>
        </div>
        <div className='flex justify-between'>
            <div>Portable storage </div>
            <div className='w-5 h-5 rounded-md bg-green-500 text-center text-sm text-black'>3 </div>
        </div>
        <div>Networking</div>
        <div className='flex items-center justify-center gap-3 font-bold'>
          <FiPlusSquare  className='text-xl'/> 
          <span className='text-black text-[16px] '>Add category</span>
        </div>
    </div>
  )
}

export default Categories