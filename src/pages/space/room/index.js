/** @format */

import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import People from "@/components/People";
import { useState } from "react";

const index = () => {
   const [name, setName] = useState("Teachers");
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
            <TabsContent value="stream">Make changes to your account here.</TabsContent>
            <TabsContent value="classwork">Change your password here.</TabsContent>
            <TabsContent value="people">
               <People name = {name} />
            </TabsContent>
         </Tabs>
      </div>
   );
};

export default index;
