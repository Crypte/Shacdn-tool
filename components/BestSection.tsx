import React from "react";
import { Badge } from "./ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "./ui/card";
import ToolGrid from "./ToolGrid";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { ArrowRightIcon } from "lucide-react";

export const BestSection = () => {
  const encryption = [17, 10, 19, 23, 44, 52];
  return (
    <div className="md:p-6 p-3 rounded-2xl">
      <div className="mb-14 pt-10 text-center">
        <p className="lg:text-5xl text-3xl font-bold mb-4">Latest Listing </p>
        <p className="text-xl text-muted-foreground">
          Meet our latest tool added to the platform
        </p>
      </div>
      <ToolGrid toolIds={encryption} />
      <div className="flex justify-center mt-8">
        <Button>
          What are our criteria ? <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
