import type { Metadata } from "next";
import Link from "next/link";
import { BlogCTA } from "@/components/BlogCTA";
import { ArrowLeft, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Faire traduire un diplôme étranger : procédure et coût",
  description:
    "Guide complet pour la traduction assermentée de diplômes étrangers en France : procédure, équivalences, prix, délais et organismes compétents.",
  alternates: {
    canonical: "https://agence-traduction-juridique.fr/blog/traduction-diplome-etranger",
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
            Faire traduire un diplôme étranger : procédure et coût
          </h1>
          <p className="text-navy-300 text-sm mt-4">Mis à jour le 25 février 2026 · 6 min de lecture</p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-navy max-w-none">
          <p className="text-lg text-navy-600 leading-relaxed">
            Vous avez obtenu un <strong>diplôme à l&apos;étranger</strong> et souhaitez le faire valoir en France ? La traduction assermentée de vos diplômes et relevés de notes est une étape incontournable pour de nombreuses démarches : poursuite d&apos;études, recherche d&apos;emploi, demande d&apos;équivalence ou naturalisation.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Quand faut-il traduire un diplôme étranger ?</h2>
          <ul className="space-y-2">
            {[
              "Inscription dans une université ou école française",
              "Demande d'équivalence de diplôme (ENIC-NARIC)",
              "Candidature à un concours de la fonction publique",
              "Exercice d'une profession réglementée en France",
              "Dossier de naturalisation française",
              "Recrutement par une entreprise française",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-navy-600">
                <CheckCircle className="w-4 h-4 text-gold-500 mt-1 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Traduction et équivalence : ne pas confondre</h2>
          <p className="text-navy-600 leading-relaxed">
            La <strong>traduction assermentée</strong> du diplôme est différente de l&apos;<strong>attestation de comparabilité</strong> (anciennement &laquo; équivalence &raquo;) délivrée par le centre ENIC-NARIC France. La traduction rend le document compréhensible en français ; l&apos;attestation de comparabilité évalue le niveau du diplôme dans le système français.
          </p>
          <p className="text-navy-600 leading-relaxed">
            Pour obtenir l&apos;attestation de comparabilité, vous devrez fournir la traduction assermentée de votre diplôme. Les deux démarches sont donc complémentaires.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Documents à faire traduire</h2>
          <p className="text-navy-600 leading-relaxed">
            Selon votre démarche, vous pourrez avoir besoin de faire traduire un ou plusieurs des documents suivants : le diplôme lui-même, le supplément au diplôme, les relevés de notes, les attestations de réussite et les programmes de formation.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Prix et délais</h2>
          <p className="text-navy-600 leading-relaxed">
            Le coût de la traduction assermentée d&apos;un diplôme varie entre <strong>35 et 55€</strong> selon la langue et la complexité du document. Les relevés de notes sont facturés en fonction du nombre de pages. Comptez 2 à 3 jours ouvrables en délai standard.
          </p>

          <BlogCTA />
        </div>
      </section>
    </article>
  );
}
