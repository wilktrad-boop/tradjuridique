import Link from "next/link";
import type { Metadata } from "next";
import { Globe, ArrowRight, CheckCircle, Clock, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Langues de Traduction Juridique | 30+ Combinaisons Linguistiques | ATJ",
  description:
    "Traduction juridique assermentée en plus de 30 langues : anglais, espagnol, allemand, arabe, chinois, russe, portugais, italien et bien plus. Traducteurs inscrits à la Cour d'appel. Devis gratuit.",
  alternates: { canonical: "https://www.agence-traduction-juridique.fr/langues" },
};

const languesPrincipales = [
  {
    name: "Anglais",
    flag: "🇬🇧",
    volume: "Très demandé",
    documents: ["Contrats internationaux", "Jugements étrangers", "Actes d'état civil"],
    delai: "24–48h possible",
  },
  {
    name: "Espagnol",
    flag: "🇪🇸",
    volume: "Très demandé",
    documents: ["Actes notariés", "Documents d'immigration", "Diplômes"],
    delai: "24–48h possible",
  },
  {
    name: "Allemand",
    flag: "🇩🇪",
    volume: "Très demandé",
    documents: ["Contrats commerciaux", "Documents judiciaires", "Brevets"],
    delai: "24–48h possible",
  },
  {
    name: "Arabe",
    flag: "🇲🇦",
    volume: "Très demandé",
    documents: ["Actes d'état civil", "Jugements de divorce", "Permis de conduire"],
    delai: "48–72h",
  },
  {
    name: "Turc",
    flag: "🇹🇷",
    volume: "Très demandé",
    documents: ["Documents d'immigration", "Actes d'état civil", "Diplômes"],
    delai: "48–72h",
  },
  {
    name: "Italien",
    flag: "🇮🇹",
    volume: "Demandé",
    documents: ["Actes notariés", "Documents successoraux", "Contrats"],
    delai: "24–48h possible",
  },
  {
    name: "Portugais",
    flag: "🇵🇹",
    volume: "Demandé",
    documents: ["Actes d'état civil", "Documents d'immigration", "Contrats"],
    delai: "48–72h",
  },
  {
    name: "Chinois",
    flag: "🇨🇳",
    volume: "Demandé",
    documents: ["Contrats commerciaux", "Documents d'affaires", "Diplômes"],
    delai: "3–5 jours",
  },
  {
    name: "Russe",
    flag: "🇷🇺",
    volume: "Demandé",
    documents: ["Documents judiciaires", "Actes d'état civil", "Contrats"],
    delai: "48–72h",
  },
  {
    name: "Japonais",
    flag: "🇯🇵",
    volume: "Demandé",
    documents: ["Brevets", "Contrats commerciaux", "Documents officiels"],
    delai: "3–5 jours",
  },
  {
    name: "Néerlandais",
    flag: "🇳🇱",
    volume: "Disponible",
    documents: ["Contrats", "Documents judiciaires", "Actes d'état civil"],
    delai: "3–5 jours",
  },
  {
    name: "Polonais",
    flag: "🇵🇱",
    volume: "Disponible",
    documents: ["Actes d'état civil", "Documents d'immigration", "Jugements"],
    delai: "3–5 jours",
  },
];

const autresLangues = [
  "Roumain", "Coréen", "Hébreu", "Grec", "Bulgare", "Croate", "Serbe",
  "Tchèque", "Slovaque", "Hongrois", "Danois", "Suédois", "Norvégien",
  "Finnois", "Ukrainien", "Géorgien", "Persan", "Hindi", "Thaï", "Vietnamien",
  "Indonésien", "Malais", "Bengali", "Ourdou", "Tamoul",
];

const documentsTypes = [
  {
    categorie: "État civil",
    items: ["Acte de naissance", "Acte de mariage", "Acte de décès", "Acte de divorce", "Livret de famille"],
  },
  {
    categorie: "Immigration",
    items: ["Casier judiciaire", "Titre de séjour", "Passeport", "Visa", "Documents OFPRA"],
  },
  {
    categorie: "Académique",
    items: ["Diplômes", "Relevés de notes", "Attestations de scolarité", "Lettres de recommandation"],
  },
  {
    categorie: "Juridique & notarial",
    items: ["Contrats", "Actes notariés", "Jugements", "Procurations", "Testaments"],
  },
  {
    categorie: "Commercial",
    items: ["Statuts de société", "Kbis", "Rapports annuels", "Brevets", "Marques"],
  },
  {
    categorie: "Permis & licences",
    items: ["Permis de conduire", "Licences professionnelles", "Autorisations administratives"],
  },
];

