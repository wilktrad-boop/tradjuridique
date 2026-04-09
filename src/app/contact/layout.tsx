import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Cabinet de Traduction Juridique à Paris - ATJ",
  description:
    "Contactez ATJ, votre cabinet de traduction juridique à Paris. Téléphone, email, formulaire de contact. Réponse rapide garantie pour toutes vos demandes de traduction.",
  alternates: { canonical: "https://www.agence-traduction-juridique.fr/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
