import React from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const Assignmentsubmission = () => {
    return (
        <div>
            <Dialog>
                <DialogTrigger className='flex text-xs my-2 gap-2 bg-blue-500 text-white hover:bg-gradient-to-r px-2 md:text-sm py-1 rounded-md hover:bg-blue-400  '>
                    <div className='text-white text-sm p-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16px" viewBox="0 -960 960 960" width="16px" fill="#ffffff"><path d="M720-330q0 104-73 177T470-80q-104 0-177-73t-73-177v-370q0-75 52.5-127.5T400-880q75 0 127.5 52.5T580-700v350q0 46-32 78t-78 32q-46 0-78-32t-32-78v-370h80v370q0 13 8.5 21.5T470-320q13 0 21.5-8.5T500-350v-350q-1-42-29.5-71T400-800q-42 0-71 29t-29 71v370q-1 71 49 120.5T470-160q70 0 119-49.5T640-330v-390h80v390Z" /></svg>
                    </div>
                    <div className='py-1'>Submit Assignment</div>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Submit your assignment here</DialogTitle>
                        <DialogDescription>
                            <div className=' w-full flex flex-col items-center my-4 justify-center border-2 border-blue-400 border-dashed rounded-md relative p-5'>
                                <input type='file' className='absolute h-full w-full opacity-0' accept='.pdf' />
                                <div className='flex gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"><path d="M440-200h80v-167l64 64 56-57-160-160-160 160 57 56 63-63v167ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-520v-200H240v640h480v-440H520ZM240-800v200-200 640-640Z" /></svg>
                                    <div>Upload your assignment here</div>
                                </div>
                                
                            </div>
                            <div className='flex gap-0'>
                                    <div className='text-red-500'>*</div>
                                    <div className='text-sm text-red-500'>
                                        Upload only in pdf form
                                    </div>
                                </div>
                            <div className='flex justify-center  my-4'>
                                <button className='bg-blue-500 hover:bg-blue-400 py-2 px-3 rounded-md text-white'>Submit</button>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Assignmentsubmission