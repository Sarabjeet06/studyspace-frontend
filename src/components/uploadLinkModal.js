/** @format */

import React, { useContext, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";
import { BACKEND_URL } from "../../config";
import { toast } from "sonner";
import { useRouter } from "next/router";
import { Appcontext } from "@/context/AppContext";

const UploadLinkModal = ({ open, setOpen }) => {
   const [file, setFile] = useState(null);
   const [loading, setLoading] = useState(false);


   return (
      <Dialog
         open={open}
         onOpenChange={setOpen}
      >
         <DialogContent>
            <section>
               <div className="font-medium font_poppins_custom">Attach your files</div>


               <div className="my-4 w-full flex items-center justify-center flex-col border-2 bg-blue-50 border-blue-500 border-dashed relative  rounded-lg p-5">
                  <input
                     value={'link'}
                     type="url"
                     onChange={(e) => {
                        setFile(e.target.value);
                     }}
                     multiple={true}
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
                     Upload link
                  </div>
               </div>
               
            </section>
         </DialogContent>
      </Dialog>
   );
};

export default UploadLinkModal;
