import React from 'react'
import {assets} from '../assets/assets'
const Navbar = ({setToken}) => {
  return (
    <>
        <div className='flex items-center px-[4%] py-2 justify-between '>
            <img className='w-[max(10%,80px)]' src={assets.arclogo_bg} alt="" />
            <button onClick={()=>setToken('')} className='rounded-full bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 text-xs sm:text-sm'>Logout</button>
        </div>
    </>
  )
}

export default Navbar