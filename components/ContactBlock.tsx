
import { SiElement, SiProton } from "react-icons/si"
import { BsTwitterX } from "react-icons/bs"
import { FaDiscord } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6";
import Link from "next/link"
 
 
export function ContactBlock() {
   
 
  return (
    
      <div className="bg-red-400/10 rounded-xl md:px-12 px-6 py-10 grid items-center md:grid-cols-2 my-10">
        <div className="text-center md:text-left">
           <h1 className="lg:text-4xl text-3xl font-bold mb-2">Stay tuned</h1>
           <h2 className="text-xl text-muted-foreground">Join us or contact us</h2>
        </div>
        <div className="flex flex-wrap gap-8 md:justify-end justify-center mt-6 md:mt-0">
          <Link href={''} className="p-3 bg-muted-foreground/10 transition rounded-lg hover:opacity-70">
              <FaDiscord color="#586AEA" size={40} />
          </Link>

          <Link href={''} className="p-3 bg-muted-foreground/10 transition rounded-lg hover:opacity-70 ">
              <SiProton color="#7C5CFF" size={40} />
          </Link>

          <Link href={''} className="p-3 bg-muted-foreground/10 transition rounded-lg hover:opacity-70 ">
              <SiElement color="#15BF8F" size={40} />
          </Link>

          <Link href={''} className="p-3 bg-muted-foreground/10 transition rounded-lg hover:opacity-70 ">
              <FaXTwitter size={40} />
          </Link>

        </div>
       
      </div>
  )
}