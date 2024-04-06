import { NAV_BAR } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import { ThemeSwitch } from "./Theme-switch";
import { Button } from "./ui/button";

export const Navbar = () => {

  return (
    <div className="fixed w-full py-2 xl:block hidden border-b border-foreground/10 backdrop-blur-xl bg-background/40">
      <nav className="container flex items-center justify-between rounded-xl">
        <Link href={"/"} className="hover:opacity-70 transition h-full mr-1.5">
          <Image className="rounded-md hidden dark:block" src={'/logo_app/logoblack.png'} width={39} height={39} alt="logo" />
          <Image className="rounded-md dark:hidden" src={'/logo_app/logowhite.png'} width={39} height={39} alt="logo" />
        </Link>
        <ul className="gap-1 flex">
          {NAV_BAR.map((link) => (
            <li key={link.key} className='group p-1.5 rounded-lg flex gap-1.5 relative items-center cursor-default '>
              <span className="transition text-muted-foreground group-hover:text-primary">{link.label}</span>
              <ChevronDown size={20} className="group-hover:rotate-180 transition text-muted-foreground group-hover:text-primary"/>
              <div className="top-full group-hover:pointer-events-auto pointer-events-none absolute pt-7 transition opacity-0 group-hover:opacity-100 duration-200">
                <div className="rounded-2xl scale-95 group-hover:scale-100 flex flex-col w-fit shadow shadow-foreground/30 p-3 transition duration-200 bg-background">
                  {link.submenu.map((item) => (
                    <Link key={item.label} href={item.href} className="p-2 whitespace-nowrap hover:bg-foreground/5 rounded-md flex items-center gap-4">
                      <span className="p-1.5 bg-foreground/10 rounded-lg"><item.icon size={25}/></span>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 h-full">
        <Link href="/bon-plan" target="blank" className="p-2 ">
        <BsTwitterX size={20} />
        </Link>

          <Button asChild>
            <Link href={'/faq'}>
            FAQ
            </Link>
        </Button>
        <ThemeSwitch/>
        </div>
      </nav>
    </div>
  );
};