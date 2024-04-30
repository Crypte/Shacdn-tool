import { Button } from "./ui/button";



export const Herosection=() =>{
    return (
        <div className="relative py-28 bg-cyan-500/20 rounded-2xl">
          <div>
            <div className="text-center mx-auto">
            
              <div className="mt-5">
                <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-7xl">
                  Safety. Productivity. Efficiency.
                </h1>
              </div>
            
              <div className="mt-6 max-w-3xl mx-auto">
                <p className="text-xl text-muted-foreground">
                  Over 10+ fully responsive, UI blocks you can drop into your
                  Shadcn UI projects and customize to your heart&apos;s content.
                </p>
              </div>
             
              <div className="mt-8 gap-3 flex justify-center">
                <Button size={"lg"}>Get started</Button>
                <Button size={"lg"} variant={"outline"}>
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </div>
                


    );
};