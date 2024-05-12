import React from 'react'
import Image from 'next/image'

export default function AboutUs() {
  return (
    <div className='my-40 w-fit mx-auto h-fit'>
        <div className='lg:mx-5 mx-auto max-w-5xl w-11/12 sm:w-5/6'>
            <div className=' rounded-3xl border-[10px] sm:border-[20px] md:border-[32px] border-green-300 bg-green-300 p-2'>
                <div className='flex justify-between items-center bg-white rounded-[16px] pl-8 pr-2 py-6 h-fit lg:h-80'>
                    <div className='lg:w-3/5'>
                        <div className='text-4xl text-black font-bold my-2'>
                            About Us
                        </div>
                        <div className='w-4/5 mt-6 *:py-2 text-black font-semibold text-xs md:text-sm leading-5'>
                            <p>
                                At StudySpace, we believe that education should be an exciting adventure filled with wonder and discovery. 
                            </p>
                            <p>
                                Our mission is simple: to ignite the curiosity of young minds, foster their creativity, and empower them to explore the limitless possibilities of knowledge.
                            </p>
                        </div>
                    </div>
                    <div className='lg:block hidden rounded-full border-[32px] border-green-300 h-fit w-fit -mr-36'>
                        <Image className='rounded-full lg:w-[550px]' src='/images/about-us.png' width={500} height={500}/>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}
