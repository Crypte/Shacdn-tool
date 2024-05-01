import { P } from "@/components/P";
import {H1} from "@/components/H1";
import ToolGrid from "@/components/ToolGrid";
import { InfoBox } from "@/components/InfoBox";
import { H2 } from "@/components/H2";

export default function Page() {

  const suivi = [79,88,89]

  return (
      <div>

          <H1>Explorer les blockchain</H1>
          <ToolGrid toolIds={suivi}/>

  
          
        </div>
    
  )
}
