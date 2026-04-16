import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  Stamp,
  ArrowRight,
  CheckCircle,
  AlertCircle,
  Globe,
  Clock,
  Shield,
  FileCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Apostille et Traduction Assermentée | Légalisation de Documents | ATJ",
  description:
    "Tout comprendre sur l'apostille : quand en avez-vous besoin, comment l'obtenir, et comment la combiner avec une traduction assermentée. Guide complet ATJ.",
  alternates: { canonical: "https://www.agence-traduction-juridique.fr/apostille" },
};

const steps = [
  {
    step: "01",
    title: "Obtenez votre document original",
    description:
      "Le document public français (acte de naissance, diplôme, jugement…) doit être un original ou une copie certifiée conforme délivrée par l'autorité compétente.",
  },
  {
    step: "02",
    title: "Faites apposer l'apostille",
    description:
      "Déposez votre document auprès du Parquet du Tribunal judiciaire ou de la Cour d'appel compétente selon le type de document. L'apostille est apposée en quelques jours.",
  },
  {
    step: "03",
    title: "Faites traduire le document",
    description:
      "Le pays destinataire exige généralement que le document apostillé soit accompagné d'une traduction assermentée dans la langue du pays cible.",
  },
  {
    step: "04",
    title: "Déposez votre dossier complet",
    description:
      "Transmettez le document apostillé et sa traduction assermentée à l'administration ou l'organisme étranger. Votre dossier est reconnu officiellement.",
  },
];

const countries = [
  "États-Unis", "Espagne", "Italie", "Portugal", "Allemagne",
  "Pays-Bas", "Belgique", "Suisse", "Maroc", "Tunisie",
  "Turquie", "Brésil", "Argentine", "Mexique", "Inde",
  "Russie", "Ukraine", "Pologne", "Roumanie", "Grèce",
];

const documentTypes = [
  {
    title: "Documents d'état civil",
    items: ["Actes de naissance", "Actes de mariage", "Actes de décès", "Livrets de famille"],
  },
  {
    title: "Documents judiciaires",
    items: ["Jugements de divorce", "Décisions de justice", "Casiers judiciaires", "Procurations notariées"],
  },
  {
    title: "Documents administratifs",
    items: ["Diplômes et relevés de notes", "Certificats de scolarité", "Documents d'identité", "Extraits Kbis"],
  },
];

