import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"

const Card = ({ className, classBtn, classDescription, ImagePath, ImageUser }) => {
    return (
        <div className="border w-[380px] min-h-fit border-gray-300 rounded-md shadow-md">
            <div className='relative'>
                <Image src={ImagePath} width={300} height={200} alt='Card Image' className='w-full rounded-md h-64' />
                <Image src={ImageUser} width={100} height={50} alt='Card Image' className='rounded-full absolute -bottom-8 right-5 md:-bottom-8 md:right-10' />
            </div>
            <div className="p-4">
                <div className="text-lg font-semibold mb-2">{className}</div>
                <div className="text-gray-700 mb-4">{classDescription}</div>
                <a href="#" className="bg-blue-100">
                <Button>{classBtn}</Button>
                </a>
            </div>
        </div>
    )
}

export default Card