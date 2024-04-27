'use client'
import { ExternalLink } from "lucide-react";
import { AspectRatio } from "./ui/aspect-ratio";
import { Card } from "./ui/card";
import { BASE_API_URL } from "@/constants/constants";
import React, { useEffect, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./Badge";
import { Platform } from "./Platform";


type ToolcardProps = {
  id: number;
};

type ToolData = {
  url_img: string;
  url_logo: string;
  link: string;
  badge: any[];
  nom: string;
  platform: any[];
  description: string;
};

async function getToolData(id:number) {
  const res = await fetch(`${BASE_API_URL}/api/tools/${id}`);
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

function Toolcard({ id }: ToolcardProps) {
  const [toolData, setToolData] = useState<ToolData | null>(null);

  useEffect(() => {
    async function fetchData() {
      const data = await getToolData(id);
      setToolData(data);
    }

    fetchData();
  }, [id]);

  if (!toolData) {
    return <div>Loading...</div>;
  }

  console.log(toolData.url_img)
  console.log(toolData.url_logo)

  
  return (
    <>
    <Card className="group hover:-translate-y-2 transition">
      <div className="relative rounded-2xl mb-4 lg:m-0 transition-all">
        {toolData.link && (
          <Link href={toolData.link} target="_blank" className="p-2 gap-3 flex flex-col">
              <div className="relative">
                <AspectRatio ratio={16 / 9}>
                  <Image
                    className="rounded-lg object-cover"
                    src={toolData.url_img}
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
                  {toolData.badge &&
                    toolData.badge.map((badge: any, index: any) => (
                      <Badge variant={badge} key={index} />
                    ))}
                </div>
              </div>

              <div className="flex lg:ml-2">
                <div className="mr-5">
                  <Image
                    className="rounded-2xl"
                    src={toolData.url_logo}
                    alt={toolData.nom}
                    width={64}
                    height={64}
                  />
                </div>
                <div className="h-18 flex flex-col justify-between">
                  <h1 className="transition group-hover:underline text-2xl font-bold flex gap-2 items-center">
                    {toolData.nom}
                    <ExternalLink
                      size={20}
                      className="transition lg:opacity-0 lg:group-hover:opacity-100"
                    />
                  </h1>

                  {toolData.platform && (
                    <div className="pointer-events-none font-bold p-1 text-main flex gap-3 items-center border-2 rounded-full w-fit ">
                      {toolData.platform.map((platform: any, index: any) => (
                        <Platform variant={platform} key={index} />
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <p className="text-sm text-muted-foreground text-justify px-2">
                {toolData.description}
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
    </>
  );
}

export default Toolcard;