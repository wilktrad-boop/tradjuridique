import type { Metadata } from "next";
import Link from "next/link";
import { BlogCTA } from "@/components/BlogCTA";
import { ArrowLeft, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Traduction assermentée du permis de conduire : guide complet",
  description:
    "Comment faire traduire votre permis de conduire par un traducteur assermenté ? Procédure, prix, délais et conseils pour l'échange de permis étranger en France.",
  alternates: {
    canonical: "https://agence-traduction-juridique.fr/blog/traduction-assermentee-permis-de-conduire",
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
            Traduction assermentée du permis de conduire : guide complet
          </h1>
          <p className="text-navy-300 text-sm mt-4">Mis à jour le 10 mars 2026 · 5 min de lecture</p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-navy max-w-none">
          <p className="text-lg text-navy-600 leading-relaxed">
            Si vous vous installez en France avec un <strong>permis de conduire étranger</strong>, vous devrez dans la plupart des cas le faire traduire par un <strong>traducteur assermenté</strong>. Cette traduction officielle est indispensable pour demander l&apos;échange de votre permis auprès de la préfecture.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Quand faut-il faire traduire son permis de conduire ?</h2>
          <p className="text-navy-600 leading-relaxed">
            La traduction assermentée de votre permis de conduire est nécessaire dans les cas suivants :
          </p>
          <ul className="space-y-2">
            {[
              "Demande d'échange de permis étranger contre un permis français",
              "Permis rédigé dans un alphabet non latin (arabe, chinois, japonais, cyrillique...)",
              "Permis non conforme aux conventions de Vienne ou de Genève",
              "Contrôle routier si votre permis n'est pas en français",
              "Location de véhicule en France avec un permis étranger",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-navy-600">
                <CheckCircle className="w-4 h-4 text-gold-500 mt-1 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Procédure étape par étape</h2>

          <h3 className="text-lg font-semibold text-navy-800">1. Rassemblez les documents</h3>
          <p className="text-navy-600 leading-relaxed">
            Vous aurez besoin de l&apos;original de votre permis de conduire (recto-verso) en bonne qualité. Une copie lisible suffit pour l&apos;envoi au traducteur, mais l&apos;original sera nécessaire pour la préfecture.
          </p>

          <h3 className="text-lg font-semibold text-navy-800">2. Faites appel à un traducteur assermenté</h3>
          <p className="text-navy-600 leading-relaxed">
            Le traducteur doit impérativement être inscrit sur la liste des experts judiciaires d&apos;une Cour d&apos;appel française. Chez ATJ, tous nos traducteurs remplissent cette condition et connaissent parfaitement le format exigé par les préfectures.
          </p>

          <h3 className="text-lg font-semibold text-navy-800">3. Recevez votre traduction</h3>
          <p className="text-navy-600 leading-relaxed">
            La traduction assermentée de votre permis vous sera remise avec le cachet officiel et la signature du traducteur. Elle est généralement prête sous 24 à 48 heures.
          </p>

          <h3 className="text-lg font-semibold text-navy-800">4. Déposez votre dossier</h3>
          <p className="text-navy-600 leading-relaxed">
            Rendez-vous sur le site de l&apos;ANTS (Agence Nationale des Titres Sécurisés) pour déposer votre demande d&apos;échange de permis en ligne, en joignant la traduction assermentée.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Prix et délais</h2>
          <p className="text-navy-600 leading-relaxed">
            Le prix d&apos;une traduction assermentée de permis de conduire se situe généralement entre <strong>25 et 45€</strong>, selon la langue source. Le délai standard est de 1 à 2 jours ouvrables, avec possibilité de service express sous 24h.
          </p>

          <BlogCTA />

          <h2 className="text-2xl font-heading font-bold text-navy-900">Cas particuliers</h2>

          <h3 className="text-lg font-semibold text-navy-800">Permis international</h3>
          <p className="text-navy-600 leading-relaxed">
            Si vous possédez un permis de conduire international (PCI), la traduction n&apos;est généralement pas nécessaire car ce document est déjà multilingue. Cependant, le PCI n&apos;est valable que temporairement et ne remplace pas l&apos;échange de permis.
          </p>

          <h3 className="text-lg font-semibold text-navy-800">Permis européen</h3>
          <p className="text-navy-600 leading-relaxed">
            Les permis délivrés par les pays de l&apos;Union européenne et de l&apos;Espace économique européen sont directement reconnus en France sans traduction ni échange obligatoire.
          </p>
        </div>
      </section>
    </article>
  );
}
