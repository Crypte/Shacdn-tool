import { P } from "@/components/P";
import { H1 } from "@/components/H1";
import ToolGrid from "@/components/ToolGrid";
import { InfoBox } from "@/components/InfoBox";
import { H2 } from "@/components/H2";

export default function Page() {

  const antivirus = [20,21,38];

  return (
    <div>
     
        <H1 subtitle={'Votre meilleur allié.'}>Antivirus</H1>
        <P>Avoir un navigateur respectueux de la vie privée est crucial dans le paysage numérique d'aujourd'hui. Cela garantit que vos informations personnelles restent confidentielles et hors de la portée des traqueurs de données et des annonceurs. Protéger votre vie privée en ligne est essentiel pour maintenir le contrôle de votre identité numérique et assurer une sensation de sécurité lors de la navigation sur le Web.</P>

        <H2>Navigateur de bureau</H2>
        <ToolGrid toolIds={antivirus}/>

        
      
      </div>
  );
}
