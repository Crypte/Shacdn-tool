import { Compass } from "lucide-react";
import { HeroGrid } from "./HeroGrid";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";

export const Herosection = () => {
  return (
    <>
      <div className="py-24 lg:py-10 lg:pb-32 text-center">
        <div className="max-w-3xl text-center mx-auto">
          <Badge variant={"outline"}>New</Badge>
          <h1 className="mt-3 scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-7xl">
            Every tool you need in your life
          </h1>
          <p className="mt-3 text-xl text-muted-foreground">
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
        <HeroGrid />
      </div>
    </>
  );
};
