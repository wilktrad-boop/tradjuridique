import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Shield,
  CheckCircle,
  ArrowRight,
  FileCheck,
  Clock,
  Lock,
  Users,
  Briefcase,
  RefreshCw,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Traduction Juridique pour Cabinets d'Avocats et Notaires | ATJ",
  description:
    "Service de traduction juridique dédié aux cabinets d'avocats, notaires et entreprises. Traducteurs assermentés, confidentialité absolue, tarifs volume. Devis gratuit.",
  alternates: {
    canonical:
      "https://www.agence-traduction-juridique.fr/traduction-juridique-cabinets",
  },
};

const features = [
  {
    icon: Lock,
    title: "Confidentialité absolue",
    description:
      "Tous nos traducteurs sont soumis au secret professionnel. Vos dossiers sensibles sont traités avec la même discrétion que vos obligations déontologiques l'exigent.",
  },
  {
    icon: FileCheck,
    title: "Traducteurs assermentés experts",
    description:
      "Nos traducteurs juridiques sont inscrits auprès de la Cour d'appel et spécialisés par domaine : droit des sociétés, droit pénal, droit de la famille, propriété intellectuelle.",
  },
  {
    icon: Clock,
    title: "Délais prioritaires",
    description:
      "Nous savons qu'en droit, les délais sont contraignants. Service express 48h et urgent 24h disponibles, avec engagement sur les délais de livraison.",
  },
  {
    icon: RefreshCw,
    title: "Suivi de dossier",
    description:
      "Un interlocuteur dédié pour chaque cabinet partenaire. Suivi en temps réel de vos traductions en cours, historique des dossiers disponible à la demande.",
  },
  {
    icon: Users,
    title: "Tarifs volume",
    description:
      "Conditions tarifaires préférentielles pour les partenaires réguliers. Facturation mensuelle consolidée disponible pour les cabinets avec besoins récurrents.",
  },
  {
    icon: Briefcase,
    title: "Toutes les spécialités",
    description:
      "Droit des affaires, droit de la famille, droit pénal, successions internationales, procédures arbitrales, brevets et marques : nous couvrons tous les domaines.",
  },
];

const services = [
  {
    title: "Droit des sociétés et des affaires",
    items: [
      "Statuts et actes constitutifs",
      "Procès-verbaux d'assemblée",
      "Contrats commerciaux internationaux",
      "Kbis et registres du commerce",
      "Rapports annuels et bilans",
      "Lettres d'intention (LOI) et NDA",
    ],
  },
  {
    title: "Droit de la famille et successions",
    items: [
      "Jugements de divorce étrangers",
      "Actes d'état civil (naissance, mariage)",
      "Testaments et actes de succession",
      "Conventions matrimoniales",
      "Actes notariés étrangers",
      "Jugements d'adoption",
    ],
  },
  {
    title: "Droit pénal et procédures",
    items: [
      "Jugements et arrêts étrangers",
      "Commissions rogatoires internationales",
      "Casiers judiciaires",
      "Actes de procédure (assignations, mémoires)",
      "Décisions arbitrales",
      "Déclarations sous serment",
    ],
  },
  {
    title: "Propriété intellectuelle",
    items: [
      "Brevets nationaux et internationaux",
      "Marques et certificats d'enregistrement",
      "Contrats de licence et de cession",
      "Rapports d'expertise technique",
      "Décisions de l'EUIPO et de l'OMPI",
      "Agreements de transfert de technologie",
    ],
  },
];

