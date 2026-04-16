import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { FileText, ArrowRight, CheckCircle, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Traduction de Documents Officiels | Actes, Diplômes, Kbis, Permis",
  description:
    "Traduction assermentée de documents officiels : actes de naissance, permis de conduire, diplômes, Kbis, casier judiciaire, contrats. Traducteurs assermentés à Paris. Devis gratuit.",
  alternates: {
    canonical: "https://www.agence-traduction-juridique.fr/traduction-documents-officiels",
  },
};

const categories = [
  {
    title: "État civil",
    docs: [
      "Acte de naissance",
      "Acte de mariage",
      "Acte de décès",
      "Livret de famille",
      "Certificat de célibat",
      "Jugement de divorce",
    ],
  },
  {
    title: "Identité & immigration",
    docs: [
      "Passeport",
      "Carte d'identité",
      "Permis de conduire",
      "Titre de séjour",
      "Visa",
      "Casier judiciaire",
    ],
  },
  {
    title: "Éducation",
    docs: [
      "Diplômes",
      "Relevés de notes",
      "Attestations de scolarité",
      "Lettres de recommandation",
      "Mémoires et thèses",
      "Certifications professionnelles",
    ],
  },
  {
    title: "Droit des affaires",
    docs: [
      "Statuts de société",
      "Contrats commerciaux",
      "Procès-verbaux d'AG",
      "Bilans comptables",
      "Kbis",
      "Conditions générales",
    ],
  },
  {
    title: "Droit privé",
    docs: [
      "Testaments",
      "Procurations",
      "Actes notariés",
      "Contrats de mariage",
      "Donations",
      "Successions",
    ],
  },
  {
    title: "Propriété intellectuelle",
    docs: [
      "Brevets",
      "Marques déposées",
      "Licences",
      "Accords de confidentialité",
      "Contrats de cession",
      "Dessins et modèles",
    ],
  },
];

