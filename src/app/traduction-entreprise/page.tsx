import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Briefcase,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Lock,
  FileCheck,
  Globe,
  TrendingUp,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Traduction Juridique pour Entreprises | Contrats, RH, Conformité | ATJ",
  description:
    "Service de traduction juridique pour entreprises : contrats internationaux, documents RH, conformité réglementaire, appels d'offres. Traducteurs assermentés, tarifs volume.",
  alternates: {
    canonical: "https://www.agence-traduction-juridique.fr/traduction-entreprise",
  },
};

const features = [
  {
    icon: Lock,
    title: "Confidentialité des affaires",
    description:
      "Vos documents stratégiques (contrats, accords de confidentialité, plans d'affaires) sont traités sous strict secret professionnel. Signature de NDA sur demande.",
  },
  {
    icon: FileCheck,
    title: "Précision terminologique",
    description:
      "Nos traducteurs sont spécialisés par secteur — droit des affaires, RH, finance, propriété intellectuelle — pour une terminologie irréprochable dans chaque domaine.",
  },
  {
    icon: Clock,
    title: "Délais adaptés aux projets",
    description:
      "Livraison standard sous 3–5 jours, express sous 48h. Pour les projets de grande envergure, nous établissons un planning de livraison en phases adapté à vos échéances.",
  },
  {
    icon: Globe,
    title: "30+ langues",
    description:
      "Vos partenaires, fournisseurs et clients sont partout dans le monde. Nous couvrons toutes les combinaisons linguistiques nécessaires à vos opérations internationales.",
  },
  {
    icon: TrendingUp,
    title: "Tarifs volume dégressifs",
    description:
      "Conditions préférentielles pour les contrats-cadres et volumes récurrents. Facturation mensuelle consolidée disponible pour les grandes entreprises.",
  },
  {
    icon: Users,
    title: "Interlocuteur dédié",
    description:
      "Un chef de projet attitré pour chaque compte entreprise. Suivi de vos commandes, historique des traductions et gestion des glossaires maison.",
  },
];

const useCases = [
  {
    icon: Briefcase,
    title: "Développement international",
    items: [
      "Contrats de distribution et d'agence",
      "Joint-ventures et accords de partenariat",
      "Documents de due diligence M&A",
      "Statuts de filiales étrangères",
    ],
  },
  {
    icon: Users,
    title: "Ressources humaines",
    items: [
      "Contrats de travail internationaux",
      "Règlements intérieurs et chartes",
      "Documents de mobilité internationale",
      "Fiches de poste et offres d'emploi",
    ],
  },
  {
    icon: Shield,
    title: "Conformité et réglementation",
    items: [
      "Politiques de conformité (RGPD, AML)",
      "Rapports réglementaires",
      "Déclarations douanières",
      "Certifications et normes ISO",
    ],
  },
  {
    icon: TrendingUp,
    title: "Finance et comptabilité",
    items: [
      "Rapports annuels et bilans",
      "Prospectus et mémoranda d'information",
      "Contrats de financement et prêts",
      "Documents bancaires et garanties",
    ],
  },
  {
    icon: FileCheck,
    title: "Propriété intellectuelle",
    items: [
      "Brevets et demandes PCT",
      "Licences de marques et logiciels",
      "Accords de transfert de technologie",
      "Contrats de R&D et NDA",
    ],
  },
  {
    icon: Globe,
    title: "Appels d'offres et marchés",
    items: [
      "Dossiers de candidature internationaux",
      "Spécifications techniques",
      "Cahiers des charges",
      "Réponses à des marchés publics étrangers",
    ],
  },
];

const steps = [
  {
    step: "01",
    title: "Analyse du projet",
    description:
      "Nous analysons le volume, les langues, les délais et la complexité de vos documents pour vous proposer le plan de traduction le plus adapté.",
  },
  {
    step: "02",
    title: "Devis et planning",
    description:
      "Recevez un devis détaillé avec un planning de livraison en phases si nécessaire. Pour les clients récurrents, un tarif préférentiel est appliqué dès la première commande.",
  },
  {
    step: "03",
    title: "Traduction spécialisée",
    description:
      "Vos documents sont confiés à des traducteurs spécialisés dans votre secteur, avec relecture par un second expert pour les projets complexes.",
  },
  {
    step: "04",
    title: "Livraison et suivi",
    description:
      "Livraison dans le format souhaité (Word, PDF, bilingue). Révisions incluses. Archivage de vos glossaires pour la cohérence terminologique à long terme.",
  },
];

