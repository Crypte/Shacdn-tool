import { Compass } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export const Herosection = () => {
  return (
    <>
      <div className="py-24 lg:py-10 lg:pb-32 text-center">
        <div className="max-w-3xl relative text-center mx-auto py-8">
          <div className="absolute z-[-1] w-3/4 h-full rounded-full bg-gradient-to-tl from-purple-400 to-red-400 blur-3xl dark:opacity-20 opacity-60 left-1/2 transform -translate-x-1/2" />
          <Badge variant={"outline"}>New</Badge>
          <h1 className="mt-3 scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-7xl">
            Every tool you need in your life
          </h1>
          <p className="mt-6 text-xl text-muted-foreground">
            100+ daily tools to help you
          </p>
          <div className="space-x-5">
            <Button className="mt-10">
              Explore
              <Compass className="ml-2 h-4 w-4" />
            </Button>
            <Button variant={"outline"} className="mt-10">
              FAQ
              <Compass className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};
