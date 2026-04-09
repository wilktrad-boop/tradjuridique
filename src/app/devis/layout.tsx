import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Devis Gratuit Traduction Juridique | Réponse sous 2h",
  description:
    "Demandez un devis gratuit pour votre traduction juridique assermentée ou certifiée. Réponse sous 2 heures. Sans engagement. Tous types de documents officiels.",
  alternates: { canonical: "https://www.agence-traduction-juridique.fr/devis" },
};

export default function DevisLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
