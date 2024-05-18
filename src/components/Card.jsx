/** @format */

import React, { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";

const Card = ({ className, classBtn, classDescription, ImagePath, ImageUser, classroom_id }) => {
   const router = useRouter();
   return (
      <div className="border w-[380px] min-h-fit border-gray-300 rounded-md shadow-md">
         <div className="relative">
            <Image
               src={ImagePath}
               width={300}
               height={200}
               alt="Card Image"
               className="w-full rounded-md h-64"
            />
            <Image
               src={ImageUser}
               width={100}
               height={50}
               alt="Card Image"
               className="rounded-full absolute -bottom-8 right-5 md:-bottom-8 md:right-10"
            />
         </div>
         <div className="p-4">
            <div className="text-lg font-semibold mb-2">{className}</div>
            <div className="text-gray-700 mb-4">{classDescription}</div>
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
