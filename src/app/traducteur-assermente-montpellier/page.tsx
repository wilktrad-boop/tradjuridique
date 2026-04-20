import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  MapPin,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  Award,
  Mail,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Traducteur Assermenté Montpellier | Traduction Officielle 34 | ATJ",
  description:
    "Traducteur assermenté à Montpellier inscrit près la Cour d'appel de Montpellier. Traduction officielle pour préfecture de l'Hérault, tribunal, OFPRA. Devis gratuit.",
  alternates: {
    canonical:
      "https://www.agence-traduction-juridique.fr/traducteur-assermente-montpellier",
  },
};

const features = [
  {
    icon: Award,
    title: "Inscrits près la Cour d'appel de Montpellier",
    description:
      "Nos traducteurs montpelliérains figurent sur la liste officielle des experts judiciaires de la Cour d'appel de Montpellier, couvrant toute la région Occitanie Est.",
  },
  {
    icon: Clock,
    title: "Livraison express",
    description:
      "Réponse sous 2h, livraison numérique sous 24 à 48h. Service urgent disponible pour les dossiers pressés, particulièrement adaptés aux délais des démarches préfectorales.",
  },
  {
    icon: Shield,
    title: "Traductions reconnues",
    description:
      "Acceptées par la préfecture de l'Hérault, le Tribunal judiciaire de Montpellier, les consulats locaux et toutes les administrations de la région Occitanie.",
  },
  {
    icon: MapPin,
    title: "Couverture Occitanie Est",
    description:
      "Montpellier et toute la région : Hérault, Gard, Pyrénées-Orientales, Lozère, Aveyron, et la côte méditerranéenne de Perpignan à Nîmes.",
  },
  {
    icon: Star,
    title: "30+ langues disponibles",
    description:
      "Arabe, espagnol, anglais, portugais, turc, berbère, roumain, chinois et bien d'autres — toutes les langues présentes dans la région montpelliéraine.",
  },
  {
    icon: Shield,
    title: "Confidentialité garantie",
    description:
      "Vos documents personnels sont traités sous strict secret professionnel. Aucun document n'est partagé avec des tiers.",
  },
];

const administrations = [
  "Préfecture de l'Hérault (34)",
  "Préfecture du Gard (30)",
  "Préfecture des Pyrénées-Orientales (66)",
  "Préfecture de la Lozère (48)",
  "Tribunal judiciaire de Montpellier",
  "Cour d'appel de Montpellier",
  "Tribunal judiciaire de Nîmes",
  "Tribunal judiciaire de Perpignan",
  "OFPRA (correspondances régionales)",
  "Consulats à Montpellier",
  "Universités de Montpellier (UM, Paul-Valéry)",
  "Mairies de l'agglomération",
];

const zones = [
  "Montpellier Centre", "Montpellier Nord/Sud", "Castelnau-le-Lez",
  "Lattes", "Pérols", "Palavas-les-Flots",
  "Lunel", "Sète", "Béziers",
  "Nîmes", "Perpignan", "Narbonne",
  "Mèze", "Agde", "Millau",
];

