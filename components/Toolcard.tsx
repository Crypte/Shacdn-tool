import Image from "next/image";
import Link from "next/link";
import { Badge } from "./Badge";
import { Platform } from "./Platform";
import { PartyPopper } from "lucide-react";
import { ExternalLink } from "lucide-react";
import { InfoIcon } from "lucide-react";
import { Suspense } from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import { Card } from "./ui/card";
import { Skeleton } from "./ui/skeleton";


type ToolcardProps = {
  id: number;
};

interface Tool {
  id: number;
  nom: string;
  url: string;
  badge: string[];
  description: string;
  url_logo: string;
  url_img: string;
  platform: string[];
  link: string;
}

async function Toolcard({ id }: ToolcardProps) {
  
  return (
    <Suspense fallback={<SkeletonCard/>}>
    <Card>
    salut
    </Card>
    </Suspense>
    
  );
};

export default Toolcard;


function SkeletonCard() {
  return (
    <div className="flex flex-col space-y-3">
      <Skeleton className="h-[300px] w-[530px] rounded-xl" />
      <div className="flex gap-3">
        <Skeleton className="w-16 h-16 rounded-xl" />
        <div className="flex flex-col justify-between py-2">
        <Skeleton className="h-4 w-[100px]" />
        <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
    </div>
  )
}
