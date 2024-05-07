import { H1 } from "@/components/H1";
import { H2 } from "@/components/H2";
import { P } from "@/components/P";
import ToolGrid from "@/components/ToolGrid";

export default function Page() {
  const NavigateurBureau = [3, 4, 5, 35];
  const NavigateurMobile = [6];

  return (
    <div>
      <H1>Navigateur Web</H1>
      <P>
        Avoir un navigateur respectueux de la vie privée est crucial dans le
        paysage numérique d'aujourd'hui. Cela garantit que vos informations
        personnelles restent confidentielles et hors de la portée des traqueurs
        de données et des annonceurs. Protéger votre vie privée en ligne est
        essentiel pour maintenir le contrôle de votre identité numérique et
        assurer une sensation de sécurité lors de la navigation sur le Web.
      </P>

      <H2>Navigateur de bureau</H2>
      <ToolGrid toolIds={NavigateurBureau} />

      <H2>Navigateur mobile</H2>
      <ToolGrid toolIds={NavigateurMobile} />

      <H1>Moteur de recherche</H1>
    </div>
  );
}
