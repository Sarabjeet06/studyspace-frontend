import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <div className='bg-gray-100 px-20 pt-10 pb-2 text-xs text-black'>
        <div className='flex flex-col sm:flex-row  justify-between pb-8 border-b border-slate-300'>
            <div>
                <div className='text-2xl font-bold'>StudySpace</div>
                <div className='flex gap-x-8 mt-8'>
                    <div>
                        <Image src='/images/facebook-icon.png' width={20} height={20}/>
                    </div>
                    <div>
                        <Image src='/images/instagram-icon.png' width={20} height={20}/>
                    </div>
                    <div>
                        <Image src='/images/twitter-icon.png' width={20} height={20}/>
                    </div>
                </div>
            </div>
            <div className='*:my-2'>
                <div className='text-base font-semibold'>Menu</div>
                <div>Home</div>
                <div>About Us</div>
                <div></div>
            </div>
            <div className='*:my-2'>
                <div className='text-base font-semibold'>External Links</div>
                <div>Terms & Conditions</div>
                <div>Privacy Policy</div>
            </div>
            <div className='*:my-2'>
                <div className='text-base font-semibold'>Contact Us</div>
                <div>contact@studyspace.com</div>
                <div>+(011) 12 3456789</div>
            </div>
        </div>
        <div className='text-center my-4'>
            Copyright. All rights reserved. StudySpace2024
        </div>
    </div>
  )
}
