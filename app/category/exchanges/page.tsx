import { H1 } from "@/components/H1";
import { H2 } from "@/components/H2";
import { InfoBox } from "@/components/InfoBox";
import { P } from "@/components/P";
import { Plink } from "@/components/Plink";
import ToolGrid from "@/components/ToolGrid";

export default function Page() {
  const Cex = [16, 18, 58];
  const Crustodialex = [41, 50];
  const Dex = [44, 19];

  return (
    <div>
      <H1>Exchanges crypto</H1>
      <P>
        Un exchange est une plateforme en ligne qui permet aux utilisateurs
        d'acheter, de vendre et d'échanger des actifs numériques. Il existe
        différents types d'échanges, chacun ayant ses propres avantages et
        inconvénients. Les exchanges centralisés (CEX) sont contrôlés par une
        entité tierce, tandis que les exchanges décentralisés (DEX) fonctionnent
        sur des réseaux peer-to-peer. Les exchanges non-custodial permettent aux
        utilisateurs de conserver le contrôle de leurs fonds sans avoir à les
        confier à une tierce partie.
      </P>
      <H2>Exchanges centralisés (CEX)</H2>
      <P>
        Un échange centralisé est une plateforme d'échange où vous pouvez
        acheter et vendre vos cryptos. Le termes centralisé vient du fait que
        tous les fonds des clients sont stockés sur un seul compte. Cela
        signifie que vous devez faire confiance à l'échange pour garder vos
        fonds en sécurité. Les exchanges centralisés sont généralement plus
        faciles à utiliser et offrent une liquidité plus élevée que les
        exchanges décentralisés.
      </P>
      <InfoBox title="Débutant ? " variant="check">
        Les CEX restent le meilleur choix pour les débutants en crypto. vous
        déléguez complètement la sécurité de vos fonds à la plateforme. Ce qui
        permet d'éviter de faire certaines erreurs.
      </InfoBox>
      <ToolGrid toolIds={Cex} />
      <H2>Exchanges non-crustodial</H2>
      <P>
        Les échanges non-crustodial permettent d'acheter et de revendre sans
        avoir à déposer ses fonds sur une plateforme. vous importez en général
        votre <Plink href="/wallet">wallet</Plink> et gardez le contrôle sur
        votre clé privée.
      </P>
      <ToolGrid toolIds={Crustodialex} />

      <H2>Exchanges décentalisés (DEX)</H2>
      <ToolGrid toolIds={Dex} />
    </div>
  );
}