export default function TraductionEntreprisePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Traduction juridique pour entreprises",
            provider: {
              "@type": "ProfessionalService",
              name: "ATJ - Agence de Traduction Juridique",
            },
            description:
              "Service de traduction juridique pour entreprises : contrats internationaux, RH, conformité, propriété intellectuelle. Tarifs volume et interlocuteur dédié.",
            areaServed: "FR",
            serviceType: "Traduction juridique entreprise",
          }),
        }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 py-20 lg:py-28 overflow-hidden">
        <Image
          src="/images/team-office.webp"
          alt=""
          fill
          className="object-cover opacity-10 mix-blend-luminosity"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 to-navy-900/70" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full mb-6">
              <Briefcase className="w-4 h-4 text-gold-400" />
              <span className="text-gold-300 text-sm font-medium">
                Entreprises &amp; organisations
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white leading-tight mb-6">
              Traduction juridique pour{" "}
              <span className="text-gold-400">les entreprises</span>
            </h1>
            <p className="text-lg text-navy-200 leading-relaxed mb-8">
              Contrats internationaux, documents RH, conformité réglementaire, propriété
              intellectuelle… ATJ accompagne les entreprises françaises et étrangères dans toutes
              leurs opérations nécessitant une traduction juridique précise et confidentielle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/devis"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-gold-500/25"
              >
                Demander un devis <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all border border-white/20"
              >
                Parler à un expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 mb-4">
              Un service taillé pour les exigences de l&apos;entreprise
            </h2>
            <p className="text-navy-600 text-lg max-w-2xl mx-auto">
              Nous comprenons vos contraintes : délais serrés, terminologie sectorielle, volumes
              importants et obligation absolue de confidentialité.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 border border-navy-100 shadow-sm"
              >
                <div className="w-12 h-12 bg-navy-800 rounded-xl flex items-center justify-center mb-5">
                  <feature.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-lg font-heading font-bold text-navy-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-navy-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-navy-50/50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 mb-4">
              Documents et cas d&apos;usage
            </h2>
            <p className="text-navy-600 text-lg max-w-2xl mx-auto">
              Nous intervenons sur l&apos;ensemble du cycle de vie des documents juridiques et
              administratifs de votre entreprise.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {useCases.map((uc) => (
              <div
                key={uc.title}
                className="bg-white rounded-2xl p-8 border border-navy-100 shadow-sm"
              >
                <div className="w-12 h-12 bg-navy-800 rounded-xl flex items-center justify-center mb-5">
                  <uc.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-lg font-heading font-bold text-navy-900 mb-4">{uc.title}</h3>
                <ul className="space-y-2">
                  {uc.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                      <span className="text-navy-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 mb-4">
              Notre processus pour les entreprises
            </h2>
            <p className="text-navy-600 text-lg">
              Un accompagnement structuré du brief à la livraison finale.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step}>
                <div className="text-5xl font-heading font-bold text-gold-200 mb-4">{s.step}</div>
                <h3 className="text-lg font-heading font-bold text-navy-900 mb-2">{s.title}</h3>
                <p className="text-navy-600 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing callout */}
      <section className="bg-navy-50/50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 lg:p-12 border border-navy-100 shadow-sm grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-semibold text-navy-400 uppercase tracking-wide mb-2">
                Tarification entreprise
              </p>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy-900 mb-4">
                Des tarifs adaptés à vos volumes
              </h2>
              <p className="text-navy-600 leading-relaxed mb-6">
                À partir de <strong className="text-navy-900">45 € par page</strong> pour les
                traductions standard. Tarifs dégressifs dès 20 pages. Contrats-cadres annuels
                disponibles pour les entreprises avec besoins récurrents.
              </p>
              <ul className="space-y-2.5 mb-8">
                {[
                  "Facturation mensuelle consolidée",
                  "Glossaires métier conservés et réutilisés",
                  "Interlocuteur dédié et reporting mensuel",
                  "Priorité de traitement sur les urgences",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-gold-500 shrink-0" />
                    <span className="text-navy-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/tarifs"
                className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-semibold text-sm"
              >
                Voir la grille tarifaire complète <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-navy-800 rounded-2xl p-8 text-center">
              <p className="text-navy-300 text-sm mb-2">Obtenez votre devis personnalisé</p>
              <p className="text-white font-heading font-bold text-xl mb-6">
                Réponse sous 2h ouvrées
              </p>
              <Link
                href="/devis"
                className="block w-full text-center px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-gold-500/25 mb-4"
              >
                Demander un devis
              </Link>
              <Link
                href="/contact"
                className="block w-full text-center px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all border border-white/20"
              >
                Parler à un expert
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-navy-800 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-white mb-12 text-center">
            Ils nous font confiance
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                quote:
                  "ATJ traduit l'ensemble de nos contrats fournisseurs internationaux depuis deux ans. La cohérence terminologique et la rigueur sont au rendez-vous à chaque livraison.",
                author: "Direction achats, groupe agroalimentaire",
              },
              {
                quote:
                  "Nous avons fait appel à ATJ pour la traduction de notre documentation RH lors de notre expansion en Europe. Délais tenus, qualité impeccable.",
                author: "DRH, startup technologique, Paris",
              },
              {
                quote:
                  "La gestion des urgences est excellente. Pour nos appels d'offres à l'international, ATJ a su mobiliser les ressources nécessaires en très peu de temps.",
                author: "Responsable juridique, cabinet de conseil",
              },
              {
                quote:
                  "Le glossaire maison qu'ATJ maintient pour nous est un vrai atout. La terminologie est cohérente d'un document à l'autre, ce qui compte beaucoup dans nos dossiers réglementaires.",
                author: "Compliance officer, société pharmaceutique",
              },
            ].map((t) => (
              <div key={t.author} className="bg-navy-700/50 rounded-xl p-6 border border-navy-600/30">
                <p className="text-navy-200 text-sm leading-relaxed mb-4 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-gold-400 text-sm font-semibold">{t.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-gold-50 to-navy-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-navy-900 mb-6">
            Faisons connaissance
          </h2>
          <p className="text-navy-600 text-lg mb-8">
            Transmettez-nous votre premier projet et découvrez un service de traduction juridique
            à la hauteur de vos exigences professionnelles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/devis"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-gold-500/25"
            >
              Soumettre un projet <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy-800 hover:bg-navy-700 text-white font-semibold rounded-lg transition-all"
            >
              Parler à un expert
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
