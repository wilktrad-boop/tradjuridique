import type { Metadata } from "next";
import Link from "next/link";
import { BlogCTA } from "@/components/BlogCTA";
import { ArrowLeft, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Apostille et traduction assermentée : guide pratique",
  description:
    "Comprendre l'apostille et son lien avec la traduction assermentée : définition, procédure, Convention de La Haye et cas pratiques.",
  alternates: {
    canonical: "https://agence-traduction-juridique.fr/blog/apostille-traduction-assermentee",
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
            Apostille et traduction assermentée : guide pratique
          </h1>
          <p className="text-navy-300 text-sm mt-4">Mis à jour le 28 février 2026 · 6 min de lecture</p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-navy max-w-none">
          <p className="text-lg text-navy-600 leading-relaxed">
            Lorsque vous devez faire valoir un document officiel à l&apos;étranger, deux démarches complémentaires peuvent être nécessaires : l&apos;<strong>apostille</strong> et la <strong>traduction assermentée</strong>. Ce guide vous explique quand et comment combiner ces deux procédures.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Qu&apos;est-ce qu&apos;une apostille ?</h2>
          <p className="text-navy-600 leading-relaxed">
            L&apos;apostille est un certificat d&apos;authenticité délivré par une autorité compétente (en France, la Cour d&apos;appel) qui atteste de la véracité de la signature, de la qualité du signataire et de l&apos;identité du sceau apposé sur un document public. Elle a été instaurée par la <strong>Convention de La Haye de 1961</strong>.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Apostille et traduction : dans quel ordre ?</h2>
          <p className="text-navy-600 leading-relaxed">
            L&apos;ordre est important et dépend du sens de la démarche :
          </p>
          <ul className="space-y-3">
            <li className="text-navy-600">
              <strong>Document français à utiliser à l&apos;étranger :</strong> faites d&apos;abord apostiller le document original, puis faites-le traduire par un traducteur assermenté du pays de destination.
            </li>
            <li className="text-navy-600">
              <strong>Document étranger à utiliser en France :</strong> le document doit être apostillé dans son pays d&apos;origine, puis traduit par un traducteur assermenté inscrit en France.
            </li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Quand l&apos;apostille est-elle nécessaire ?</h2>
          <ul className="space-y-2">
            {[
              "Utilisation d'un document dans un pays signataire de la Convention de La Haye",
              "Mariage à l'étranger (actes d'état civil)",
              "Inscription dans une université étrangère",
              "Création d'entreprise dans un autre pays",
              "Procédures judiciaires internationales",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-navy-600">
                <CheckCircle className="w-4 h-4 text-gold-500 mt-1 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Comment obtenir une apostille en France ?</h2>
          <p className="text-navy-600 leading-relaxed">
            En France, l&apos;apostille est délivrée par le <strong>service de l&apos;apostille de la Cour d&apos;appel</strong> dont dépend l&apos;autorité qui a émis le document. La démarche est gratuite et le délai est généralement de quelques jours à deux semaines.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Pays non signataires : la légalisation consulaire</h2>
          <p className="text-navy-600 leading-relaxed">
            Pour les pays qui n&apos;ont pas signé la Convention de La Haye, une procédure de <strong>légalisation consulaire</strong> remplace l&apos;apostille. Le document doit alors être authentifié par le ministère des Affaires étrangères puis par le consulat du pays de destination. Cette procédure est plus longue et plus coûteuse que l&apos;apostille.
          </p>

          <BlogCTA />
        </div>
      </section>
    </article>
  );
}
