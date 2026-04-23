import type { Metadata } from "next";
import Link from "next/link";
import { BlogCTA } from "@/components/BlogCTA";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Prix d'une traduction assermentée : tarifs 2026",
  description:
    "Combien coûte une traduction assermentée en France ? Tarifs moyens par langue, par document et facteurs influençant le prix. Guide des prix 2026.",
  alternates: {
    canonical: "https://www.agence-traduction-juridique.fr/blog/prix-traduction-assermentee",
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
          <span className="px-3 py-1 bg-gold-500/10 text-gold-300 text-xs font-semibold rounded-full">Tarifs</span>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white mt-4 leading-tight">
            Prix d&apos;une traduction assermentée : tarifs et facteurs
          </h1>
          <p className="text-navy-300 text-sm mt-4">Mis à jour le 12 mars 2026 · 5 min de lecture</p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-navy max-w-none">
          <p className="text-lg text-navy-600 leading-relaxed">
            Le <strong>prix d&apos;une traduction assermentée</strong> est l&apos;une des premières questions que se posent nos clients. Les tarifs varient selon plusieurs facteurs, mais il est possible de donner des fourchettes indicatives pour vous aider à budgétiser votre projet.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Tarifs moyens par type de document</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-navy-700 border-collapse not-prose">
              <thead>
                <tr className="bg-navy-50">
                  <th className="text-left p-4 font-semibold text-navy-900 border border-navy-200">Document</th>
                  <th className="text-left p-4 font-semibold text-navy-900 border border-navy-200">Prix moyen</th>
                  <th className="text-left p-4 font-semibold text-navy-900 border border-navy-200">Délai</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Acte de naissance", "45 - 75€", "2-3 jours"],
                  ["Acte de mariage", "45 - 75€", "2-3 jours"],
                  ["Permis de conduire", "38 - 68€", "1-2 jours"],
                  ["Diplôme", "53 - 83€", "2-3 jours"],
                  ["Casier judiciaire", "45 - 75€", "2-3 jours"],
                  ["Contrat (par page)", "53 - 98€", "3-5 jours"],
                  ["Acte notarié (par page)", "60 - 105€", "3-5 jours"],
                  ["Statuts de société (par page)", "53 - 90€", "3-5 jours"],
                ].map(([doc, prix, delai]) => (
                  <tr key={doc} className="hover:bg-navy-50/50">
                    <td className="p-4 border border-navy-200 font-medium">{doc}</td>
                    <td className="p-4 border border-navy-200">{prix}</td>
                    <td className="p-4 border border-navy-200">{delai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-navy-500 text-sm italic">Ces tarifs sont indicatifs et peuvent varier selon la paire de langues et la complexité.</p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Facteurs qui influencent le prix</h2>

          <h3 className="text-lg font-semibold text-navy-800">La paire de langues</h3>
          <p className="text-navy-600 leading-relaxed">
            Les traductions depuis ou vers des langues courantes (anglais, espagnol, allemand) sont généralement moins chères que les langues rares (japonais, coréen, arabe). L&apos;offre de traducteurs assermentés pour les langues rares étant limitée, les tarifs sont naturellement plus élevés.
          </p>

          <h3 className="text-lg font-semibold text-navy-800">Le volume du document</h3>
          <p className="text-navy-600 leading-relaxed">
            Les documents courts (1-2 pages) comme les actes de naissance sont souvent facturés au forfait. Pour les documents longs (contrats, statuts), la facturation se fait généralement à la page ou au mot, avec des tarifs dégressifs pour les gros volumes.
          </p>

          <h3 className="text-lg font-semibold text-navy-800">L&apos;urgence</h3>
          <p className="text-navy-600 leading-relaxed">
            Un service express (24-48h) entraîne un surcoût de 30 à 100% par rapport au tarif standard. Anticipez vos besoins pour bénéficier des meilleurs tarifs.
          </p>

          <h3 className="text-lg font-semibold text-navy-800">La complexité juridique</h3>
          <p className="text-navy-600 leading-relaxed">
            Un contrat d&apos;acquisition d&apos;entreprise ou un brevet technique nécessite plus de temps et d&apos;expertise qu&apos;un acte de naissance. La complexité du vocabulaire juridique impacte directement le tarif.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Comment obtenir le meilleur prix ?</h2>
          <p className="text-navy-600 leading-relaxed">
            Pour obtenir le meilleur tarif pour votre traduction assermentée, nous vous conseillons de demander plusieurs devis, d&apos;anticiper vos besoins pour éviter les frais d&apos;urgence, et de regrouper vos documents si vous en avez plusieurs à faire traduire — les agences proposent souvent des tarifs dégressifs.
          </p>

          <div className="not-prose bg-navy-50 border border-navy-100 rounded-xl p-6 my-8">
            <p className="text-xs font-semibold text-navy-400 uppercase tracking-wide mb-3">À lire aussi</p>
            <ul className="space-y-2">
              <li><Link href="/tarifs" className="text-gold-600 hover:text-gold-700 font-medium text-sm hover:underline">Voir nos tarifs détaillés par formule →</Link></li>
              <li><Link href="/traduction-assermentee" className="text-gold-600 hover:text-gold-700 font-medium text-sm hover:underline">Notre service de traduction assermentée →</Link></li>
              <li><Link href="/blog/difference-traduction-assermentee-certifiee" className="text-gold-600 hover:text-gold-700 font-medium text-sm hover:underline">Traduction assermentée ou certifiée : quelle différence ? →</Link></li>
            </ul>
          </div>

          <BlogCTA />

          <h2 className="text-2xl font-heading font-bold text-navy-900">Questions fréquentes</h2>

          <h3 className="text-lg font-semibold text-navy-800">Les tarifs des traducteurs assermentés sont-ils réglementés ?</h3>
          <p className="text-navy-600 leading-relaxed">
            Non, les tarifs des traducteurs assermentés sont libres en France. Il n&apos;existe pas de grille tarifaire officielle, ce qui explique les écarts de prix entre les professionnels. C&apos;est pourquoi il est recommandé de demander un devis avant toute commande.
          </p>

          <h3 className="text-lg font-semibold text-navy-800">La TVA s&apos;applique-t-elle ?</h3>
          <p className="text-navy-600 leading-relaxed">
            Cela dépend du statut du traducteur. Les traducteurs en auto-entreprise sous le seuil de franchise sont exonérés de TVA. Les agences de traduction appliquent généralement la TVA au taux normal de 20%.
          </p>
        </div>
      </section>
    </article>
  );
}
