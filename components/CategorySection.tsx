import React from "react";
import { Badge } from "./ui/badge";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "./ui/card";


import {
  BrainCogIcon,
  PackageIcon,
  ThumbsUpIcon,
  TrophyIcon,
  UsersIcon,
  ZapIcon,
  GlobeLock,
} from "lucide-react";
import { H1 } from "./H1";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

interface LocaleCategorySection {
  lang: Locale;
}

export async function CategorySection({ lang }: LocaleCategorySection) {
  const dictionary = await getDictionary(lang);

  return (
    <div className="container">
      
      
          <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-6 gap-4">
              {dictionary.NAV_BAR.map((item, index) => (
                <Card key={index}>
               <CardHeader className="pb-4 flex-row items-center gap-4">
               <div className="inline-flex justify-center items-center w-[50px] h-[50px] rounded-full border-2 bg-foreground">
                  {renderIconByKey(item.icon)}
                  </div>
                  <CardTitle>{item.label}</CardTitle>
                </CardHeader>
                    <CardContent className="text-muted-foreground">
                      The simplest way to keep your portfolio always up-to-date.
                    </CardContent>
                    </Card>
              ))}
            </div>
      </div>
  );
}


function renderIconByKey(iconName: string) {
  switch (iconName) {
    case "BrainCogIcon":
      return <BrainCogIcon className="flex-shrink-0 mt-2 h-8 w-8" />;
    case "PackageIcon":
      return <PackageIcon className="flex-shrink-0 mt-2 h-8 w-8" />;
    case "ThumbsUpIcon":
      return <ThumbsUpIcon className="flex-shrink-0 mt-2 h-8 w-8" />;
    case "TrophyIcon":
      return <TrophyIcon className="flex-shrink-0 mt-2 h-8 w-8" />;
    case "UsersIcon":
      return <UsersIcon className="flex-shrink-0 mt-2 h-8 w-8" />;
    case "ZapIcon":
      return <ZapIcon className="flex-shrink-0 mt-2 h-8 w-8" />;
    default:
      return <GlobeLock className="flex-shrink-0 w-6 h-6 text-primary-foreground" />;
  }
}

  