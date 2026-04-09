import Link from "next/link";
import Image from "next/image";
import {
  Shield,
  Clock,
  Globe,
  FileCheck,
  Scale,
  Award,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  FileText,
  Languages,
} from "lucide-react";
import { HeroForm } from "@/components/HeroForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ATJ - Agence de Traduction Juridique | Traducteurs Assermentés Paris",
  description:
    "ATJ, agence de traduction juridique à Paris. Traducteurs assermentés près la Cour d'appel. Traduction certifiée de contrats, actes notariés, documents officiels en 30+ langues. Devis gratuit.",
  alternates: { canonical: "https://agence-traduction-juridique.fr" },
};

const services = [
  {
    icon: Shield,
    title: "Traduction Assermentée",
    description:
      "Traductions réalisées par des traducteurs assermentés auprès de la Cour d'appel. Valeur légale garantie pour toutes vos démarches administratives et judiciaires.",
    href: "/traduction-assermentee",
    image: "/images/service-assermentee.webp",
  },
  {
    icon: FileCheck,
    title: "Traduction Certifiée",
    description:
      "Traductions certifiées conformes à l'original avec cachet et signature du traducteur. Acceptées par les administrations et organismes officiels.",
    href: "/traduction-certifiee",
    image: "/images/service-certifiee.webp",
  },
  {
    icon: Scale,
    title: "Documents Officiels",
    description:
      "Traduction de tous vos documents officiels : actes de naissance, permis de conduire, diplômes, jugements, contrats et actes notariés.",
    href: "/traduction-documents-officiels",
    image: "/images/legal-documents.webp",
  },
];

const stats = [
  { value: "15 000+", label: "Documents traduits" },
  { value: "30+", label: "Langues disponibles" },
  { value: "98%", label: "Clients satisfaits" },
  { value: "48h", label: "Délai moyen" },
];

const trustSignals = [
  "Traducteurs assermentés près la Cour d'appel",
  "Valeur légale reconnue en France et à l'étranger",
  "Confidentialité absolue de vos documents",
  "Livraison express possible sous 24h",
  "Devis gratuit et sans engagement",
  "Service client disponible 6j/7",
];

const documents = [
  "Actes de naissance",
  "Actes de mariage",
  "Diplômes et relevés de notes",
  "Permis de conduire",
  "Casiers judiciaires",
  "Contrats commerciaux",
  "Statuts de société & Kbis",
  "Jugements et décisions",
  "Testaments",
  "Procurations",
  "Brevets",
  "Actes notariés",
];

