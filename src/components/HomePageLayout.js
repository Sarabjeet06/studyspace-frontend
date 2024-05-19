/** @format */

import React, { useContext, useMemo, useState } from "react";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import JoinClassModal from "./joinClassModal";
import InviteUserModal from "./inviteUserModal";
import { Appcontext } from "@/context/AppContext";
import { useRouter } from "next/router";

const HomePageLayout = ({ children }) => {
   const [menuClicked, setMenuClicked] = useState(false);
   const [expand1, setExpand1] = useState(true);
   const [expand2, setExpand2] = useState(true);
   const [expand3, setExpand3] = useState(true);
   const [openJoinModal, setOpenJoinModal] = useState(false);
   const [openCreateModal, setOpenCreateModal] = useState(false);
   const pathname = usePathname();
   const router = useRouter();
   const context = useContext(Appcontext);
   const predefinedColors = ["#139A98", "#C3804A", "#17A34A", "#DC2625"];

   const getRandomColor = () => {
      const randomIndex = Math.floor(Math.random() * predefinedColors.length);
      return predefinedColors[randomIndex];
   };
   const { userDetails, mySpaceArchiveList, mySpaceStudyList, mySpaceList } = context;

   return (
      <div className="w-full relative h-screen">
         <div className="z-[50] fixed md:relative w-full flex justify-between border border-b-2 border-gray-200 bg-white px-3 py-3 ">
            <div className="flex   gap-2">
               <div
                  className="hover:cursor-pointer hover:bg-gray-200 p-2  hover:rounded-full"
                  onClick={() => {
                     setMenuClicked(!menuClicked);
                  }}
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="22"
                     height="22"
                     fill="currentColor"
                     className="bi bi-list"
                     viewBox="0 0 16 16"
                  >
                     <path
                        fill-rule="evenodd"
                        d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                     />
                  </svg>
               </div>
            </div>
            <div className="text-lg uppercase leading-8">StudySpace</div>
            <div className="flex items-center gap-4 ">
               <Popover>
                  <PopoverTrigger>
                     <div className="hover:cursor-pointer p-2 hover:bg-gray-200  hover:rounded-full">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           width="22"
                           height="22"
                           fill="currentColor"
                           className="bi bi-plus"
                           viewBox="0 0 16 16"
                        >
                           <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
                        </svg>
                     </div>
                  </PopoverTrigger>
                  <PopoverContent className="w-full">
                     <div className="text-sm">
                        <div
                           onClick={() => {
                              setOpenJoinModal(true);
                           }}
                           className="flex cursor-pointer my-2 items-center gap-2"
                        >
                           <span>
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 height="19px"
                                 viewBox="0 -960 960 960"
                                 width="19px"
                                 fill="#5f6368"
                              >
                                 <path d="M480-120v-80h280v-560H480v-80h280q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H480Zm-80-160-55-58 102-102H120v-80h327L345-622l55-58 200 200-200 200Z" />
                              </svg>
                           </span>
                           Join class
                        </div>
                        <div
                           onClick={() => {
                              setOpenCreateModal(true);
                           }}
                           className="flex cursor-pointer my-2 items-center gap-2"
                        >
                           <span>
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 height="19px"
                                 viewBox="0 -960 960 960"
                                 width="19px"
                                 fill="#5f6368"
                              >
                                 <path d="M500-482q29-32 44.5-73t15.5-85q0-44-15.5-85T500-798q60 8 100 53t40 105q0 60-40 105t-100 53Zm220 322v-120q0-36-16-68.5T662-406q51 18 94.5 46.5T800-280v120h-80Zm80-280v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Zm-480-40q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM0-160v-112q0-34 17.5-62.5T64-378q62-31 126-46.5T320-440q66 0 130 15.5T576-378q29 15 46.5 43.5T640-272v112H0Zm320-400q33 0 56.5-23.5T400-640q0-33-23.5-56.5T320-720q-33 0-56.5 23.5T240-640q0 33 23.5 56.5T320-560ZM80-240h480v-32q0-11-5.5-20T540-306q-54-27-109-40.5T320-360q-56 0-111 13.5T100-306q-9 5-14.5 14T80-272v32Zm240-400Zm0 400Z" />
                              </svg>
                           </span>
                           Invite class
                        </div>
                        <div
                           onClick={() => {
                              router.push("/create-class");
                           }}
                           className="flex cursor-pointer my-2 items-center gap-2"
                        >
                           <span>
                              <svg
                                 xmlns="http://www.w3.org/2000/svg"
                                 height="19px"
                                 viewBox="0 -960 960 960"
                                 width="19px"
                                 fill="#5f6368"
                              >
                                 <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h240v80H200v560h560v-240h80v240q0 33-23.5 56.5T760-120H200Zm440-400v-120H520v-80h120v-120h80v120h120v80H720v120h-80Z" />
                              </svg>
                           </span>
                           Create class
                        </div>
                     </div>
                  </PopoverContent>
               </Popover>
               {userDetails ? (
                  <img
                     className="w-9  h-9 rounded-full"
                     src={userDetails?.profile_url}
                     alt="profile_icon"
                  />
               ) : (
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     width="22"
                     height="22"
                     fill="currentColor"
                     className="bi bi-person-circle"
                     viewBox="0 0 16 16"
                  >
                     <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                     <path
                        fill-rule="evenodd"
                        d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"
                     />
                  </svg>
               )}
            </div>
         </div>
         {/* main section */}
         <section className="w-full h-[90vh]  flex flex-grow">
            <div
               className={`flex  overflow-y-auto  flex-col gap-5 h-[90vh] items-center  border-r-2 border-gray-200  md:p-3 p-2  ${
                  menuClicked ? "md:w-1/5 w-16" : "items-center w-16"
               }  bg-white transition-all md:mt-0 mt-16 duration-300 ease-in-out  `}
            >
               <Link
                  href="/space"
                  className={`w-full flex  gap-5 ${menuClicked ? "" : ""} ${
                     pathname === "/space" ? "hover:bg-blue-200" : ""
                  } hover:bg-blue-100 hover:cursor-pointer item-center hover:rounded-md  px-2 py-2`}
               >
                  <div className="flex cu items-center justify-center">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#000000"
                     >
                        <path d="M240-200h120v-240h240v240h120v-360L480-740 240-560v360Zm-80 80v-480l320-240 320 240v480H520v-240h-80v240H160Zm320-350Z" />
                     </svg>
                  </div>
                  {menuClicked && (
                     <motion.div
                        className="md:block hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                     >
                        Home
                     </motion.div>
                  )}
               </Link>
               <Link
                  href="/space/calendar"
                  className={` w-full flex gap-5 ${menuClicked ? "" : ""} ${
                     pathname === "/space/calendar" ? "hover:bg-blue-200" : ""
                  } hover:bg-blue-100 hover:cursor-pointer hover:rounded-md  px-2 py-2`}
               >
                  <div className="flex items-center justify-center">
                     <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24px"
                        viewBox="0 -960 960 960"
                        width="24px"
                        fill="#000000"
                     >
                        <path d="M200-80q-33 0-56.5-23.5T120-160v-560q0-33 23.5-56.5T200-800h40v-80h80v80h320v-80h80v80h40q33 0 56.5 23.5T840-720v560q0 33-23.5 56.5T760-80H200Zm0-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Zm280 240q-17 0-28.5-11.5T440-440q0-17 11.5-28.5T480-480q17 0 28.5 11.5T520-440q0 17-11.5 28.5T480-400Zm-160 0q-17 0-28.5-11.5T280-440q0-17 11.5-28.5T320-480q17 0 28.5 11.5T360-440q0 17-11.5 28.5T320-400Zm320 0q-17 0-28.5-11.5T600-440q0-17 11.5-28.5T640-480q17 0 28.5 11.5T680-440q0 17-11.5 28.5T640-400ZM480-240q-17 0-28.5-11.5T440-280q0-17 11.5-28.5T480-320q17 0 28.5 11.5T520-280q0 17-11.5 28.5T480-240Zm-160 0q-17 0-28.5-11.5T280-280q0-17 11.5-28.5T320-320q17 0 28.5 11.5T360-280q0 17-11.5 28.5T320-240Zm320 0q-17 0-28.5-11.5T600-280q0-17 11.5-28.5T640-320q17 0 28.5 11.5T680-280q0 17-11.5 28.5T640-240Z" />
                     </svg>
                  </div>
                  {menuClicked && (
                     <motion.div
                        className="md:block hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                     >
                        Calendar
                     </motion.div>
                  )}
               </Link>
               <div className="w-full">
                  <div
                     className={` w-full flex gap-5 ${menuClicked ? "pl-2" : ""} ${
                        pathname === "/space/archeiveclasses" ? "hover:bg-blue-200" : ""
                     } hover:bg-blue-100 hover:cursor-pointer hover:rounded-md px-2 py-2`}
                  >
                     <div className="flex items-center justify-center">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           height="24px"
                           viewBox="0 -960 960 960"
                           width="24px"
                           fill="#000000"
                        >
                           <path d="M40-160v-112q0-34 17.5-62.5T104-378q62-31 126-46.5T360-440q66 0 130 15.5T616-378q29 15 46.5 43.5T680-272v112H40Zm720 0v-120q0-44-24.5-84.5T666-434q51 6 96 20.5t84 35.5q36 20 55 44.5t19 53.5v120H760ZM360-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Zm400-160q0 66-47 113t-113 47q-11 0-28-2.5t-28-5.5q27-32 41.5-71t14.5-81q0-42-14.5-81T544-792q14-5 28-6.5t28-1.5q66 0 113 47t47 113ZM120-240h480v-32q0-11-5.5-20T580-306q-54-27-109-40.5T360-360q-56 0-111 13.5T140-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T440-640q0-33-23.5-56.5T360-720q-33 0-56.5 23.5T280-640q0 33 23.5 56.5T360-560Zm0 320Zm0-400Z" />
                        </svg>
                     </div>
                     {menuClicked && (
                        <motion.div
                           onClick={() => {
                              setExpand1(!expand1);
                           }}
                           className="w-full md:flex hidden items-center justify-between"
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           exit={{ opacity: 0 }}
                        >
                           Teaching
                           {expand1 ? (
                              <div>
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24px"
                                    viewBox="0 -960 960 960"
                                    width="24px"
                                    fill="#5f6368"
                                 >
                                    <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                                 </svg>
                              </div>
                           ) : (
                              <div>
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24px"
                                    viewBox="0 -960 960 960"
                                    width="24px"
                                    fill="#5f6368"
                                 >
                                    <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
                                 </svg>
                              </div>
                           )}
                        </motion.div>
                     )}
                  </div>

                  {/* class list */}
                  {expand1 &&
                     menuClicked &&
                     mySpaceList &&
                     mySpaceList?.map((space, index) => {
                        if(space?.archived === false)return (
                        <motion.div
                        onClick={()=>{router.push(`/space/room?id=${space?.classroom_id}`)}}
                           initial={{ opacity: 0, translateY: 50 }}
                           animate={{ opacity: 1, translateY: 0 }}
                           transition={{ delay: 0.1 }}
                           className="pl-5 py-3 cursor-pointer md:flex hidden flex-col gap-4"
                        >
                           <div className="flex items-start gap-2">
                              <div
                                 style={{ background: getRandomColor() }}
                                 className="w-8 h-8  text-white rounded-full p-2 text-sm flex items-center justify-center"
                              >
                                 {space?.classroom_name[0]}
                              </div>
                              <div className="text-xs md:block hidden">
                                 <div>{space?.classroom_name}</div>
                                 <div className="font_inter_custom text-gray-500">
                                    {space?.classroom_section}
                                 </div>
                              </div>
                           </div>
                        </motion.div>
                     )})}
               </div>

               <div className="w-full">
                  <div
                     className={` w-full flex gap-5 ${menuClicked ? "pl-2" : ""} ${
                        pathname === "/space/archeiveclasses" ? "hover:bg-blue-200" : ""
                     } hover:bg-blue-100 hover:cursor-pointer hover:rounded-md px-2 py-2`}
                  >
                     <div className="flex items-center justify-center">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           height="24px"
                           viewBox="0 -960 960 960"
                           width="24px"
                           fill="#000000"
                        >
                           <path d="M720-240q25 0 42.5-17.5T780-300q0-25-17.5-42.5T720-360q-25 0-42.5 17.5T660-300q0 25 17.5 42.5T720-240Zm0 120q30 0 56-14t43-39q-23-14-48-20.5t-51-6.5q-26 0-51 6.5T621-173q17 25 43 39t56 14Zm-520 0q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v268q-19-9-39-15.5t-41-9.5v-243H200v560h242q3 22 9.5 42t15.5 38H200Zm0-120v40-560 243-3 280Zm80-40h163q3-21 9.5-41t14.5-39H280v80Zm0-160h244q32-30 71.5-50t84.5-27v-3H280v80Zm0-160h400v-80H280v80ZM720-40q-83 0-141.5-58.5T520-240q0-83 58.5-141.5T720-440q83 0 141.5 58.5T920-240q0 83-58.5 141.5T720-40Z" />
                        </svg>
                     </div>
                     {menuClicked && (
                        <motion.div
                           onClick={() => {
                              setExpand2(!expand2);
                           }}
                           className="w-full md:flex hidden items-center justify-between"
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           exit={{ opacity: 0 }}
                        >
                           Enrolled
                           {expand2 ? (
                              <div>
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24px"
                                    viewBox="0 -960 960 960"
                                    width="24px"
                                    fill="#5f6368"
                                 >
                                    <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                                 </svg>
                              </div>
                           ) : (
                              <div>
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24px"
                                    viewBox="0 -960 960 960"
                                    width="24px"
                                    fill="#5f6368"
                                 >
                                    <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
                                 </svg>
                              </div>
                           )}
                        </motion.div>
                     )}
                  </div>

                  {/* class list */}
                  {expand2 &&
                     menuClicked &&
                     mySpaceStudyList &&
                     mySpaceStudyList?.map((space, index) => {
                        if(space?.archived === false) return (
                        <motion.div
                        onClick={()=>{router.push(`/space/room?id=${space?.classroom_id}`)}}

                           initial={{ opacity: 0, translateY: 50 }}
                           animate={{ opacity: 1, translateY: 0 }}
                           transition={{ delay: 0.1 }}
                           className="pl-5 cursor-pointer py-3 md:flex hidden flex-col gap-4"
                        >
                           <div className="flex items-start gap-2">
                              <div
                                 style={{ background: getRandomColor() }}
                                 className="w-8 h-8  text-white rounded-full p-2 text-sm flex items-center justify-center"
                              >
                                 {space?.classroom_name[0]}
                              </div>
                              <div className="text-xs md:block hidden">
                                 <div>{space?.classroom_name}</div>
                                 <div className="font_inter_custom text-gray-500">
                                    {space?.classroom_section}
                                 </div>
                              </div>
                           </div>
                        </motion.div>
                     )})}
               </div>

               <div className="w-full">
                  <div
                     className={` w-full flex gap-5 ${menuClicked ? "pl-2" : ""} ${
                        pathname === "/space/archeiveclasses" ? "hover:bg-blue-200" : ""
                     } hover:bg-blue-100 hover:cursor-pointer hover:rounded-md px-2 py-2`}
                  >
                     <div className="flex items-center justify-center">
                        <svg
                           xmlns="http://www.w3.org/2000/svg"
                           height="24px"
                           viewBox="0 -960 960 960"
                           width="24px"
                           fill="#000000"
                        >
                           <path d="m480-240 160-160-56-56-64 64v-168h-80v168l-64-64-56 56 160 160ZM200-640v440h560v-440H200Zm0 520q-33 0-56.5-23.5T120-200v-499q0-14 4.5-27t13.5-24l50-61q11-14 27.5-21.5T250-840h460q18 0 34.5 7.5T772-811l50 61q9 11 13.5 24t4.5 27v499q0 33-23.5 56.5T760-120H200Zm16-600h528l-34-40H250l-34 40Zm264 300Z" />
                        </svg>
                     </div>
                     {menuClicked && (
                        <motion.div
                           onClick={() => {
                              setExpand3(!expand3);
                           }}
                           className="w-full md:flex hidden items-center justify-between"
                           initial={{ opacity: 0 }}
                           animate={{ opacity: 1 }}
                           exit={{ opacity: 0 }}
                        >
                           Archieved
                           {expand3 ? (
                              <div>
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24px"
                                    viewBox="0 -960 960 960"
                                    width="24px"
                                    fill="#5f6368"
                                 >
                                    <path d="M480-344 240-584l56-56 184 184 184-184 56 56-240 240Z" />
                                 </svg>
                              </div>
                           ) : (
                              <div>
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    height="24px"
                                    viewBox="0 -960 960 960"
                                    width="24px"
                                    fill="#5f6368"
                                 >
                                    <path d="M480-528 296-344l-56-56 240-240 240 240-56 56-184-184Z" />
                                 </svg>
                              </div>
                           )}
                        </motion.div>
                     )}
                  </div>

                  {/* class list */}
                  {expand3 &&
                     menuClicked &&
                     mySpaceArchiveList &&
                     mySpaceArchiveList?.map((space, index) => (
                        <motion.div
                        onClick={()=>{router.push(`/space/room?id=${space?.classroom_id}`)}}
                           initial={{ opacity: 0, translateY: 50 }}
                           animate={{ opacity: 1, translateY: 0 }}
                           transition={{ delay: 0.1 }}
                           className="pl-5 py-3 cursor-pointer  md:flex hidden flex-col gap-4"
                        >
                           <div className="flex items-start gap-2">
                              <div
                                 style={{ background: getRandomColor() }}
                                 className="w-8 h-8  text-white rounded-full p-2 text-sm flex items-center justify-center"
                              >
                                 {space?.classroom_name[0]}
                              </div>
                              <div className="text-xs md:block hidden">
                                 <div>{space?.classroom_name}</div>
                                 <div className="font_inter_custom text-gray-500">
                                    {space?.classroom_section}
                                 </div>
                              </div>
                           </div>
                        </motion.div>
                     ))}
               </div>
            </div>

            <div
               className={` ${
                  menuClicked ? "md:w-4/5 w-full" : "md:w-[95%] w-full"
               } md:h-[90vh] md:mt-0 mt-16 md:block hidden overflow-y-auto`}
            >
               {children}
            </div>
            <div className="mt-16 block md:hidden w-full h-[90vh] overflow-y-auto">{children}</div>

            <JoinClassModal
               open={openJoinModal}
               setOpen={setOpenJoinModal}
            />
            <InviteUserModal
               open={openCreateModal}
               setOpen={setOpenCreateModal}
            />
         </section>
      </div>
   );
};

export default HomePageLayout;
