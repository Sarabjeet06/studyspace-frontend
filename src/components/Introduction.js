/** @format */

import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Introduction() {
    const router = useRouter();
   return (
      <div>
         <div className="flex flex-col-reverse lg:flex-row justify-evenly mt-12 mb-16 mx-auto w-fit">
            <div className="flex flex-col justify-center gap-4 lg:w-1/2">
               <div className="relative w-full px-10 flex items-center justify-center  overflow-hidden">
                  {/* <Image
                    className="object-cover w-full h-full"
                    src="/images/splash.png"
                    width={100}
                    height={100}
                /> */}
                  <div className=" text-slate-800 md:w-11/12 w-full mx-auto font_poppins_custom font-extrabold md:text-[3rem] sm:text-[2rem] text-[1.7rem] leading-[1.2] tracking-[1px]">
                     <span className="text-[#579668]">Empowering Minds</span> , Connecting Futures:
                     Welcome to StudySpace!
                  </div>
               </div>
               <div className="w-4/5 sm:w-5/6 mx-auto">
                  <div className="py-6 px-2 text-slate-700 font-medium text-lg">
                     Discover a new era of education with EduConnect, where every connection fuels
                     your learning journey to new heights!
                  </div>
               </div>
               <div className="md:px-[4.4rem] px-[2.9rem]">
                  <button onClick={()=>{router.push('/signup')}} className="px-6 flex items-center gap-3 text-white bg-[#579668] py-3 rounded-sm">
                     Get's started{" "}
                     <span>
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           height="24px"
                           viewBox="0 -960 960 960"
                           width="24px"
                           fill="#fff"
                        >
                           <path d="M120-160v-640l760 320-760 320Zm80-120 474-200-474-200v140l240 60-240 60v140Zm0 0v-400 400Z" />
                        </svg>
                     </span>
                  </button>
               </div>
            </div>
            <div className="lg:w-1/2 h-full mx-auto my-auto">
               <Image
                  src="/images/Multitasking-bro.png"
                  width={650}
                  height={650}
               ></Image>
            </div>
         </div>
      </div>
   );
}