export default function ApostillePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Apostille et traduction assermentée",
            provider: {
              "@type": "ProfessionalService",
              name: "ATJ - Agence de Traduction Juridique",
            },
            description:
              "Accompagnement pour l'apostille et la traduction assermentée de documents officiels à destination de l'étranger.",
            areaServed: "FR",
            serviceType: "Apostille et légalisation",
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
              <Stamp className="w-4 h-4 text-gold-400" />
              <span className="text-gold-300 text-sm font-medium">Légalisation internationale</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white leading-tight mb-6">
              Apostille et{" "}
              <span className="text-gold-400">traduction assermentée</span> pour vos documents
            </h1>
            <p className="text-lg text-navy-200 leading-relaxed mb-8">
              Vous devez faire reconnaître un document officiel français à l&apos;étranger ?
              Comprenez le rôle de l&apos;apostille, quand elle est obligatoire, et comment la
              combiner avec une traduction assermentée pour que votre dossier soit accepté.
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
              <strong>ATJ ne délivre pas l&apos;apostille</strong> — celle-ci est apposée par les
              autorités françaises. En revanche, nous réalisons la{" "}
              <strong>traduction assermentée</strong> qui l&apos;accompagne obligatoirement dans la
              plupart des pays.
            </p>
          </div>
        </div>
      </section>

      {/* Qu'est-ce que l'apostille */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 mb-6">
                Qu&apos;est-ce que l&apos;apostille ?
              </h2>
              <div className="space-y-4 text-navy-600 leading-relaxed">
                <p>
                  L&apos;apostille est une certification officielle instaurée par la{" "}
                  <strong className="text-navy-800">Convention de La Haye du 5 octobre 1961</strong>.
                  Elle authentifie l&apos;origine d&apos;un document public pour qu&apos;il soit reconnu dans un
                  autre État signataire, sans autre légalisation consulaire.
                </p>
                <p>
                  En France, l&apos;apostille est apposée par le <strong className="text-navy-800">
                  Parquet du Tribunal judiciaire</strong> (pour les actes d&apos;état civil) ou par la{" "}
                  <strong className="text-navy-800">Cour d&apos;appel</strong> (pour les décisions de
                  justice), selon la nature du document.
                </p>
                <p>
                  Elle ne remplace pas la traduction : le pays destinataire exige généralement que
                  le document apostillé soit <strong className="text-navy-800">également traduit
                  par un traducteur assermenté</strong> dans sa langue officielle.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[
                {
                  icon: Shield,
                  title: "Ce que l'apostille garantit",
                  desc: "L'authenticité de la signature et du cachet apposés sur le document original. Elle certifie que le signataire avait bien qualité pour signer.",
                },
                {
                  icon: Globe,
                  title: "Où est-elle reconnue ?",
                  desc: "Dans les 125 pays signataires de la Convention de La Haye, dont la quasi-totalité des pays européens, les États-Unis, le Brésil, la Turquie, le Maroc et de nombreux autres.",
                },
                {
                  icon: FileCheck,
                  title: "Apostille ≠ traduction",
                  desc: "L'apostille certifie l'authenticité du document, pas son contenu dans une autre langue. La traduction assermentée reste nécessaire pour les pays non-francophones.",
                },
                {
                  icon: Clock,
                  title: "Délai d'obtention",
                  desc: "L'apostille est généralement délivrée sous 8 à 15 jours ouvrables par les autorités françaises compétentes. Des délais express peuvent exister selon les juridictions.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-5 bg-navy-50 rounded-2xl p-6">
                  <div className="w-12 h-12 bg-navy-800 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-navy-900 mb-1">{item.title}</h3>
                    <p className="text-navy-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
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
              Comment faire légaliser un document à l&apos;étranger ?
            </h2>
            <p className="text-navy-600 text-lg max-w-2xl mx-auto">
              Le processus complet en 4 étapes pour qu&apos;un document français soit reconnu officiellement à l&apos;étranger.
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

      {/* Documents & pays */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Documents */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy-900 mb-8">
                Documents concernés
              </h2>
              <div className="space-y-6">
                {documentTypes.map((cat) => (
                  <div key={cat.title} className="bg-white rounded-2xl p-6 border border-navy-100 shadow-sm">
                    <h3 className="font-heading font-bold text-navy-900 mb-4">{cat.title}</h3>
                    <ul className="space-y-2">
                      {cat.items.map((item) => (
                        <li key={item} className="flex items-center gap-2.5">
                          <CheckCircle className="w-4 h-4 text-gold-500 shrink-0" />
                          <span className="text-navy-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Pays */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy-900 mb-8">
                Pays signataires (sélection)
              </h2>
              <p className="text-navy-600 text-sm leading-relaxed mb-6">
                Les 125 pays signataires de la Convention de La Haye reconnaissent l&apos;apostille
                française. Pour les pays <strong>non signataires</strong>, une légalisation
                consulaire reste nécessaire — contactez-nous pour être orienté.
              </p>
              <div className="grid grid-cols-2 gap-2.5">
                {countries.map((country) => (
                  <div
                    key={country}
                    className="flex items-center gap-2.5 bg-navy-50 rounded-xl px-4 py-3"
                  >
                    <Globe className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                    <span className="text-navy-700 text-sm">{country}</span>
                  </div>
                ))}
              </div>
              <p className="text-navy-400 text-xs mt-4">Et 105 autres pays signataires.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-navy-800 py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-white mb-12 text-center">
            Questions fréquentes sur l&apos;apostille
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Faut-il d'abord l'apostille ou d'abord la traduction ?",
                a: "En principe, il faut d'abord obtenir l'apostille sur le document original, puis faire réaliser la traduction assermentée du document apostillé. Certains pays acceptent que les deux démarches soient faites en parallèle. ATJ peut vous conseiller selon votre destination.",
              },
              {
                q: "L'apostille est-elle obligatoire pour tous les pays ?",
                a: "Non. L'apostille est requise pour les 125 pays signataires de la Convention de La Haye. Pour les pays non signataires (certains pays africains, asiatiques ou du Moyen-Orient), une légalisation consulaire distincte est nécessaire. Certains accords bilatéraux peuvent aussi dispenser de l'apostille.",
              },
              {
                q: "Où faire apostiller un acte de naissance français ?",
                a: "Pour un acte de naissance délivré par une mairie française, il faut déposer la demande au Parquet du Tribunal judiciaire du lieu de naissance ou au Bureau des Apostilles du Ministère de la Justice si vous êtes né à Paris.",
              },
              {
                q: "Combien coûte une apostille en France ?",
                a: "L'apostille est gratuite lorsqu'elle est apposée par les autorités françaises (tribunaux, parquets). Seuls d'éventuels frais d'envoi postal peuvent s'appliquer. La traduction assermentée qui l'accompagne est facturée séparément selon nos tarifs.",
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

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-gold-50 to-navy-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-navy-900 mb-6">
            Besoin d&apos;une traduction pour accompagner votre apostille ?
          </h2>
          <p className="text-navy-600 text-lg mb-8">
            Envoyez-nous votre document apostillé et recevez un devis gratuit sous 2h. Nos
            traducteurs assermentés prennent en charge toutes les langues et tous les pays.
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
