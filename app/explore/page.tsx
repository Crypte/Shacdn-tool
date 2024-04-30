import Image from "next/image";
import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { BASE_API_URL } from '@/constants/constants';
import { Platform } from "@/components/Platform";
import { Badge } from "@/components/Badge";
import { H1 } from "@/components/H1";
import { P } from "@/components/P";

async function getToolData() {
  const res = await fetch(`${BASE_API_URL}/api/tools/`);
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}


export default async function Home() {
  const data = await getToolData();
  if (!data) {
    return <div>Error loading tool data</div>;
  }
  return (
    <>
    <H1>All tools </H1>
        <P>Avoir</P>
    <div className="grid grid-cols-3 gap-3">
     {data.map((tool:any, id:any) => (
         <Card key={id} className="group hover:-translate-y-2 transition">
         <div className="relative rounded-2xl mb-4 lg:m-0 transition-all">
           {tool.link && (
             <Link href={tool.link} target="_blank" className="p-2 gap-3 flex flex-col">
                 <div className="relative">
                   <AspectRatio ratio={16 / 9}>
                     <Image
                       className="rounded-lg object-cover"
                       src={tool.url_img}
                       alt="logo"
                       sizes="(max-width: 300px) 100vw,
                       (max-width: 500px) 100vw,
                       (max-width: 800px) 100vw,
                       (max-width: 1200px) 100vw,
                       100vw"
                       fill
                     />
                   </AspectRatio>
                   <div className="flex w-fit gap-1.5 flex-wrap absolute bottom-0 left-0 right-0 p-3">
                     {tool.badge &&
                       tool.badge.map((badge: any, index: any) => (
                         <Badge variant={badge} key={index} />
                       ))}
                   </div>
                 </div>
   
                 <div className="flex lg:ml-2">
                   <div className="mr-5">
                     <Image
                       className="rounded-2xl"
                       src={tool.url_logo}
                       alt={tool.nom}
                       width={64}
                       height={64}
                     />
                   </div>
                   <div className="h-18 flex flex-col justify-between">
                     <h1 className="transition group-hover:underline text-2xl font-bold flex gap-2 items-center">
                       {tool.nom}
                       <ExternalLink
                         size={20}
                         className="transition lg:opacity-0 lg:group-hover:opacity-100"
                       />
                     </h1>
   
                     {tool.platform && (
                       <div className="pointer-events-none font-bold p-1 text-main flex gap-3 items-center border-2 rounded-full w-fit ">
                         {tool.platform.map((platform: any, index: any) => (
                           <Platform variant={platform} key={index} />
                         ))}
                       </div>
                     )}
                   </div>
                 </div>
   
                 <p className="text-sm text-muted-foreground text-justify px-2">
                   {tool.description}
                 </p>
                  <div className="h-16 bg-foreground/5 rounded-md w-full grid grid-cols-2 gap-2 place-items-center">
                     <div>
                         <p className="text-muted-foreground">platform</p>
                         badge
                     </div>
   
                     <div>
                         hello
                     </div>
                 </div>
   
             </Link>
           )}
         </div>
       </Card>
  
     ))}
    </div>
    </>
  );}