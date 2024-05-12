/** @format */

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Stream from "@/components/Stream";

const index = () => {
   return (
      <div>
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
            <TabsContent value="classwork">Change your password here.</TabsContent>
         </Tabs>
      </div>
   );
};

export default index;
