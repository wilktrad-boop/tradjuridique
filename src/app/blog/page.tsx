import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog Traduction Juridique | Guides et Conseils",
  description:
    "Guides pratiques, conseils et informations sur la traduction juridique, assermentée et certifiée. Tout savoir sur vos démarches de traduction officielle.",
  alternates: { canonical: "https://agence-traduction-juridique.fr/blog" },
};

const articles = [
  {
    slug: "difference-traduction-assermentee-certifiee",
    title: "Traduction assermentée ou certifiée : quelle différence ?",
    excerpt:
      "Comprendre les différences essentielles entre une traduction assermentée et une traduction certifiée pour choisir le bon service selon vos besoins.",
    date: "2026-03-15",
    category: "Guide",
  },
  {
    slug: "prix-traduction-assermentee",
    title: "Prix d'une traduction assermentée : tarifs et facteurs",
    excerpt:
      "Découvrez les tarifs moyens d'une traduction assermentée en France, les facteurs qui influencent le prix et comment obtenir le meilleur rapport qualité-prix.",
    date: "2026-03-12",
    category: "Tarifs",
  },
  {
    slug: "traduction-assermentee-permis-de-conduire",
    title: "Traduction assermentée du permis de conduire : guide complet",
    excerpt:
      "Tout ce que vous devez savoir pour faire traduire votre permis de conduire étranger par un traducteur assermenté en France.",
    date: "2026-03-10",
    category: "Guide",
  },
  {
    slug: "traducteur-assermente-comment-devenir",
    title: "Comment devenir traducteur assermenté en France ?",
    excerpt:
      "Les étapes, conditions et démarches pour devenir traducteur assermenté inscrit auprès d'une Cour d'appel en France.",
    date: "2026-03-08",
    category: "Métier",
  },
  {
    slug: "traduction-acte-de-naissance",
    title: "Traduction assermentée d'un acte de naissance : démarches",
    excerpt:
      "Guide pratique pour faire traduire un acte de naissance par un traducteur assermenté : procédure, délais, prix et conseils.",
    date: "2026-03-05",
    category: "Guide",
  },
  {
    slug: "traduction-assermentee-anglais",
    title: "Traduction assermentée anglais-français : tout savoir",
    excerpt:
      "Tout sur la traduction assermentée entre l'anglais et le français : spécificités juridiques, délais, tarifs et points de vigilance.",
    date: "2026-03-03",
    category: "Langues",
  },
  {
    slug: "apostille-traduction-assermentee",
    title: "Apostille et traduction assermentée : guide pratique",
    excerpt:
      "Comprendre le lien entre apostille et traduction assermentée : quand faut-il une apostille, comment l'obtenir et dans quels cas.",
    date: "2026-02-28",
    category: "Guide",
  },
  {
    slug: "traduction-diplome-etranger",
    title: "Faire traduire un diplôme étranger : procédure et coût",
    excerpt:
      "Comment faire traduire un diplôme étranger en France : traduction assermentée, équivalences, procédure et coûts détaillés.",
    date: "2026-02-25",
    category: "Guide",
  },
  {
    slug: "traduction-contrat-commercial-international",
    title: "Traduction de contrats commerciaux internationaux",
    excerpt:
      "Les enjeux de la traduction juridique des contrats commerciaux internationaux : clauses clés, terminologie et erreurs à éviter.",
    date: "2026-02-22",
    category: "Entreprises",
  },
  {
    slug: "traducteur-assermente-cour-appel-liste",
    title: "Liste des traducteurs assermentés : Cour d'appel et démarches",
    excerpt:
      "Comment trouver un traducteur assermenté inscrit auprès de la Cour d'appel : listes officielles, vérifications et conseils.",
    date: "2026-02-20",
    category: "Guide",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-6">
            Blog <span className="text-gold-400">traduction juridique</span>
          </h1>
          <p className="text-lg text-navy-200 max-w-2xl">
            Guides pratiques, conseils et informations pour vos démarches de traduction
            assermentée et certifiée.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="group bg-white rounded-2xl p-8 border border-navy-100 shadow-sm hover:shadow-xl hover:border-gold-200 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="px-3 py-1 bg-gold-50 text-gold-700 text-xs font-semibold rounded-full">
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1 text-navy-400 text-xs">
                    <Calendar className="w-3 h-3" />
                    {new Date(article.date).toLocaleDateString("fr-FR", {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    })}
                  </span>
                </div>
                <h2 className="text-lg font-heading font-bold text-navy-900 mb-3 group-hover:text-gold-600 transition-colors">
                  {article.title}
                </h2>
                <p className="text-navy-600 text-sm leading-relaxed mb-4 flex-1">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center gap-1 text-gold-600 font-semibold text-sm group-hover:gap-2 transition-all">
                  Lire l&apos;article <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
