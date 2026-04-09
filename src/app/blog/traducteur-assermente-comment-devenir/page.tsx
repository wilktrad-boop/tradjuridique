import type { Metadata } from "next";
import Link from "next/link";
import { BlogCTA } from "@/components/BlogCTA";
import { ArrowLeft, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Comment devenir traducteur assermenté en France ?",
  description:
    "Guide complet pour devenir traducteur assermenté : conditions, formation, inscription auprès de la Cour d'appel, procédure et conseils pratiques.",
  alternates: {
    canonical: "https://www.agence-traduction-juridique.fr/blog/traducteur-assermente-comment-devenir",
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
          <span className="px-3 py-1 bg-gold-500/10 text-gold-300 text-xs font-semibold rounded-full">Métier</span>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white mt-4 leading-tight">
            Comment devenir traducteur assermenté en France ?
          </h1>
          <p className="text-navy-300 text-sm mt-4">Mis à jour le 8 mars 2026 · 7 min de lecture</p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-navy max-w-none">
          <p className="text-lg text-navy-600 leading-relaxed">
            Devenir <strong>traducteur assermenté</strong> (ou traducteur expert judiciaire) est un objectif pour de nombreux traducteurs professionnels souhaitant exercer dans le domaine juridique. Ce statut confère la capacité de produire des traductions ayant une <strong>valeur légale officielle</strong>. Voici les étapes et conditions à remplir.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Qu&apos;est-ce qu&apos;un traducteur assermenté ?</h2>
          <p className="text-navy-600 leading-relaxed">
            Un traducteur assermenté est un traducteur professionnel inscrit sur la <strong>liste des experts judiciaires</strong> établie par une Cour d&apos;appel. Il a prêté serment devant la Cour, s&apos;engageant à exercer sa mission avec honneur, probité et consciencieusement. Ses traductions portent un cachet officiel et ont une valeur légale.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Conditions requises</h2>
          <ul className="space-y-2">
            {[
              "Être de nationalité française ou ressortissant européen",
              "Avoir un casier judiciaire vierge (bulletin n°2)",
              "Justifier de compétences linguistiques et techniques solides",
              "Posséder un diplôme en traduction, langues ou droit (recommandé)",
              "Avoir une expérience professionnelle significative en traduction",
              "Être inscrit en tant que professionnel (auto-entrepreneur, société...)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-navy-600">
                <CheckCircle className="w-4 h-4 text-gold-500 mt-1 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Procédure d&apos;inscription</h2>

          <h3 className="text-lg font-semibold text-navy-800">Étape 1 : Constituer le dossier de candidature</h3>
          <p className="text-navy-600 leading-relaxed">
            Le dossier comprend une lettre de motivation adressée au Procureur de la République, un CV détaillé, les copies de vos diplômes, une attestation d&apos;inscription professionnelle, un extrait de casier judiciaire et des échantillons de traductions réalisées.
          </p>

          <h3 className="text-lg font-semibold text-navy-800">Étape 2 : Déposer le dossier</h3>
          <p className="text-navy-600 leading-relaxed">
            Le dossier doit être déposé au <strong>Procureur de la République</strong> du Tribunal judiciaire de votre domicile, généralement avant le mois de mars pour l&apos;année suivante. Le Procureur transmet ensuite votre dossier à la Cour d&apos;appel avec son avis.
          </p>

          <h3 className="text-lg font-semibold text-navy-800">Étape 3 : L&apos;instruction par la Cour d&apos;appel</h3>
          <p className="text-navy-600 leading-relaxed">
            L&apos;assemblée générale des magistrats de la Cour d&apos;appel examine votre dossier et émet un avis. La décision est prise en considérant vos compétences, votre expérience et les besoins locaux en traducteurs pour votre paire de langues.
          </p>

          <h3 className="text-lg font-semibold text-navy-800">Étape 4 : La prestation de serment</h3>
          <p className="text-navy-600 leading-relaxed">
            Si votre candidature est acceptée, vous serez convoqué pour prêter serment devant la Cour d&apos;appel. Vous serez alors inscrit sur la liste des experts judiciaires pour une <strong>période probatoire de 3 ans</strong>, renouvelable ensuite par périodes de 5 ans.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Combien de temps prend la procédure ?</h2>
          <p className="text-navy-600 leading-relaxed">
            Comptez entre 6 et 18 mois entre le dépôt du dossier et la prestation de serment. Les délais varient selon les Cours d&apos;appel et le nombre de candidatures. Nous vous recommandons de vous renseigner auprès du greffe de votre Cour d&apos;appel pour connaître les dates limites de dépôt.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Différence entre expert judiciaire et traducteur assermenté</h2>
          <p className="text-navy-600 leading-relaxed">
            Dans la pratique, les termes sont souvent utilisés de manière interchangeable. Techniquement, le traducteur est inscrit sur la liste des <strong>experts judiciaires</strong> en qualité de traducteur-interprète. Le titre officiel est &laquo; expert judiciaire en traduction &raquo;, mais l&apos;appellation courante reste &laquo; traducteur assermenté &raquo;.
          </p>

          <div className="not-prose bg-navy-50 border border-navy-100 rounded-xl p-6 my-8">
            <p className="text-xs font-semibold text-navy-400 uppercase tracking-wide mb-3">À lire aussi</p>
            <ul className="space-y-2">
              <li><Link href="/blog/traducteur-assermente-cour-appel-liste" className="text-gold-600 hover:text-gold-700 font-medium text-sm hover:underline">Liste des traducteurs assermentés inscrits à la Cour d&apos;appel →</Link></li>
              <li><Link href="/traduction-assermentee" className="text-gold-600 hover:text-gold-700 font-medium text-sm hover:underline">Notre service de traduction assermentée →</Link></li>
            </ul>
          </div>

          <BlogCTA />
        </div>
      </section>
    </article>
  );
}
