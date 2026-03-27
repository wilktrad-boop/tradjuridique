import type { Metadata } from "next";
import Link from "next/link";
import { BlogCTA } from "@/components/BlogCTA";
import { ArrowLeft, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Traduction assermentée d'un acte de naissance : guide complet",
  description:
    "Comment faire traduire un acte de naissance par un traducteur assermenté ? Démarches, prix, délais et cas d'usage (mariage, naturalisation, études).",
  alternates: {
    canonical: "https://agence-traduction-juridique.fr/blog/traduction-acte-de-naissance",
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
            Traduction assermentée d&apos;un acte de naissance : démarches
          </h1>
          <p className="text-navy-300 text-sm mt-4">Mis à jour le 5 mars 2026 · 5 min de lecture</p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-navy max-w-none">
          <p className="text-lg text-navy-600 leading-relaxed">
            L&apos;<strong>acte de naissance</strong> est l&apos;un des documents les plus fréquemment soumis à la traduction assermentée. Que ce soit pour un mariage, une demande de naturalisation, une inscription universitaire ou une procédure d&apos;immigration, la traduction officielle de ce document est souvent indispensable.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Quand faut-il traduire un acte de naissance ?</h2>
          <ul className="space-y-2">
            {[
              "Mariage en France avec un ressortissant étranger",
              "Demande de nationalité française (naturalisation)",
              "Demande de titre de séjour ou de visa",
              "Inscription dans un établissement scolaire ou universitaire",
              "Constitution d'un dossier de PACS",
              "Procédure d'adoption internationale",
              "Démarches notariales (succession, donation)",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-navy-600">
                <CheckCircle className="w-4 h-4 text-gold-500 mt-1 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Quelle version de l&apos;acte de naissance ?</h2>
          <p className="text-navy-600 leading-relaxed">
            Il existe plusieurs types d&apos;actes de naissance : la <strong>copie intégrale</strong>, l&apos;<strong>extrait avec filiation</strong> et l&apos;<strong>extrait sans filiation</strong>. La version demandée dépend de l&apos;organisme destinataire. Pour un mariage ou une naturalisation, la copie intégrale est généralement requise.
          </p>
          <p className="text-navy-600 leading-relaxed">
            Assurez-vous de fournir un document récent (moins de 3 à 6 mois selon l&apos;organisme) pour éviter un rejet de votre dossier.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Procédure de traduction</h2>
          <p className="text-navy-600 leading-relaxed">
            La procédure est simple et rapide. Envoyez-nous une copie lisible de votre acte de naissance par email ou via notre formulaire de devis. Nous vous retournerons un devis gratuit sous 2 heures. Une fois le devis validé, le traducteur assermenté réalise la traduction, y appose son cachet officiel et sa signature.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Prix et délais</h2>
          <p className="text-navy-600 leading-relaxed">
            Le prix d&apos;une traduction assermentée d&apos;acte de naissance se situe entre <strong>30 et 50€</strong> selon la langue. Le délai standard est de 2 à 3 jours ouvrables. Un service express sous 24h est disponible moyennant un supplément.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Faut-il une apostille ?</h2>
          <p className="text-navy-600 leading-relaxed">
            L&apos;apostille est un cachet officiel apposé par le tribunal compétent du pays d&apos;origine qui authentifie la signature et le sceau du document. Certains pays et certaines administrations l&apos;exigent en complément de la traduction assermentée. Pour les pays signataires de la Convention de La Haye, l&apos;apostille suffit. Pour les autres, une légalisation consulaire peut être nécessaire.
          </p>

          <BlogCTA />

          <h2 className="text-2xl font-heading font-bold text-navy-900">Questions fréquentes</h2>

          <h3 className="text-lg font-semibold text-navy-800">Quelle est la durée de validité d&apos;une traduction d&apos;acte de naissance ?</h3>
          <p className="text-navy-600 leading-relaxed">
            La traduction assermentée elle-même n&apos;a pas de date d&apos;expiration. En revanche, l&apos;acte de naissance original doit souvent être récent (moins de 3 ou 6 mois). Si vous devez refaire l&apos;acte, la traduction devra également être refaite.
          </p>

          <h3 className="text-lg font-semibold text-navy-800">Peut-on envoyer une copie numérique ?</h3>
          <p className="text-navy-600 leading-relaxed">
            Oui, vous pouvez nous envoyer un scan ou une photo lisible de votre acte de naissance pour la réalisation du devis et de la traduction. La traduction assermentée finale vous sera envoyée en version numérique (PDF) et/ou par courrier postal.
          </p>
        </div>
      </section>
    </article>
  );
}
