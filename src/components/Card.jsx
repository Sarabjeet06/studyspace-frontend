import React, { useState } from 'react'
import Image from 'next/image'
import { IconJarLogoIcon } from '@radix-ui/react-icons'

const Card = ({ name }) => {
    return (
        <div>
            <div className="border border-gray-300 rounded-md shadow-md">
                <div className='relative'>
                    <Image src="/images/CardTeacher.jpg" width={300} height={200} alt='Background Card Image' className='w-full rounded-t' />
                    <Image src="/images/User.jpg" width={100} height={50} alt='User Card Image' className='rounded-full absolute -bottom-8 right-5 md:-bottom-8 md:right-10 md:z-50' />
                    <div className='absolute right-2 top-2 p-2 hover:bg-gray-200 rounded-full'>
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.625 2.5C8.625 3.12132 8.12132 3.625 7.5 3.625C6.87868 3.625 6.375 3.12132 6.375 2.5C6.375 1.87868 6.87868 1.375 7.5 1.375C8.12132 1.375 8.625 1.87868 8.625 2.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM7.5 13.625C8.12132 13.625 8.625 13.1213 8.625 12.5C8.625 11.8787 8.12132 11.375 7.5 11.375C6.87868 11.375 6.375 11.8787 6.375 12.5C6.375 13.1213 6.87868 13.625 7.5 13.625Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                    </div>
                </div>
                <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2">{name}</h3>
                    <p className="text-gray-700 mb-4">Sample Description: Computer Science</p>
                    <a href="#" className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default Card