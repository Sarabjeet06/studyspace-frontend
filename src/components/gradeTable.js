/** @format */

import React, { useState } from "react";
import DataTable from "./dataTable";

const GradeTable = () => {
   const columns = [
      {
         accessorKey: "name",
         header: <div className="font_inter_custom">Students</div>,
         cell: ({ row }) => {
            return (
               <div className="flex text-slate-500 font_inter_custom items-center gap-2">
                  <img
                     className="w-8 h-8 rounded-full"
                     src={`https://robohash.org/${row.getValue("name")}?set=set2`}
                  />
                  {row.getValue("name")}
               </div>
            );
         },
      },
      {
         accessorKey: "assign_1",
         header: (
            <div className="flex flex-col justify-center">
               <div className="text-sm text-blue-500">Assignment 1</div>
               <div className="text-[10px]">
                  out of 100 | <span>19 may 2024</span>
               </div>
            </div>
         ),
         cell: ({ row }) => {
            const [openBox, setOpenBox] = useState(false);
            if (openBox) {
               return (
                  <div className="text-left font_inter_custom w-full flex items-center gap-2 font-medium">
                     <input className="border rounded-md p-1 w-8 outline-none" /> / 100
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
                           class="bi bi-check2"
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
                           class="bi bi-x-lg"
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
                  {row.getValue("assign_1")}
               </div>
            );
         },
      },
      {
         accessorKey: "assign_2",
         header: (
            <div className="flex font_inter_custom flex-col justify-center">
               <div className="text-sm text-blue-500">Assignment 2</div>
               <div className="text-[10px]">
                  out of 100 | <span>23 may 2024</span>
               </div>
            </div>
         ),
      },
      {
         accessorKey: "assign_3",
         header: (
            <div className="flex flex-col font_inter_custom my-2 justify-center">
               <div className="text-sm text-blue-500">Assignment 3</div>
               <div className="text-[10px]">
                  out of 100 | <span>25 may 2024</span>
               </div>
            </div>
         ),
      },
   ];
   const data = [
      {
         id: "m5gr84i9",
         name: "Ravi",
         assign_1: 80, // Example value for Assignment 1 score
         assign_2: 90, // Example value for Assignment 2 score
         assign_3: 85, // Example value for Assignment 3 score
         email: "ken99@yahoo.com",
      },
      {
         id: "3u1reuv4",
         name: "Rahul",
         assign_1: 75, // Example value for Assignment 1 score
         assign_2: 85, // Example value for Assignment 2 score
         assign_3: 78, // Example value for Assignment 3 score
         email: "Abe45@gmail.com",
      },
      {
         id: "derv1ws0",
         name: "Sruti",
         assign_1: 70, // Example value for Assignment 1 score
         assign_2: 80, // Example value for Assignment 2 score
         assign_3: 65, // Example value for Assignment 3 score
         email: "Monserrat44@gmail.com",
      },
      {
         id: "5kma53ae",
         name: "Ram",
         assign_1: 85, // Example value for Assignment 1 score
         assign_2: 95, // Example value for Assignment 2 score
         assign_3: 88, // Example value for Assignment 3 score
         email: "Silas22@gmail.com",
      },
      {
         id: "bhqecj4p",
         name: "Mohan",
         assign_1: 60, // Example value for Assignment 1 score
         assign_2: 70, // Example value for Assignment 2 score
         assign_3: 55, // Example value for Assignment 3 score
         email: "carmella@hotmail.com",
      },
      {
         id: "1ht7ekm3",
         name: "Abishek",
         assign_1: 92, // Example value for Assignment 1 score
         assign_2: 88, // Example value for Assignment 2 score
         assign_3: 90, // Example value for Assignment 3 score
         email: "samuel@example.com",
      },
      {
         id: "9dxy45op",
         name: "Aman",
         assign_1: 78, // Example value for Assignment 1 score
         assign_2: 82, // Example value for Assignment 2 score
         assign_3: 79, // Example value for Assignment 3 score
         email: "grace@example.com",
      },
      // Add more objects with appropriate values for assign_1, assign_2, and assign_3
   ];

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
