/** @format */

import React, { useContext, useState } from "react";
import { BACKEND_URL } from "../../config";
import {
   Dialog,
   DialogContent,
   DialogDescription,
   DialogHeader,
   DialogTitle,
   DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "./ui/textarea";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import Image from "next/image";
import { Appcontext } from "@/context/AppContext";

const Assignment = ({ assignment  , fetchAssignments }) => {
   const [date, setDate] = useState("");
   const [assignmentName, setAssignmentName] = useState("");
   const context = useContext(Appcontext);

   const handleDelete = async (id) => {
      try {
         const res = await fetch(`${BACKEND_URL}/api/assignments/deleteAssignment/${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${context.sessionId}`,
             },
         });
         if (res.ok) {
            console.log("Delete kardia bhai");
            await fetchAssignments();
         } else {
            console.log("delete nhi hua bhai");
         }
      } catch (error) {
         console.log(error);
      }
   };
   const handleEdit = async (id) => {
      const updatedAssignment = {
         assignment_name: assignmentName,
         assignment_date: date,
      };
      try {
         const res = await fetch(`${BACKEND_URL}/api/assignments/updateAssignment/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${context.sessionId}`,
             },
            body: JSON.stringify(updatedAssignment),
         });
         if (res.ok) {
            await fetchAssignments();
            console.log("update ho gaya bhai");
         }
      } catch (error) {
         console.log(error);
      }
   };
   return (
      <div>
         <div className="mx-2 mb-3">
            <div className="flex font_inter_custom justify-between items-center border rounded-md border-gray-200 py-2 pl-5 pr-4 hover:bg-blue-50">
               <div className="flex flex-col gap-2">
                  <div className="pt-1 font-semibold flex items-center">
                     {assignment?.heading}{" "}
                     <span
                        onClick={() => {
                           window.open(`${assignment?.question_url}`);
                        }}
                        className="text-xs flex items-center gap-0 px-3 text-blue-500 underline cursor-pointer"
                     >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           height="15px"
                           viewBox="0 -960 960 960"
                           width="15px"
                           fill="#3C82F6"
                        >
                           <path d="M330-240q-104 0-177-73T80-490q0-104 73-177t177-73h370q75 0 127.5 52.5T880-560q0 75-52.5 127.5T700-380H350q-46 0-78-32t-32-78q0-46 32-78t78-32h370v80H350q-13 0-21.5 8.5T320-490q0 13 8.5 21.5T350-460h350q42-1 71-29.5t29-70.5q0-42-29-71t-71-29H330q-71-1-120.5 49T160-490q0 70 49.5 119T330-320h390v80H330Z" />
                        </svg>
                        attachment
                     </span>
                  </div>
                  <div className="text-xs font-medium text-slate-600">{assignment?.description}</div>
                  <div className="flex gap-2 items-center">
                     <div className="text-sm flex items-center gap-2 text-gray-600">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           height="19px"
                           viewBox="0 -960 960 960"
                           width="19px"
                           fill="#5f6368"
                        >
                           <path d="M480-80q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-440q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-800q75 0 140.5 28.5t114 77q48.5 48.5 77 114T840-440q0 75-28.5 140.5t-77 114q-48.5 48.5-114 77T480-80Zm0-360Zm112 168 56-56-128-128v-184h-80v216l152 152ZM224-866l56 56-170 170-56-56 170-170Zm512 0 170 170-56 56-170-170 56-56ZM480-160q117 0 198.5-81.5T760-440q0-117-81.5-198.5T480-720q-117 0-198.5 81.5T200-440q0 117 81.5 198.5T480-160Z" />
                        </svg>
                     </div>
                     <div className="text-xs text-gray-700">
                        {new Date(assignment?.deadline).toLocaleString()}
                     </div>
                  </div>
               </div>
               <div>
                  <Popover>
                     <PopoverTrigger>
                        <div className="p-1 hover:bg-blue-100 rounded-full">
                           <Image
                              unoptimized
                              className="w-6 h-6 mx-auto my-auto"
                              src="/images/menu-3-dot-icon.png"
                              width={100}
                              height={100}
                           />
                        </div>
                     </PopoverTrigger>

                     <PopoverContent className="w-fit py-2">
                        <div className="flex flex-col gap-1 w-fit">
                           <Dialog>
                              <DialogTrigger className="bg-white hover:bg-gray-100  mr-2 py-1 px-3 rounded-md text-sm mb-1 md:mb-0 w-14">
                                 Edit
                              </DialogTrigger>
                              <DialogContent>
                                 <DialogHeader>
                                    <DialogTitle>Update Assignment</DialogTitle>
                                    <DialogDescription>
                                       <div className="text-black">
                                          <div className=" font-serif mb-2 ">
                                             Add a topic for assignment
                                          </div>
                                          <Textarea
                                             placeholder="Enter a topic here"
                                             onChange={(e) => {
                                                setAssignmentName(e.target.value);
                                             }}
                                          />
                                          <div className="my-2">Last date of submission</div>
                                          <input
                                             type="date"
                                             value={date}
                                             onChange={(e) => {
                                                setDate(e.target.value);
                                             }}
                                             className="border border-1 border-gray-200 focus:border-black   rounded-sm p-2 focus:outline-none focus:ring-0 hover:cursor-pointer"
                                          />
                                       </div>
                                       <div className="flex justify-end mt-5">
                                          <button
                                             onClick={() => handleEdit(assignment?._id)}
                                             className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
                                          >
                                             Apply Changes
                                          </button>
                                       </div>
                                    </DialogDescription>
                                 </DialogHeader>
                              </DialogContent>
                           </Dialog>

                           <Dialog>
                              <DialogTrigger className="hover:bg-gray-100 py-1 px-3 w-14 rounded-md text-sm">
                                 Delete
                              </DialogTrigger>

                              <DialogContent>
                                 <DialogDescription>
                                    <div className="text-center text-lg p-4 *:my-4">
                                       <div>Are you sure you want to delete this assignment?</div>
                                       <div className="flex justify-center gap-4">
                                          {/* <button className='py-2 px-6 bg-[#b9bbc7] hover:bg-[#9da0b2] rounded-md text-white text-sm'>Cancel</button> */}
                                          <button
                                             onClick={() => handleDelete(assignment?._id)}
                                             className="bg-[#ed5e68] hover:bg-[#e9434f] py-2 px-6 border-[#ed5e68] rounded-md text-white text-sm"
                                          >
                                             Delete
                                          </button>
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
   );
};

export default Assignment;