export default function LanguesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Traduction juridique assermentée multilingue",
            provider: {
              "@type": "ProfessionalService",
              name: "ATJ - Agence de Traduction Juridique",
            },
            description:
              "Traduction juridique assermentée en plus de 30 langues. Traducteurs inscrits à la Cour d'appel.",
            areaServed: "FR",
            serviceType: "Traduction juridique multilingue",
          }),
        }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full mb-6">
            <Globe className="w-4 h-4 text-gold-400" />
            <span className="text-gold-300 text-sm font-medium">30+ langues disponibles</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-6">
            Traduction juridique en <span className="text-gold-400">toutes langues</span>
          </h1>
          <p className="text-lg text-navy-200 max-w-2xl mx-auto mb-8">
            Nos traducteurs assermentés couvrent plus de 30 langues pour vos documents juridiques
            et officiels. Toutes les combinaisons français ↔ langue étrangère sont disponibles,
            avec des délais adaptés à l&apos;urgence de vos démarches.
          </p>
          <Link
            href="/devis"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-gold-500/25"
          >
            Demander un devis gratuit <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Reassurance */}
      <section className="bg-navy-800 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: Shield, label: "Traducteurs assermentés", sub: "Inscrits à la Cour d'appel" },
              { icon: Clock, label: "Service express disponible", sub: "Livraison sous 24h si besoin" },
              { icon: CheckCircle, label: "Accepté par toutes les administrations", sub: "Préfectures, consulats, notaires" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                <item.icon className="w-6 h-6 text-gold-400" />
                <p className="text-white font-semibold text-sm">{item.label}</p>
                <p className="text-navy-400 text-xs">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Langues principales */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 mb-4">
              Langues principales
            </h2>
            <p className="text-navy-600 text-lg max-w-2xl mx-auto">
              Les combinaisons linguistiques les plus demandées, avec nos meilleurs délais de livraison.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {languesPrincipales.map((langue) => (
              <div
                key={langue.name}
                className="bg-white rounded-2xl p-6 border border-navy-100 shadow-sm hover:shadow-md hover:border-gold-200 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{langue.flag}</span>
                  <div>
                    <p className="font-heading font-bold text-navy-900">
                      Français ↔ {langue.name}
                    </p>
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                        langue.volume === "Très demandé"
                          ? "bg-gold-100 text-gold-700"
                          : langue.volume === "Demandé"
                          ? "bg-navy-100 text-navy-600"
                          : "bg-navy-50 text-navy-500"
                      }`}
                    >
                      {langue.volume}
                    </span>
                  </div>
                </div>
                <ul className="space-y-1.5 mb-4">
                  {langue.documents.map((doc) => (
                    <li key={doc} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                      <span className="text-navy-600 text-sm">{doc}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-navy-400 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  Délai : {langue.delai}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documents par type */}
      <section className="bg-navy-50/50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 mb-4">
              Tous types de documents
            </h2>
            <p className="text-navy-600 text-lg max-w-2xl mx-auto">
              Quelle que soit la langue, nous traduisons l&apos;ensemble des documents juridiques
              et administratifs dont vous avez besoin.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {documentsTypes.map((cat) => (
              <div
                key={cat.categorie}
                className="bg-white rounded-2xl p-6 border border-navy-100 shadow-sm"
              >
                <h3 className="font-heading font-bold text-navy-900 mb-4 pb-3 border-b border-navy-100">
                  {cat.categorie}
                </h3>
                <ul className="space-y-2">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                      <span className="text-navy-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Autres langues */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-navy-900 mb-4">
              Autres langues disponibles
            </h2>
            <p className="text-navy-600 text-lg max-w-2xl mx-auto">
              Notre réseau de traducteurs assermentés couvre également ces langues sur demande.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {autresLangues.map((langue) => (
              <span
                key={langue}
                className="px-5 py-2.5 bg-white border border-navy-200 rounded-full text-navy-700 text-sm font-medium hover:border-gold-300 hover:text-navy-900 transition-colors"
              >
                {langue}
              </span>
            ))}
          </div>
          <div className="bg-gold-50 rounded-2xl p-8 border border-gold-200 text-center max-w-2xl mx-auto">
            <p className="text-navy-700 font-semibold mb-2">
              Votre langue n&apos;est pas listée ?
            </p>
            <p className="text-navy-600 text-sm mb-6">
              Contactez-nous. Avec notre réseau de plus de 200 traducteurs assermentés, nous avons
              très certainement un expert pour votre combinaison linguistique.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-navy-800 hover:bg-navy-700 text-white font-semibold text-sm rounded-lg transition-all"
            >
              Nous contacter <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-gold-50 to-navy-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-navy-900 mb-6">
            Prêt à démarrer votre traduction ?
          </h2>
          <p className="text-navy-600 text-lg mb-8">
            Envoyez-nous votre document, recevez un devis gratuit sous 2h et votre traduction
            assermentée dans les meilleurs délais.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/devis"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-gold-500/25"
            >
              Demander un devis gratuit <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/tarifs"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy-800 hover:bg-navy-700 text-white font-semibold rounded-lg transition-all"
            >
              Voir les tarifs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
