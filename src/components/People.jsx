/** @format */

import React, { useContext, useEffect, useMemo } from "react";
import { useState } from "react";
import { LuUserPlus } from "react-icons/lu";
import Image from "next/image";
import { IoMdMore } from "react-icons/io";
import InviteUserModal from "./inviteUserModal";
import { BACKEND_URL } from "../../config";
import { Appcontext } from "@/context/AppContext";
import { useRouter } from "next/router";
import {
   Popover,
   PopoverContent,
   PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "rsuite";

// import { Button } from "@nextui-org/react";
// import { UserIcon } from './UserIcon';
// import Button from "rsuite";
import { LuUser } from "react-icons/lu";

const People = () => {
   const [open, setOpen] = useState(false);
   const [open2, setOpen2] = useState(false);
   const context = useContext(Appcontext);
   const router = useRouter();
   const { sessionId, spaceList } = context;
   const [members, setMembers] = useState([]);
   const { id } = router.query;
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
               <div className="hover:bg-slate-100 rounded-full p-2">
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

                        <Popover>

                           <PopoverTrigger>
                              <div className="absolute hover:bg-slate-100 p-2 rounded-full right-6">
                                 <IoMdMore />
                              </div>
                           </PopoverTrigger>

                           <PopoverContent>
                              <Button color="danger" variant="bordered" startContent={<LuUser />} className="flex">
                                 <div className="flex gap-4 items-center">
                                    {/* <LuUser /> */}

                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg>
                                    Delete student
                                 </div>
                              </Button>

                           </PopoverContent>
                        </Popover>
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
