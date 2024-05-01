import { P } from "@/components/P"
import ToolGrid from "@/components/ToolGrid"
import { H1 } from "@/components/H1"
import { InfoBox } from "@/components/InfoBox"

export default function Page() {

  const Messagerie = [13, 14]
  
  return (
    <div>
          <H1>Messagerie</H1>
          <P>Communiquez en toute confidentialité avec des applications de messagerie instantanée conçues pour protéger votre vie privée. Protégez vos échanges avec un cryptage de bout en bout et soyez assuré que vos conversations restent confidentielles. Gardez le contrôle de vos données et profitez d'une messagerie sécurisée pour une tranquillité d'esprit totale.</P>
          <InfoBox title="Un effort !" variant="information">Nous savons que ces services sont rarement utilisés, c'est pourquoi vous devriez vous en tenir aux plus populaires. Les télécharger et les suggérer à vos amis et votre famille est la première étape vers ce changement.</InfoBox>
          <ToolGrid toolIds={Messagerie}/>

    </div>
  );
}