export default function TraductionCabinetsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Traduction juridique pour cabinets d'avocats et notaires",
            provider: {
              "@type": "ProfessionalService",
              name: "ATJ - Agence de Traduction Juridique",
            },
            description:
              "Service de traduction assermentée dédié aux cabinets d'avocats, notaires et entreprises avec confidentialité absolue, délais prioritaires et tarifs volume.",
            areaServed: "FR",
            serviceType: "Traduction juridique professionnelle",
          }),
        }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 py-20 lg:py-28 overflow-hidden">
        <Image
          src="/images/contact-office.webp"
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
                Cabinets d&apos;avocats &amp; notaires
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white leading-tight mb-6">
              Traduction juridique{" "}
              <span className="text-gold-400">pour les professionnels du droit</span>
            </h1>
            <p className="text-lg text-navy-200 leading-relaxed mb-8">
              Un service de traduction assermentée pensé pour les cabinets d&apos;avocats, les études
              notariales et les départements juridiques d&apos;entreprises. Confidentialité, délais
              maîtrisés et expertise sectorielle.
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
              Ce que nous apportons aux professionnels du droit
            </h2>
            <p className="text-navy-600 text-lg max-w-2xl mx-auto">
              Notre service est conçu pour répondre aux exigences spécifiques des métiers du droit :
              rigueur terminologique, délais stricts et confidentialité sans compromis.
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

      {/* Services by domain */}
      <section className="bg-navy-50/50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 mb-4">
              Documents traduits par domaine
            </h2>
            <p className="text-navy-600 text-lg max-w-2xl mx-auto">
              Nos traducteurs sont spécialisés par branche du droit pour garantir une précision
              terminologique irréprochable.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="bg-white rounded-2xl p-8 border border-navy-100 shadow-sm"
              >
                <h3 className="text-lg font-heading font-bold text-navy-900 mb-5">
                  {service.title}
                </h3>
                <ul className="space-y-2.5">
                  {service.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5">
                      <CheckCircle className="w-4 h-4 text-gold-500 shrink-0" />
                      <span className="text-navy-700 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/traduction-documents-officiels"
              className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-semibold"
            >
              Voir la liste complète des documents <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Tarifs */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 mb-4">
              Tarification adaptée aux professionnels
            </h2>
            <p className="text-navy-600 text-lg">
              Des conditions tarifaires pensées pour les besoins réguliers des cabinets et études.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                label: "Standard",
                price: "45 €",
                unit: "par page",
                delay: "2–5 jours",
                items: ["Traduction assermentée", "Cachet officiel", "Livraison numérique"],
              },
              {
                label: "Express",
                price: "68 €",
                unit: "par page",
                delay: "48h",
                featured: true,
                items: [
                  "Traduction assermentée",
                  "Cachet officiel",
                  "Livraison numérique prioritaire",
                ],
              },
              {
                label: "Urgent",
                price: "90 €",
                unit: "par page",
                delay: "24h",
                items: ["Traduction assermentée", "Cachet officiel", "Livraison numérique urgente"],
              },
            ].map((plan) => (
              <div
                key={plan.label}
                className={`rounded-2xl p-8 border ${
                  plan.featured
                    ? "bg-navy-800 border-navy-700 shadow-xl"
                    : "bg-white border-navy-100 shadow-sm"
                }`}
              >
                <p
                  className={`text-sm font-semibold uppercase tracking-wide mb-2 ${
                    plan.featured ? "text-gold-400" : "text-navy-400"
                  }`}
                >
                  {plan.label}
                </p>
                <div className="flex items-end gap-1 mb-1">
                  <span
                    className={`text-4xl font-heading font-bold ${
                      plan.featured ? "text-white" : "text-navy-900"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm mb-1 ${plan.featured ? "text-navy-300" : "text-navy-500"}`}
                  >
                    {plan.unit}
                  </span>
                </div>
                <p
                  className={`text-xs italic mb-2 ${plan.featured ? "text-navy-400" : "text-navy-400"}`}
                >
                  Selon la paire de langues et la complexité du document
                </p>
                <p
                  className={`text-sm mb-6 ${plan.featured ? "text-navy-300" : "text-navy-500"}`}
                >
                  Délai : {plan.delay}
                </p>
                <ul className="space-y-2.5 mb-8">
                  {plan.items.map((item) => (
                    <li key={item} className="flex items-center gap-2">
                      <CheckCircle
                        className={`w-4 h-4 shrink-0 ${
                          plan.featured ? "text-gold-400" : "text-gold-500"
                        }`}
                      />
                      <span
                        className={`text-sm ${plan.featured ? "text-navy-200" : "text-navy-700"}`}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/devis"
                  className={`block text-center px-6 py-3 rounded-lg font-semibold text-sm transition-all ${
                    plan.featured
                      ? "bg-gold-500 hover:bg-gold-600 text-white shadow-lg shadow-gold-500/25"
                      : "bg-navy-50 hover:bg-navy-100 text-navy-800"
                  }`}
                >
                  Demander un devis
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-navy-500 text-sm mt-8">
            Tarifs dégressifs pour les partenaires avec besoins récurrents.{" "}
            <Link href="/contact" className="text-gold-600 hover:text-gold-700 font-semibold">
              Contactez-nous pour un devis volume.
            </Link>
          </p>
        </div>
      </section>

      {/* Trust */}
      <section className="bg-navy-800 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-white mb-12 text-center">
            Ce que nos partenaires professionnels apprécient
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                quote:
                  "ATJ est devenu notre partenaire de confiance pour toutes nos traductions de dossiers de successions internationales. La rigueur terminologique et la discrétion sont au rendez-vous.",
                author: "Cabinet notarial, Paris 8e",
              },
              {
                quote:
                  "Nous apprécions particulièrement la réactivité et le respect des délais. En contentieux international, chaque heure compte, et ATJ ne nous a jamais déçus.",
                author: "Cabinet d'avocats, Paris",
              },
              {
                quote:
                  "La qualité des traductions en droit des sociétés est irréprochable. Les traducteurs maîtrisent parfaitement la terminologie spécifique à nos opérations.",
                author: "Direction juridique, groupe industriel",
              },
              {
                quote:
                  "La facturation mensuelle consolidée simplifie notre comptabilité. Un vrai service B2B, pas une prestation grand public.",
                author: "Office notarial, Lyon",
              },
            ].map((testimonial) => (
              <div
                key={testimonial.author}
                className="bg-navy-700/50 rounded-xl p-6 border border-navy-600/30"
              >
                <p className="text-navy-200 text-sm leading-relaxed mb-4 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <p className="text-gold-400 text-sm font-semibold">{testimonial.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-gold-50 to-navy-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-navy-900 mb-6">
            Devenez partenaire ATJ
          </h2>
          <p className="text-navy-600 text-lg mb-8">
            Transmettez-nous votre premier dossier et découvrez un service de traduction juridique
            à la hauteur des exigences de votre profession.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/devis"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-gold-500/25"
            >
              Soumettre un dossier <ArrowRight className="w-5 h-5" />
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
