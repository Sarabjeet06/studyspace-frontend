import React, { useContext, useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Appcontext } from '@/context/AppContext';
import { BACKEND_URL } from '../../config';
import { toast } from 'sonner';

const Assignmentsubmission = ({classroom_id , assignment_id , fetchAssignments}) => {
    const context = useContext(Appcontext);
    const [open , setopen] = useState(false);
    const [file , setFile] = useState(null);
    const handle_submit = async()=>{
        try{
            const form_data = new FormData();
            form_data.set("file" , file);
            form_data.set("classroom_id" , classroom_id);
            form_data.set("assignment_id" , assignment_id);
            // console.log(assignment_id)
            const res = await fetch(`${BACKEND_URL}/api/submissions/submissions` , {
                method : "POST",
                headers : {
                    Authorization : `Bearer ${context.sessionId}`
                },
                body : form_data,
            })
            if(res.ok){
                const data = await res.json();
                toast.success("assignment submitted successfully");
                await fetchAssignments();
                setopen(false);
            }
        }catch(e){
            console.log(e);
        }
    }
    return (
        <div>
            <Dialog open={open} onOpenChange={setopen}>
                <DialogTrigger onClick={()=>{setopen(true)}} className='flex text-xs my-2 gap-0 bg-blue-500 text-white hover:bg-gradient-to-r px-2 md:text-sm py-1 rounded-md hover:bg-blue-400  items-center '>
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
                                <input onChange={(e)=>{setFile(e.target.files[0])}} type='file' className='absolute h-full w-full opacity-0' accept='.pdf' />
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
                                {file !== null &&     <div className="w-full">
                                 <div className="w-48 relative bg-white p-2  flex items-center gap-2 border rounded-md">
                                    <div className="p-2 rounded-md bg-blue-400">
                                       <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          height="24px"
                                          viewBox="0 -960 960 960"
                                          width="24px"
                                          fill="#fff"
                                       >
                                          <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" />
                                       </svg>
                                    </div>
                                    <div
                                       onClick={() => {
                                        setFile(null);
                                       }}
                                       className="absolute p-1 rounded-full border bg-white -top-2 -right-2"
                                    >
                                       <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          height="11px"
                                          viewBox="0 -960 960 960"
                                          width="11px"
                                          fill="#5f6368"
                                       >
                                          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                                       </svg>
                                    </div>
                                    <div className="font_poppins_custom font-medium text-slate-500 text-sm">
                                       Assignment added
                                    </div>
                                 </div>
                              </div>}
                            <div className='flex justify-center  my-4'>
                                <button onClick={()=>{handle_submit()}} className='bg-blue-500 hover:bg-blue-400 py-2 px-3 rounded-md text-white'>Submit</button>
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default Assignmentsubmission