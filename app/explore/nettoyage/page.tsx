import { P } from "@/components/P";
import {H1} from "@/components/H1";
import ToolGrid from "@/components/ToolGrid";
import { InfoBox } from "@/components/InfoBox";

export default function Page() {
  const tools = [39,78,87]

  return (
      <div>
          <H1 subtitle={'Ne laissez plus aucune trace.'}>Crypto Exchanges</H1>
          <P>A CEX Centralized Exchange is a centralized cryptocurrency trading platform that is controlled by a third-party entity. Users can buy, sell, and trade digital assets on these platforms relatively easily and quickly. CEXs typically offer high liquidity, enabling fast transactions and competitive prices. However, CEXs have drawbacks such as the need to entrust funds to the platform, which can pose risks of hacking, fraud, or loss of control over ones assets.</P>
          <ToolGrid toolIds={tools}/>
          
        </div>
    
  )
}
