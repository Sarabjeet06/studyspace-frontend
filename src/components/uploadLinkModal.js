/** @format */

import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const UploadLinkModal = ({ open, setOpen }) => {
   const [link, setLink] = useState('');


   return (
      <Dialog
         open={open}
         onOpenChange={setOpen}
      >
         <DialogContent>
            <section>
               <div className="font-medium font_poppins_custom">Attach your link</div>


               <div className="my-4 w-full flex items-center justify-center flex-col border-2 border-blue-500  relative  rounded-lg">
                  <input
                     value={link}
                     type="url"
                     placeholder="Enter link url"
                     onChange={(e) => {
                        setLink(e.target.value);
                     }}
                     multiple={true}
                     className="h-full w-full p-5 rounded-lg outline-none"
                  />
               </div>
               <div className="flex flex-row-reverse">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md">Enter</button>
               </div>
               
            </section>
         </DialogContent>
      </Dialog>
   );
};

export default UploadLinkModal;
