import React from 'react'
import logo from '../assets/finfuselogo.png'
import { Menu ,X } from 'lucide-react'
import { useState } from 'react'
const Navbar = () => {
  const [mobileDrawer, setMobileDrawer] = useState(false)
    function toggleMenu(){
        setMobileDrawer(!mobileDrawer)
    }
  return (
    <div className='bg-[#0c4b54]'>
         <nav className='flex justify-between items-center p-5'>
            <div className='w-28'>
                <img src={logo} alt="" />
            </div>
            <div className=' hidden lg:flex space-x-5 tracking-wide'>
                <a href="">About us</a>
                <a href="">Cards</a>
                <a href="">FAQ</a>
                <a href="">Blog</a>
                <a href="">Features</a>
                <button className='border border-white rounded-3xl py-2 px-6'>Log in</button>
                <button className='border border-white rounded-3xl py-2 px-6 bg-[#E8f549] text-[#0c4b54] border-[#0c4b54]'>Sign Up</button>
            </div>
            <div className='lg:hidden flex justify-end items-center'>
                    <button onClick={toggleMenu}>
                        {mobileDrawer ? <X /> : <Menu /> }
                    </button>
            </div>
            
        </nav>
        {mobileDrawer &&
            <div className='fixed z-20 right-0 bg-[#0c4b54] w-full flex p-12 justify-center items-center flex-col lg:hidden'>
               <div className='flex flex-col space-y-5 tracking-wide justify-center items-center'>
                  <a href="">About us</a>
                  <a href="">Cards</a>
                  <a href="">FAQ</a>
                  <a href="">Blog</a>
                  <a href="">Features</a>
                  <button className='border border-white rounded-3xl py-2 px-6'>Log in</button>
                  <button className='border border-white rounded-3xl py-2 px-6 bg-[#E8f549] text-[#0c4b54] border-[#0c4b54]'>Sign Up</button>
              </div>
            </div>
            }
    </div>
  )
}

export default Navbar