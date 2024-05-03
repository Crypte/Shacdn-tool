import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { BsTwitterX } from "react-icons/bs";

export const Herosection=() =>{
    return (
        <div className="relative px-4 py-32">
          <div>
            <div className="text-center mx-auto">
              
              <Badge variant={'secondary'}>Version : V0</Badge>
              <div className="mt-5">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-7xl">
                  Safety. Productivity. Efficiency.
                </h1>
              </div>
            
              <div className="mt-6 max-w-3xl mx-auto">
                <p className="text-xl text-muted-foreground">
                Over 100+ tools to help you daily adopt good habits and protect yourself
                </p>
              </div>
             
              <div className="mt-8 gap-3 flex justify-center">
                <Button>Get started</Button>
                <Button variant={'outline'}>
                    <BsTwitterX className="mr-2 h-4 w-4" />Twitter
                </Button>
              </div>
            </div>
          </div>
        </div>
                


    );
};