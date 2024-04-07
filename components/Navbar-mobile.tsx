'use client'

import { ThemeSwitch } from "./Theme-switch";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { ScrollArea } from "./ui/scroll-area";

import { NAV_BAR } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
 
export const Navbarmobile= () => {
  return (
    <div className="xl:hidden block">
    <Sheet>
      <div className="fixed w-full top-0 z-50 border-b border-foreground/10  backdrop-blur-xl bg-background/40">
        <div className="flex items-center justify-between p-3">
          <div className="flex mr-4">
            <Link
              href='/'
              className="flex items-center text-3xl gap-6"
            >
              <Image className="rounded-md hidden dark:block" src={'/logo_app/logoblack.png'} width={39} height={39} alt="logo" />
          <Image className="rounded-md dark:hidden" src={'/logo_app/logowhite.png'} width={39} height={39} alt="logo" />
            </Link>
          </div>
          <div className="flex items-center gap-2">
          <ThemeSwitch/>
          <SheetTrigger asChild>
            <Button variant="outline" size={'icon'}><Menu/></Button>
          </SheetTrigger>
          </div>
        </div>
      </div>

  
      
      <SheetContent>
      <SheetTitle>Menu</SheetTitle>
        <ScrollArea className="h-full">
      {NAV_BAR.map((link) => (
            <div key={link.key}>
              <h2 className="my-3 pb-2 border-b text-foreground font-bol mt-6">{link.label}</h2>
              {link.submenu.map((item) => (
                <SheetClose asChild>
                <Link
                  key={item.label}
                  href={item.href}
                >
                  <label className="py-4 text-md text-center cursor-pointer transition duration-300 ease-in-out flex items-center" htmlFor={item.label}>
                    <div className="flex items-center gap-3">
                    <span className="p-1.5  rounded-lg text-muted-foreground"><item.icon size={20}/></span>
                      <span>{item.label}</span>
                    </div>
                  </label>
                </Link>
                </SheetClose>
              ))}
            </div>
          ))}
          </ScrollArea>
      </SheetContent>
    </Sheet>
    </div>
  )
}