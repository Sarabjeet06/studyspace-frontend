/** @format */

import React, { useContext, useEffect, useMemo } from "react";
import { useState } from "react";
import { LuUserPlus } from "react-icons/lu";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import { IoMdMore } from "react-icons/io";
import InviteUserModal from "./inviteUserModal";
import { BACKEND_URL } from "../../config";
import { Appcontext } from "@/context/AppContext";
import { useRouter } from "next/router";

const People = ({ role }) => {
   const [open, setOpen] = useState(false);
   const [open2, setOpen2] = useState(false);
   const context = useContext(Appcontext);
   const router = useRouter();
   const { sessionId, spaceList } = context;
   const [members, setMembers] = useState([]);
   const [isTeacher, setIsTeacher] = useState(false);
   const { id } = router.query;

   useEffect(() => {
      if (role === 'teacher') {
         setIsTeacher(true);
      }
      else {
         setIsTeacher(false);
      }
   }, [role]);

   const handlefetch = async () => {
      try {
         const res = await fetch(`${BACKEND_URL}/api/members/get_members_by_id`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${sessionId}`,
            },
            body: JSON.stringify({
               classroom_id: id,
            }),
         });
         if (res.ok) {
            const data = await res.json();
            setMembers(data?.data);
         }
      } catch (err) {
         console.error(err);
      }
   };

   useEffect(() => {
      handlefetch();
   }, [id]);

   const CurrSpace = useMemo(() => {
      return (
         spaceList?.classrooms?.find((space) => space?.classroom_id === id) ||
         spaceList?.joined_classrooms?.find((space) => space?.classroom_id === id)
      );
   }, [id]);
   return (
      <div>
         <div className="max-w-4xl mx-auto my-5 p-2">
            <div className="flex   justify-between text-blue-500 rounded-md">
               <div className="font_poppins_custom text-xl font-medium">{"Teacher"}</div>
               {/* <div className="hover:bg-slate-100 rounded-full p-2">
                  <div
                     onClick={() => {
                        setOpen2(true);
                     }}
                     className="border-3 rounded-md"
                  >
                     {" "}
                     <LuUserPlus size={20} />
                  </div>
               </div> */}
            </div>

            <div className="text-blue-500">
               <hr className="border-t-2 border-blue-400" />
            </div>

            <div className="flex relative my-3 items-center gap-5">
               <Image
                  src={CurrSpace?.created_by?.profile_url || "/images/User.jpg"}
                  width={100}
                  height={100}
                  alt="User Card Image"
                  className="rounded-full w-9 h-9  md:-bottom-8 md:right-10 md:z-50"
               />
               <div className="flex p-3 justify-between">
                  {CurrSpace?.created_by?.username || "no name"}
                  <div className="absolute hover:bg-slate-100 p-2 rounded-full right-6">
                     <IoMdMore />
                  </div>
               </div>
               <hr />
            </div>
         </div>

         <div className="max-w-4xl mx-auto my-5 p-2">
            <div className="flex   justify-between text-blue-500 rounded-md">
               <div className="font_poppins_custom text-xl font-medium">{"Student"}</div>
               {
                  isTeacher && <div className="hover:bg-slate-100 rounded-full p-2">
                     <div
                        onClick={() => {
                           setOpen2(true);
                        }}
                        className="border-3 rounded-md"
                     >
                        {" "}
                        <LuUserPlus size={20} />
                     </div>
                  </div>
               }
            </div>

            <div className="text-blue-500">
               <hr className="border-t-2 border-blue-400" />
            </div>
            {members &&
               members?.map((user) => (
                  <div className="flex relative my-3 items-center gap-5">
                     <Image
                        src={user?.member_id?.profile_url || "/images/User.jpg"}
                        width={100}
                        height={100}
                        alt="User Card Image"
                        className="rounded-full w-9 h-9  md:-bottom-8 md:right-10 md:z-50"
                     />
                     <div className="flex p-3 justify-between">
                        {user?.member_id?.username || "no name"}
                        <div className="absolute hover:bg-slate-100 p-2 rounded-full right-6">
                           <IoMdMore />
                        </div>
                     </div>
                     <hr />
                  </div>
               ))}
         </div>
         <InviteUserModal
            open={open2}
            setOpen={setOpen2}
         />
      </div>
   );
};

export default People;
