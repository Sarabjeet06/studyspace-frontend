/** @format */

import React, { useContext, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import { BACKEND_URL } from "../../config";
import { toast } from "sonner";
import { useRouter } from "next/router";
import { Appcontext } from "@/context/AppContext";

const InviteUserModal = ({ open, setOpen }) => {
   const [email, setEmail] = useState("");
   const [file, setFile] = useState(null);
   const [loading, setLoading] = useState(false);
   const [spaceId, setSpaceId] = useState("");
   const router = useRouter();
   const context = useContext(Appcontext);
   const { id } = router.query;

   const handle_invite = async () => {
      try {
         setLoading(true);
         if (email === "" && file === null) {
            toast.error("Please enter the email or upload the file");
            return;
         }
         const form_data = new FormData();
         if (file) {
            form_data.append("file", file);
         }
         form_data.append("email", email);
         if (id) {
            form_data.append("classroom_id", id);
         } else {
            form_data.append("classroom_id", spaceId);
         }
         const res = await fetch(`${BACKEND_URL}/api/classrooms/email_invite`, {
            method: "POST",
            headers: {
               Authorization: `Bearer ${context.sessionId}`,
            },
            body: form_data,
         });
         if (res.ok) {
            toast.success("Successfully invited");
            setOpen(false);
         } else {
            toast.error("Couldn't invite");
         }
      } catch (err) {
         toast.error("Couldn't invite");
         console.error(err);
      } finally {
         setEmail("");
         setFile(null);
         setLoading(false);
      }
   };
   return (
      <Dialog
         open={open}
         onOpenChange={setOpen}
      >
         <DialogContent>
            <section>
               <div className="font-medium font_poppins_custom">Invite students</div>

               <div className="my-2 font-medium ">
                  {typeof id === "undefined" ? (
                     <div className="w-full flex items-center justify-center mx-auto">
                        <input
                        value={spaceId}
                           onChange={(e) => {
                              setSpaceId(e.target.value);
                           }}
                           className="outline-none border rounded-md p-2 text-center "
                        />
                     </div>
                  ) : (
                     <div className="text-center font-bold text-3xl">{id}</div>
                  )}

                  {typeof id === "undefined" ? (
                     <div className="text-center text-gray-400 text-xs">Enter the invite code</div>
                  ) : (
                     <div className="text-center text-gray-400 text-xs">Copy the invite code</div>
                  )}
               </div>
               <div className="w-full bg-slate-400 h-[1px]"></div>
               <div className="mt-6 mb-3">
                  <input
                     value={email}
                     disabled={loading === true}
                     onChange={(e) => {
                        setEmail(e.target.value);
                     }}
                     placeholder="enter the email of the student"
                     className="w-full border-blue-500 border outline-none rounded-md p-2"
                  />
               </div>
               <div className="flex items-center relative justify-center">OR</div>
               <div className="my-4 w-full flex items-center justify-center flex-col border-2 bg-blue-50 border-blue-500 border-dashed relative  rounded-lg p-5">
                  <input
                     type="file"
                     disabled={loading === true}
                     onChange={(e) => {
                        setFile(e.target.files[0]);
                     }}
                     multiple={false}
                     accept=".csv"
                     className="absolute h-full w-full opacity-0"
                  />
                  <div>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        fill="#3C82F6"
                        class="bi bi-cloud-plus"
                        viewBox="0 0 16 16"
                     >
                        <path
                           fill-rule="evenodd"
                           d="M8 5.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V10a.5.5 0 0 1-1 0V8.5H6a.5.5 0 0 1 0-1h1.5V6a.5.5 0 0 1 .5-.5"
                        />
                        <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383m.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z" />
                     </svg>
                  </div>
                  <div className="text-xs font-medium text-blue-500">
                     Upload csv, .xlsx, .json file
                  </div>
               </div>
               {file !== null && (
                  <div className="text-xs flex items-center justify-between bg-slate-100 p-2 rounded-md border">
                     <div className="flex items-center gap-5">
                        <div>
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="currentColor"
                              class="bi bi-filetype-csv"
                              viewBox="0 0 16 16"
                           >
                              <path
                                 fill-rule="evenodd"
                                 d="M14 4.5V14a2 2 0 0 1-2 2h-1v-1h1a1 1 0 0 0 1-1V4.5h-2A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v9H2V2a2 2 0 0 1 2-2h5.5zM3.517 14.841a1.13 1.13 0 0 0 .401.823q.195.162.478.252.284.091.665.091.507 0 .859-.158.354-.158.539-.44.187-.284.187-.656 0-.336-.134-.56a1 1 0 0 0-.375-.357 2 2 0 0 0-.566-.21l-.621-.144a1 1 0 0 1-.404-.176.37.37 0 0 1-.144-.299q0-.234.185-.384.188-.152.512-.152.214 0 .37.068a.6.6 0 0 1 .246.181.56.56 0 0 1 .12.258h.75a1.1 1.1 0 0 0-.2-.566 1.2 1.2 0 0 0-.5-.41 1.8 1.8 0 0 0-.78-.152q-.439 0-.776.15-.337.149-.527.421-.19.273-.19.639 0 .302.122.524.124.223.352.367.228.143.539.213l.618.144q.31.073.463.193a.39.39 0 0 1 .152.326.5.5 0 0 1-.085.29.56.56 0 0 1-.255.193q-.167.07-.413.07-.175 0-.32-.04a.8.8 0 0 1-.248-.115.58.58 0 0 1-.255-.384zM.806 13.693q0-.373.102-.633a.87.87 0 0 1 .302-.399.8.8 0 0 1 .475-.137q.225 0 .398.097a.7.7 0 0 1 .272.26.85.85 0 0 1 .12.381h.765v-.072a1.33 1.33 0 0 0-.466-.964 1.4 1.4 0 0 0-.489-.272 1.8 1.8 0 0 0-.606-.097q-.534 0-.911.223-.375.222-.572.632-.195.41-.196.979v.498q0 .568.193.976.197.407.572.626.375.217.914.217.439 0 .785-.164t.55-.454a1.27 1.27 0 0 0 .226-.674v-.076h-.764a.8.8 0 0 1-.118.363.7.7 0 0 1-.272.25.9.9 0 0 1-.401.087.85.85 0 0 1-.478-.132.83.83 0 0 1-.299-.392 1.7 1.7 0 0 1-.102-.627zm8.239 2.238h-.953l-1.338-3.999h.917l.896 3.138h.038l.888-3.138h.879z"
                              />
                           </svg>
                        </div>
                        <div>{file?.name?.substring(0, 60)}</div>
                     </div>
                     <div
                        onClick={() => {
                           setFile(null);
                        }}
                     >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="16"
                           height="16"
                           fill="currentColor"
                           class="bi bi-x-circle"
                           viewBox="0 0 16 16"
                        >
                           <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                           <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
                        </svg>
                     </div>
                  </div>
               )}
               <div className="flex  gap-2 mt-5  items-center justify-end">
                  <button
                     disabled={loading === true}
                     onClick={() => {
                        handle_invite();
                     }}
                  >
                     Invite
                  </button>
                  {loading && (
                     <img
                        class="w-6 h-6 animate-spin"
                        src="https://www.svgrepo.com/show/199956/loading-loader.svg"
                        alt="Loading icon"
                     />
                  )}
               </div>
            </section>
         </DialogContent>
      </Dialog>
   );
};

export default InviteUserModal;
