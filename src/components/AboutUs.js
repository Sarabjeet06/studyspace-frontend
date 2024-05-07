import React from 'react'
import Image from 'next/image'

export default function AboutUs() {
  return (
    <div className='my-40 overflow-hidden'>
        <div className='mx-auto xl:mx-24 lg:mx-16 xl:max-w-3xl lg:max-w-xl md:max-w-2xl w-11/12 sm:w-5/6'>
            <div className=' rounded-3xl border-[10px] sm:border-[20px] md:border-[32px] border-green-300 bg-green-300 p-2'>
                <div className='flex justify-between items-center bg-white rounded-[16px] pl-8 pr-8 lg:pr-0 xl:pl-8 lg:pl-4 xl:py-8 lg:py-6 h-fit'>
                    <div className='lg:w-3/5'>
                        <div className='text-4xl text-black font-bold my-2'>
                            About Us
                        </div>
                        <div className='xl:w-4/5 lg:w-3/4 mt-4 lg:mt-8 *:py-2 text-black font-semibold text-xs leading-5'>
                            <p>
                                At StudySpace, we believe that education should be an exciting adventure filled with wonder and discovery. 
                            </p>
                            <p>
                                Our mission is simple: to ignite the curiosity of young minds, foster their creativity, and empower them to explore the limitless possibilities of knowledge.
                            </p>
                        </div>
                    </div>
                    <div className='absolute lg:block hidden xl:right-24 lg:right-16 md:right-6 rounded-full border-[32px] border-green-300 h-fit w-fit'>
                        <Image className='rounded-full xl:h-96 lg:h-[480px] xl:w-96 lg:w-[480px] md:w-80' src='/images/about-us.png' width={500} height={500}/>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}
