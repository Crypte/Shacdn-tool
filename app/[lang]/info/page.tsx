import { Faq } from "@/components/Faq";
import { P } from "@/components/P";
import { H1 } from "@/components/H1";

export default function Page() {

  return (
    <div>

      <H1>A qui est destiné cette application? </H1>
      <P>Bienvenue sur notre plateforme dédiée à l'exploration des outils essentiels pour améliorer votre expérience en ligne ! Notre mission est de fournir une sélection diversifiée d'applications et de ressources pour vous aider à naviguer en toute sécurité tout en optimisant votre productivité. Que vous soyez intéressé par la cybersécurité, la gestion du temps ou l'efficacité professionnelle, notre site propose une variété d'outils et de conseils pour répondre à vos besoins. </P>
      <H1>Des questions? </H1>
      <Faq/>
    </div>
  )
}
