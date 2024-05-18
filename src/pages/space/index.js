/** @format */

import Card from "@/components/Card";
import CardsSkeleton from "@/components/CardsSkeleton";
import HomePageLayout from "@/components/HomePageLayout";
import Homenavbar from "@/components/Homenavbar";
import Homesidemenubar from "@/components/Homesidemenubar";
import { Appcontext } from "@/context/AppContext";
import React, { useContext, useState } from "react";

const index = () => {
   const [className, setClassName] = useState("Science");
   const [classBtn, setClassBtn] = useState("Enter Class Room");
   const [classDescription, setClassDescription] = useState("Non-Medical");

   const context = useContext(Appcontext);
   const { mySpaceList, mySpaceStudyList} = context;
   return (
      <HomePageLayout>
         <div class="flex flex-wrap md:justify-between justify-center items-center md:p-16 p-6 gap-10">
            {mySpaceList &&
               mySpaceList?.map((classroom) => (
                  <Card
                  classroom_id={classroom?.classroom_id}
                     className={classroom?.classroom_name}
                     classBtn={"Enter Space"}
                     classDescription={classroom?.classroom_section}
                     ImagePath={classroom?.classroom_background_url}
                     ImageUser={classroom?.created_by?.profile_url}
                     archived={classroom?.archived}
                  />
               ))}
            {mySpaceStudyList &&
               mySpaceStudyList?.map((classroom) => (
                  <Card
                  classroom_id={classroom?.classroom_id}
                     className={classroom?.classroom_name}
                     classBtn={"Enter Space"}
                     classDescription={classroom?.classroom_section}
                     ImagePath={classroom?.classroom_background_url}
                     ImageUser={classroom?.created_by?.profile_url}
                     archived={classroom?.archived}
                  />
               ))}
         </div>
      </HomePageLayout>
   );
};

export default index;
