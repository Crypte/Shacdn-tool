import { NAV_BAR } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";
import { Themeswitch } from "./Theme-switch";
import { Button } from "./ui/button";

export const Navbar = () => {

  return (
    <div className="fixed w-full pb-14-xl pt-2 xl:block hidden">
      <nav className="container flex items-center justify-between p-2 rounded-xl h-14 border bg-background">
        <Link href={"/"} className="hover:opacity-70 transition h-full mr-1.5">
          <Image className="rounded-md hidden dark:block" src={'/logo_app/logoblack.png'} width={39} height={39} alt="logo" />
          <Image className="rounded-md dark:hidden" src={'/logo_app/logowhite.png'} width={39} height={39} alt="logo" />
        </Link>
        <ul className="gap-1 flex">
          {NAV_BAR.map((link) => (
            <li key={link.key} className='group p-1.5 rounded-lg flex gap-1.5 relative items-center cursor-default '>
              <span className="transition">{link.label}</span>
              <ChevronDown size={20} className="group-hover:rotate-180 transition"/>
              <div className="top-full group-hover:pointer-events-auto pointer-events-none absolute pt-5 transition opacity-0 group-hover:opacity-100 duration-200">
                <div className="rounded-2xl scale-95 group-hover:scale-100 flex flex-col w-fit shadow p-3 transition duration-200 bg-background">
                  {link.submenu.map((item) => (
                    <Link key={item.label} href={item.href} className="p-2 whitespace-nowrap hover:bg-foreground/10 rounded-md flex items-center gap-4">
                      <span className="p-1.5 bg-foreground/10 rounded-lg"><item.icon size={25}/></span>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 h-full">
        <Link href="/bon-plan" target="blank" className="hover:opacity-70 flex items-center justify-center p-2 transition ">
        <BsTwitterX size={25} />
        </Link>

          <Button asChild className="flex items-center justify-center h-full px-3 rounded-md transition hover:opacity-70">
            <Link href={'/faq'}>
            FAQ
            </Link>
        </Button>
        <Themeswitch/>
        </div>
      </nav>
    </div>
  );
};
