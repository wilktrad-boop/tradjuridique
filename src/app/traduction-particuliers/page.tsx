import Link from "next/link";
import type { Metadata } from "next";
import {
  User,
  ArrowRight,
  CheckCircle,
  Clock,
  Shield,
  FileText,
  Plane,
  GraduationCap,
  Heart,
  Home,
  AlertCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Traduction Assermentée pour Particuliers | Immigration, Diplômes, État Civil | ATJ",
  description:
    "Traduction assermentée pour particuliers : actes d'état civil, diplômes étrangers, permis de conduire, dossiers d'immigration. Traducteurs experts, devis gratuit sous 2h.",
  alternates: {
    canonical: "https://www.agence-traduction-juridique.fr/traduction-particuliers",
  },
};

const situations = [
  {
    icon: Plane,
    title: "Immigration et naturalisation",
    description:
      "Demande de titre de séjour, naturalisation, regroupement familial, demande d'asile (OFPRA). Actes d'état civil étrangers traduits et certifiés conformes aux exigences des préfectures.",
    documents: [
      "Acte de naissance étranger",
      "Acte de mariage étranger",
      "Casier judiciaire étranger",
      "Passeport et documents d'identité",
      "Jugements de divorce étrangers",
    ],
  },
  {
    icon: GraduationCap,
    title: "Études et diplômes",
    description:
      "Inscription dans une université française ou étrangère, reconnaissance de diplôme, équivalences académiques, dossiers Campus France.",
    documents: [
      "Diplômes et attestations",
      "Relevés de notes",
      "Lettres de recommandation",
      "Dossiers scolaires",
      "Certificats de scolarité",
    ],
  },
  {
    icon: Heart,
    title: "Mariage et famille",
    description:
      "Mariage avec un ressortissant étranger, adoption internationale, garde d'enfants transfrontalière. Traductions officielles de tous les documents d'état civil exigés.",
    documents: [
      "Acte de naissance pour mariage",
      "Certificat de coutume",
      "Jugement de divorce étranger",
      "Acte de décès étranger",
      "Document d'adoption international",
    ],
  },
  {
    icon: Home,
    title: "Achat immobilier à l'étranger",
    description:
      "Acquisition d'un bien immobilier hors de France ou vente d'un bien en France par un non-francophone. Traduction des actes notariés, compromis et documents bancaires.",
    documents: [
      "Compromis de vente",
      "Acte authentique notarié",
      "Documents bancaires",
      "Procuration",
      "Contrats de prêt",
    ],
  },
  {
    icon: Plane,
    title: "Permis de conduire étranger",
    description:
      "Échange de votre permis de conduire étranger contre un permis français. Traduction obligatoire pour les permis hors UE, reconnue par l'ANTS et les préfectures.",
    documents: [
      "Permis de conduire étranger",
      "Relevé de points",
      "Attestation d'authenticité",
    ],
  },
  {
    icon: FileText,
    title: "Succession internationale",
    description:
      "Héritage comportant des biens ou des héritiers à l'étranger. Traduction des testaments, actes de propriété et documents bancaires étrangers pour votre notaire.",
    documents: [
      "Testament étranger",
      "Acte de propriété étranger",
      "Documents bancaires étrangers",
      "Acte de décès étranger",
      "Certificats d'hérédité",
    ],
  },
];

const steps = [
  {
    step: "01",
    title: "Envoyez votre document",
    description:
      "Transmettez une photo ou un scan lisible de votre document via notre formulaire de devis ou par email. L'original n'est pas nécessaire dans la plupart des cas.",
  },
  {
    step: "02",
    title: "Devis gratuit sous 2h",
    description:
      "Nous analysons votre document et vous envoyons un devis précis incluant le prix et le délai de livraison. Sans engagement.",
  },
  {
    step: "03",
    title: "Traduction par un expert",
    description:
      "Un traducteur assermenté inscrit à la Cour d'appel réalise votre traduction. Il y appose son cachet officiel et sa signature.",
  },
  {
    step: "04",
    title: "Livraison numérique et/ou postale",
    description:
      "Vous recevez votre traduction en PDF signé par email. Si l'original certifié est requis (préfecture, consulat), nous vous l'envoyons par courrier recommandé.",
  },
];

