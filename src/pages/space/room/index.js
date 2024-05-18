/** @format */

import React, { useState } from "react";
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

const index = () => {
   const [menuClicked, setMenuClicked] = useState(false);
   const [activeTab, setActiveTab] = useState(tabs[0].id);

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
               {activeTab === "stream" && <Stream />}
               {activeTab === "classwork" && <Classwork />}
               {activeTab === "people" && (
                  <>
                     {" "}
                     <People name={"Teacher"} />
                     <People name={"Student"} />
                  </>
               )}
               {activeTab === "grade" && <GradeTable />}
            </div>
         </section>
      </HomePageLayout>
   );
};

export default index;
