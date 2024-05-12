/** @format */

import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Stream from "@/components/Stream";
import People from "@/components/People";
import Homenavbar from "@/components/Homenavbar";
import Homesidemenubar from "@/components/Homesidemenubar";
import Classwork from "@/components/Classwork";

const index = () => {
   const [menuClicked, setMenuClicked] = useState(false);
   return (
      <div>
         <Homenavbar menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
         <div className='w-full flex gap-0'>
            <div className={`${menuClicked ? 'w-2/12' : 'w-1/12'}`}>
               <Homesidemenubar menuClicked={menuClicked} setMenuClicked={setMenuClicked} />
            </div>
            <div className={`${menuClicked ? 'w-10/12' : 'w-11/12'} mt-20`} >
               <Tabs
                  defaultValue="stream"
                  className="w-full"
               >
                  <TabsList>
                     <TabsTrigger value="stream">Stream</TabsTrigger>
                     <TabsTrigger value="classwork">Classwork</TabsTrigger>
                     <TabsTrigger value="people">people</TabsTrigger>
                     <TabsTrigger value="grade">grade</TabsTrigger>
                  </TabsList>
                  <TabsContent value="stream"><Stream/></TabsContent>
                  <TabsContent value="classwork"><Classwork /></TabsContent>
                  <TabsContent value="people">
                     <People name = {"Teacher"} />
                     <People name = {"Student"} />
                  </TabsContent>
               </Tabs>
            </div>
         </div>


      </div>
   );
};

export default index;
