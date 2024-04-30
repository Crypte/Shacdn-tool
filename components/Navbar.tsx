import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import { ThemeSwitch } from "./Theme-switch";
import { Button } from "./ui/button";
import { NAV_BAR } from "@/constants";
import { Siteconfig } from "@/config/site";

import {EyeOff,Compass, Search, ShieldX, Mail, MessageCircle, FormInput, CheckCheck, ShieldCheck, CircuitBoard, Wallet, Coins, PackageCheck, UploadCloud, FileKey, Eraser, BrainCircuit, StickyNote, Users } from "lucide-react";


export const Navbar = () => {
  
  return (
    <div className="fixed w-full py-2 xl:block hidden border-b border-foreground/10 backdrop-blur-xl bg-background/70">
      <nav className="container flex items-center justify-between rounded-xl">
        <Link href={`/`} className="h-full mr-1.5 flex items-center gap-4">
          <Image className="rounded-md" src={'/logo_app/logo.png'} width={39} height={39} alt="logo" />
          <span className="font-bold text-2xl">Brand</span>
        </Link>
        <ul className="gap-1 flex">
          {NAV_BAR.map((item,index) => (
            <li key={index} className='group p-1.5 rounded-lg flex gap-1 relative items-center cursor-default '>
              <span className="transition text-sm text-muted-foreground group-hover:text-primary">{item.label}</span>
              <ChevronDown size={20} className="group-hover:rotate-180 transition text-muted-foreground group-hover:text-primary"/>
              <div className="top-full group-hover:pointer-events-auto pointer-events-none absolute pt-7 transition opacity-0 group-hover:opacity-100 duration-200">
                <div className="rounded-2xl scale-95 group-hover:scale-100 flex flex-col w-fit shadow shadow-foreground/30 p-3 transition duration-200 bg-background">
                  {item.submenu.map((item2,index) => (
                    <Link key={index} href={`${item2.href}`} className="p-2 whitespace-nowrap hover:bg-foreground/10 rounded-md flex items-center gap-4">
                      <span className="p-2 bg-foreground/10 rounded-lg"><item2.icon/></span>
                      <div>
                      {item2.label}
                      <p className="text-muted-foreground text-xs mt-1">BEst result </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 h-full">
        <Button variant={'ghost'} size={'icon'} asChild>
          <Link href={Siteconfig.links.twitter} target="blank">
            <BsTwitterX className="h-[1.2rem] w-[1.2rem]" />
          </Link>
          </Button>

          <Button asChild>
            <Link href={'/info'}>
            Contact
            </Link>
        </Button>
        <ThemeSwitch/>
        </div>
      </nav>
    </div>
  );
};