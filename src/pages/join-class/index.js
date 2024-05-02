/** @format */

import React from "react";
import { toast } from "sonner"

const index = () => {
   return (
      <section className="">
         <div onClick={()=>{console.log("clicked"); toast("djdijdjdoijdiojdijoid");}} className="px-16 cursor-pointer font_poppins_custom text-2xl font-medium py-5 border-b">
            Create Space
         </div>
         {/* forms */}
         <section className="px-16 my-5 flex flex-col gap-5">
            <div>
               <div>Space Name:</div>
               <input className="border-2 w-1/2 p-2 border-blue-500 rounded-md  outline-none" />
            </div>
            <div>
               <div>Section Name:</div>
               <input className="border-2 w-1/2 p-2 border-blue-500 rounded-md  outline-none" />
            </div>
         </section>
      </section>
   );
};

export default index;
