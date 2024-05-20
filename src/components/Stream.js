/** @format */

import React, { useContext, useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { Appcontext } from "@/context/AppContext";
import { useRouter } from "next/router";
import UploadLinkModal from "./uploadLinkModal";
import UpdateAnnouncementModal from "./updateAnnouncementModal";
import { Popover, PopoverTrigger, PopoverContent } from "./ui/popover";
import { toast } from "sonner";
import { BACKEND_URL } from "../../config";
import DeleteAnouncemodal from "./deleteAnouncemodal";

export default function Stream({ role }) {
   const [isVisible, setIsVisible] = useState(true);
   const [openUploadLinkModal, setOpenUploadLinkModal] = useState(false);
   const [openUpdateAnnouncementModal, setOpenUpdateAnnouncementModal] = useState(false);
   const [openDeleteAnounceModal, setOpenDeleteAnounceModal] = useState(false);
   const [anouncementList, setAnouncementList] = useState([]);
   const [selectedAnouncement, setSelectedAnouncement] = useState(null);
   const context = useContext(Appcontext);
   const { classroomAssignmentList, setClassroomAssignmentList } = context;
   const router = useRouter();

   const [heading, setHeading] = useState("");
   const [link, setLink] = useState("");
   const [isTeacher, setIsTeacher] = useState(false);
   const { id } = router.query;
   const { spaceList } = context;
   const handleClick = () => {
      setIsVisible(!isVisible);
   };

   useEffect(() => {
      if (role === "teacher") {
         setIsTeacher(true);
      } else {
         setIsTeacher(false);
      }
   }, [role]);

   const fetchAssignments = async () => {
      try {
         const res = await fetch(
            `${BACKEND_URL}/api/assignments/getAssignment?classroom_id=${id}`,
            {
               method: "GET",
               headers: {
                  Authorization: `Bearer ${context.sessionId}`,
               },
            }
         );
         if (res.ok) {
            const response = await res.json();
            setClassroomAssignmentList(response?.data);
         }
      } catch (error) {
         console.log(error);
      }
   };

   const fetch_anouncement = async () => {
      try {
         const res = await fetch(`${BACKEND_URL}/api/anouncements/announcements/${id}`, {
            method: "GET",
            headers: {
               Authorization: `Bearer ${context.sessionId}`,
            },
         });
         if (res.ok) {
            const data = await res.json();
            setAnouncementList(data?.data);
         }
      } catch (err) {
         console.error(err);
      }
   };

   useEffect(() => {
      fetch_anouncement();
      fetchAssignments();
   }, [id, openUpdateAnnouncementModal]);

   const CurrSpace = useMemo(() => {
      return (
         spaceList?.classrooms?.find((space) => space?.classroom_id === id) ||
         spaceList?.joined_classrooms?.find((space) => space?.classroom_id === id)
      );
   }, [id, spaceList]);

   const handle_add_anouncement = async () => {
      try {
         const res = await fetch(`${BACKEND_URL}/api/anouncements/add_announcement`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${context.sessionId}`,
            },
            body: JSON.stringify({
               classroom_id: id,
               description: heading,
               link_url: link,
            }),
         });
         if (res.ok) {
            setIsVisible(true);
            setHeading("");
            await fetch_anouncement();
            setLink("");
            toast.success("anouncement added successfully");
         }
      } catch (err) {
         console.error(err);
      }
   };
   return (
      <div className="">
         <div className="w-full">
            <div className="relative h-64 w-full bg-blue-500 rounded-xl">
               <Image
                  unoptimized
                  quality={100}
                  src={
                     CurrSpace?.classroom_background_url ||
                     "https://res.cloudinary.com/dqpirrbuh/image/upload/v1714684229/zy4i_hjsz_210617_qqbclc.jpg"
                  }
                  className="object-cover h-full w-full rounded-xl"
                  width={100}
                  height={100}
               ></Image>
               <div className="absolute top-0 left-0 w-full rounded-lg h-full bg-gradient-to-t from-black/30 to-white/10"></div>
               <div className="absolute bottom-5 left-6">
                  <div className="text-white text-4xl font-bold">
                     {CurrSpace?.classroom_name || "No name"}
                  </div>
                  <div className="text-white text-lg">
                     {CurrSpace?.classroom_section || "No name"}
                  </div>
               </div>
            </div>
            <div className="flex lg:flex-row flex-col gap-8 mt-8">
               <div className="lg:flex lg:flex-col gap-3 hidden rounded shadow-md w-52 h-fit min-h-48 p-3 bg-white">
                  <div className="font-semibold">Upcoming work</div>
                  {classroomAssignmentList && classroomAssignmentList?.length === 0 && (
                     <div>No upcoming work</div>
                  )}
                  {classroomAssignmentList &&
                     classroomAssignmentList?.length > 0 &&
                     classroomAssignmentList?.map((test, idx) => {
                        if (idx <= 3) return <div className="text-xs">{test?.heading}</div>;
                     })}
               </div>
               <div className="w-full py-3">
                  <div
                     className={`w-full h-fit ${
                        !isVisible && "py-5"
                     } px-5 rounded-lg border-b-[1px] shadow-[0px_3px_6px_2px_rgba(0,0,0,0.15)] bg-white`}
                  >
                     {isVisible && (
                        <button
                           className={`w-full h-full flex items-center gap-5 text-sm text-left text-gray-500 p-5`}
                           onClick={handleClick}
                        >
                           <img
                              className="w-8 h-8 rounded-full"
                              src={context?.userDetails?.profile_url}
                              alt="icons"
                           />
                           Announce something to the class
                        </button>
                     )}

                     {!isVisible && (
                        <div className="flex flex-col items-end py-1 gap-3">
                           <textarea
                              onChange={(e) => {
                                 setHeading(e.target.value);
                              }}
                              className={`resize-none bg-gray-100 w-full h-40 overflow-auto text-sm text-left text-black px-5 py-3 rounded outline-none`}
                              name="announcement"
                              id="announcement"
                           ></textarea>
                           {link !== "" && (
                              <div className="w-full">
                                 <div className="w-48 relative bg-white p-2  flex items-center gap-2 border rounded-md">
                                    <div className="p-2 rounded-md bg-blue-400">
                                       <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          height="24px"
                                          viewBox="0 -960 960 960"
                                          width="24px"
                                          fill="#fff"
                                       >
                                          <path d="M440-280H280q-83 0-141.5-58.5T80-480q0-83 58.5-141.5T280-680h160v80H280q-50 0-85 35t-35 85q0 50 35 85t85 35h160v80ZM320-440v-80h320v80H320Zm200 160v-80h160q50 0 85-35t35-85q0-50-35-85t-85-35H520v-80h160q83 0 141.5 58.5T880-480q0 83-58.5 141.5T680-280H520Z" />
                                       </svg>
                                    </div>
                                    <div
                                       onClick={() => {
                                          setLink("");
                                       }}
                                       className="absolute p-1 rounded-full border bg-white -top-2 -right-2"
                                    >
                                       <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          height="11px"
                                          viewBox="0 -960 960 960"
                                          width="11px"
                                          fill="#5f6368"
                                       >
                                          <path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                                       </svg>
                                    </div>
                                    <div className="font_poppins_custom font-medium text-slate-500 text-sm">
                                       Link added
                                    </div>
                                 </div>
                              </div>
                           )}

                           <div className="flex justify-between w-full">
                              <div className="flex gap-2 items-center *:w-10 *:h-10 *:border-[1px]">
                                 <button
                                    onClick={() => {
                                       setOpenUploadLinkModal(true);
                                    }}
                                    className="bg-white hover:bg-gray-100 rounded-full"
                                 >
                                    <Image
                                       className="mx-auto my-auto"
                                       src="/images/drive-icon.png"
                                       width={24}
                                       height={24}
                                    />
                                 </button>
                                 <button
                                    onClick={() => {
                                       setOpenUploadLinkModal(true);
                                    }}
                                    className="bg-white hover:bg-gray-100 rounded-full"
                                 >
                                    <Image
                                       className="mx-auto my-auto"
                                       src="/images/youtube-icon.png"
                                       width={24}
                                       height={24}
                                    />
                                 </button>
                                 <button
                                    onClick={() => {
                                       setOpenUploadLinkModal(true);
                                    }}
                                    className="bg-white hover:bg-gray-100 rounded-full"
                                 >
                                    <Image
                                       className="mx-auto my-auto"
                                       src="/images/upload-icon.png"
                                       width={24}
                                       height={24}
                                    />
                                 </button>
                                 <button
                                    onClick={() => {
                                       setOpenUploadLinkModal(true);
                                    }}
                                    className="bg-white hover:bg-gray-100 rounded-full"
                                 >
                                    <Image
                                       className="mx-auto my-auto"
                                       src="/images/link-icon.png"
                                       width={24}
                                       height={24}
                                    />
                                 </button>
                              </div>
                              <div className="flex gap-3 py-2 *:px-4 *:py-1">
                                 <button
                                    onClick={() => {
                                       handle_add_anouncement();
                                    }}
                                    className="w-fit bg-blue-500 text-white hover:bg-blue-600 rounded"
                                 >
                                    Post
                                 </button>
                                 <button
                                    onClick={handleClick}
                                    className="w-fit bg-gray-100 hover:bg-gray-200 rounded"
                                 >
                                    cancel
                                 </button>
                              </div>
                           </div>
                        </div>
                     )}
                  </div>
                  <div>
                     {classroomAssignmentList &&
                        classroomAssignmentList?.map((assignment) => (
                           <div className="flex gap-4 w-full h-20 my-6 px-5 items-center border-[1.5px] border-gray-300 rounded-md bg-white hover:bg-gray-100 cursor-pointer">
                              <div className="relative w-12 h-12 rounded-full bg-blue-500">
                                 <Image
                                    className="absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto"
                                    src={"/images/assignment-icon.png"}
                                    width={30}
                                    height={30}
                                 />
                              </div>
                              <div className="text-center">{assignment?.heading}</div>
                           </div>
                        ))}
                     {anouncementList &&
                        anouncementList?.map((anouncement) => (
                           <div className="relative my-4 gap-4 w-full h-fit min-h-20 py-6 px-5 items-center border-[1.5px] border-gray-300 rounded-md bg-white hover:bg-gray-100 cursor-pointer">
                              <div className="flex items-center gap-3">
                                 <Image
                                    className=" rounded-full w-10 h-10"
                                    src={
                                       anouncement?.created_by?.profile_url ||
                                       "/images/announcement-icon.png"
                                    }
                                    width={30}
                                    height={30}
                                 />
                                 <div>
                                    <div className="">{anouncement?.created_by?.username}</div>
                                    <div className="text-xs text-slate-500">
                                       {new Date(anouncement?.created_on).toDateString()}
                                    </div>
                                 </div>
                              </div>
                              <div className="w-full h-[1px] bg-slate-400 my-2"></div>
                              <div className="text-start py-2 flex items-center gap-3">
                                 {anouncement?.description || "unknown"}
                              </div>
                              {anouncement?.link_url && (
                                 <span
                                    onClick={() => {
                                       window.open(`${anouncement?.link_url}`);
                                    }}
                                    className="text-xs flex items-center gap-0 text-blue-500 underline cursor-pointer"
                                 >
                                    <svg
                                       xmlns="http://www.w3.org/2000/svg"
                                       height="15px"
                                       viewBox="0 -960 960 960"
                                       width="15px"
                                       fill="#3C82F6"
                                    >
                                       <path d="M330-240q-104 0-177-73T80-490q0-104 73-177t177-73h370q75 0 127.5 52.5T880-560q0 75-52.5 127.5T700-380H350q-46 0-78-32t-32-78q0-46 32-78t78-32h370v80H350q-13 0-21.5 8.5T320-490q0 13 8.5 21.5T350-460h350q42-1 71-29.5t29-70.5q0-42-29-71t-71-29H330q-71-1-120.5 49T160-490q0 70 49.5 119T330-320h390v80H330Z" />
                                    </svg>
                                    link
                                 </span>
                              )}{" "}
                              <div className="absolute top-2 right-4">
                                 {isTeacher && (
                                    <Popover>
                                       <PopoverTrigger>
                                          <div className="relative w-12 h-12 rounded-full hover:bg-gray-200">
                                             <Image
                                                className="absolute top-0 bottom-0 left-0 right-0 mx-auto my-auto"
                                                src="/images/menu-3-dot-icon.png"
                                                width={30}
                                                height={30}
                                             />
                                          </div>
                                       </PopoverTrigger>
                                       <PopoverContent className="w-full px-4 py-1">
                                          <div className="text-sm">
                                             <div
                                                onClick={() => {
                                                   setSelectedAnouncement(anouncement?._id);
                                                   setOpenUpdateAnnouncementModal(true);
                                                }}
                                                className="cursor-pointer my-2 items-center"
                                             >
                                                Edit
                                             </div>
                                             <div
                                                onClick={() => {
                                                   setSelectedAnouncement(anouncement?._id);
                                                   setOpenDeleteAnounceModal(true);
                                                }}
                                                className="cursor-pointer my-2 items-center"
                                             >
                                                Delete
                                             </div>
                                          </div>
                                       </PopoverContent>
                                    </Popover>
                                 )}
                              </div>
                           </div>
                        ))}
                  </div>
               </div>
               <UploadLinkModal
                  setLink={setLink}
                  link={link}
                  open={openUploadLinkModal}
                  setOpen={setOpenUploadLinkModal}
               />
               <UpdateAnnouncementModal
                  fetch_anouncement={fetch_anouncement}
                  selectedAnouncement={selectedAnouncement}
                  open={openUpdateAnnouncementModal}
                  setOpen={setOpenUpdateAnnouncementModal}
               />
               <DeleteAnouncemodal
                  fetch_anouncement={fetch_anouncement}
                  selectedAnouncement={selectedAnouncement}
                  open={openDeleteAnounceModal}
                  setOpen={setOpenDeleteAnounceModal}
               />
            </div>
         </div>
      </div>
   );
}
