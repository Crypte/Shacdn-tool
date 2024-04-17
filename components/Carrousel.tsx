'use client'
import { Badge } from "./ui/badge";

import Image from "next/image";
import { TOOL_LIST } from "@/constants/tool_en";

export const Carrousel = () => {
  
  const shuffledToolList = [...TOOL_LIST].sort(() => Math.random() - 0.5);

  return (

    <div>
      <div className="text-center mb-14">
      <Badge className="mb-4" variant="outline">New</Badge>
      <div>
      <p className=" lg:text-5xl text-3xl font-bold mb-6">+100 outils listés </p></div>
      <p className="text-muted-foreground">Pour couvrir tout vos besoin en terme de sécruité</p>
      </div>
    <div className="scroller mx-auto ">
    <div className="scroller__inner">
        {shuffledToolList.map((tool, index) => (
            <Image key={index} className="rounded-2xl mx-5" src={tool.url_logo} alt={tool.nom} width={55} height={55} priority={true}/>
        ))}
    </div>
    </div>
    </div>
  );
};