import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import HamburgerMenu from './HamburgerMenu';
export default function () {
  
  const [ShowMenu, setShowMenu] = useState(false)
  
  
  return (
    <header className='flex flex-col lg:flex-row lg:items-center md:border-b md:border-b-[#5f5f77]'>
        <div className='w-full flex items-center justify-between md:justify-center lg:justify-start p-4  border-b border-b-[#5f5f77] md:border-0'>
            <p className='text-[#fff] text-xl font-bold'>THE PLANETS</p>
            <svg className='md:hidden' onClick={() => setShowMenu(true) } xmlns="http://www.w3.org/2000/svg" width="24" height="17"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z"/></g></svg>
        </div>
        <HamburgerMenu ShowMenu={ShowMenu} setShowMenu={setShowMenu} />
        <nav className=' hidden md:flex items-center justify-between py-2 px-4 md:px-10'>
          <Link className='text-[#5f5f77] font-[400] lg:mx-3' to={'/planets/Mercury'} >Mercury</Link>
          <Link className='text-[#5f5f77] font-[400] lg:mx-3' to={'/planets/Earth'} >Earth</Link>
          <Link className='text-[#5f5f77] font-[400] lg:mx-3' to={'/planets/Venus'} >Venus</Link>
          <Link className='text-[#5f5f77] font-[400] lg:mx-3' to={'/planets/Mars'} >Mars</Link>
          <Link className='text-[#5f5f77] font-[400] lg:mx-3' to={'/planets/Jupiter'} >Jupiter</Link>
          <Link className='text-[#5f5f77] font-[400] lg:mx-3' to={'/planets/Saturn'}>Saturn</Link>
          <Link className='text-[#5f5f77] font-[400] lg:mx-3' to={'/planets/Uranus'}>Uranus</Link>
          <Link className='text-[#5f5f77] font-[400] lg:mx-3' to={'/planets/Neptune'}>Neptune</Link>
        </nav>
        
       

        
        
    </header>
  )
}
