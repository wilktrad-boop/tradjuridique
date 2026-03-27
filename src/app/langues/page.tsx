import Link from "next/link";
import type { Metadata } from "next";
import { Globe, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Langues de Traduction Juridique | 30+ Combinaisons Linguistiques",
  description:
    "Traduction juridique assermentée en plus de 30 langues : anglais, espagnol, allemand, arabe, chinois, russe, portugais, italien et bien plus. Toutes les paires linguistiques.",
  alternates: { canonical: "https://agence-traduction-juridique.fr/langues" },
};

const languesPrincipales = [
  { name: "Anglais", flag: "����", volume: "Très demandé" },
  { name: "Espagnol", flag: "����", volume: "Très demandé" },
  { name: "Allemand", flag: "����", volume: "Très demandé" },
  { name: "Italien", flag: "����", volume: "Demandé" },
  { name: "Portugais", flag: "����", volume: "Demandé" },
  { name: "Arabe", flag: "����", volume: "Très demandé" },
  { name: "Chinois", flag: "����", volume: "Demandé" },
  { name: "Russe", flag: "����", volume: "Demandé" },
  { name: "Turc", flag: "����", volume: "Très demandé" },
  { name: "Japonais", flag: "����", volume: "Demandé" },
  { name: "Néerlandais", flag: "����", volume: "Disponible" },
  { name: "Polonais", flag: "����", volume: "Disponible" },
];

const autresLangues = [
  "Roumain", "Coréen", "Hébreu", "Grec", "Bulgare", "Croate", "Serbe",
  "Tchèque", "Slovaque", "Hongrois", "Danois", "Suédois", "Norvégien",
  "Finnois", "Ukrainien", "Géorgien", "Persan", "Hindi", "Thaï", "Vietnamien",
  "Indonésien", "Malais", "Bengali", "Ourdou", "Tamoul",
];

export default function LanguesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full mb-6">
            <Globe className="w-4 h-4 text-gold-400" />
            <span className="text-gold-300 text-sm font-medium">30+ langues</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-6">
            Traduction juridique en <span className="text-gold-400">toutes langues</span>
          </h1>
          <p className="text-lg text-navy-200 max-w-2xl mx-auto">
            Nos traducteurs assermentés couvrent plus de 30 langues pour vos documents juridiques
            et officiels. Toutes les combinaisons français ↔ langue étrangère sont disponibles.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-navy-900 mb-12 text-center">
            Langues principales
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {languesPrincipales.map((langue) => (
              <div
                key={langue.name}
                className="flex items-center gap-4 bg-white rounded-xl p-5 border border-navy-100 shadow-sm hover:shadow-md hover:border-gold-200 transition-all"
              >
                <span className="text-3xl">{langue.flag}</span>
                <div>
                  <p className="font-semibold text-navy-900">Français ↔ {langue.name}</p>
                  <p className="text-xs text-gold-600 font-medium">{langue.volume}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-50/50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-navy-900 mb-12 text-center">
            Autres langues disponibles
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {autresLangues.map((langue) => (
              <span
                key={langue}
                className="px-5 py-2.5 bg-white border border-navy-200 rounded-full text-navy-700 text-sm font-medium"
              >
                {langue}
              </span>
            ))}
          </div>
          <div className="text-center mt-12">
            <p className="text-navy-600 mb-6">
              Votre langue n&apos;est pas listée ? Contactez-nous, nous avons certainement un
              traducteur assermenté pour votre combinaison linguistique.
            </p>
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-gold-500/25"
            >
              Demander un devis <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
