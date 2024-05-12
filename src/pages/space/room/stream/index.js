import React from 'react'
import Image from 'next/image'

const postArray = [1,2,3,4];

export default function Stream() {
  return (
    <div>
      <div className='w-11/12 mx-auto my-10'>
        <div className='relative h-64 w-full bg-blue-500 rounded-xl'>
          <Image 
            className='object-cover h-full w-full rounded-xl'
            width={100}
            height={100}> 
          </Image>
          <div className='absolute bottom-5 left-6'>
            <div className='text-white text-4xl font-bold'>StudySpace</div>
            <div className='text-white text-lg'>Web-Development Course</div>
          </div>
        </div>
        <div className='flex lg:flex-row flex-col gap-8 mt-8'>
          <div className='lg:block hidden'>upcoming work</div>
          <div className='w-full py-3'>
            <div className='w-full h-20 p-1 rounded-lg border-b-[1px] shadow-[0px_3px_6px_2px_rgba(0,0,0,0.15)]'>
              <button className='w-full h-full text-sm text-left text-gray-500 px-5'>Announce something to the class</button>
            </div>          
            <div className='flex gap-4 w-full h-20 my-6 px-5 items-center border-[1.5px] border-gray-300 rounded-md'>
              <div className='relative w-12 h-12 rounded-full bg-blue-500'>
                <Image
                  className='absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto'
                  src='/images/assignment-icon.png'
                  width={30}
                  height={30}
                />
              </div>
              <div className='text-center'>Assignment heading</div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}
