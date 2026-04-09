import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Shield,
  CheckCircle,
  ArrowRight,
  FileCheck,
  Scale,
  Award,
  Clock,
  Globe,
  AlertCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Traduction Assermentée | Traducteur Assermenté près la Cour d'appel",
  description:
    "Service de traduction assermentée par des traducteurs inscrits auprès de la Cour d'appel. Traduction à valeur légale pour vos démarches administratives et judiciaires. Devis gratuit.",
  alternates: { canonical: "https://www.agence-traduction-juridique.fr/traduction-assermentee" },
};

const features = [
  {
    icon: Scale,
    title: "Valeur légale",
    description:
      "Nos traductions assermentées ont une valeur légale officielle, acceptées par toutes les administrations, tribunaux et organismes officiels en France et à l'étranger.",
  },
  {
    icon: Award,
    title: "Traducteurs assermentés",
    description:
      "Chaque traduction est réalisée par un traducteur assermenté inscrit sur la liste des experts de la Cour d'appel, garantissant une qualité et une conformité juridique irréprochables.",
  },
  {
    icon: FileCheck,
    title: "Cachet et signature",
    description:
      "Toutes nos traductions assermentées portent le cachet officiel, la signature et le numéro d'inscription du traducteur, conformes aux exigences légales.",
  },
  {
    icon: Clock,
    title: "Délais rapides",
    description:
      "Un service rapide avec la possibilité de livraison express sous 24h pour les urgences, sans compromis sur la qualité.",
  },
  {
    icon: Globe,
    title: "30+ langues",
    description:
      "Nos traducteurs assermentés couvrent plus de 30 langues pour toutes les combinaisons linguistiques.",
  },
  {
    icon: Shield,
    title: "Confidentialité",
    description:
      "Vos documents sont traités dans la plus stricte confidentialité, conformément au secret professionnel qui lie nos traducteurs assermentés.",
  },
];

const documents = [
  "Actes d'état civil (naissance, mariage, décès)",
  "Casiers judiciaires",
  "Diplômes et relevés de notes",
  "Permis de conduire",
  "Jugements et décisions de justice",
  "Contrats et avenants",
  "Actes notariés",
  "Statuts de société et documents corporatifs",
  "Brevets et marques",
  "Procurations et mandats",
  "Testaments et successions",
  "Documents d'immigration",
];

const steps = [
  {
    step: "01",
    title: "Envoyez vos documents",
    description:
      "Transmettez-nous vos documents à traduire par email ou via notre formulaire de devis en ligne.",
  },
  {
    step: "02",
    title: "Devis gratuit",
    description:
      "Recevez un devis détaillé, gratuit et sans engagement, avec un délai de livraison précis.",
  },
  {
    step: "03",
    title: "Traduction assermentée",
    description:
      "Un traducteur assermenté spécialiste de votre domaine réalise la traduction de vos documents.",
  },
  {
    step: "04",
    title: "Livraison",
    description:
      "Recevez votre traduction assermentée certifiée conforme, par voie numérique et/ou postale.",
  },
];

