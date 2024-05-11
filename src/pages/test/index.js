/** @format */

import InviteUserModal from "@/components/inviteUserModal";
import JoinClassModal from "@/components/joinClassModal";
import React, { useState } from "react";

const index = () => {
   const [open, setOpen] = useState(false);
   const [open2 , setOpen2] = useState(false);
   return (
      <div className="w-full h-screen flex gap-10 items-center justify-center">
         <div
            onClick={() => {
               setOpen(true);
            }}
            className="px-7 py-3 border-3 bg-black text-white rounded-md"
         >
            {" "}
            click me
         </div>
         <div
            onClick={() => {
               setOpen2(true);
            }}
            className="px-7 py-3 border-3 bg-black text-white rounded-md"
         >
            {" "}
            Invite me
         </div>
         <JoinClassModal
            open={open}
            setOpen={setOpen}
         />

         <InviteUserModal open={open2} setOpen={setOpen2}/>
      </div>
   );
};

export default index;
