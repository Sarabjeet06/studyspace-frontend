/** @format */

import React, { useEffect, useCallback, useState } from "react";
import { Appcontext } from "./AppContext";
import { BACKEND_URL } from "../../config";

const AppState = ({ children }) => {
   const [sessionId, setSessionId] = useState(
      typeof window !== "undefined" && localStorage.getItem("spaceToken")
   );
   const [userDetails, setUserDetails] = useState([]);
   const [spaceList, setSpaceList] = useState([]);
   const [mySpaceList, setMySpaceList] = useState([]);
   const [mySpaceStudyList, setMySpaceStudyList] = useState([]);
   const [mySpaceArchiveList, setMySpaceArchiveList] = useState([]);
   const [classroomAssignmentList, setClassroomAssignmentList] = useState([]);

   const fetchSpaceList = useCallback(async () => {
      try {
         const res = await fetch(`${BACKEND_URL}/api/classrooms/get_classroom_by_id`, {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${sessionId}`,
            },
         });
         if (res.ok) {
            const data = await res.json();
            const classrooms = data?.data?.classrooms || [];
            const joinedClassrooms = data?.data?.joined_classrooms || [];

            // Setting the main space list
            setSpaceList({
               classrooms: classrooms,
               joined_classrooms: joinedClassrooms,
            });

            // Assuming mySpaceList contains the classrooms created by the user
            setMySpaceList(classrooms);

            // Assuming mySpaceStudyList contains the classrooms the user joined
            setMySpaceStudyList(joinedClassrooms);

            // Assuming mySpaceArchiveList contains the archived classrooms, you can filter based on the archived field
            setMySpaceArchiveList([
               ...classrooms.filter((classroom) => classroom.archived),
               ...joinedClassrooms.filter((joinedClassroom) => joinedClassroom.archived),
            ]);
         }
      } catch (e) {
         console.error("Failed to fetch", e);
      }
   }, [sessionId]);

   useEffect(() => {
      const fetchUser = async () => {
         try {
            const res = await fetch(`${BACKEND_URL}/api/users/get_user`, {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${sessionId}`,
               },
            });
            if (res.ok) {
               const data = await res.json();
               setUserDetails(data?.data);
            }
         } catch (e) {
            console.error("Failed to fetch", e);
         }
      };
      if (sessionId !== null) fetchUser();
   }, [sessionId]);

   useEffect(() => {
      if (sessionId !== null) fetchSpaceList();
   }, [fetchSpaceList, sessionId]);

   return (
      <Appcontext.Provider
         value={{
            sessionId,
            setSessionId,
            setUserDetails,
            userDetails,
            classroomAssignmentList , 
            setClassroomAssignmentList,
            setSpaceList,
            setMySpaceArchiveList,
            setMySpaceList,
            setMySpaceStudyList,
            spaceList,
            fetchSpaceList,
            mySpaceArchiveList,
            mySpaceList,
            mySpaceStudyList,
         }}
      >
         {children}
      </Appcontext.Provider>
   );
};

export default AppState;
