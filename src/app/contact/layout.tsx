import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Agence de Traduction Juridique ATJ",
  description:
    "Contactez ATJ, votre agence de traduction juridique. Téléphone, email, formulaire de contact. Réponse rapide garantie pour toutes vos demandes de traduction.",
  alternates: { canonical: "https://agence-traduction-juridique.fr/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