export default function TraductionAssermenteePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Traduction Assermentée",
            provider: {
              "@type": "ProfessionalService",
              name: "ATJ - Agence de Traduction Juridique",
            },
            description:
              "Service de traduction assermentée par des traducteurs inscrits auprès de la Cour d'appel. Valeur légale pour toutes démarches.",
            areaServed: "FR",
            serviceType: "Traduction assermentée",
          }),
        }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 py-20 lg:py-28 overflow-hidden">
        <Image
          src="/images/service-assermentee.webp"
          alt=""
          fill
          className="object-cover opacity-10 mix-blend-luminosity"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 to-navy-900/70" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full mb-6">
              <Shield className="w-4 h-4 text-gold-400" />
              <span className="text-gold-300 text-sm font-medium">
                Valeur légale officielle
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white leading-tight mb-6">
              Traduction <span className="text-gold-400">assermentée</span> par des experts
              judiciaires
            </h1>
            <p className="text-lg text-navy-200 leading-relaxed mb-8">
              Nos traducteurs assermentés, inscrits auprès de la Cour d&apos;appel, réalisent vos
              traductions officielles avec la valeur légale requise pour toutes vos démarches
              administratives et judiciaires.
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
              <strong>Qu&apos;est-ce qu&apos;une traduction assermentée ?</strong> C&apos;est une traduction
              réalisée par un traducteur inscrit sur la liste officielle des experts judiciaires
              de la Cour d&apos;appel, portant son cachet et sa signature, lui conférant une valeur
              légale.
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 mb-4">
              Nos garanties pour votre traduction assermentée
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="bg-white rounded-2xl p-8 border border-navy-100 shadow-sm">
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

      {/* Process */}
      <section className="bg-navy-50/50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 mb-4">
              Comment obtenir votre traduction assermentée
            </h2>
            <p className="text-navy-600 text-lg">
              Un processus simple et rapide en 4 étapes.
            </p>
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

      {/* Documents */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 mb-6">
                Documents acceptés pour la traduction assermentée
              </h2>
              <p className="text-navy-600 text-lg mb-8">
                Nous assurons la traduction assermentée de tous types de documents officiels et
                juridiques, quelle que soit la langue source ou cible.
              </p>
              <Link
                href="/traduction-documents-officiels"
                className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-semibold"
              >
                En savoir plus sur nos types de documents <ArrowRight className="w-5 h-5" />
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

      {/* FAQ */}
      <section className="bg-navy-800 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-white mb-12 text-center">
            Questions fréquentes sur la traduction assermentée
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Quelle est la différence entre traduction assermentée et traduction certifiée ?",
                a: "La traduction assermentée est réalisée par un traducteur inscrit auprès d'une Cour d'appel et a une valeur légale officielle. La traduction certifiée conforme atteste de la fidélité de la traduction à l'original, mais n'a pas forcément de valeur juridique.",
              },
              {
                q: "Quel est le délai pour une traduction assermentée ?",
                a: "Le délai standard est de 2 à 5 jours ouvrables selon le volume et la complexité du document. Nous proposons également un service express sous 24h pour les urgences.",
              },
              {
                q: "Ma traduction assermentée sera-t-elle acceptée à l'étranger ?",
                a: "Nos traductions assermentées sont généralement reconnues en France et dans de nombreux pays. Pour certains pays, une apostille peut être nécessaire. Nous vous accompagnons dans ces démarches.",
              },
              {
                q: "Combien coûte une traduction assermentée ?",
                a: "Le prix dépend de la langue, du volume et de la complexité du document. Nous proposons des tarifs compétitifs à partir de 30€ par page. Demandez un devis gratuit pour connaître le prix exact.",
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-navy-700/50 rounded-xl p-6 border border-navy-600/30">
                <h3 className="text-white font-semibold mb-3">{faq.q}</h3>
                <p className="text-navy-300 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides */}
      <section className="bg-navy-50/50 py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy-900 mb-3">
              Nos guides sur la traduction assermentée
            </h2>
            <p className="text-navy-600">Tout ce que vous devez savoir avant de commander.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { href: "/blog/difference-traduction-assermentee-certifiee", title: "Assermentée ou certifiée : quelle différence ?", desc: "Comprendre les deux types de traduction pour choisir le bon service." },
              { href: "/blog/prix-traduction-assermentee", title: "Prix d'une traduction assermentée en 2026", desc: "Tarifs moyens par document et par langue, facteurs qui influencent le coût." },
              { href: "/blog/traducteur-assermente-cour-appel-liste", title: "Comment trouver un traducteur assermenté ?", desc: "Listes officielles, vérifications et critères de choix." },
            ].map((guide) => (
              <Link
                key={guide.href}
                href={guide.href}
                className="group bg-white rounded-2xl p-6 border border-navy-100 shadow-sm hover:shadow-lg hover:border-gold-200 transition-all"
              >
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-gold-50 to-navy-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-navy-900 mb-6">
            Besoin d&apos;une traduction assermentée ?
          </h2>
          <p className="text-navy-600 text-lg mb-8">
            Obtenez votre devis gratuit en quelques minutes et recevez votre traduction
            assermentée dans les meilleurs délais.
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
