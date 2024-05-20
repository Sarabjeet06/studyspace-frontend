/** @format */

import React, { useContext, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import { BACKEND_URL } from "../../config";
import { toast } from "sonner";
import { Appcontext } from "@/context/AppContext";


const DeleteAnouncemodal = ({ open, setOpen  , selectedAnouncement ,fetch_anouncement}) => {
   const context = useContext(Appcontext);
   const handle_delete  = async()=>{
      try{
          const res = await fetch(`${BACKEND_URL}/api/anouncements/announcement/${selectedAnouncement}` , {
              method : "DELETE",
              headers: {
                  Authorization: `Bearer ${context.sessionId}`,
               },
          });
          if(res.ok){
              toast.success("Announcement Deleted successfully");
              await fetch_anouncement();
              setOpen(false);
          }
      }catch(e){
          console.error(e);
      }
  }

   return (
      <div>
         <Dialog
            open={open}
            onOpenChange={setOpen}
         >
            <DialogContent>
               <section>
                  <div className="text-xl font-medium">Delete Anouncement</div>
                  <div className="my-2 w-full h-[1px] bg-slate-500"></div>
                  <button className="mx-auto p-2 border rounded-md my-4 border-red-400 text-red-400 bg-red-50" onClick={()=>{handle_delete()}}>Delete anouncement</button>
               </section>
            </DialogContent>
         </Dialog>
      </div>
   );
};

export default DeleteAnouncemodal;
