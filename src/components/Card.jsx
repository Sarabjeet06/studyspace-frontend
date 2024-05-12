import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

const Card = ({ className, classBtn, classDescription, ImagePath, ImageUser }) => {
    return (
        <div class="border max-w-80 mx-auto border-gray-300 rounded-md shadow-md">
            <div className='relative'>
                <Image src={ImagePath} width={300} height={200} alt='Card Image' className='w-full rounded-md' />
                <Image src={ImageUser} width={100} height={50} alt='Card Image' className='rounded-full absolute -bottom-8 right-5 md:-bottom-8 md:right-10 md:z-50' />
            </div>
            <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{className}</h3>
                <p className="text-gray-700 mb-4">{classDescription}</p>
                <a href="#" className="bg-blue-100">
                <Button>{classBtn}</Button>
                </a>
            </div>
        </div>
    )
}

export default Card