export default function TraductionParticuliersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Traduction assermentée pour particuliers",
            provider: {
              "@type": "ProfessionalService",
              name: "ATJ - Agence de Traduction Juridique",
            },
            description:
              "Traduction assermentée pour particuliers : immigration, diplômes, état civil, permis de conduire, succession internationale.",
            areaServed: "FR",
            serviceType: "Traduction assermentée particuliers",
          }),
        }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 to-navy-900/70" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full mb-6">
              <User className="w-4 h-4 text-gold-400" />
              <span className="text-gold-300 text-sm font-medium">Particuliers</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white leading-tight mb-6">
              Traduction assermentée pour{" "}
              <span className="text-gold-400">particuliers</span>
            </h1>
            <p className="text-lg text-navy-200 leading-relaxed mb-8">
              Immigration, mariage international, diplôme étranger, permis de conduire, succession…
              ATJ vous accompagne dans toutes vos démarches administratives et juridiques personnelles
              avec des traductions officielles reconnues par les préfectures, les consulats et les
              administrations françaises.
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
                Poser une question
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance strip */}
      <section className="bg-navy-800 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: Clock, label: "Devis sous 2h", sub: "Réponse rapide garantie" },
              { icon: Shield, label: "Traducteurs assermentés", sub: "Inscrits à la Cour d'appel" },
              { icon: CheckCircle, label: "Accepté partout", sub: "Préfectures, consulats, notaires" },
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

      {/* Situations */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-navy-900 mb-4">
              Vos situations, nos solutions
            </h2>
            <p className="text-navy-600 text-lg max-w-2xl mx-auto">
              Quelle que soit votre démarche, nous traduisons les documents officiels dont vous avez
              besoin, dans les délais imposés par vos administrations.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {situations.map((situation) => (
              <div
                key={situation.title}
                className="bg-white rounded-2xl p-8 border border-navy-100 shadow-sm"
              >
                <div className="w-12 h-12 bg-navy-800 rounded-xl flex items-center justify-center mb-5">
                  <situation.icon className="w-6 h-6 text-gold-400" />
                </div>
                <h3 className="text-lg font-heading font-bold text-navy-900 mb-2">
                  {situation.title}
                </h3>
                <p className="text-navy-600 text-sm leading-relaxed mb-4">
                  {situation.description}
                </p>
                <ul className="space-y-1.5">
                  {situation.documents.map((doc) => (
                    <li key={doc} className="flex items-center gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-gold-500 shrink-0" />
                      <span className="text-navy-600 text-sm">{doc}</span>
                    </li>
                  ))}
                </ul>
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
              Comment ça marche ?
            </h2>
            <p className="text-navy-600 text-lg">
              Une procédure simple et transparente, du premier contact à la livraison.
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

      {/* Pricing */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 lg:p-12 border border-navy-100 shadow-sm">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="text-xs font-semibold text-navy-400 uppercase tracking-wide mb-2">
                  Tarifs particuliers
                </p>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy-900 mb-4">
                  Des tarifs clairs, sans surprise
                </h2>
                <p className="text-navy-600 leading-relaxed mb-2">
                  À partir de <strong className="text-navy-900">45 € par page</strong> pour une
                  traduction assermentée standard.
                </p>
                <p className="text-navy-500 text-sm italic mb-6">
                  Selon la paire de langues et la complexité du document.
                </p>
                <ul className="space-y-2.5 mb-8">
                  {[
                    "Devis gratuit et sans engagement",
                    "Prix fixe confirmé avant commande",
                    "Livraison numérique incluse",
                    "Envoi postal en option",
                    "Service express disponible sous 24h",
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
                <p className="text-navy-300 text-sm mb-2">Obtenez votre tarif exact</p>
                <p className="text-white font-heading font-bold text-xl mb-6">
                  Devis gratuit sous 2h
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
                  Poser une question
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-start gap-3 bg-gold-50 rounded-xl p-5 border border-gold-200">
            <AlertCircle className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
            <p className="text-navy-600 text-sm leading-relaxed">
              L&apos;original du document n&apos;est généralement pas nécessaire. Une photo nette ou
              un scan suffit dans la plupart des cas. Si votre administration exige l&apos;original
              certifié papier, nous vous le faisons parvenir par courrier recommandé.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-navy-800 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-white mb-12 text-center">
            Ils ont simplifié leurs démarches avec ATJ
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                quote:
                  "J'avais besoin de mon acte de naissance roumain traduit pour ma demande de naturalisation. ATJ m'a fourni la traduction en 2 jours, acceptée sans problème par la préfecture.",
                author: "Sofia M., Paris — naturalisation française",
              },
              {
                quote:
                  "Mon diplôme argentin devait être traduit pour mon inscription en master. Le devis est arrivé en moins d'une heure, et j'ai reçu ma traduction le lendemain. Impeccable.",
                author: "Lucas R., Lyon — équivalence de diplôme",
              },
              {
                quote:
                  "Pour mon mariage avec mon compagnon sénégalais, nous avons eu besoin de plusieurs actes traduits. ATJ a tout géré, y compris le certificat de coutume. Très professionnel.",
                author: "Camille D., Bordeaux — mariage international",
              },
              {
                quote:
                  "J'ai échangé mon permis de conduire marocain contre un permis français. La traduction d'ATJ a été acceptée du premier coup par l'ANTS. Tarif clair et délai respecté.",
                author: "Youssef B., Marseille — échange de permis",
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

      {/* FAQ rapide */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-navy-900 mb-10 text-center">
            Questions fréquentes
          </h2>
          <div className="space-y-4">
            {[
              {
                q: "Dois-je envoyer l'original de mon document ?",
                a: "Non. Une copie numérique lisible (scan ou photo nette) suffit dans la grande majorité des cas. Si votre administration exige l'original papier certifié, nous pouvons vous l'expédier par courrier recommandé moyennant des frais de port.",
              },
              {
                q: "Ma traduction sera-t-elle acceptée par la préfecture ?",
                a: "Oui. Nos traducteurs sont inscrits sur les listes officielles des experts judiciaires des Cours d'appel françaises. Leurs traductions portent le cachet officiel et la signature requise par toutes les préfectures, l'OFPRA, les consulats et les notaires.",
              },
              {
                q: "Combien de temps faut-il pour recevoir ma traduction ?",
                a: "Le délai standard est de 2 à 5 jours ouvrables. Un service express sous 48h et un service urgent sous 24h sont disponibles pour les situations pressées.",
              },
              {
                q: "Puis-je obtenir une traduction certifiée pour une démarche à l'étranger ?",
                a: "Oui. Nous pouvons aussi vous aider à faire apposer une apostille sur votre document si le pays destinataire est signataire de la Convention de La Haye. Consultez notre page dédiée à l'apostille pour en savoir plus.",
              },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl p-7 border border-navy-100 shadow-sm">
                <h3 className="text-navy-900 font-heading font-bold mb-3 leading-snug">{faq.q}</h3>
                <p className="text-navy-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/faq"
              className="inline-flex items-center gap-2 text-gold-600 hover:text-gold-700 font-semibold text-sm"
            >
              Voir toutes les questions fréquentes <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 bg-gradient-to-r from-gold-50 to-navy-50">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-navy-900 mb-6">
            Prêt à lancer votre démarche ?
          </h2>
          <p className="text-navy-600 text-lg mb-8">
            Envoyez-nous votre document, recevez un devis en 2h et votre traduction assermentée en
            quelques jours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/devis"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-gold-500/25"
            >
              Demander un devis gratuit <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/apostille"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy-800 hover:bg-navy-700 text-white font-semibold rounded-lg transition-all"
            >
              En savoir plus sur l&apos;apostille
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
