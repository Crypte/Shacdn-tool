import { Herosection } from "@/components/Herosection";
import {BestSection} from "@/components/BestSection";
import { Carrousel } from "@/components/Carrousel";
import { ContactBlock } from "@/components/ContactBlock";

export default function Home() {
  return (
    <div className='space-y-6'>
      <Herosection/>
      <BestSection/>
      <ContactBlock/>
      <Carrousel/>
    </div>
  );
}
