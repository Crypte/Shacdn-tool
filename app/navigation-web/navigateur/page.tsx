import { Paragraph } from "@/components/Paragraph";
import { Title } from "@/components/Title";
import ToolGrid from "@/components/ToolGrid";
import { Title2 } from "@/components/Title2";

export default function Page() {

  const NavigateurBureau = [3, 5, 4, 35, 77];
  const NavigateurMobile = [6];

  return (
    <div>


        <Title>Navigateur Web</Title>
        <Paragraph>Avoir un navigateur respectueux de la vie privée est crucial dans le paysage numérique d'aujourd'hui. Cela garantit que vos informations personnelles restent confidentielles et hors de la portée des traqueurs de données et des annonceurs. Protéger votre vie privée en ligne est essentiel pour maintenir le contrôle de votre identité numérique et assurer une sensation de sécurité lors de la navigation sur le Web.</Paragraph>

        <Title2>Navigateur de bureau</Title2>
        <ToolGrid toolIds={NavigateurBureau}/>

        <Title2>Navigateur mobile</Title2>
        <ToolGrid toolIds={NavigateurMobile}/>

        <Title>Moteur de recherche</Title>
        
      
      </div>
  );
}

