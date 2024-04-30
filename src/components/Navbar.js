import React from 'react'

export default function Navbar() {
  return (
    <div className='flex fixed top-0 justify-between px-3 md:px-20 h-12 w-full bg-[#fac96b] items-center text-sm z-50'>
        <div>Logo</div>
        <div className='hidden sm:flex *:px-3 *:h-12 *:border-b-4 *:border-[#fac96b]'>
            <div className='flex items-center hover:cursor-pointer hover:border-[#a64945]'>Home</div>
            <div className='flex items-center hover:cursor-pointer hover:border-[#a64945]'>About Us</div>
            <div className='flex items-center hover:cursor-pointer hover:border-[#a64945]'>Contact Us</div>
        </div>
        <div className='flex items-center *:flex *:items-center *:mx-2 *:px-4 *:h-7 *:rounded-2xl'>
            <button className='bg-[#a64945] text-amber-300 hover:bg-transparent hover:text-amber-950 border border-[#a64945]'>Log in</button>
            <button className='border border-[#a64945] text-amber-950 hover:bg-[#a64945] hover:text-amber-300'>Sign up</button>
        </div>
    </div>
  )
}
