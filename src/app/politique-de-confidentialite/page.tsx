import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
  description: "Politique de confidentialité du site agence-traduction-juridique.fr - ATJ, Agence de Traduction Juridique.",
  alternates: { canonical: "https://www.agence-traduction-juridique.fr/politique-de-confidentialite" },
};

export default function PolitiqueConfidentialitePage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white">
            Politique de confidentialité
          </h1>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 prose prose-navy max-w-none">
          <p className="text-navy-600 leading-relaxed">
            La présente politique de confidentialité décrit comment ATJ — Agence de Traduction Juridique collecte, utilise et protège les informations personnelles que vous nous fournissez via le site agence-traduction-juridique.fr.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">1. Responsable du traitement</h2>
          <p className="text-navy-600 leading-relaxed">
            Le responsable du traitement des données personnelles est :<br />
            <strong>ATJ — Agence de Traduction Juridique</strong><br />
            Email : <a href="mailto:contact@agence-traduction-juridique.fr" className="text-gold-600 hover:underline">contact@agence-traduction-juridique.fr</a><br />
            Téléphone : <a href="tel:+33675671260" className="text-gold-600 hover:underline">06 75 67 12 60</a>
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">2. Données collectées</h2>
          <p className="text-navy-600 leading-relaxed">
            Nous collectons les données personnelles que vous nous transmettez volontairement via nos formulaires de contact et de demande de devis :
          </p>
          <ul className="text-navy-600">
            <li>Nom et prénom</li>
            <li>Adresse email</li>
            <li>Numéro de téléphone</li>
            <li>Nom de la société ou du cabinet (le cas échéant)</li>
            <li>Détails relatifs à votre demande de traduction</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-navy-900">3. Finalités du traitement</h2>
          <p className="text-navy-600 leading-relaxed">
            Vos données personnelles sont collectées pour les finalités suivantes :
          </p>
          <ul className="text-navy-600">
            <li>Répondre à vos demandes de contact et d&apos;information</li>
            <li>Établir et vous transmettre des devis personnalisés</li>
            <li>Assurer le suivi de vos commandes de traduction</li>
            <li>Vous recontacter dans le cadre de votre demande</li>
          </ul>

          <h2 className="text-2xl font-heading font-bold text-navy-900">4. Base légale du traitement</h2>
          <p className="text-navy-600 leading-relaxed">
            Le traitement de vos données repose sur votre consentement, que vous exprimez en soumettant un formulaire sur notre site. Vous pouvez retirer votre consentement à tout moment en nous contactant.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">5. Destinataires des données</h2>
          <p className="text-navy-600 leading-relaxed">
            Vos données personnelles sont traitées uniquement par ATJ — Agence de Traduction Juridique. Elles ne sont ni vendues, ni louées, ni cédées à des tiers. Les formulaires du site utilisent le service Formspree pour la transmission sécurisée des messages.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">6. Durée de conservation</h2>
          <p className="text-navy-600 leading-relaxed">
            Vos données personnelles sont conservées pendant une durée maximale de 3 ans à compter de votre dernière interaction avec ATJ, sauf obligation légale de conservation plus longue.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">7. Vos droits</h2>
          <p className="text-navy-600 leading-relaxed">
            Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez des droits suivants concernant vos données personnelles :
          </p>
          <ul className="text-navy-600">
            <li><strong>Droit d&apos;accès :</strong> obtenir la confirmation que vos données sont traitées et en recevoir une copie</li>
            <li><strong>Droit de rectification :</strong> demander la correction de données inexactes ou incomplètes</li>
            <li><strong>Droit à l&apos;effacement :</strong> demander la suppression de vos données personnelles</li>
            <li><strong>Droit à la limitation :</strong> demander la limitation du traitement de vos données</li>
            <li><strong>Droit à la portabilité :</strong> recevoir vos données dans un format structuré</li>
            <li><strong>Droit d&apos;opposition :</strong> vous opposer au traitement de vos données</li>
          </ul>
          <p className="text-navy-600 leading-relaxed">
            Pour exercer ces droits, contactez-nous à l&apos;adresse : <a href="mailto:contact@agence-traduction-juridique.fr" className="text-gold-600 hover:underline">contact@agence-traduction-juridique.fr</a>
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">8. Cookies</h2>
          <p className="text-navy-600 leading-relaxed">
            Le site agence-traduction-juridique.fr utilise uniquement des cookies techniques strictement nécessaires au fonctionnement du site. Aucun cookie publicitaire ou de suivi n&apos;est utilisé. Aucun outil d&apos;analyse de trafic tiers n&apos;est installé sur le site.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">9. Sécurité</h2>
          <p className="text-navy-600 leading-relaxed">
            ATJ — Agence de Traduction Juridique met en œuvre les mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre tout accès non autorisé, toute modification, divulgation ou destruction. Le site utilise le protocole HTTPS pour sécuriser les échanges de données.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">10. Réclamation</h2>
          <p className="text-navy-600 leading-relaxed">
            Si vous estimez que le traitement de vos données personnelles constitue une violation du RGPD, vous avez le droit d&apos;introduire une réclamation auprès de la CNIL (Commission Nationale de l&apos;Informatique et des Libertés) : <strong>www.cnil.fr</strong>.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">11. Modification de la politique</h2>
          <p className="text-navy-600 leading-relaxed">
            ATJ se réserve le droit de modifier la présente politique de confidentialité à tout moment. Toute modification sera publiée sur cette page. Nous vous encourageons à consulter régulièrement cette page.
          </p>

          <p className="text-navy-500 text-sm mt-12 pt-6 border-t border-navy-100">
            Dernière mise à jour : mars 2026
          </p>
        </div>
      </section>
    </>
  );
}
