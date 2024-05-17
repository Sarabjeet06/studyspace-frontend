import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

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

                    <Dialog>
                        <DialogTrigger className='bg-blue-500 text-white px-3 py-2 text-sm rounded-md mr-2'>
                            Create
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>
                                    Create a assignment or a quiz.
                                </DialogTitle>
                                <DialogDescription className="text-black">
                                    <div className='flex gap-2 mt-2'>
                                        <div>Select what do you want to create</div>
                                        <select name='Assignment' className=' outline-none border border-1 border-black rounded-sm' >
                                            <option value='Assignment'>Assignment</option>
                                            <option value='Quiz'>Quiz</option>
                                        </select>
                                    </div>
                                    <div>
                                        <div>Add a question</div>
                                    </div>
                                </DialogDescription>
                            </DialogHeader>
                        </DialogContent>
                    </Dialog>

                </div>
                <div className=' text-xl ml-2'>Assignments</div>
                <div className='border-t-2 border-blue-400 mx-2 my-4'></div>
                <div className='mx-2 mb-3'>
                    <div className='flex justify-between border rounded-md border-gray-200 p-2'>
                        <div className='pt-1'>Complete the classworkk component in the space section </div>
                        <div>
                            <button className=' bg-white hover:bg-gray-100 border mr-2 border-black py-1 px-3 rounded-md text-sm mb-1 md:mbb-0'>Edit</button>
                            <button className='bg-black hover:bg-gray-900 py-1 px-3 border-black rounded-md text-white text-sm'>Delete</button>
                        </div>
                    </div>
                </div>
                <div className='mx-2 mb-3'>
                    <div className='flex justify-between border rounded-md border-gray-200 p-2'>
                        <div className='pt-1'>Complete the classworkk component in the space section </div>
                        <div>
                            <button className=' bg-white hover:bg-gray-100 border mr-2 border-black py-1 px-3 rounded-md text-sm'>Edit</button>
                            <button className='bg-black hover:bg-gray-900 py-1 px-3 rounded-md text-white text-sm'>Delete</button>
                        </div>
                    </div>
                </div>
                <div className=' text-xl ml-2'>Quiz</div>

                <div className='border-t-2 border-blue-400 mx-2 my-4'></div>
                <div className='mx-2 mb-3'>
                    <div className='flex justify-between border rounded-md border-gray-200 p-2'>
                        <div className='pt-1'>Complete the classworkk component in the space section </div>
                        <div>
                            <button className=' bg-white hover:bg-gray-100 border mr-2 border-black py-1 px-3 rounded-md text-sm'>Edit</button>
                            <button className='bg-black hover:bg-gray-900 py-1 px-3 rounded-md text-white text-sm'>Delete</button>
                        </div>
                    </div>
                </div>
                <div className='mx-2 mb-3'>
                    <div className='flex justify-between border rounded-md border-gray-200 p-2'>
                        <div className='pt-1'>Complete the classworkk component in the space section </div>
                        <div>
                            <button className=' bg-white hover:bg-gray-100 border mr-2 border-black py-1 px-3 rounded-md text-sm'>Edit</button>
                            <button className='bg-black hover:bg-gray-900 py-1 px-3 rounded-md text-white text-sm'>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Classwork