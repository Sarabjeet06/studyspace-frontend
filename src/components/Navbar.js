import Link from 'next/link'
import React from 'react'

export default function Navbar() {
  return (
    <div className='flex fixed top-0 justify-between px-3 md:px-20 h-12 w-full bg-white items-center text-sm z-50 shadow-md'>
        <div>Logo</div>
        <div className='hidden sm:flex *:px-3 *:h-12 *:border-b-4 *:border-white'>
            <div className='flex items-center hover:cursor-pointer hover:border-green-500'>Home</div>
            <div className='flex items-center hover:cursor-pointer hover:border-green-500'>About Us</div>
            <div className='flex items-center hover:cursor-pointer hover:border-green-500'>Contact Us</div>
        </div>
        <div className='flex items-center *:flex *:items-center *:mx-2 *:px-4 *:h-7 *:rounded-2xl'>
            <Link href="/login" className='bg-green-600 text-white hover:bg-transparent hover:text-amber-950 border border-green-600'>Log in</Link>
            <Link href="/signup" className='border border-green-600 text-amber-950 hover:bg-green-600 hover:text-white'>Sign up</Link>
        </div>
    </div>
  )
}
