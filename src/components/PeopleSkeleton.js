import React from 'react'

const PeopleSkeleton = () => {
    return (
        <div>
            <div className='border border-1 border-gray-200 rounded-md shadow-md max-w-4xl mx-auto p-2'>

                <div className='h-20 animate-pulse bg-gray-200 m-2 rounded-md'></div>

                <hr className='border-t-2 animate-pulse' />

                <div className='flex m-2 p-2 justify-between'>

                <div className='h-10 w-5 animate-pulse bg-gray-200 m-2 rounded-full p-5'></div>

                <div className='bg-gray-200 rounded-sm animate-pulse h-10 w-full m-2'></div>

                <div className='bg-gray-200 rounded-sm right-6 animate-pulse h-10 w-5 m-2'></div>

                </div>
                
                <div className='flex m-2 p-2 justify-between'>

                <div className='h-10 w-5 animate-pulse bg-gray-200 m-2 rounded-full p-5'></div>

                <div className='bg-gray-200 rounded-sm animate-pulse h-10 w-full m-2'></div>

                <div className='bg-gray-200 rounded-sm right-6 animate-pulse h-10 w-5 m-2'></div>

                </div>
                
                <div className='flex m-2 p-2 justify-between'>

                <div className='h-10 w-5 animate-pulse bg-gray-200 m-2 rounded-full p-5'></div>

                <div className='bg-gray-200 rounded-sm animate-pulse h-10 w-full m-2'></div>

                <div className='bg-gray-200 rounded-sm right-6 animate-pulse h-10 w-5 m-2'></div>

                </div>

            </div>

        </div>
    )
}

export default PeopleSkeleton