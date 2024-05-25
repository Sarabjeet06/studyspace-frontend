/** @format */

import React, { useContext, useEffect, useState } from "react";
import DataTable from "./dataTable";
import { Appcontext } from "@/context/AppContext";
import { useRouter } from "next/router";
import { BACKEND_URL } from "../../config";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { toast } from "sonner";

const GradeTable = ({ role }) => {
   const context = useContext(Appcontext);
   const router = useRouter();
   const { id } = router.query;
   const [data, setData] = useState([]);
   const [columns, setColumns] = useState([]);
   const [openSave, setOpenSave] = useState(false);
   const [loading, setLoading] = useState(false);

   const handle_update = async () => {
      try {
         setLoading(true);
         const res = await fetch(`${BACKEND_URL}/api/submissions/save_result`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${context.sessionId}`,
            },
            body: JSON.stringify({ data: data }),
         });
         if (res.ok) {
            toast.success("Saved Successfully");
            setOpenSave(false);
            setLoading(false);
         } else {
            throw new Error("Failed to save data");
         }
      } catch (err) {
         console.error(err);
         toast.error("Failed to save data");
      } finally {
         setLoading(false);
      }
   };

   const handle_update_data = (submission_id, point_given) => {
      if (point_given > 100) {
         toast.error("Point given can't be greater than 100");
         return;
      }
      if (typeof submission_id === "undefined") {
         toast.error("Please provide a submission");
         return;
      }

      // Create a deep copy of the data to avoid direct state mutation
      // console.log(data);
      const temp_data = JSON.parse(JSON.stringify(data));
      if (temp_data?.length > 0) {
         for (let student of temp_data) {
            for (let assignmentId in student.assignments) {
               if (student.assignments[assignmentId].submission_id === submission_id) {
                  student.assignments[assignmentId].point_given = point_given;
                  break;
               }
            }
         }

         setData(temp_data);
         setOpenSave(true);
      }
   };
   const processFetchedData = (result) => {
      let assignments = result.data;

      // If the role is "member", filter the assignments to include only the logged-in user's submissions
      if (role === "member") {
         const userId = context?.userDetails?._id;
         assignments = assignments
            .map((assignment) => ({
               ...assignment,
               submissions: assignment.submissions.filter(
                  (submission) => submission.user_id._id === userId
               ),
            }))
            .filter((assignment) => assignment.submissions.length > 0);
      }

      // Extract unique student information
      const students = {};
      assignments.forEach((assignment) => {
         assignment.submissions.forEach((submission) => {
            const student = submission.user_id;
            if (!students[student._id]) {
               students[student._id] = {
                  id: student._id,
                  name: student.username,
                  email: student.email,
                  profile_url: student.profile_url,
                  assignments: {},
               };
            }
            students[student._id].assignments[assignment.assignment_id] = {
               submission_id: submission.submission_id,
               url: submission.url,
               point_given: submission.point_given,
               created_on: submission.created_on,
            };
         });
      });

      // Create columns dynamically based on assignments
      const dynamicColumns = [
         {
            accessorKey: "name",
            header: <div className="font_inter_custom">Students</div>,
            cell: ({ row }) => (
               <div className="flex text-slate-500 font_inter_custom items-center gap-2">
                  <img
                     className="w-8 h-8 rounded-full"
                     src={row.original.profile_url}
                  />
                  {row.getValue("name")}
               </div>
            ),
         },
      ];

      assignments.forEach((assignment, index) => {
         dynamicColumns.push({
            accessorKey: `assign_${index + 1}`,
            header: (
               <div className="flex flex-col justify-center">
                  <TooltipProvider>
                     <Tooltip>
                        <TooltipTrigger>
                           <div className="text-sm text-start text-blue-500">
                              {assignment.assignment_heading?.substring(0, 20)}..
                           </div>
                        </TooltipTrigger>
                        <TooltipContent>
                           <div className="text-sm ">{assignment.assignment_heading}</div>
                        </TooltipContent>
                     </Tooltip>
                  </TooltipProvider>
                  <div className="text-[10px]">
                     out of 100 |{" "}
                     <span>
                        {new Date(assignment.submissions[0].created_on).toLocaleDateString()}
                     </span>
                  </div>
               </div>
            ),
            cell: ({ row }) => {
               const [openBox, setOpenBox] = useState(false);
               const assignmentData = row.original.assignments[assignment.assignment_id] || {};
               const point_given = assignmentData.point_given || 0;

               if (openBox) {
                  return (
                     <div className="text-left font_inter_custom w-full flex items-center gap-2 font-medium">
                        <input
                           className="border rounded-md p-1 w-8 outline-none"
                           defaultValue={point_given}
                           onChange={(e) => {
                              handle_update_data(assignmentData?.submission_id, e.target.value);
                           }}
                        />{" "}
                        / 100
                        <div
                           onClick={() => setOpenBox(!openBox)}
                           className="text-xs p-1 rounded-md border-green-500 border"
                        >
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="10"
                              fill="#22C55D"
                              className="bi bi-check2"
                              viewBox="0 0 16 16"
                           >
                              <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                           </svg>
                        </div>
                        <div
                           onClick={() => setOpenBox(!openBox)}
                           className="text-xs p-1 rounded-md border-red-400 border"
                        >
                           <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="10"
                              fill="#c23323"
                              className="bi bi-x-lg"
                              viewBox="0 0 16 16"
                           >
                              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                           </svg>
                        </div>
                     </div>
                  );
               }
               return (
                  <div
                     onClick={() => {
                        if (role !== "member") setOpenBox(!openBox);
                     }}
                     className="text-left font_inter_custom font-medium"
                  >
                     {point_given}
                  </div>
               );
            },
         });
      });

      setColumns(dynamicColumns);
      setData(Object.values(students));
   };

   const fetchData = async () => {
      try {
         const res = await fetch(`${BACKEND_URL}/api/submissions/submissions/classroom/${id}`, {
            method: "GET",
            headers: {
               Authorization: `Bearer ${context.sessionId}`,
            },
         });
         if (res.ok) {
            const result = await res.json();
            processFetchedData(result);
         } else {
            throw new Error("Failed to fetch data");
         }
      } catch (err) {
         console.error(err);
         toast.error("Failed to fetch data");
      }
   };

   useEffect(() => {
      if (id) {
         fetchData();
      }
   }, [id]);

   return (
      <section className="py-2">
         <div className="text-xl flex items-center gap-5 font-medium my-2 font_inter_custom">
            Grade Section
            {openSave && (
               <div
                  onClick={handle_update}
                  className="flex items-center gap-2 text-sm bg-blue-50 border-blue-500 text-blue-500 p-1 px-4 rounded-md border cursor-pointer"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     height="15px"
                     viewBox="0 -960 960 960"
                     width="15px"
                     fill="#3C82F6"
                  >
                     <path d="M480-120q-75 0-140.5-28.5t-114-77q-48.5-48.5-77-114T120-480q0-75 28.5-140.5t77-114q48.5-48.5 114-77T480-840q82 0 155.5 35T760-706v-94h80v240H600v-80h110q-41-56-101-88t-129-32q-117 0-198.5 81.5T200-480q0 117 81.5 198.5T480-200q105 0 183.5-68T756-440h82q-15 137-117.5 228.5T480-120Zm112-192L440-464v-216h80v184l128 128-56 56Z" />
                  </svg>
                  Save
               </div>
            )}
            {loading && (
               <img
                  className="w-5 h-5 animate-spin"
                  src="https://www.svgrepo.com/show/199956/loading-loader.svg"
                  alt="Loading icon"
               />
            )}
         </div>
         <div className="w-full my-3 h-[1px] bg-slate-300"></div>
         {data?.length > 0 && (
            <DataTable
               data={data}
               columns={columns}
            />
         )}
      </section>
   );
};

export default GradeTable;
