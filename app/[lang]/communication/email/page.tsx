import ToolGrid from "@/components/ToolGrid";
import { H1 } from "@/components/H1";
import { P } from "@/components/P";
import { getDictionary } from "../../../../get-dictionary";
import { Locale } from "../../../../i18n-config";

export default async function Page({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  const email = [1, 2, 74];
  
  return (
    <div>
      <H1 subtitle={'Protégez vos email.'}>Email</H1>
      <p>Current locale: {lang}</p>
      <p>
        This text is rendered on the server:{" "}
        {dictionary.servercomponent.welcome}
      </p>
      <P>Les fournisseurs de messagerie électronique axés sur la confidentialité offrent une protection renforcée des données, une confidentialité et une sécurité accrues par rapport aux services de messagerie électronique traditionnels. Ils accordent la priorité à la protection des données des utilisateurs, offrent des expériences sans publicité et proposent des fonctionnalités de sécurité avancées. Avec les fournisseurs de messagerie axés sur la confidentialité, les individus peuvent avoir un plus grand contrôle sur leur vie privée en ligne et profiter d'une expérience de messagerie électronique plus sécurisée et privée.</P>
      <ToolGrid toolIds={email}/>
    </div>
  );
}
