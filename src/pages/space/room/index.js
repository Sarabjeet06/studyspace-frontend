/** @format */

import React, { useContext, useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Stream from "@/components/Stream";
import People from "@/components/People";
import Homenavbar from "@/components/Homenavbar";
import Homesidemenubar from "@/components/Homesidemenubar";
import GradeTable from "@/components/gradeTable";
import { Montserrat } from "next/font/google";
import { motion } from "framer-motion";
import { MdDashboard } from "react-icons/md";
import { LuNetwork } from "react-icons/lu";
import { FaRegUserCircle } from "react-icons/fa";
import { RiNumbersFill } from "react-icons/ri";

let tabs = [
   {
      id: "stream",
      label: (
         <div className="flex items-center gap-2">
            <MdDashboard />
            Stream
         </div>
      ),
   },
   {
      id: "classwork",
      label: (
         <div className="flex items-center gap-2">
            <LuNetwork />
            Classwork
         </div>
      ),
   },
   {
      id: "people",
      label: (
         <div className="flex items-center gap-2">
            <FaRegUserCircle />
            People
         </div>
      ),
   },
   {
      id: "grade",
      label: (
         <div className="flex items-center gap-2">
            <RiNumbersFill />
            Grade
         </div>
      ),
   },
];
import Classwork from "@/components/Classwork";
import HomePageLayout from "@/components/HomePageLayout";
import PeopleSkeleton from "@/components/PeopleSkeleton";
import { BACKEND_URL } from "../../../../config";
import { useRouter } from "next/router";
import { Appcontext } from "@/context/AppContext";

const index = () => {
   const [menuClicked, setMenuClicked] = useState(false);
   const [activeTab, setActiveTab] = useState(tabs[0].id);

   const [UserRole , setUserRole] = useState(null);
   const router = useRouter();
   const { id } = router.query;
   const context = useContext(Appcontext);
   const {sessionId , userDetails} = context;
   const handle_role = async ()=>{
      try{
         const res = await fetch(`${BACKEND_URL}/api/members/member_role?user_id=${userDetails?.user_id}&&classroom_id=${id}` , {
            method : 'GET',
            headers: {
               Authorization: `Bearer ${sessionId}`,
            },
         });
         if(res.ok){
            const data = await res.json();
            setUserRole(data?.role);
         }
      }catch(err){
         console.error(err);
      }
   }

   useEffect(()=>{
      if(typeof id !== "undefined" && userDetails)
      handle_role();
   },[id]);
   return (
      <HomePageLayout>
         <section className="md:px-16 px-5 py-7">
            <div className="flex flex-wrap space-x-1">
               {tabs.map((tab) => (
                  <button
                     key={tab.id}
                     onClick={() => setActiveTab(tab.id)}
                     className={`${
                        activeTab === tab.id ? "" : "hover:text-gray-500"
                     } relative rounded-lg px-5 py-1.5 text-sm font-medium  outline-sky-400 transition focus-visible:outline-2`}
                     style={{
                        WebkitTapHighlightColor: "transparent",
                     }}
                  >
                     {activeTab === tab.id && (
                        <motion.span
                           layoutId="bubble"
                           className="absolute rounded-lg inset-0 z-10 bg-white mix-blend-difference"
                           transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                        />
                     )}
                     {tab.label}
                  </button>
               ))}
            </div>
            <div className="w-full my-3 h-[2px] bg-slate-200"></div>
            <div>
               {activeTab === "stream" && <Stream role={UserRole}/>}
               {activeTab === "classwork" && <Classwork  role={UserRole}/>}
               {activeTab === "people" && (
                     <People role={UserRole} name={"Student"} />
               )}
               {activeTab === "grade" && <GradeTable />}
            </div>
         </section>
      </HomePageLayout>
   );
};

export default index;
