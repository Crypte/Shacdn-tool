import React from "react";
import { Badge } from "./ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";
import ToolGrid from "./ToolGrid";
import { Separator } from "./ui/separator";




export const BestSection=() => {
  const encryption = [17,10,19,23,44,52]
  return (
    <Card>
    <CardHeader>
     <div className="flex justify-between items-center">
        <h1 className=" font-bold text-3xl">Latest listing</h1>
     </div>
     <Separator/>
     </CardHeader>
     <CardContent>
     <ToolGrid toolIds={encryption}/>
      </CardContent>
    </Card>
  );
}


