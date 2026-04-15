import Link from "next/link";
import type { Metadata } from "next";
import { HelpCircle, ArrowRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "FAQ Traduction Assermentée | Questions Fréquentes | ATJ",
  description:
    "Toutes les réponses à vos questions sur la traduction assermentée, certifiée et juridique : tarifs, délais, documents acceptés, valeur légale. ATJ répond.",
  alternates: { canonical: "https://www.agence-traduction-juridique.fr/faq" },
};

const categories = [
  {
    title: "Traduction assermentée",
    questions: [
      {
        q: "Qu'est-ce qu'une traduction assermentée ?",
        a: "Une traduction assermentée (aussi appelée traduction officielle ou traduction jurée) est réalisée par un traducteur inscrit sur la liste des experts judiciaires de la Cour d'appel. Elle porte le cachet, la signature et le numéro d'inscription du traducteur, ce qui lui confère une valeur légale officielle reconnue par les administrations, les tribunaux et les organismes officiels.",
      },
      {
        q: "Quelle est la différence entre traduction assermentée et traduction certifiée ?",
        a: "La traduction assermentée est réalisée par un traducteur inscrit auprès d'une Cour d'appel et a une valeur légale officielle. La traduction certifiée conforme atteste de la fidélité de la traduction à l'original, mais elle n'est pas obligatoirement réalisée par un expert judiciaire. Pour les procédures devant les tribunaux, préfectures ou l'OFPRA, la traduction assermentée est généralement exigée.",
      },
      {
        q: "Ma traduction assermentée sera-t-elle acceptée à l'étranger ?",
        a: "Nos traductions assermentées sont reconnues en France et dans de nombreux pays. Pour certains États, une apostille (certification de la signature du traducteur par les autorités françaises) peut être nécessaire. Nous vous accompagnons dans cette démarche et pouvons vous orienter vers les autorités compétentes.",
      },
      {
        q: "Comment trouver un traducteur assermenté fiable ?",
        a: "Un traducteur assermenté fiable est inscrit sur la liste officielle des experts judiciaires publiée par la Cour d'appel de son ressort. Chez ATJ, tous nos traducteurs assermentés figurent sur ces listes officielles et exercent dans leur langue maternelle, ce qui garantit une qualité irréprochable.",
      },
    ],
  },
  {
    title: "Tarifs et devis",
    questions: [
      {
        q: "Combien coûte une traduction assermentée ?",
        a: "Nos tarifs commencent à 30 € par page (250 mots) pour une traduction standard. Le service express 48h est facturé 45 € par page, et le service urgent sous 24h est à 60 € par page. Le tarif final dépend du volume, de la langue et de la complexité du document. Demandez un devis gratuit pour un prix précis.",
      },
      {
        q: "Est-ce que le devis est vraiment gratuit et sans engagement ?",
        a: "Oui, notre devis est entièrement gratuit et sans aucun engagement. Transmettez-nous votre document via le formulaire en ligne ou par email, et nous vous répondons sous quelques heures avec un devis détaillé incluant le prix et le délai de livraison.",
      },
      {
        q: "Y a-t-il des frais supplémentaires (livraison, mise en forme...) ?",
        a: "Le prix indiqué comprend la traduction et la certification. La livraison numérique (PDF signé) est incluse. Si vous avez besoin d'un envoi postal de l'original certifié, des frais de port peuvent s'appliquer selon votre localisation. Tout est précisé dans votre devis.",
      },
      {
        q: "Proposez-vous des tarifs dégressifs pour les volumes importants ?",
        a: "Oui. Pour les cabinets d'avocats, notaires et entreprises ayant des besoins réguliers ou des volumes importants, nous proposons des conditions tarifaires adaptées. Contactez-nous directement pour obtenir une offre sur mesure.",
      },
    ],
  },
  {
    title: "Délais de livraison",
    questions: [
      {
        q: "Quel est le délai standard pour une traduction assermentée ?",
        a: "Le délai standard est de 2 à 5 jours ouvrables selon le volume et la complexité du document. Pour la plupart des documents courants (acte de naissance, permis de conduire, relevé de notes), nous livrons en 2 à 3 jours.",
      },
      {
        q: "Existe-t-il un service express ou urgent ?",
        a: "Oui. Nous proposons un service express livré sous 48h et un service urgent livré sous 24h (dans les limites du volume traitable en ce délai). Ces options sont disponibles à la demande lors de votre devis.",
      },
      {
        q: "Comment recevez-je ma traduction terminée ?",
        a: "Vous recevez votre traduction assermentée en version numérique (PDF signé et cacheté) par email dès qu'elle est prête. Si vous avez besoin d'un document original papier (exigé par certaines administrations), nous vous l'envoyons par courrier recommandé.",
      },
    ],
  },
  {
    title: "Documents et langues",
    questions: [
      {
        q: "Quels types de documents pouvez-vous traduire ?",
        a: "Nous traduisons tous types de documents officiels et juridiques : actes d'état civil (naissance, mariage, décès), casiers judiciaires, diplômes et relevés de notes, permis de conduire, jugements et décisions de justice, contrats, actes notariés, statuts de société, brevets, procurations, testaments et documents d'immigration.",
      },
      {
        q: "Dans quelles langues travaillez-vous ?",
        a: "Nos traducteurs assermentés couvrent plus de 30 langues : anglais, espagnol, allemand, italien, portugais, arabe, chinois, russe, turc, japonais, néerlandais, polonais, roumain, coréen, hébreu, grec, et bien d'autres. Consultez notre page Langues pour la liste complète.",
      },
      {
        q: "Mon document est très abîmé ou difficile à lire, pouvez-vous quand même le traduire ?",
        a: "Oui, dans la grande majorité des cas. Nos traducteurs ont l'habitude de travailler avec des documents anciens, endommagés ou de faible qualité. Envoyez-nous votre document et nous vous indiquerons si la traduction est réalisable et dans quel délai.",
      },
      {
        q: "Faut-il envoyer l'original du document ?",
        a: "Non, une copie numérique (scan ou photo nette) est généralement suffisante pour réaliser la traduction. L'original peut être utile pour certaines démarches spécifiques, mais il n'est pas obligatoire dans la plupart des cas.",
      },
    ],
  },
  {
    title: "Procédures spécifiques",
    questions: [
      {
        q: "J'ai besoin d'une traduction assermentée pour l'OFPRA, que faut-il fournir ?",
        a: "L'OFPRA exige des traductions assermentées (officielles) pour tous les documents étrangers présentés à l'appui d'une demande de protection internationale. Il s'agit généralement des actes d'état civil, des documents d'identité et des pièces justificatives. Nos traducteurs maîtrisent les exigences spécifiques de l'OFPRA.",
      },
      {
        q: "Puis-je utiliser votre traduction pour une procédure de naturalisation ?",
        a: "Oui. Pour une demande de naturalisation, la préfecture exige des traductions assermentées de vos actes d'état civil étrangers. Nos traductions sont acceptées par toutes les préfectures françaises.",
      },
      {
        q: "Qu'est-ce qu'une apostille et en ai-je besoin ?",
        a: "L'apostille est une certification officielle apposée sur un document public pour qu'il soit reconnu dans un autre pays signataire de la Convention de La Haye. Si vous devez faire reconnaître un document français à l'étranger ou vice versa, une apostille peut être nécessaire en complément de la traduction assermentée. Nous vous conseillons au cas par cas.",
      },
    ],
  },
];

