import React, { useState } from 'react'
import { BACKEND_URL } from '../../config';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from './ui/textarea';
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import Image from 'next/image';



const Assignment = ({ assignment }) => {
    const [date, setDate] = useState("");
    const [assignmentName, setAssignmentName] = useState("");

    const handleDelete = async (id) => {
        try {
            const res = await fetch(`${BACKEND_URL}/api/assignments/deleteAssignment/${id}`, {
                method: "DELETE",
            });
            if (res.ok) {
                console.log("Delete kardia bhai");
            } else {
                console.log("delete nhi hua bhai");
            }
        } catch (error) {
            console.log(error);
        }
    }
    const handleEdit = async (id) => {
        const updatedAssignment = {
            assignment_name: assignmentName,
            assignment_date: date,
        }
        try {
            const res = await fetch(`${BACKEND_URL}/api/assignments/updateAssignment/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedAssignment),
            })
            if (res.ok) {
                console.log("update ho gaya bhai");
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <div className='mx-2 mb-3'>
                <div className='flex justify-between items-center border rounded-md border-gray-200 py-2 pl-5 pr-4 hover:bg-blue-50'>
                    <div className='flex items-center gap-2'>
                        <div className='w-fit h-fit p-2 bg-gray-400 rounded-full'>
                            <Image
                                unoptimized
                                className='w-6 h-6'
                                width={100}
                                height={100}
                                src='/images/assignment-icon.png'
                            />
                        </div>
                        <div className='flex flex-col gap-2'>
                            <div className='pt-1'>{assignment?.assignment_name}</div>
                            <div className='flex gap-2'>
                                <div className='text-sm text-gray-600'>Due Date</div>
                                <div className='text-sm text-gray-700'>{new Date(assignment?.assignment_date).toLocaleString()}</div>
                            </div>
                        </div>

                    </div>
                    <div>
                        <Popover>
                            <PopoverTrigger>
                                <div className='p-1 hover:bg-blue-100 rounded-full'>
                                    <Image
                                        unoptimized
                                        className='w-6 h-6 mx-auto my-auto'
                                        src='/images/menu-3-dot-icon.png'
                                        width={100}
                                        height={100}
                                    />
                                </div>
                            </PopoverTrigger>

                            <PopoverContent className='w-fit py-2'>
                                <div className='flex flex-col gap-1 w-fit'>
                                    <Dialog>
                                        <DialogTrigger className='bg-white hover:bg-gray-100  mr-2 py-1 px-3 rounded-md text-sm mb-1 md:mb-0 w-14'>Edit</DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>Update Assignment</DialogTitle>
                                                <DialogDescription>
                                                    <div className='text-black'>
                                                        <div className=' font-serif mb-2 '>Add a topic for assignment</div>
                                                        <Textarea placeholder="Enter a topic here" onChange={(e) => { setAssignmentName(e.target.value) }} />
                                                        <div className='my-2'>Last date of submission</div>
                                                        <input
                                                            type="date"
                                                            value={date}
                                                            onChange={(e) => { setDate(e.target.value) }}
                                                            className="border border-1 border-gray-200 focus:border-black   rounded-sm p-2 focus:outline-none focus:ring-0 hover:cursor-pointer"
                                                        />
                                                    </div>
                                                    <div className='flex justify-end mt-5'>
                                                        <button onClick={() => handleEdit(assignment?._id)} className='px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md'>Apply Changes</button>
                                                    </div>
                                                </DialogDescription>
                                            </DialogHeader>
                                        </DialogContent>
                                    </Dialog>

                                    <Dialog>
                                        <DialogTrigger className='hover:bg-gray-100 py-1 px-3 w-14 rounded-md text-sm'>Delete</DialogTrigger>

                                        <DialogContent>
                                            <DialogDescription>
                                                <div className='text-center text-lg p-4 *:my-4'>
                                                    <div>
                                                        Are you sure you want to delete this assignment?
                                                    </div>
                                                    <div className='flex justify-center gap-4'>
                                                        {/* <button className='py-2 px-6 bg-[#b9bbc7] hover:bg-[#9da0b2] rounded-md text-white text-sm'>Cancel</button> */}
                                                        <button onClick={() => handleDelete(assignment?._id)} className='bg-[#ed5e68] hover:bg-[#e9434f] py-2 px-6 border-[#ed5e68] rounded-md text-white text-sm'>Delete</button>
                                                    </div>
                                                </div>
                                            </DialogDescription>
                                        </DialogContent>
                                    </Dialog>
                                </div>
                            </PopoverContent>
                        </Popover>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Assignment