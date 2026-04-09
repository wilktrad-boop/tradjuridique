import type { Metadata } from "next";
import Link from "next/link";
import { BlogCTA } from "@/components/BlogCTA";
import { ArrowLeft, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Traduction assermentée anglais-français : tout savoir",
  description:
    "Traduction assermentée anglais-français et français-anglais : spécificités juridiques, documents concernés, tarifs et délais. Guide complet.",
  alternates: {
    canonical: "https://www.agence-traduction-juridique.fr/blog/traduction-assermentee-anglais",
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
          <span className="px-3 py-1 bg-gold-500/10 text-gold-300 text-xs font-semibold rounded-full">Langues</span>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white mt-4 leading-tight">
            Traduction assermentée anglais-français : tout savoir
          </h1>
          <p className="text-navy-300 text-sm mt-4">Mis à jour le 3 mars 2026 · 5 min de lecture</p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-navy max-w-none">
          <p className="text-lg text-navy-600 leading-relaxed">
            La paire <strong>anglais-français</strong> est la combinaison linguistique la plus demandée en traduction assermentée en France. Que vous ayez besoin de traduire un document américain, britannique, canadien ou australien, notre équipe de traducteurs assermentés maîtrise les subtilités juridiques de chaque système.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Spécificités de la traduction juridique anglais-français</h2>
          <p className="text-navy-600 leading-relaxed">
            La traduction juridique entre l&apos;anglais et le français présente des défis particuliers liés aux différences entre les systèmes juridiques. Le droit anglo-saxon (common law) et le droit français (droit civil) reposent sur des concepts fondamentalement différents, ce qui nécessite une expertise spécifique.
          </p>
          <p className="text-navy-600 leading-relaxed">
            Par exemple, certains termes juridiques anglais n&apos;ont pas d&apos;équivalent direct en français et inversement. Le traducteur assermenté doit maîtriser ces nuances pour produire une traduction fidèle et juridiquement cohérente.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Documents fréquemment traduits</h2>
          <ul className="space-y-2">
            {[
              "Actes de naissance et de mariage (USA, UK, Canada, Australie)",
              "Diplômes et relevés de notes universitaires",
              "Contrats commerciaux internationaux",
              "Décisions de justice et jugements",
              "Brevets et documents de propriété intellectuelle",
              "Procurations et mandats (Power of Attorney)",
              "Casiers judiciaires (Criminal Record Check)",
              "Certificats de divorce (Decree Absolute)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-navy-600">
                <CheckCircle className="w-4 h-4 text-gold-500 mt-1 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Tarifs et délais</h2>
          <p className="text-navy-600 leading-relaxed">
            L&apos;anglais étant une langue courante, les tarifs de traduction assermentée anglais-français sont parmi les plus compétitifs. Comptez entre <strong>25 et 50€ par page</strong> selon le type de document, avec un délai de 1 à 3 jours ouvrables en standard.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Anglais britannique vs anglais américain</h2>
          <p className="text-navy-600 leading-relaxed">
            Les systèmes juridiques du Royaume-Uni et des États-Unis présentent des différences notables dans leur terminologie. Un acte de naissance britannique (Birth Certificate) n&apos;a pas le même format qu&apos;un américain. Nos traducteurs assermentés connaissent ces variations et adaptent leur traduction en conséquence.
          </p>

          <div className="not-prose bg-navy-50 border border-navy-100 rounded-xl p-6 my-8">
            <p className="text-xs font-semibold text-navy-400 uppercase tracking-wide mb-3">À lire aussi</p>
            <ul className="space-y-2">
              <li><Link href="/traduction-assermentee" className="text-gold-600 hover:text-gold-700 font-medium text-sm hover:underline">Notre service de traduction assermentée →</Link></li>
              <li><Link href="/blog/traduction-acte-de-naissance" className="text-gold-600 hover:text-gold-700 font-medium text-sm hover:underline">Traduction assermentée d&apos;un acte de naissance →</Link></li>
              <li><Link href="/blog/traduction-assermentee-acte-de-mariage" className="text-gold-600 hover:text-gold-700 font-medium text-sm hover:underline">Traduction assermentée d&apos;un acte de mariage →</Link></li>
            </ul>
          </div>

          <BlogCTA />
        </div>
      </section>
    </article>
  );
}
