import React from 'react'

const CardSkeleton = () => {
    return (
        <div className='border border-1 border-gray-200 w-[380px] rounded-md shadow-md min-h-fit p-2'>

            <div className='h-52 w-[350px] animate-pulse bg-gray-200 m-2 rounded-md'>
            </div>

            <div className='h-10 w-56 animate-pulse bg-gray-200 m-2 rounded-md'>
            </div>

            <div className='h-10 w-40 animate-pulse bg-gray-200 m-2 rounded-md'>
            </div>

        </div>
    )
}

export default CardSkeleton