export default function DocumentsOfficielsPage() {
  return (
    <>
      <section className="relative bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 py-20 lg:py-28 overflow-hidden">
        <Image
          src="/images/legal-documents.webp"
          alt=""
          fill
          className="object-cover opacity-10 mix-blend-luminosity"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 to-navy-900/70" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full mb-6">
              <FileText className="w-4 h-4 text-gold-400" />
              <span className="text-gold-300 text-sm font-medium">Tous types de documents</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white leading-tight mb-6">
              Traduction de{" "}
              <span className="text-gold-400">documents officiels</span>
            </h1>
            <p className="text-lg text-navy-200 leading-relaxed mb-8">
              Nous assurons la traduction assermentée et certifiée de tous vos documents officiels
              et juridiques. Actes d&apos;état civil, diplômes, contrats, actes notariés &mdash;
              en plus de 30 langues.
            </p>
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-gold-500/25"
            >
              Demander un devis gratuit <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 mb-4">
              Types de documents que nous traduisons
            </h2>
            <p className="text-navy-600 text-lg max-w-2xl mx-auto">
              Notre équipe de traducteurs assermentés prend en charge tous les types de documents
              officiels et juridiques.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div
                key={category.title}
                className="bg-white rounded-2xl p-8 border border-navy-100 shadow-sm hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-heading font-bold text-navy-900 mb-5 pb-4 border-b border-navy-100">
                  {category.title}
                </h3>
                <ul className="space-y-3">
                  {category.docs.map((doc) => (
                    <li key={doc} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gold-500 shrink-0" />
                      <span className="text-navy-700 text-sm">{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides par document */}
      <section className="py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy-900 mb-3">
              Nos guides par type de document
            </h2>
            <p className="text-navy-600">Retrouvez nos conseils pratiques pour chaque catégorie de document.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { href: "/blog/traduction-acte-de-naissance", label: "État civil", title: "Traduction d'un acte de naissance", desc: "Procédure, version à fournir, délais et prix." },
              { href: "/blog/traduction-assermentee-acte-de-mariage", label: "État civil", title: "Traduction d'un acte de mariage", desc: "Cas d'usage, copie intégrale, apostille : tout ce qu'il faut savoir." },
              { href: "/blog/apostille-traduction-assermentee", label: "État civil", title: "Apostille et traduction assermentée", desc: "Quand faut-il une apostille ? Dans quel ordre obtenir les deux ?" },
              { href: "/blog/traduction-assermentee-permis-de-conduire", label: "Identité", title: "Traduction du permis de conduire", desc: "Échange de permis étranger en France : étapes et conseils." },
              { href: "/blog/traduction-diplome-etranger", label: "Éducation", title: "Traduction d'un diplôme étranger", desc: "Équivalences, ENIC-NARIC, procédure et coût." },
              { href: "/blog/traduction-assermentee-releve-de-notes", label: "Éducation", title: "Traduction d'un relevé de notes", desc: "Campus France, études à l'étranger, pièges à éviter." },
            ].map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group bg-white rounded-2xl p-6 border border-navy-100 shadow-sm hover:shadow-lg hover:border-gold-200 transition-all"
              >
                <span className="inline-block px-2.5 py-1 bg-gold-50 text-gold-700 text-xs font-semibold rounded-full mb-3">{guide.label}</span>
                <h3 className="font-heading font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">
                  {guide.title}
                </h3>
                <p className="text-navy-600 text-sm leading-relaxed mb-3">{guide.desc}</p>
                <span className="text-gold-600 text-sm font-semibold">Lire le guide →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Par profil */}
      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy-900 mb-8 text-center">
            Services spécialisés par profil
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { href: "/traduction-immigration", label: "Particuliers", title: "Démarches d'immigration", desc: "Visa, titre de séjour, OFPRA, naturalisation — traduction assermentée acceptée par toutes les préfectures." },
              { href: "/traduction-juridique-cabinets", label: "Professionnels du droit", title: "Cabinets d'avocats & notaires", desc: "Confidentialité, délais prioritaires et interlocuteur dédié pour les professionnels du droit." },
              { href: "/traduction-entreprise", label: "Entreprises", title: "Entreprises & organisations", desc: "Contrats internationaux, documents RH, conformité et propriété intellectuelle avec tarifs volume." },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group bg-white rounded-2xl p-6 border border-navy-100 shadow-sm hover:shadow-lg hover:border-gold-200 transition-all"
              >
                <span className="inline-block px-2.5 py-1 bg-gold-50 text-gold-700 text-xs font-semibold rounded-full mb-3">{item.label}</span>
                <h3 className="font-heading font-bold text-navy-900 mb-2 group-hover:text-gold-600 transition-colors">{item.title}</h3>
                <p className="text-navy-600 text-sm leading-relaxed mb-3">{item.desc}</p>
                <span className="inline-flex items-center gap-1 text-gold-600 font-semibold text-sm group-hover:gap-2 transition-all">
                  En savoir plus <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-50/50 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 lg:p-12 border border-navy-100 shadow-sm">
            <div className="flex items-start gap-5 mb-8">
              <div className="w-12 h-12 bg-navy-800 rounded-xl flex items-center justify-center shrink-0">
                <Shield className="w-6 h-6 text-gold-400" />
              </div>
              <div>
                <h2 className="text-2xl font-heading font-bold text-navy-900 mb-2">
                  Votre document n&apos;est pas dans la liste ?
                </h2>
                <p className="text-navy-600 leading-relaxed">
                  Pas d&apos;inquiétude, nous traduisons tous types de documents juridiques et
                  officiels. Contactez-nous avec votre document et nous vous proposerons un
                  devis adapté dans les plus brefs délais.
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/devis"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-all"
              >
                Demander un devis <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-navy-200 text-navy-700 hover:bg-navy-50 font-semibold rounded-lg transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
