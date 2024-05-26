import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

export default function Navbar() {

  const [changeState , setChangeState] = useState(false);
  useEffect(()=>{
    const check = ()=>{
      if(window){
        window.addEventListener("scroll" , ()=>{
          if(window.scrollY > 20){
            setChangeState(true);
          }else{
            setChangeState(false);
          }
        })
      }
    }
    check();
  },[]);
  return (
    <div className={`flex fixed top-0 justify-between px-3 md:px-16 py-2 w-full  items-center text-sm z-50 ${changeState ? "bg-[#7bde9e] bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20  " : "bg-transparent"}  transition-all duration-300 ease-in-out`}>
          <Image src="/images/logo3.png" width={100} height={100} unoptimized quality={100} alt='Logo' className='md:w-48 w-36' />
        <div className='hidden sm:flex *:px-3 *:h-14 gap-8 font_inter_custom font-medium '>
            <div className='flex items-center hover:cursor-pointer hover:border-green-500'>Home</div>
            <div className='flex items-center hover:cursor-pointer hover:border-green-500'>About Us</div>
            <div className='flex items-center hover:cursor-pointer hover:border-green-500'>Contact Us</div>
        </div>
        <div className='flex items-center *:flex *:items-center *:mx-2 *:px-5 *:py-4 *:h-7 *:rounded-sm'>
        <Link href="/signup" className='border border-[#579668] text-amber-950 hover:bg-[#579668] hover:text-white'>Sign up</Link>
            <Link href="/login" className='bg-[#579668] text-white hover:bg-transparent hover:text-amber-950 border border-[#579668]'>Log in</Link>
        </div>
    </div>
  )
}