export default function FaqPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: categories.flatMap((cat) =>
      cat.questions.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.a,
        },
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 to-navy-900/70" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full mb-6">
              <HelpCircle className="w-4 h-4 text-gold-400" />
              <span className="text-gold-300 text-sm font-medium">Questions fréquentes</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white leading-tight mb-6">
              Toutes les réponses à vos{" "}
              <span className="text-gold-400">questions</span> sur la traduction juridique
            </h1>
            <p className="text-lg text-navy-200 leading-relaxed mb-8">
              Tarifs, délais, documents acceptés, valeur légale… Retrouvez ici les réponses aux
              questions les plus fréquentes sur nos services de traduction assermentée et certifiée.
            </p>
            <Link
              href="/devis"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-gold-500/25"
            >
              Demander un devis gratuit <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ categories */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {categories.map((category) => (
              <div key={category.title}>
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy-900 mb-8 pb-4 border-b border-navy-100">
                  {category.title}
                </h2>
                <div className="space-y-4">
                  {category.questions.map((faq) => (
                    <div
                      key={faq.q}
                      className="bg-white rounded-2xl p-7 border border-navy-100 shadow-sm"
                    >
                      <h3 className="text-navy-900 font-heading font-bold mb-3 leading-snug">
                        {faq.q}
                      </h3>
                      <p className="text-navy-600 text-sm leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still have questions */}
      <section className="bg-navy-50/50 py-20 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-14 h-14 bg-navy-800 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <MessageCircle className="w-7 h-7 text-gold-400" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-navy-900 mb-4">
            Votre question n&apos;est pas ici ?
          </h2>
          <p className="text-navy-600 text-lg mb-8">
            Notre équipe répond à toutes vos questions par email ou téléphone, généralement dans
            l&apos;heure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-navy-800 hover:bg-navy-700 text-white font-semibold rounded-lg transition-all"
            >
              Nous contacter <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/devis"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-gold-500/25"
            >
              Demander un devis <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
