import { Badge } from "./ui/badge";
import Image from "next/image";
import { TOOL_LIST } from "@/constants/tool_data";
import { Button } from "./ui/button";
import { Compass } from 'lucide-react';

export const Herosection = () => {
  return (
    <>
      <div className="overflow-hidden py-24 lg:py-10 lg:pb-32 text-center">
        <div className="max-w-3xl text-center mx-auto">
          <Badge variant={'outline'}>New</Badge>
          <h1 className="mt-3 scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-7xl">
            Every tool you need in your life
          </h1>
          <p className="mt-3 text-xl text-muted-foreground">
            100+ daily tools to help you
          </p>
          <div className="space-x-5">
          <Button className="mt-10">
         Explore<Compass className="ml-2 h-4 w-4" />
          </Button>
          <Button variant={'outline'} className="mt-10">
        FAQ<Compass className="ml-2 h-4 w-4" />
          </Button>
          </div>
        </div>
        <div className="relative mt-20 rounded-lg grid sm:grid-cols-6 sm:grid-rows-4 grid-cols-4 grid-row-6 lg:grid-cols-8 lg:grid-rows-3 p-6 gap-3 sm:gap-6 place-items-stretch ">
          
          <div className="absolute rounded-full w-3/4 h-full bg-gradient-to-tl from-purple-400 to-red-400 blur-3xl -translate-y-20 dark:opacity-10 opacity-60 left-1/2 transform -translate-x-1/2 -top-15 -z-20"></div>
          {TOOL_LIST.slice(0, 24).map((item, index) => (
            <div key={index} className="p-2 md:p-5 rounded-xl bg-muted/30 w-30 h-30 ">
              <Image
                className="rounded-xl "
                src={item.url_logo}
                alt="coucou"
                width={200}
                height={200}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
