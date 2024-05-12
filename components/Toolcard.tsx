import { TOOL_LIST } from "@/constants/tool_data";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./Badge";
import { Platform } from "./Platform";
import { AspectRatio } from "./ui/aspect-ratio";
import { Card } from "./ui/card";

type ToolcardProps = {
  id: number;
};

export default function Toolcard({ id }: ToolcardProps) {
  const toolData = TOOL_LIST.find((item) => id === item.id);

  if (!toolData) {
    return <div>Error loading tool data{id}</div>;
  }
  return (
    <>
      <Card className="group hover:-translate-y-1 relative rounded-2xl lg:m-0 transition-all pb-3">
        {toolData.link && (
          <Link
            href={toolData.link}
            target="_blank"
            className="p-2 flex flex-col"
          >
            <div className="space-y-4 grow">
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
              <div className="mx-2 space-y-4">
                <div className="flex">
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

                <p className="leading-6 text-sm text-muted-foreground">
                  {toolData.description}
                </p>
              </div>
            </div>
          </Link>
        )}
      </Card>
    </>
  );
}
