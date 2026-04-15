import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Shield,
  CheckCircle,
  ArrowRight,
  FileCheck,
  Clock,
  Globe,
  AlertCircle,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Traduction pour l'Immigration | Visa, Titre de Séjour, OFPRA | ATJ",
  description:
    "Traduction assermentée pour l'immigration : visa, titre de séjour, naturalisation, OFPRA, préfecture. Traducteurs experts, délais rapides. Devis gratuit.",
  alternates: {
    canonical: "https://www.agence-traduction-juridique.fr/traduction-immigration",
  },
};

const features = [
  {
    icon: Shield,
    title: "Traductions reconnues",
    description:
      "Nos traductions assermentées sont acceptées par toutes les préfectures françaises, l'OFPRA, les consulats et les ambassades.",
  },
  {
    icon: FileCheck,
    title: "Traducteurs assermentés",
    description:
      "Chaque traduction est réalisée par un traducteur inscrit auprès de la Cour d'appel, ce qui lui confère une valeur légale officielle.",
  },
  {
    icon: Clock,
    title: "Délais adaptés à l'urgence",
    description:
      "Nous savons que les délais administratifs peuvent être serrés. Service express 48h et urgent 24h disponibles.",
  },
  {
    icon: Globe,
    title: "Toutes les langues",
    description:
      "Plus de 30 langues couvertes : arabe, anglais, russe, espagnol, turc, chinois, dari, pashto, et bien d'autres.",
  },
  {
    icon: Users,
    title: "Expertise immigration",
    description:
      "Nos traducteurs connaissent parfaitement les exigences spécifiques de chaque démarche : OFPRA, préfecture, naturalisation.",
  },
  {
    icon: Shield,
    title: "Confidentialité garantie",
    description:
      "Vos documents personnels sont traités dans la plus stricte confidentialité, conformément au secret professionnel.",
  },
];

const documents = [
  "Actes de naissance et de mariage",
  "Actes de décès et livrets de famille",
  "Passeports et documents d'identité",
  "Casiers judiciaires",
  "Diplômes et relevés de notes",
  "Permis de conduire étrangers",
  "Titres de séjour étrangers",
  "Actes notariés et jugements",
  "Documents de l'état civil consulaire",
  "Certificats de coutume",
  "Attestations diverses",
  "Jugements de divorce",
];

const useCases = [
  {
    title: "Demande de visa",
    description:
      "Les ambassades et consulats exigent des traductions certifiées ou assermentées de vos documents d'état civil pour les demandes de visa long séjour.",
  },
  {
    title: "Titre de séjour et renouvellement",
    description:
      "La préfecture requiert des traductions assermentées des documents étrangers pour l'instruction de votre dossier de titre de séjour.",
  },
  {
    title: "Demande d'asile (OFPRA)",
    description:
      "L'OFPRA exige des traductions assermentées (officielles) de tous les documents en langue étrangère présentés à l'appui d'une demande de protection.",
  },
  {
    title: "Naturalisation et citoyenneté",
    description:
      "Pour une demande de naturalisation, les actes d'état civil étrangers doivent être traduits par un traducteur assermenté et acceptés par le ministère.",
  },
];

const steps = [
  {
    step: "01",
    title: "Envoyez vos documents",
    description:
      "Transmettez une copie numérique (scan ou photo) de vos documents par email ou via notre formulaire en ligne.",
  },
  {
    step: "02",
    title: "Devis sous 2h",
    description:
      "Recevez un devis gratuit et sans engagement avec le prix exact et le délai de livraison.",
  },
  {
    step: "03",
    title: "Traduction assermentée",
    description:
      "Un traducteur assermenté spécialiste de l'immigration traduit votre document avec cachet officiel.",
  },
  {
    step: "04",
    title: "Livraison rapide",
    description:
      "Recevez votre traduction certifiée par voie numérique et/ou postale selon les besoins de votre démarche.",
  },
];

