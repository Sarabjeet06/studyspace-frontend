/** @format */

import React, { useContext, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import { BACKEND_URL } from "../../config";
import { toast } from "sonner";
import { Appcontext } from "@/context/AppContext";

const JoinClassModal = ({ open, setOpen }) => {
   const [loading, setLoading] = useState(false);
   const [spaceId, setSpaceId] = useState("");
   const context = useContext(Appcontext);
   const {userDetails , fetchSpaceList} = context;
   const handle_join = async () => {
      try {
            setLoading(true);
         const res = await fetch(`${BACKEND_URL}/api/classrooms/join_class`, {
            method: "POST",
            headers : {
               "Content-Type": "application/json",
               Authorization: `Bearer ${context.sessionId}`,
            },
            body: JSON.stringify({
               classroom_id: spaceId,
               email: userDetails?.email,
            }),
         });
         if (res.ok) {
            toast.success("Successfully joined");
            fetchSpaceList();
         } else {
            toast.error("Couldn't join space");
         }
      } catch (err) {
         console.error(err);
         toast.error("Couldn't join space");
      } finally {
         setOpen(false);
         setLoading(false);
         setSpaceId("");
      }
   };
   return (
      <div>
         <Dialog
            open={open}
            onOpenChange={setOpen}
         >
            <DialogContent>
               <section>
                  <div className="font_poppins_custom mb-4">Join space</div>
                  <div className="w-full border  mb-4 rounded-md p-3 border-blue-400  ">
                     <div className="flex items-center gap-5">
                        <Image
                           className="rounded-full w-12 h-12"
                           unoptimized
                           height={100}
                           width={100}
                           src={userDetails?.profile_url}
                        />
                        <div>
                           <div>{userDetails?.username || "No name"} </div>
                           <div className="text-xs text-gray-500">{userDetails?.email || "No email"}</div>
                        </div>
                     </div>
                  </div>
                  <div className="w-full border rounded-md p-3 border-gray-400  ">
                     <div className="mb-3">Space Code</div>
                     <input
                        value={spaceId}
                        onChange={(e) => {
                           setSpaceId(e.target.value);
                        }}
                        disabled={loading === true}
                        placeholder="space id"
                        className="p-2 rounded-md border-gray-700   border-2 outline-none"
                     />
                  </div>
                  <div className="text-xs my-5 text-gray-500">
                     Sign in with your id, and join the commnuity.
                  </div>
                  <div>
                     <button
                        disabled={loading === true}
                        onClick={() => {
                           handle_join();
                        }}
                        className="w-full hover:bg-gray-100 px-3 py-2 border border-gray-800 rounded-md"
                     >
                        Join space
                     </button>
                  </div>
               </section>
            </DialogContent>
         </Dialog>
      </div>
   );
};

export default JoinClassModal;
