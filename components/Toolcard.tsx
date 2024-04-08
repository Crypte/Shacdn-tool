'use client'

import Image from "next/image";
import { TOOL_LIST } from "@/constants/tool_en";
import Link from "next/link";
import { Badge } from "./Badge";
import { Platform } from "./Platform";
import { PartyPopper } from "lucide-react";
import { ExternalLink } from "lucide-react";
import { InfoIcon } from "lucide-react";
import { Suspense } from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import { Card } from "./ui/card";



type ToolcardProps = {
  id: number;
};

const Toolcard = ({ id }: ToolcardProps) => {
  const Tool = TOOL_LIST.find((item) => item.id === id);

  if (!Tool) {
    return <div>Tool introuvable pour l'ID {id}</div>;
  }

  return (
    <Card>
    <div className="relative rounded-2xl mb-4 lg:m-0 group transition-all">
      <Link href={Tool.link} target="_blank">
          <div key={Tool.id} className="p-5 gap-5 flex flex-col">
            <div className="relative">
            <AspectRatio ratio={16 / 9}>
              <Image placeholder = 'blur' blurDataURL="https://placehold.co/1920x1080" className="rounded-lg object-cover" src={Tool.url_img} alt="logo" fill/>
              </AspectRatio>
              <div className="flex w-fit gap-1.5 flex-wrap absolute bottom-0 left-0 right-0 p-4">
                {Tool.badge &&
                  Tool.badge.map((badge) => (
                    <Badge variant={badge} key={badge} />
                  ))}
              </div>
            </div>
        
            <div className="flex ml-4">
              <div className="mr-5 w-18 h-18">
                <Image
                  className="rounded-2xl"
                  src={Tool.url_logo}
                  alt={Tool.nom}
                  width={64}
                  height={64}
                />
              </div>
              <div className="h-18 flex flex-col justify-between">
              <h1 className="transition group-hover:underline text-2xl font-bold flex gap-2 items-center">
                {Tool.nom}
                <ExternalLink  size={20} className="transition opacity-0 group-hover:opacity-100" />
              </h1>
            
              {Tool.platform && (
              <div className="pointer-events-none font-bold p-1 text-main flex gap-3 items-center border-2 rounded-full w-fit ">
                {Tool.platform.map((platform) => (
                  <Platform variant={platform} key={platform} />
                ))}
              </div>
            )}
            </div>
            </div>
           
              <p className="text-sm leading-7 text-foreground-muted text-justify">{Tool.description}</p>
        

            {Tool.offer && (
              <p
                className="justify-center rounded-md transition p-1.5 text-sm border border-primary text-foreground flex gap-2 items-center font-semibold">
                Parrainage : {''}
                {Tool.offer}
              </p>
            )}
          </div>
      </Link>
    </div>
    </Card>
  );
};

export default Toolcard;
