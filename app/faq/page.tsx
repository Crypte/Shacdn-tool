import { Faq } from "@/components/Faq";
import { Paragraph } from "@/components/Paragraph";
import { Title } from "@/components/Title";

export default function Page() {

  return (
    <div>

      <Title>A qui est destiné cette application? </Title>
      <Paragraph>Bienvenue sur notre plateforme dédiée à l'exploration des outils essentiels pour améliorer votre expérience en ligne ! Notre mission est de fournir une sélection diversifiée d'applications et de ressources pour vous aider à naviguer en toute sécurité tout en optimisant votre productivité. Que vous soyez intéressé par la cybersécurité, la gestion du temps ou l'efficacité professionnelle, notre site propose une variété d'outils et de conseils pour répondre à vos besoins. </Paragraph>
      <Title>FAQ</Title>
      <Faq/>
    </div>
  )
}
