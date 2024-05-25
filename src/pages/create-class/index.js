import React, { useContext, useState } from "react";
import { toast } from "sonner";
import { BACKEND_URL } from "../../../config";
import { useRouter } from "next/navigation";
import { Appcontext } from "@/context/AppContext";


const index = () => {
   const [imageFile, setImageFile] = useState(null);
   const [imageUrl, setImageUrl] = useState("");
   const [spaceName, setSpaceName] = useState("");
   const [spaceSection, setSpaceSection] = useState("");
   const [loading, setLoading] = useState(false);
   const router = useRouter();
   const context = useContext(Appcontext);
   const {fetchSpaceList , userDetails} = context;
   

   const handle_submit = async () => {
      if(spaceName === "" &&  spaceName === ""){
         toast.error('Event has not been created')
          return;
      }
      try {
         setLoading(true);
         const form_data = new FormData();
         form_data.append("file", imageFile);
         form_data.append("name", spaceName);
         form_data.append("section", spaceSection);
         form_data.append("user_id", userDetails?.user_id);
         const res = await fetch(`${BACKEND_URL}/api/classrooms/create_class`, {
            method: "POST",
            headers: {
               Authorization: `Bearer ${context.sessionId}`,
            },
            body: form_data,
         });
         if (res.ok) {
            const data = await res.json();
            fetchSpaceList();
            router.push('/space');
         }
      } catch (err) {
         console.error(err);
      } finally {
         setLoading(false);
      }
   };
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
            className="px-16 cursor-pointer font_poppins_custom text-2xl font-medium py-5 border-b"
         >
            Create Space
         </div>
         {/* forms */}
         <section className="w-full flex flex-col gap-5">
            <div>
               <div className="border-2 relative flex items-center justify-center flex-col border-blue-500 border-dashed w-full h-[170px]">
                  {imageUrl && (
                     <img
                        src={imageUrl}
                        className="w-full h-full absolute top-0 object-cover "
                        alt="Uploaded"
                     />
                  )}
                  {(imageUrl && loading === false) && (
                     <div
                        onClick={() => {
                           setImageFile(null);
                           setImageUrl("");
                        }}
                        className="absolute top-3 right-4 bg-white border border-black p-1 cursor-pointer rounded-full"
                     >
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="12"
                           height="12"
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

            <div className="w-1/2 my-5 flex flex-col gap-5 mx-auto">
               <div>
                  <div className="text-sm mb-1 text-slate-500">Space Name:</div>
                  <input
                     onChange={(e) => {
                        setSpaceName(e.target.value);
                     }}
                     disabled={loading === true}
                     value={spaceName}
                     placeholder="Space Name"
                     className="border-2 shadow w-full p-2 border-blue-500 rounded-md  outline-none"
                  />
               </div>
               <div>
                  <div className="text-sm mb-1 text-slate-500">Section Name:</div>
                  <input
                     onChange={(e) => {
                        setSpaceSection(e.target.value);
                     }}
                     disabled={loading === true}
                     value={spaceSection}
                     placeholder="Space Section Name"
                     className="border-2 w-full  shadow  p-2 border-blue-500 rounded-md  outline-none"
                  />
               </div>
               <button
                  disabled={loading === true}
                  onClick={() => {
                     handle_submit();
                  }}
                  className={`w-[100px] ${
                     loading && "animate-pulse"
                  }  bg-blue-500 text-white p-2 rounded-md`}
               >
                  Submit
               </button>
            </div>
         </section>
      </section>
   );
};

export default index;
