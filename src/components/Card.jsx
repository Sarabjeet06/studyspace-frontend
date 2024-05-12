import React, { useState } from 'react'
import Image from 'next/image'

const Card = ({ name }) => {
    return (
        <div class="border max-w-80 mx-auto border-gray-300 rounded-md shadow-md">
            <div className='relative'>
                <Image src="/images/CardTeacher.jpg" width={300} height={200} alt='Card Image' className='w-full rounded-md' />
                <Image src="/images/User.jpg" width={100} height={50} alt='Card Image' className='rounded-full absolute -bottom-8 right-5 md:-bottom-8 md:right-10 md:z-50' />
            </div>
            <div class="p-4">
                <h3 class="text-lg font-semibold mb-2">Sample Class Batch 1</h3>
                <p class="text-gray-700 mb-4">Sample Description: Computer Science</p>
                <a href="#" class="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Read More</a>
            </div>
        </div>
    )
}

export default Card