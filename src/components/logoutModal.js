/** @format */

import React, { useContext, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import { BACKEND_URL } from "../../config";
import { toast } from "sonner";
import { Appcontext } from "@/context/AppContext";

const LogoutModal = ({ open, setOpen }) => {
   const [loading, setLoading] = useState(false);
   const [spaceId, setSpaceId] = useState("");
   const context = useContext(Appcontext);
   const { userDetails,handle_out } = context;
   return (
      <div>
         <Dialog
            open={open}
            onOpenChange={setOpen}
         >
            <DialogContent className="w-[350px] border-0 p-0">
               <section>
                  <div className="w-full relative flex items-end justify-center h-[120px] bg-[#194D89] rounded-md">
                     <Image
                        className="rounded-full absolute -bottom-6  w-20 h-20"
                        unoptimized
                        height={100}
                        width={100}
                        src={userDetails?.profile_url}
                     />
                  </div>
      
                  <div className="w-full p-5 py-10 text-center flex flex-col items-center justify-center bg-white">
                  <div>
                           <div className="font-medium font_inter_custom text-xl">{userDetails?.username || "No name"} </div>
                           <div className="text-xs text-gray-500">
                              {userDetails?.email || "No email"}
                           </div>
                        </div>
                  </div>

                  <div className="flex py-3 justify-center items-center">
                        <button onClick={()=>{handle_out()}} className="p-2 mx-5 text-sm w-full bg-red-50 text-red-500  rounded-md px-4 border border-red-500">Logout</button>
                  </div>
               </section>
            </DialogContent>
         </Dialog>
      </div>
   );
};

export default LogoutModal;
