import React, { useContext } from "react";
import { useRouter } from "next/router";
import { toast } from "sonner";
import { BACKEND_URL } from "../../../config";
import { Appcontext } from "@/context/AppContext";

const index = () => {
      const router = useRouter();
      const context = useContext(Appcontext);
      const handle_join = async ()=>{
            try{
                  const res = await fetch(`${BACKEND_URL}/api/classrooms/join_class`,{
                        method:"POST",
                        headers:{
                              "Content-Type":"application/json",
                              Authorization: `Bearer ${context.sessionId}`,
                           },
                        body:JSON.stringify({
                              classroom_id:router?.query?.space_id,
                              email:router?.query?.email
                        })
                  })
                  if(res.ok){
                        const data = await res.json();
                        toast.success("Joined space successfully");
                        router.push(`/space`);
                  }else{
                        toast.error("Couldn't join space");
                  }
            }catch(err){
                  toast.error("Couldn't join space");
                  console.error(err);
            }
      }
   return (
      <div className="w-full bg-blue-100  h-screen flex-col flex items-center justify-center">
         <div className="md:w-[450px] w-[300px] h-[300px] shadow-lg bg-white rounded-t-2xl">
            <img
               className="w-full h-[150px] object-cover rounded-2xl"
               src="https://res.cloudinary.com/dqpirrbuh/image/upload/v1714825509/11235579_10808_jaqeyc.jpg"
               alt="icons"
            />
            <div className="text-center my-2 font-medium text-xl font_poppins_custom">
               Welcome to Studyspace!
            </div>
            <div className="px-5 text-xs text-gray-500">
               Thank you for your interest in joining our space. Below, you'll find the information
               you need to become a member:
            </div>
            <div className="px-5 text-xs my-2 text-gray-500 font-semibold">
               space id: <span className="text-blue-700">{router?.query?.space_id}</span>{" "}
            </div>
            <div className="px-5 text-xs my-2 text-gray-500 font-semibold">
               email id: <span className="text-blue-700">{router?.query?.email}</span>{" "}
            </div>
            <div className="relative w-full">
               <div className="w-full h-[1px] absolute top-4 bg-[#E9E9E9]"></div>
               <div className="absolute h-5 w-5 bg-blue-100 rounded-full top-2 -left-2"></div>
               <div className="absolute h-5 w-5 bg-blue-100 rounded-full top-2 -right-2"></div>
            </div>
         </div>
         <div className="md:w-[450px] w-[300px] shadow-lg  flex items-center justify-center h-[80px] bg-white rounded-b-2xl">
            <button onClick={()=>{handle_join()}} className="md:p-3 p-1 hover:bg-blue-50 px-7 rounded-lg border-2 border-dashed border-blue-600">
               join class
            </button>
         </div>
      </div>
   );
};

export default index;
