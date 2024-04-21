'use client'

import Image from "next/image";
import Link from "next/link";
import { Badge } from "./Badge";
import { Platform } from "./Platform";
import { PartyPopper } from "lucide-react";
import { ExternalLink } from "lucide-react";
import { InfoIcon } from "lucide-react";
import { Suspense, useState, useEffect } from "react";
import { AspectRatio } from "./ui/aspect-ratio";
import { Card } from "./ui/card";
import { Skeleton } from "./ui/skeleton";
import { BASE_API_URL } from "@/constants/constants";

type ToolcardProps = {
  id: number;
};

async function getToolData(id: number) {
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
  const [toolData, setToolData] = useState<any>(null);

  useEffect(() => {
    const fetchToolData = async () => {
      setTimeout(async () => {
      const data = await getToolData(id);
      setToolData(data);
    }, 1000);
    };

    fetchToolData();
  }, [id]);

  if (!toolData) {
    return <SkeletonCard />;
  }

  return (
    <>
    <Card>
      <div className="relative rounded-2xl mb-4 lg:m-0 group transition-all">
        {toolData.link && (
          <Link href={toolData.link} target="_blank">
            <div className="p-5 gap-5 flex flex-col">
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
                <div className="flex w-fit gap-1.5 flex-wrap absolute bottom-0 left-0 right-0 p-4">
                  {toolData.badge &&
                    toolData.badge.map((badge: any, index: any) => (
                      <Badge variant={badge} key={index} />
                    ))}
                </div>
              </div>

              <div className="flex lg:ml-4">
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

              <p className="text-base text-muted-foreground text-justify">
                {toolData.description}
              </p>

              {toolData.offer && (
                <p className="justify-center text-center rounded-md transition p-2 text-sm border border-primary text-foreground flex gap-2 items-center font-semibold">
                  Parrainage : {''}
                  {toolData.offer}
                </p>
              )}
            </div>
          </Link>
        )}
      </div>
    </Card>
    </>
  );
}

export default Toolcard;

function SkeletonCard() {
  return (
    <Card className="bg-muted/10">
    <div className="flex flex-col space-y-5 p-5">
      <Skeleton className="h-[300px] w-[530px] rounded-xl" />
      <div className="flex gap-3">
        <Skeleton className="w-16 h-16 rounded-xl" />
        <div className="flex flex-col justify-between py-2">
          <Skeleton className="h-4 w-[100px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
      <div className="space-y-2.5">
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-full" />
      </div>
    </div>
    </Card>
  );
}
