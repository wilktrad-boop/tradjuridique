import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales",
  description: "Mentions légales du site agence-traduction-juridique.fr - ATJ, Agence de Traduction Juridique.",
  alternates: { canonical: "https://agence-traduction-juridique.fr/mentions-legales" },
};

export default function MentionsLegalesPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white">
            Mentions légales
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose prose-navy max-w-none">
          <h2 className="text-2xl font-heading font-bold text-navy-900 mt-0">1. Éditeur du site</h2>
          <p className="text-navy-600 leading-relaxed">
            Le site <strong>agence-traduction-juridique.fr</strong> est édité par :<br />
            <strong>ATJ — Agence de Traduction Juridique</strong><br />
            Adresse : Paris, France<br />
            Téléphone : <a href="tel:+33675671260" className="text-gold-600 hover:underline">06 75 67 12 60</a><br />
            Email : <a href="mailto:contact@in-and-out-traduction.com" className="text-gold-600 hover:underline">contact@in-and-out-traduction.com</a>
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">2. Directeur de la publication</h2>
          <p className="text-navy-600 leading-relaxed">
            Le directeur de la publication est le représentant légal de ATJ — Agence de Traduction Juridique.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">3. Hébergement</h2>
          <p className="text-navy-600 leading-relaxed">
            Le site est hébergé par :<br />
            <strong>Vercel Inc.</strong><br />
            440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
            Site web : vercel.com
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">4. Propriété intellectuelle</h2>
          <p className="text-navy-600 leading-relaxed">
            L&apos;ensemble du contenu du site agence-traduction-juridique.fr (textes, images, graphismes, logo, icônes, etc.) est la propriété exclusive de ATJ — Agence de Traduction Juridique, sauf mention contraire. Toute reproduction, représentation, modification, publication, adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l&apos;autorisation écrite préalable de ATJ.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">5. Limitation de responsabilité</h2>
          <p className="text-navy-600 leading-relaxed">
            ATJ — Agence de Traduction Juridique s&apos;efforce de fournir sur le site des informations aussi précises que possible. Toutefois, ATJ ne pourra être tenue responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu&apos;elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
          </p>
          <p className="text-navy-600 leading-relaxed">
            Toutes les informations indiquées sur le site sont données à titre indicatif et sont susceptibles d&apos;évoluer. Les informations contenues sur le site ne sont pas contractuelles.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">6. Liens hypertextes</h2>
          <p className="text-navy-600 leading-relaxed">
            Le site agence-traduction-juridique.fr peut contenir des liens hypertextes vers d&apos;autres sites. Cependant, ATJ n&apos;a pas la possibilité de vérifier le contenu des sites ainsi visités et n&apos;assumera en conséquence aucune responsabilité de ce fait.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">7. Droit applicable</h2>
          <p className="text-navy-600 leading-relaxed">
            Tout litige en relation avec l&apos;utilisation du site agence-traduction-juridique.fr est soumis au droit français. L&apos;utilisateur du site reconnaît la compétence exclusive des tribunaux compétents de Paris.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">8. Contact</h2>
          <p className="text-navy-600 leading-relaxed">
            Pour toute question relative aux mentions légales du site, vous pouvez nous contacter :<br />
            Email : <a href="mailto:contact@in-and-out-traduction.com" className="text-gold-600 hover:underline">contact@in-and-out-traduction.com</a><br />
            Téléphone : <a href="tel:+33675671260" className="text-gold-600 hover:underline">06 75 67 12 60</a>
          </p>
        </div>
      </section>
    </>
  );
}
