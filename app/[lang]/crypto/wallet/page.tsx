import { P } from "@/components/P";
import {H1} from "@/components/H1";
import ToolGrid from "@/components/ToolGrid";
import { InfoBox } from "@/components/InfoBox";
import { H2 } from "@/components/H2";
import { Alert } from "@/components/ui/alert";

export default function Page() {

  const Hardwarewallet = [17,81,84]
  const Hotwallet = [46,82,47,12]
  const plate =[85,86]


  return (
      <div>
          <H1 subtitle={'Your keys, your coins.'}>Crypto Wallet</H1>
          <P>A crypto wallet is a digital tool that securely stores and manages your cryptocurrencies, such as Bitcoin and Ethereum, acting as your virtual wallet for digital assets. It allows you to send, receive, and store various cryptocurrencies while giving you control over your own funds and financial autonomy.</P>

          <InfoBox variant="warning">La gestion d'un portefeuille nécessite de comprendre les concepts de Seed, de clé publique et de clé privée. Vous êtes votre propre banquier. Si vous n'êtes pas sûr de vous, utilisez un portefeuille pour conserver vos cryptomonnaies.</InfoBox>

          <H2>Hardware Wallet</H2>
          <P>Les hardware wallets protègent la seed, une série de mots qui représente la clé privée des cryptomonnaies. Cette seed est généralement stockée de manière sécurisée à l'intérieur du dispositif, hors de portée des menaces en ligne. Grâce à une confirmation physique nécessaire pour accéder à la seed, ces wallets offrent une protection supplémentaire. En termes simples, cela rend difficile pour les pirates informatiques d'accéder à vos actifs numériques.</P>
        
          <ToolGrid toolIds={Hardwarewallet}/>

          <H2>Client wallet</H2>
          <ToolGrid toolIds={Hotwallet}/>

          <ToolGrid toolIds={plate}/>

          
      </div>
    
  )
}
