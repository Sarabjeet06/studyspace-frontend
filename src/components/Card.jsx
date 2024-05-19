/** @format */

import React, { useContext, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BACKEND_URL } from "../../config";
import { Appcontext } from "@/context/AppContext";
import { toast } from "sonner";

const Card = ({ className, classBtn, classDescription, archived, ImagePath, ImageUser, classroom_id }) => {
   const router = useRouter();
   const [openSettings, setOpenSettings] = useState(false);
   const context = useContext(Appcontext);
   const { fetchSpaceList } = context;
   const handleDelete = async () => {
      try {
         const res = await fetch(`${BACKEND_URL}/api/classrooms/delete_class?classId=${classroom_id}`, {
            method: "DELETE",
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${context.sessionId}`,
            },
         });
         if (res.ok) {
            toast.success("Deleted successfully");
            fetchSpaceList();
            setOpenSettings(false);
         }
      } catch (er) {
         console.error(er);
      }
   }

   const handleToggleArchived = async () => {
      try {
         const res = await fetch(`${BACKEND_URL}/api/classrooms/toggle_archived`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${context.sessionId}`,
            },
            body: JSON.stringify({ classId: classroom_id, archived: archived }),
         });
         if (res.ok) {
            toast.success("Archived status updated successfully");
            context.fetchSpaceList();
            setOpenSettings(false);
         }
      } catch (er) {
         console.error(er);
      }
   };


   return (
      <div className="border w-[380px] h-[460px] relative border-gray-300 rounded-md shadow-md">
         <div className="relative">
            <div className="absolute top-3 right-2">
               <DropdownMenu open={openSettings} onOpenChange={setOpenSettings}>
                  <DropdownMenuTrigger asChild>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="19px"
                        viewBox="0 -960 960 960"
                        width="19px"
                        fill="#fff"
                     >
                        <path d="m370-80-16-128q-13-5-24.5-12T307-235l-119 50L78-375l103-78q-1-7-1-13.5v-27q0-6.5 1-13.5L78-585l110-190 119 50q11-8 23-15t24-12l16-128h220l16 128q13 5 24.5 12t22.5 15l119-50 110 190-103 78q1 7 1 13.5v27q0 6.5-2 13.5l103 78-110 190-118-50q-11 8-23 15t-24 12L590-80H370Zm70-80h79l14-106q31-8 57.5-23.5T639-327l99 41 39-68-86-65q5-14 7-29.5t2-31.5q0-16-2-31.5t-7-29.5l86-65-39-68-99 42q-22-23-48.5-38.5T533-694l-13-106h-79l-14 106q-31 8-57.5 23.5T321-633l-99-41-39 68 86 64q-5 15-7 30t-2 32q0 16 2 31t7 30l-86 65 39 68 99-42q22 23 48.5 38.5T427-266l13 106Zm42-180q58 0 99-41t41-99q0-58-41-99t-99-41q-59 0-99.5 41T342-480q0 58 40.5 99t99.5 41Zm-2-140Z" />
                     </svg>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className=" w-44">
                     <DropdownMenuLabel>{className || "No name"}</DropdownMenuLabel>
                     <DropdownMenuSeparator />
                     <div className="text-xs flex flex-col gap-2 p-3 font_inter_custom">
                        <div onClick={() => { handleDelete() }} className="flex cursor-pointer items-center gap-2">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="20px"
                              viewBox="0 -960 960 960"
                              width="20px"
                              fill="#5f6368"
                           >
                              <path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" />
                           </svg>
                           Delete Space
                        </div>
                        <div onClick={() => { handleToggleArchived() }} className="flex cursor-pointer items-center gap-2">
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              height="20px"
                              viewBox="0 -960 960 960"
                              width="20px"
                              fill="#5f6368"
                           >
                              <path d="m480-240 160-160-56-56-64 64v-168h-80v168l-64-64-56 56 160 160ZM200-640v440h560v-440H200Zm0 520q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v499q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm264 300Z" />
                           </svg>
                           {!archived ? "Archived" : "unArchived"} Space
                        </div>
                     </div>
                  </DropdownMenuContent>
               </DropdownMenu>
            </div>

            <Image
               src={ImagePath}
               unoptimized
               quality={100}
               width={100}
               height={100}
               alt="Card Image"
               className="w-full rounded-md h-[260px]"
            />
            <Image
               src={ImageUser}
               width={100}
               height={100}
               alt="Card Image"
               className="rounded-full absolute -bottom-8 right-5 md:-bottom-8 w-20 h-20 md:right-4"
            />
         </div>
         <div className="p-4 relative">
            <div className="text-lg font-semibold mb-2">{className}</div>
            <div className="text-gray-700 mb-4">{classDescription}</div>
         </div>
         <div className="absolute bottom-2 p-4">
            <button
               className="bg-black flex items-center gap-2 text-white text-xs font_poppins_custom px-3 py-2 rounded-sm"
               onClick={() => {
                  router.push(`/space/room?id=${classroom_id}`);
               }}
            >
               {classBtn}
               <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16px"
                  viewBox="0 -960 960 960"
                  width="16px"
                  fill="#fff"
               >
                  <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
               </svg>
            </button>
         </div>
      </div>
   );
};

export default Card;
