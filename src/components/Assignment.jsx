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
    const handleEdit = async (id) =>{
        const updatedAssignment= {
            assignment_name: assignmentName,
            assignment_date: date,
        }
        try{
            const res=await fetch(`${BACKEND_URL}/api/assignments/updateAssignment/${id}`,{
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updatedAssignment),
            })
            if(res.ok){
                console.log("update ho gaya bhai");
            }
        }catch(error){
            console.log(error);
        }
    }
    return (
        <div>
            <div className='mx-2 mb-3 shadow-md'>
                <div className='flex justify-between border rounded-md border-gray-200 p-2'>
                    <div className='flex flex-col gap-2 '>
                        <div className='pt-1'>{assignment?.assignment_name}</div>
                        <div className='flex gap-2'>
                            <div className='text-sm text-gray-600'>Last Date of submission</div>
                            <div className='text-sm text-gray-700'>{new Date(assignment?.assignment_date).toLocaleString()}</div>
                        </div>
                    </div>
                    <div>
                        <Dialog>
                            <DialogTrigger className=' bg-white hover:bg-gray-100 border mr-2 border-black py-1 px-3 rounded-md text-sm mb-1 md:mb-0'>Edit</DialogTrigger>
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
                                            <button onClick={() => handleEdit(assignment?._id)} className='px-2 py-1 bg-gray-900 hover:bg-gray-800 text-white rounded-md'>Apply Changes</button>
                                        </div>
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>

                        <button onClick={() => handleDelete(assignment?._id)} className='bg-black hover:bg-gray-900 py-1 px-3 border-black rounded-md text-white text-sm'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Assignment