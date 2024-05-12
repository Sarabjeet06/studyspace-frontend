import React from 'react'

const Classwork = () => {
    return (
        <div className='w-11/12'>
            <div className='flex flex-col'>
                {/* <div>All Topics</div>
                <div className='border-t-2 border-blue-100 m-2'></div>
                <div>
                    <div className='py-2 px-1 border-b-2 border-gray-100'>Do all the class work by today itself</div>
                    <div className='py-2 px-1 border-b-2 border-gray-100'>Do all the class work by today itself</div>
                    <div className='py-2 px-1 border-b-2 border-gray-100'>Do all the class work by today itself</div>
                    <div className='py-2 px-1 border-b-2 border-gray-100'>Do all the class work by today itself</div>
                    <div className='py-2 px-1 border-b-2 border-gray-100'>Do all the class work by today itself</div>
                    <div className='py-2 px-1 border-b-2 border-gray-100'>Do all the class work by today itself</div>
                </div> */}
                <div className='flex justify-end'>
                    <button className='bg-blue-500 text-white px-3 py-2 rounded-md mr-2' >Create</button>
                </div>
                <div className=' text-xl ml-2'>Assignments</div>
                <div className='border-t-2 border-blue-400 mx-2 my-4'></div>
                <div className='mx-2'>
                    <div className='flex justify-between border border-gray-200 p-2'>
                        <div className='pt-1'>Complete the classworkk component in the space section </div>
                        <div>
                            <button className='bg-green-500 hover:bg-green-400 py-1 px-2 mr-2 rounded-md'>Edit</button>
                            <button className='bg-red-500 hover:bg-red-400 py-1 px-2 rounded-md'>Delete</button>
                        </div>
                    </div>
                </div>
                <div className=' text-xl ml-2'>Quiz</div>
                <div className='border-t-2 border-blue-400 mx-2 my-4'></div>
            </div>
        </div>
    )
}

export default Classwork