import { P } from "@/components/P";
import {H1} from "@/components/H1";
import ToolGrid from "@/components/ToolGrid";
import { InfoBox } from "@/components/InfoBox";
import { H2 } from "@/components/H2";

export default function Page() {
  const Cex = [59,90,60,61]

  return (
      <div>
          <H1>Crypto Exchanges</H1>
          <P>A CEX Centralized Exchange is a centralized cryptocurrency trading platform that is controlled by a third-party entity. Users can buy, sell, and trade digital assets on these platforms relatively easily and quickly. CEXs typically offer high liquidity, enabling fast transactions and competitive prices. However, CEXs have drawbacks such as the need to entrust funds to the platform, which can pose risks of hacking, fraud, or loss of control over ones assets.</P>

          <InfoBox variant="check">CEX are the best choice if you only want to invest without worrying about storage and security</InfoBox>
          <ToolGrid toolIds={Cex}/>
        </div>
    
  )
}
