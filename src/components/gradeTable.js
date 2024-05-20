/** @format */

import React, { useContext, useEffect, useState } from "react";
import DataTable from "./dataTable";
import { Appcontext } from "@/context/AppContext";
import { useRouter } from "next/router";
import { BACKEND_URL } from "../../config";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const GradeTable = () => {
   const context = useContext(Appcontext);
   const router = useRouter();
   const { id } = router.query;
   const [data, setData] = useState([]);
   const [columns, setColumns] = useState([]);

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
            console.log(result.data);

            // Process the data into a table-friendly format
            const assignments = result.data;

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
                  cell: ({ row }) => {
                     return (
                        <div className="flex text-slate-500 font_inter_custom items-center gap-2">
                           <img
                              className="w-8 h-8 rounded-full"
                              src={row.original.profile_url}
                           />
                           {row.getValue("name")}
                        </div>
                     );
                  },
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
                                 {" "}
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
                     const assignmentData =
                        row.original.assignments[assignment.assignment_id] || {};
                     const point_given = assignmentData.point_given || 0;
                     if (openBox) {
                        return (
                           <div className="text-left font_inter_custom w-full flex items-center gap-2 font-medium">
                              <input
                                 className="border rounded-md p-1 w-8 outline-none"
                                 defaultValue={point_given}
                              />{" "}
                              / 100
                              <div
                                 onClick={() => {
                                    setOpenBox(!openBox);
                                 }}
                                 className="text-xs p-1 rounded-md border-green-500 border"
                              >
                                 <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="10"
                                    fill="#90d65a"
                                    className="bi bi-check2"
                                    viewBox="0 0 16 16"
                                 >
                                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0" />
                                 </svg>
                              </div>
                              <div
                                 onClick={() => {
                                    setOpenBox(!openBox);
                                 }}
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
                              setOpenBox(!openBox);
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
         }
      } catch (err) {
         console.log(err);
      }
   };

   useEffect(() => {
      if (id) {
         fetchData();
      }
   }, [id]);

   return (
      <section className="py-2">
         <div className="text-xl font-medium my-2 font_inter_custom">Grade Section</div>
         <div className="w-full my-3 h-[1px] bg-slate-300"></div>
         <DataTable
            data={data}
            columns={columns}
         />
      </section>
   );
};

export default GradeTable;
