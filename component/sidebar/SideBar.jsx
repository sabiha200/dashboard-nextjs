import React from 'react'
import Menu from '../sidebar/Menu'
import Categories from '../sidebar/Categories'
import TopSellers from '../sidebar/TopSellers'
import Upgrade from '../sidebar/Upgrade'
import Theme from '../sidebar/Theme'

const SideBar = () => {
  return (
    <div className='px-[27px] h-[1816px] pb-[62px] pt-[25px] flex flex-col justify-between'>
     <div className='flex flex-col'>
       <Menu/>  
      <Categories/>  
      <TopSellers/>
      <Upgrade/>
     </div>
     <div className='flex'>
      <Theme/>
     </div>
    </div>
  )
}

export default SideBar