export default function TraductionImmigrationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Traduction pour l'immigration",
            provider: {
              "@type": "ProfessionalService",
              name: "ATJ - Agence de Traduction Juridique",
            },
            description:
              "Traduction assermentée pour visa, titre de séjour, naturalisation, OFPRA et démarches administratives liées à l'immigration.",
            areaServed: "FR",
            serviceType: "Traduction assermentée immigration",
          }),
        }}
      />

      {/* Hero */}
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
              <Globe className="w-4 h-4 text-gold-400" />
              <span className="text-gold-300 text-sm font-medium">Immigration & séjour</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white leading-tight mb-6">
              Traduction assermentée pour vos démarches{" "}
              <span className="text-gold-400">d&apos;immigration</span>
            </h1>
            <p className="text-lg text-navy-200 leading-relaxed mb-8">
              Visa, titre de séjour, naturalisation, OFPRA, préfecture… Nos traducteurs
              assermentés prennent en charge tous vos documents pour que vos dossiers soient
              acceptés du premier coup.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/devis"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-gold-500/25"
              >
                Demander un devis gratuit <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Info banner */}
      <section className="bg-gold-50 border-b border-gold-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center gap-3">
            <AlertCircle className="w-5 h-5 text-gold-600 shrink-0" />
            <p className="text-gold-800 text-sm">
              <strong>Traduction assermentée obligatoire.</strong> La préfecture, l&apos;OFPRA et les
              consulats exigent des traductions réalisées par un traducteur inscrit auprès de la
              Cour d&apos;appel — et non une simple traduction libre.
            </p>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 mb-4">
              Pour quelles démarches avez-vous besoin d&apos;une traduction ?
            </h2>
            <p className="text-navy-600 text-lg max-w-2xl mx-auto">
              Toutes ces procédures exigent des traductions assermentées reconnues par les
              autorités françaises.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {useCases.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 border border-navy-100 shadow-sm"
              >
                <h3 className="text-lg font-heading font-bold text-navy-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-navy-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-navy-50/50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 mb-4">
              Pourquoi choisir ATJ pour votre dossier d&apos;immigration ?
            </h2>
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

      {/* Documents */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 mb-6">
                Documents pris en charge
              </h2>
              <p className="text-navy-600 text-lg mb-8">
                Nous traduisons tous les documents nécessaires à vos démarches d&apos;immigration,
                quelle que soit la langue d&apos;origine.
              </p>
              <Link
                href="/traduction-documents-officiels"
                className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-semibold"
              >
                Voir tous les types de documents <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {documents.map((doc) => (
                <div
                  key={doc}
                  className="flex items-center gap-3 bg-navy-50 rounded-xl px-5 py-3.5"
                >
                  <CheckCircle className="w-4 h-4 text-gold-500 shrink-0" />
                  <span className="text-navy-700 text-sm">{doc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-navy-50/50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 mb-4">
              Comment ça fonctionne ?
            </h2>
            <p className="text-navy-600 text-lg">Un processus simple en 4 étapes.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((s) => (
              <div key={s.step} className="relative">
                <div className="text-5xl font-heading font-bold text-gold-200 mb-4">{s.step}</div>
                <h3 className="text-lg font-heading font-bold text-navy-900 mb-2">{s.title}</h3>
                <p className="text-navy-600 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-navy-800 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-white mb-12 text-center">
            Questions fréquentes
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "L'OFPRA accepte-t-il les traductions numériques ?",
                a: "L'OFPRA accepte les traductions assermentées en version numérique (PDF signé) dans la plupart des cas. Selon la procédure, un envoi postal de l'original certifié peut être demandé. Nous vous guidons selon votre situation.",
              },
              {
                q: "Combien de temps faut-il pour une traduction d'acte de naissance ?",
                a: "Un acte de naissance standard est généralement traduit en 1 à 2 jours ouvrables. En service express, nous pouvons livrer sous 24 à 48h.",
              },
              {
                q: "Ma préfecture demande une traduction assermentée, est-ce bien ce que vous faites ?",
                a: "Oui. Toutes nos traductions sont réalisées par des traducteurs inscrits sur la liste officielle des experts judiciaires de la Cour d'appel. Elles portent le cachet, la signature et le numéro d'inscription du traducteur, et sont acceptées par toutes les préfectures françaises.",
              },
              {
                q: "Je parle couramment la langue, puis-je faire la traduction moi-même ?",
                a: "Non. Même si vous maîtrisez la langue, les administrations françaises exigent une traduction réalisée par un traducteur assermenté (expert judiciaire). Une traduction faite par vos soins ou par un particulier ne sera pas acceptée.",
              },
            ].map((faq) => (
              <div
                key={faq.q}
                className="bg-navy-700/50 rounded-xl p-6 border border-navy-600/30"
              >
                <h3 className="text-white font-semibold mb-3">{faq.q}</h3>
                <p className="text-navy-300 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-semibold text-sm"
            >
              Voir toutes nos questions fréquentes <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-gold-50 to-navy-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-navy-900 mb-6">
            Besoin d&apos;une traduction pour votre dossier d&apos;immigration ?
          </h2>
          <p className="text-navy-600 text-lg mb-8">
            Envoyez-nous vos documents et recevez un devis gratuit sous 2h. Nos traducteurs
            assermentés prennent en charge votre dossier avec rapidité et précision.
          </p>
          <Link
            href="/devis"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-gold-500/25"
          >
            Demander un devis gratuit <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
