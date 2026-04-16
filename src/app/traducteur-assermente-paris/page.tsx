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
  Phone,
  Mail,
  Star,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Traducteur Assermenté Paris | Traduction Officielle 75 | ATJ",
  description:
    "Traducteur assermenté à Paris inscrit près la Cour d'appel de Paris. Traduction officielle pour préfecture, tribunal, OFPRA. Devis gratuit, délai 48h.",
  alternates: {
    canonical:
      "https://www.agence-traduction-juridique.fr/traducteur-assermente-paris",
  },
};

const features = [
  {
    icon: Award,
    title: "Inscrits près la Cour d'appel de Paris",
    description:
      "Nos traducteurs parisiens figurent sur la liste officielle des experts judiciaires de la Cour d'appel de Paris, la plus importante de France.",
  },
  {
    icon: Clock,
    title: "Livraison express à Paris",
    description:
      "Réponse sous 2h, livraison numérique sous 24 à 48h. Pour les urgences, remise en main propre possible dans Paris intra-muros.",
  },
  {
    icon: Shield,
    title: "Traductions reconnues partout",
    description:
      "Acceptées par toutes les préfectures d'Île-de-France, le Tribunal judiciaire de Paris, l'OFPRA de Fontenay-sous-Bois et les consulats parisiens.",
  },
  {
    icon: MapPin,
    title: "Couverture Île-de-France",
    description:
      "Paris et toute l'Île-de-France : Paris, Hauts-de-Seine, Seine-Saint-Denis, Val-de-Marne, Seine-et-Marne, Yvelines, Essonne, Val-d'Oise.",
  },
  {
    icon: Star,
    title: "30+ langues disponibles",
    description:
      "Nos traducteurs assermentés parisiens couvrent plus de 30 langues, dont les principales langues de l'immigration en Île-de-France.",
  },
  {
    icon: Shield,
    title: "Confidentialité absolue",
    description:
      "Secret professionnel garanti. Vos documents sont traités de façon sécurisée et ne sont jamais partagés avec des tiers.",
  },
];

const administrations = [
  "Préfecture de Paris (75)",
  "Préfecture des Hauts-de-Seine (92)",
  "Préfecture de Seine-Saint-Denis (93)",
  "Préfecture du Val-de-Marne (94)",
  "Tribunal judiciaire de Paris",
  "Cour d'appel de Paris",
  "OFPRA (Fontenay-sous-Bois)",
  "Ambassades et consulats à Paris",
  "Mairies d'arrondissement",
  "Universités parisiennes",
  "Notaires et huissiers (Paris)",
  "Ministère de la Justice",
];

const neighborhoods = [
  "Paris 1er–4e (Centre)", "Paris 5e–6e (Latin)", "Paris 7e–8e (Ouest)",
  "Paris 9e–10e (Nord)", "Paris 11e–12e (Est)", "Paris 13e–14e (Sud)",
  "Paris 15e–16e (Passy)", "Paris 17e–18e (Montmartre)", "Paris 19e–20e (Belleville)",
  "Boulogne-Billancourt", "Nanterre", "Versailles",
  "Saint-Denis", "Créteil", "Vincennes",
];

export default function TraducteurParis() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "ATJ - Agence de Traduction Juridique Paris",
            "@id": "https://www.agence-traduction-juridique.fr",
            url: "https://www.agence-traduction-juridique.fr",
            description:
              "Traducteurs assermentés à Paris inscrits près la Cour d'appel de Paris. Traduction officielle pour préfecture, tribunal, OFPRA.",
            areaServed: [
              { "@type": "City", name: "Paris" },
              { "@type": "AdministrativeArea", name: "Île-de-France" },
            ],
            serviceType: "Traduction assermentée",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Paris",
              addressRegion: "Île-de-France",
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
              <span className="text-gold-300 text-sm font-medium">Paris &amp; Île-de-France</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white leading-tight mb-6">
              Traducteur assermenté à{" "}
              <span className="text-gold-400">Paris</span> — inscrit près la Cour d&apos;appel
            </h1>
            <p className="text-lg text-navy-200 leading-relaxed mb-8">
              Nos traducteurs assermentés parisiens réalisent vos traductions officielles pour
              toutes vos démarches en Île-de-France : préfecture, tribunal, OFPRA, consulat.
              Devis gratuit, réponse sous 2h.
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
                <Phone className="w-4 h-4" /> Nous contacter
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
              Inscrits Cour d&apos;appel de Paris
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-gold-400" />
              Acceptés par toutes les préfectures IDF
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
              Votre traducteur assermenté à Paris
            </h2>
            <p className="text-navy-600 text-lg max-w-2xl mx-auto">
              Un service local, rapide et reconnu par toutes les administrations parisiennes et
              franciliennes.
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
                Administrations et organismes acceptant nos traductions
              </h2>
              <p className="text-navy-600 text-lg mb-8">
                Nos traductions assermentées sont reconnues par l&apos;ensemble des administrations
                d&apos;Île-de-France et des organismes officiels parisiens.
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
              Nous intervenons dans tout Paris et l&apos;Île-de-France. Livraison numérique partout,
              remise en main propre sur rendez-vous à Paris.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {neighborhoods.map((zone) => (
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
                q: "Comment trouver un traducteur assermenté à Paris ?",
                a: "Un traducteur assermenté à Paris doit être inscrit sur la liste des experts judiciaires de la Cour d'appel de Paris. Vous pouvez consulter cette liste sur le site de la Cour d'appel ou passer par ATJ, dont tous les traducteurs parisiens y figurent.",
              },
              {
                q: "La préfecture de Paris accepte-t-elle vos traductions ?",
                a: "Oui. Nos traductions sont acceptées par la Préfecture de Paris (75) et toutes les préfectures d'Île-de-France, ainsi que par les sous-préfectures et mairies habilitées.",
              },
              {
                q: "Puis-je récupérer ma traduction en main propre à Paris ?",
                a: "Oui, la remise en main propre est possible sur rendez-vous pour les clients parisiens. Pour la grande majorité des dossiers, la livraison numérique (PDF signé et cacheté) est acceptée et vous évite un déplacement.",
              },
              {
                q: "Quel est le délai pour une traduction assermentée à Paris ?",
                a: "Le délai standard est de 2 à 3 jours ouvrables pour les documents courants. Nous proposons un service express sous 48h et urgent sous 24h, particulièrement adapté aux procédures parisiennes à délais serrés.",
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

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-gold-50 to-navy-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-navy-900 mb-6">
            Besoin d&apos;un traducteur assermenté à Paris ?
          </h2>
          <p className="text-navy-600 text-lg mb-8">
            Envoyez-nous votre document et recevez un devis gratuit sous 2h. Nos traducteurs
            assermentés parisiens sont disponibles 6j/7 pour répondre à toutes vos urgences.
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
