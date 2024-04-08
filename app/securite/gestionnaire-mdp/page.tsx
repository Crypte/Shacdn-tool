import { P } from "@/components/P";
import { H1 } from "@/components/H1";
import ToolGrid from "@/components/ToolGrid";
import { InfoBox } from "@/components/InfoBox";
import { H2 } from "@/components/H2";

export default function Page() {

  const Keepassapp = [10,11];
  const online = [75,37,63];
  const Hash = [56];

  return (
    <div>
        <H2>Keepass app</H2>

        <InfoBox title="Qu'est ce que Keepass?" variant="information">
        KeePass est un protocole de fichier permettant la création de bases de données de mots de passe chiffrées par un mot de passe principal. Son statut open-source favorise la compatibilité avec d'autres applications et offre la possibilité d'intégrer différentes interfaces.</InfoBox>

      
        <ToolGrid toolIds={Keepassapp}/>

        <H2>Navigateur mobile</H2>
        <ToolGrid toolIds={online}/>

        <H2>Moteur de recherche</H2>
        <ToolGrid toolIds={Hash}/>
      
      </div>
  );
}
