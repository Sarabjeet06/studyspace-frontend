/** @format */

import React, { useState } from "react";
import { toast } from "sonner";

const index = () => {
   const [imageFile, setImageFile] = useState(null);
   const [imageUrl, setImageUrl] = useState("");

   const handleFileChange = (e) => {
      const file = e.target.files[0];
      setImageFile(file);

      if (file) {
         // Read the selected file as a URL and update imageUrl state
         const reader = new FileReader();
         reader.onload = (event) => {
            setImageUrl(event.target.result);
         };
         reader.readAsDataURL(file);
      }
   };
   return (
      <section className="">
         <div
            onClick={() => {
               console.log("clicked");
               toast("djdijdjdoijdiojdijoid");
            }}
            className="px-16 cursor-pointer font_poppins_custom text-2xl font-medium py-5 border-b"
         >
            Create Space
         </div>
         {/* forms */}
         <section className="px-16 w-full my-5 flex flex-col gap-5">
            <div>
               <div className="border-2 relative flex items-center justify-center flex-col border-blue-500 border-dashed rounded-md w-1/2 h-[150px]">
                  {imageUrl && (
                     <img
                        src={imageUrl}
                        className="w-full h-full absolute top-0 object-cover "
                        alt="Uploaded"
                     />
                  )}
                  {imageUrl && (
                     <div
                        onClick={() => {
                           setImageFile(null);
                           setImageUrl("");
                        }}
                        className="absolute top-3 right-4 bg-white border-2 border-black p-2 rounded-full"
                     >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="16"
                           height="16"
                           fill="currentColor"
                           className="bi bi-x-lg"
                           viewBox="0 0 16 16"
                        >
                           <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                        </svg>
                     </div>
                  )}
                  {!imageUrl && (
                     <input
                        onChange={handleFileChange}
                        type="file"
                        className="absolute w-full h-full opacity-0 cursor-pointer"
                     />
                  )}

                  <span>
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="60"
                        height="60"
                        fill="#3C82F6"
                        className="bi bi-cloud-arrow-up-fill"
                        viewBox="0 0 16 16"
                     >
                        <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2m2.354 5.146a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2a.5.5 0 0 1 .708 0z" />
                     </svg>
                  </span>
                  <div className="text-blue-500 font-medium">Choose a file</div>
                  <div className="text-[10px] text-slate-500">
                     JPG, PNG format. 5MB max file size
                  </div>
               </div>
            </div>
            <div>
               <div className="text-sm mb-1 text-slate-500">Space Name:</div>
               <input
                  placeholder="Space Name"
                  className="border-2 w-1/2 p-2 border-blue-500 rounded-md  outline-none"
               />
            </div>
            <div>
               <div className="text-sm mb-1 text-slate-500">Section Name:</div>
               <input
                  placeholder="Space Section Name"
                  className="border-2 w-1/2 p-2 border-blue-500 rounded-md  outline-none"
               />
            </div>
            <button className="w-[100px] bg-blue-500 text-white p-2 rounded-md">Submit</button>
       
         </section>
      </section>
   );
};

export default index;