export default function TraducteurMontpellierPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "ATJ - Agence de Traduction Juridique Montpellier",
            "@id": "https://www.agence-traduction-juridique.fr",
            url: "https://www.agence-traduction-juridique.fr",
            description:
              "Traducteurs assermentés à Montpellier inscrits près la Cour d'appel de Montpellier. Traduction officielle pour préfecture de l'Hérault, tribunal, OFPRA.",
            areaServed: [
              { "@type": "City", name: "Montpellier" },
              { "@type": "AdministrativeArea", name: "Occitanie" },
            ],
            serviceType: "Traduction assermentée",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Montpellier",
              addressRegion: "Occitanie",
              addressCountry: "FR",
            },
          }),
        }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 py-20 lg:py-28 overflow-hidden">
        <Image
          src="/images/hero-legal.webp"
          alt=""
          fill
          className="object-cover opacity-10 mix-blend-luminosity"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 to-navy-900/70" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-gold-400" />
              <span className="text-gold-300 text-sm font-medium">Montpellier &amp; Occitanie</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white leading-tight mb-6">
              Traducteur assermenté à{" "}
              <span className="text-gold-400">Montpellier</span> — inscrit près la Cour d&apos;appel
            </h1>
            <p className="text-lg text-navy-200 leading-relaxed mb-8">
              Nos traducteurs assermentés montpelliérains réalisent vos traductions officielles
              pour toutes vos démarches en Occitanie : préfecture de l&apos;Hérault, tribunal,
              OFPRA, consulat. Devis gratuit, réponse sous 2h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/devis"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-gold-500/25"
              >
                Demander un devis gratuit <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-lg transition-all border border-white/20"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="bg-navy-900 border-b border-navy-700">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-navy-300">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-gold-400" />
              Inscrits Cour d&apos;appel de Montpellier
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-gold-400" />
              Acceptés préfecture de l&apos;Hérault
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-gold-400" />
              Devis gratuit sous 2h
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-gold-400" />
              Livraison sous 24–48h
            </span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 mb-4">
              Votre traducteur assermenté à Montpellier
            </h2>
            <p className="text-navy-600 text-lg max-w-2xl mx-auto">
              Un service reconnu par toutes les administrations de la région Occitanie,
              avec la réactivité que vos démarches exigent.
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

      {/* Administrations */}
      <section className="bg-navy-50/50 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 mb-6">
                Administrations acceptant nos traductions
              </h2>
              <p className="text-navy-600 text-lg mb-8">
                Nos traductions assermentées sont reconnues par l&apos;ensemble des administrations
                de la région Occitanie et des organismes officiels montpelliérains.
              </p>
              <Link
                href="/traduction-assermentee"
                className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-semibold"
              >
                En savoir plus sur la traduction assermentée <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {administrations.map((admin) => (
                <div
                  key={admin}
                  className="flex items-center gap-3 bg-white rounded-xl px-5 py-3.5 border border-navy-100"
                >
                  <CheckCircle className="w-4 h-4 text-gold-500 shrink-0" />
                  <span className="text-navy-700 text-sm">{admin}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Zones */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 mb-4">
              Zones desservies
            </h2>
            <p className="text-navy-600 text-lg">
              Nous intervenons dans tout Montpellier et la région Occitanie.
              Livraison numérique partout, remise en main propre sur rendez-vous à Montpellier.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {zones.map((zone) => (
              <div
                key={zone}
                className="flex items-center gap-2 bg-navy-50 rounded-xl px-4 py-3"
              >
                <MapPin className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                <span className="text-navy-700 text-xs font-medium">{zone}</span>
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
                q: "Comment trouver un traducteur assermenté à Montpellier ?",
                a: "Un traducteur assermenté à Montpellier doit être inscrit sur la liste des experts judiciaires de la Cour d'appel de Montpellier. Vous pouvez consulter cette liste sur le site de la Cour d'appel ou passer par ATJ, dont tous les traducteurs montpelliérains y figurent.",
              },
              {
                q: "La préfecture de l'Hérault accepte-t-elle vos traductions ?",
                a: "Oui. Nos traductions sont acceptées par la préfecture de l'Hérault (34) et toutes les préfectures de la région Occitanie, ainsi que par les sous-préfectures et mairies habilitées.",
              },
              {
                q: "Faut-il se déplacer pour obtenir une traduction assermentée à Montpellier ?",
                a: "Non. Envoyez-nous une copie numérique (scan ou photo) de votre document par email ou via notre formulaire. Vous recevez votre traduction assermentée en PDF signé et cacheté. La remise en main propre est possible sur rendez-vous pour les clients montpelliérains.",
              },
              {
                q: "Quel est le délai pour une traduction assermentée à Montpellier ?",
                a: "Le délai standard est de 2 à 3 jours ouvrables. Service express sous 48h et urgent sous 24h disponibles pour les dossiers pressés, notamment pour les démarches à la préfecture de l'Hérault.",
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-navy-700/50 rounded-xl p-6 border border-navy-600/30">
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

      {/* Autres villes */}
      <section className="bg-navy-50/50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-heading font-bold text-navy-900 mb-6 text-center">
            Nos services dans d&apos;autres villes
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/traducteur-assermente-paris" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-navy-200 rounded-full text-navy-700 text-sm font-medium hover:border-gold-300 hover:bg-gold-50 transition-colors">
              <MapPin className="w-3.5 h-3.5 text-gold-500" /> Paris &amp; IDF
            </Link>
            <Link href="/traducteur-assermente-lyon" className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-navy-200 rounded-full text-navy-700 text-sm font-medium hover:border-gold-300 hover:bg-gold-50 transition-colors">
              <MapPin className="w-3.5 h-3.5 text-gold-500" /> Lyon &amp; Auvergne-Rhône-Alpes
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-gold-50 to-navy-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-navy-900 mb-6">
            Besoin d&apos;un traducteur assermenté à Montpellier ?
          </h2>
          <p className="text-navy-600 text-lg mb-8">
            Envoyez-nous votre document et recevez un devis gratuit sous 2h. Nos traducteurs
            assermentés montpelliérains sont disponibles 6j/7.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/devis"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-gold-500/25"
            >
              Demander un devis gratuit <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy-800 hover:bg-navy-700 text-white font-semibold rounded-lg transition-all"
            >
              <Mail className="w-4 h-4" /> Nous écrire
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
