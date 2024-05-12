import React, { useState } from 'react'
import Image from 'next/image'

const Card = ({ name }) => {
    return (
        <div class="border w-[360px] max-h-[370] min-h-fit border-gray-300 rounded-md shadow-md">
            <div className='relative'>
                <Image src="/images/CardTeacher.jpg" width={300} height={200} alt='Card Image' className='w-full rounded-md' />
                <Image src="/images/User.jpg" width={100} height={50} alt='Card Image' className='rounded-full absolute -bottom-8 right-5 md:-bottom-8 md:right-10 md:z-50' />
            </div>
            <div class="p-4 h-fit">
                <h3 class="text-lg font-semibold mb-2">Sample Class Batch 1</h3>
                <p class="text-gray-700 mb-1">Sample Description: Computer Science</p>
            </div>
        </div>
    )
}

export default Card