import type { Metadata } from "next";
import Link from "next/link";
import { BlogCTA } from "@/components/BlogCTA";
import { ArrowLeft, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Liste des traducteurs assermentés : Cour d'appel et démarches",
  description:
    "Comment trouver un traducteur assermenté inscrit auprès de la Cour d'appel ? Listes officielles, vérifications et conseils pour choisir le bon traducteur.",
  alternates: {
    canonical: "https://agence-traduction-juridique.fr/blog/traducteur-assermente-cour-appel-liste",
  },
};

export default function Article() {
  return (
    <article>
      <section className="bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-navy-300 hover:text-gold-400 text-sm mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Retour au blog
          </Link>
          <span className="px-3 py-1 bg-gold-500/10 text-gold-300 text-xs font-semibold rounded-full">Guide</span>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white mt-4 leading-tight">
            Liste des traducteurs assermentés : Cour d&apos;appel et démarches
          </h1>
          <p className="text-navy-300 text-sm mt-4">Mis à jour le 20 février 2026 · 5 min de lecture</p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-navy max-w-none">
          <p className="text-lg text-navy-600 leading-relaxed">
            Trouver un <strong>traducteur assermenté</strong> fiable et compétent est essentiel pour obtenir une traduction à valeur légale. Mais comment s&apos;assurer qu&apos;un traducteur est bien inscrit auprès d&apos;une <strong>Cour d&apos;appel</strong> ? Où consulter les listes officielles ? Ce guide répond à toutes vos questions.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Qu&apos;est-ce que la liste des experts de la Cour d&apos;appel ?</h2>
          <p className="text-navy-600 leading-relaxed">
            Chaque Cour d&apos;appel en France tient une <strong>liste officielle des experts judiciaires</strong>, dont font partie les traducteurs assermentés. Cette inscription est la seule garantie que le traducteur a prêté serment et que ses traductions ont une valeur légale officielle.
          </p>
          <p className="text-navy-600 leading-relaxed">
            Il existe également une <strong>liste nationale</strong> tenue par la Cour de cassation, qui regroupe les experts judiciaires les plus expérimentés (inscrits depuis au moins 5 ans sur une liste de Cour d&apos;appel).
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Où trouver la liste des traducteurs assermentés ?</h2>
          <ul className="space-y-2">
            {[
              "Site de la Cour de cassation : liste nationale des experts judiciaires",
              "Sites des Cours d'appel : chaque Cour publie sa liste locale",
              "Annuaires professionnels des traducteurs experts judiciaires",
              "Agences de traduction spécialisées comme ATJ qui travaillent exclusivement avec des traducteurs assermentés",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-navy-600">
                <CheckCircle className="w-4 h-4 text-gold-500 mt-1 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Comment vérifier qu&apos;un traducteur est assermenté ?</h2>
          <p className="text-navy-600 leading-relaxed">
            Pour vérifier le statut d&apos;un traducteur, vous pouvez consulter la liste des experts judiciaires sur le site de la Cour d&apos;appel dont il dépend, ou demander au traducteur de fournir son numéro d&apos;inscription et la Cour d&apos;appel à laquelle il est rattaché.
          </p>
          <p className="text-navy-600 leading-relaxed">
            Un traducteur assermenté légitime n&apos;aura aucune difficulté à fournir ces informations. Méfiez-vous des traducteurs qui refusent ou ne peuvent pas justifier de leur inscription.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Critères pour bien choisir</h2>
          <ul className="space-y-2">
            {[
              "Vérifier l'inscription sur la liste officielle de la Cour d'appel",
              "Privilégier un traducteur spécialisé dans votre type de document",
              "Demander un devis détaillé avec le délai de livraison",
              "Vérifier les avis clients et références",
              "S'assurer de la confidentialité des documents transmis",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-navy-600">
                <CheckCircle className="w-4 h-4 text-gold-500 mt-1 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Pourquoi passer par une agence spécialisée ?</h2>
          <p className="text-navy-600 leading-relaxed">
            Faire appel à une agence de traduction juridique comme ATJ vous garantit de travailler avec des traducteurs assermentés vérifiés, spécialisés dans le domaine juridique. L&apos;agence gère la logistique, assure un contrôle qualité et offre des délais compétitifs grâce à son réseau de traducteurs couvrant plus de 30 langues.
          </p>

          <div className="not-prose bg-navy-50 border border-navy-100 rounded-xl p-6 my-8">
            <p className="text-xs font-semibold text-navy-400 uppercase tracking-wide mb-3">À lire aussi</p>
            <ul className="space-y-2">
              <li><Link href="/blog/traducteur-assermente-comment-devenir" className="text-gold-600 hover:text-gold-700 font-medium text-sm hover:underline">Comment devenir traducteur assermenté en France ? →</Link></li>
              <li><Link href="/traduction-assermentee" className="text-gold-600 hover:text-gold-700 font-medium text-sm hover:underline">Notre service de traduction assermentée →</Link></li>
            </ul>
          </div>

          <BlogCTA />
        </div>
      </section>
    </article>
  );
}
