import type { Metadata } from "next";
import Link from "next/link";
import { BlogCTA } from "@/components/BlogCTA";
import { ArrowLeft, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Traduction assermentée ou certifiée : quelle différence ?",
  description:
    "Découvrez les différences entre traduction assermentée et traduction certifiée : valeur légale, usage, prix. Guide complet pour choisir le bon type de traduction.",
  alternates: {
    canonical: "https://agence-traduction-juridique.fr/blog/difference-traduction-assermentee-certifiee",
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
            Traduction assermentée ou certifiée : quelle différence ?
          </h1>
          <p className="text-navy-300 text-sm mt-4">Mis à jour le 15 mars 2026 · 6 min de lecture</p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-navy max-w-none">
          <p className="text-lg text-navy-600 leading-relaxed">
            Lorsque vous devez faire traduire un document officiel, deux termes reviennent souvent : <strong>traduction assermentée</strong> et <strong>traduction certifiée</strong>. Bien qu&apos;ils soient parfois utilisés de manière interchangeable, ces deux types de traduction présentent des différences fondamentales qu&apos;il est essentiel de comprendre pour choisir le service adapté à vos besoins.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Qu&apos;est-ce qu&apos;une traduction assermentée ?</h2>
          <p className="text-navy-600 leading-relaxed">
            Une <strong>traduction assermentée</strong> est une traduction réalisée par un traducteur inscrit sur la liste officielle des experts judiciaires d&apos;une <strong>Cour d&apos;appel</strong>. Ce traducteur a prêté serment devant un tribunal, ce qui confère à ses traductions une <strong>valeur légale officielle</strong>.
          </p>
          <p className="text-navy-600 leading-relaxed">
            La traduction assermentée porte le cachet officiel du traducteur, sa signature et son numéro d&apos;inscription auprès de la Cour d&apos;appel. Elle est indissociable du document original et est reconnue par toutes les administrations françaises et par de nombreuses institutions étrangères.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Qu&apos;est-ce qu&apos;une traduction certifiée ?</h2>
          <p className="text-navy-600 leading-relaxed">
            Une <strong>traduction certifiée conforme</strong> est une traduction accompagnée d&apos;une attestation signée par le traducteur professionnel, certifiant que la traduction est fidèle et complète par rapport au document original. Contrairement à la traduction assermentée, elle ne nécessite pas que le traducteur soit inscrit auprès d&apos;un tribunal.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Tableau comparatif</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-navy-700 border-collapse not-prose">
              <thead>
                <tr className="bg-navy-50">
                  <th className="text-left p-4 font-semibold text-navy-900 border border-navy-200">Critère</th>
                  <th className="text-left p-4 font-semibold text-navy-900 border border-navy-200">Assermentée</th>
                  <th className="text-left p-4 font-semibold text-navy-900 border border-navy-200">Certifiée</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Valeur légale", "Officielle", "Variable selon l'organisme"],
                  ["Traducteur", "Inscrit à la Cour d'appel", "Professionnel qualifié"],
                  ["Cachet officiel", "Oui, avec n° d'inscription", "Attestation signée"],
                  ["Acceptée par les tribunaux", "Oui", "Non garanti"],
                  ["Prix moyen", "À partir de 30€/page", "À partir de 20€/page"],
                  ["Délai", "2-5 jours", "1-3 jours"],
                ].map(([critere, asser, cert]) => (
                  <tr key={critere} className="hover:bg-navy-50/50">
                    <td className="p-4 border border-navy-200 font-medium">{critere}</td>
                    <td className="p-4 border border-navy-200">{asser}</td>
                    <td className="p-4 border border-navy-200">{cert}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Quand choisir une traduction assermentée ?</h2>
          <ul className="space-y-2">
            {[
              "Procédures judiciaires et administratives en France",
              "Dossier de naturalisation ou titre de séjour",
              "Actes d'état civil pour un mariage en France",
              "Inscription dans une université publique française",
              "Démarches auprès d'un notaire",
              "Documents exigés par un tribunal ou une préfecture",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-navy-600">
                <CheckCircle className="w-4 h-4 text-gold-500 mt-1 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Quand choisir une traduction certifiée ?</h2>
          <ul className="space-y-2">
            {[
              "Candidature dans une université privée ou à l'étranger",
              "Dossier d'embauche dans une entreprise internationale",
              "Usage interne dans une société",
              "Traduction de documents commerciaux non contentieux",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-navy-600">
                <CheckCircle className="w-4 h-4 text-navy-400 mt-1 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Notre conseil</h2>
          <p className="text-navy-600 leading-relaxed">
            En cas de doute, privilégiez toujours la <strong>traduction assermentée</strong>. Elle est acceptée dans tous les cas où une traduction certifiée est demandée, mais l&apos;inverse n&apos;est pas vrai. C&apos;est un investissement qui vous évitera de devoir refaire la traduction ultérieurement.
          </p>

          <div className="not-prose bg-navy-50 border border-navy-100 rounded-xl p-6 my-8">
            <p className="text-xs font-semibold text-navy-400 uppercase tracking-wide mb-3">À lire aussi</p>
            <ul className="space-y-2">
              <li><Link href="/traduction-assermentee" className="text-gold-600 hover:text-gold-700 font-medium text-sm hover:underline">Notre service de traduction assermentée →</Link></li>
              <li><Link href="/traduction-certifiee" className="text-gold-600 hover:text-gold-700 font-medium text-sm hover:underline">Notre service de traduction certifiée conforme →</Link></li>
              <li><Link href="/blog/prix-traduction-assermentee" className="text-gold-600 hover:text-gold-700 font-medium text-sm hover:underline">Prix d&apos;une traduction assermentée : tarifs 2026 →</Link></li>
            </ul>
          </div>

          <BlogCTA />

          <h2 className="text-2xl font-heading font-bold text-navy-900">Questions fréquentes</h2>

          <h3 className="text-lg font-semibold text-navy-800">Une traduction certifiée a-t-elle une valeur légale ?</h3>
          <p className="text-navy-600 leading-relaxed">
            Cela dépend de l&apos;organisme demandeur. Certaines administrations acceptent une traduction certifiée, d&apos;autres exigent une traduction assermentée. Vérifiez toujours les exigences spécifiques avant de commander.
          </p>

          <h3 className="text-lg font-semibold text-navy-800">Peut-on faire certifier une traduction a posteriori ?</h3>
          <p className="text-navy-600 leading-relaxed">
            Non, une traduction assermentée doit être réalisée dès le départ par un traducteur assermenté. Un traducteur assermenté ne peut pas apposer son cachet sur une traduction qu&apos;il n&apos;a pas réalisée lui-même.
          </p>
        </div>
      </section>
    </article>
  );
}
