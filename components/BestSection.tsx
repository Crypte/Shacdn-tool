import React from "react";
import { Badge } from "./ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import ToolGrid from "./ToolGrid";
import { Separator } from "./ui/separator";




export const BestSection=() => {
  const encryption = [17,10,19,23,44,52]
  return (
    <div className="md:p-6 p-3 border rounded-2xl">
     <div className="flex justify-between items-center mb-3">
        <h1 className=" font-bold md:text-4xl text-2xl">Latest listing</h1>
     </div>
     <Separator/>
     <ToolGrid toolIds={encryption}/>
    </div>
  );
}