const testimonials = [
  {
    name: "Maître Sophie L.",
    role: "Avocate, Cabinet Parisien",
    content:
      "Un service irréprochable. Les traductions sont toujours précises et livrées dans les délais. ATJ est devenu notre partenaire privilégié pour toutes nos traductions juridiques.",
    rating: 5,
  },
  {
    name: "Pierre M.",
    role: "Directeur Juridique, Groupe International",
    content:
      "Nous travaillons avec ATJ depuis 3 ans pour nos contrats internationaux. La qualité de la traduction juridique est exceptionnelle et le vocabulaire juridique est toujours maîtrisé.",
    rating: 5,
  },
  {
    name: "Claire D.",
    role: "Notaire",
    content:
      "Pour la traduction de mes actes notariés, je fais confiance à ATJ. La rigueur et le professionnalisme de leurs traducteurs assermentés sont remarquables.",
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "ATJ - Agence de Traduction Juridique",
            description:
              "Cabinet de traduction juridique à Paris. Traducteurs assermentés, traductions certifiées conformes de documents officiels.",
            url: "https://agence-traduction-juridique.fr",
            telephone: "+33675671260",
            email: "contact@agence-traduction-juridique.fr",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Paris",
              addressCountry: "FR",
            },
            areaServed: "FR",
            serviceType: [
              "Traduction juridique",
              "Traduction assermentée",
              "Traduction certifiée",
            ],
            priceRange: "€€",
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.9",
              reviewCount: "127",
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 overflow-hidden">
        <Image
          src="/images/hero-bg.webp"
          alt=""
          fill
          className="object-cover opacity-15 mix-blend-luminosity"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 via-navy-900/80 to-navy-900/60" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: text */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full mb-8">
                <Award className="w-4 h-4 text-gold-400" />
                <span className="text-gold-300 text-sm font-medium">
                  Traducteurs assermentés près la Cour d&apos;appel
                </span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6">
                Votre agence de{" "}
                <span className="text-gold-400">traduction juridique</span> de confiance
              </h1>
              <p className="text-lg sm:text-xl text-navy-200 leading-relaxed mb-10">
                Des traductions juridiques précises et certifiées, réalisées par des traducteurs
                assermentés experts en droit. Contrats, actes notariés, documents officiels &mdash; en
                plus de 30 langues.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/devis"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-gold-500/25 hover:shadow-gold-500/40"
                >
                  Demander un devis gratuit
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/tarifs"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-navy-500 text-white hover:bg-navy-700 font-semibold rounded-lg transition-colors"
                >
                  Voir nos tarifs
                </Link>
              </div>
            </div>
            {/* Right: quick quote form */}
            <div>
              <HeroForm />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-navy-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-heading font-bold text-navy-800">
                  {stat.value}
                </p>
                <p className="text-navy-500 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-navy-50/50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 mb-4">
              Nos services de traduction juridique
            </h2>
            <p className="text-navy-600 text-lg max-w-2xl mx-auto">
              Une expertise complète en traduction légale pour répondre à tous vos besoins
              professionnels et administratifs.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-navy-100 hover:shadow-xl hover:border-gold-200 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-12 h-12 bg-navy-800/90 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:bg-gold-500 transition-colors">
                    <service.icon className="w-6 h-6 text-gold-400 group-hover:text-white" />
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-heading font-bold text-navy-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-navy-600 text-sm leading-relaxed mb-4">{service.description}</p>
                  <span className="inline-flex items-center gap-1 text-gold-600 font-semibold text-sm group-hover:gap-2 transition-all">
                    En savoir plus <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why ATJ */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 mb-6">
                Pourquoi choisir ATJ pour vos traductions juridiques ?
              </h2>
              <p className="text-navy-600 text-lg mb-8">
                Notre cabinet de traduction juridique réunit des traducteurs assermentés et
                spécialistes du droit. Nous garantissons des traductions d&apos;une précision
                irréprochable, avec la valeur légale requise pour toutes vos démarches.
              </p>
              <ul className="space-y-4">
                {trustSignals.map((signal) => (
                  <li key={signal} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-gold-500 mt-0.5 shrink-0" />
                    <span className="text-navy-700">{signal}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link
                  href="/devis"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-navy-800 hover:bg-navy-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Obtenir un devis gratuit
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/team-office.webp"
                  alt="Équipe de traducteurs juridiques ATJ au travail"
                  width={800}
                  height={533}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-4 right-4 grid grid-cols-4 gap-3">
                <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                  <p className="font-heading font-bold text-navy-800 text-xl">30+</p>
                  <p className="text-navy-500 text-xs">Langues</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                  <p className="font-heading font-bold text-navy-800 text-xl">24h</p>
                  <p className="text-navy-500 text-xs">Express</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                  <p className="font-heading font-bold text-navy-800 text-xl">50+</p>
                  <p className="text-navy-500 text-xs">Traducteurs</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg text-center">
                  <p className="font-heading font-bold text-navy-800 text-xl">15k+</p>
                  <p className="text-navy-500 text-xs">Projets</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="bg-navy-800 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
              Documents que nous traduisons
            </h2>
            <p className="text-navy-300 text-lg max-w-2xl mx-auto">
              Nous assurons la traduction assermentée et certifiée de tous types de documents
              officiels et juridiques.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {documents.map((doc) => (
              <div
                key={doc}
                className="flex items-center gap-3 bg-navy-700/50 rounded-xl px-5 py-4 border border-navy-600/30"
              >
                <FileCheck className="w-5 h-5 text-gold-400 shrink-0" />
                <span className="text-navy-100 text-sm">{doc}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/traduction-documents-officiels"
              className="inline-flex items-center gap-2 text-gold-400 hover:text-gold-300 font-semibold transition-colors"
            >
              Voir tous les documents <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 mb-4">
              La confiance de nos clients
            </h2>
            <p className="text-navy-600 text-lg">
              Avocats, notaires, entreprises&hellip; ils nous font confiance pour leurs traductions
              juridiques.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="bg-white rounded-2xl p-8 shadow-sm border border-navy-100"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-400 fill-gold-400" />
                  ))}
                </div>
                <p className="text-navy-700 text-sm leading-relaxed mb-6 italic">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div>
                  <p className="font-semibold text-navy-900">{testimonial.name}</p>
                  <p className="text-navy-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages */}
      <section className="bg-navy-50/50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 mb-4">
              Traduction juridique en plus de 30 langues
            </h2>
            <p className="text-navy-600 text-lg max-w-2xl mx-auto">
              Nos traducteurs assermentés couvrent les principales combinaisons linguistiques pour
              vos documents juridiques.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {[
              "Anglais", "Espagnol", "Allemand", "Italien", "Portugais", "Arabe",
              "Chinois", "Russe", "Turc", "Japonais", "Néerlandais", "Polonais",
              "Roumain", "Coréen", "Hébreu",
            ].map((lang) => (
              <span
                key={lang}
                className="px-5 py-2.5 bg-white border border-navy-200 rounded-full text-navy-700 text-sm font-medium hover:border-gold-300 hover:bg-gold-50 transition-colors"
              >
                Français ↔ {lang}
              </span>
            ))}
          </div>
          <div className="text-center">
            <Link
              href="/langues"
              className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-semibold transition-colors"
            >
              <Languages className="w-5 h-5" />
              Voir toutes les langues disponibles
            </Link>
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 mb-3">
                Nos guides pratiques
              </h2>
              <p className="text-navy-600 text-lg max-w-xl">
                Tout ce que vous devez savoir sur la traduction juridique assermentée.
              </p>
            </div>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-semibold shrink-0 transition-colors"
            >
              Voir tous les guides <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { href: "/blog/difference-traduction-assermentee-certifiee", cat: "Guide", title: "Assermentée ou certifiée : quelle différence ?", desc: "Comprendre les deux types de traduction pour ne pas se tromper de service." },
              { href: "/blog/traduction-acte-de-naissance", cat: "État civil", title: "Traduction d'un acte de naissance", desc: "Naturalisation, mariage, immigration : quand et comment faire traduire votre acte." },
              { href: "/blog/prix-traduction-assermentee", cat: "Tarifs", title: "Prix d'une traduction assermentée", desc: "Tarifs moyens par type de document et par langue en 2026." },
            ].map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group bg-white rounded-2xl p-8 border border-navy-100 shadow-sm hover:shadow-xl hover:border-gold-200 transition-all duration-300 flex flex-col"
              >
                <span className="inline-block px-3 py-1 bg-gold-50 text-gold-700 text-xs font-semibold rounded-full mb-4">{article.cat}</span>
                <h3 className="text-lg font-heading font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-navy-600 text-sm leading-relaxed flex-1 mb-4">{article.desc}</p>
                <span className="inline-flex items-center gap-1 text-gold-600 font-semibold text-sm group-hover:gap-2 transition-all">
                  Lire le guide <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-navy-800 to-navy-900 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-6">
            Besoin d&apos;une traduction juridique ?
          </h2>
          <p className="text-navy-200 text-lg mb-10 max-w-2xl mx-auto">
            Obtenez un devis gratuit et sans engagement en quelques minutes. Nos traducteurs
            assermentés sont à votre service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/devis"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-gold-500/25"
            >
              Devis gratuit en ligne <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-navy-500 text-white hover:bg-navy-700 font-semibold rounded-lg transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
