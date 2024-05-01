import { P} from "@/components/P";
import { H1 } from "@/components/H1";
import ToolGrid from "@/components/ToolGrid";
import { H2 } from "@/components/H2";

export default function Page() {

  const adblocker = [36,48,92];

  return (
    <div>
        <H1>Bloqueurs de pubs</H1>
        <P>Avoir un navigateur respectueux de la vie privée est crucial dans le paysage numérique d'aujourd'hui. Cela garantit que vos informations personnelles restent confidentielles et hors de la portée des traqueurs de données et des annonceurs. Protéger votre vie privée en ligne est essentiel pour maintenir le contrôle de votre identité numérique et assurer une sensation de sécurité lors de la navigation sur le Web.</P>

        <H2>Navigateur de bureau</H2>
        <ToolGrid toolIds={adblocker}/>
        
      
      </div>
  );
}

