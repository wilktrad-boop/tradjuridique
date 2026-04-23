import type { Metadata } from "next";
import Link from "next/link";
import { BlogCTA } from "@/components/BlogCTA";
import { ArrowLeft, CheckCircle, AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Traduction assermentée d'un acte de mariage : guide complet 2026",
  description:
    "Tout savoir sur la traduction assermentée d'un acte de mariage : cas d'usage, quelle version fournir, prix, délais, apostille et FAQ complète.",
  alternates: {
    canonical: "https://www.agence-traduction-juridique.fr/blog/traduction-assermentee-acte-de-mariage",
  },
};

export default function Article() {
  return (
    <article>
      <section className="bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-navy-300 hover:text-gold-400 text-sm mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Retour au blog
          </Link>
          <span className="px-3 py-1 bg-gold-500/10 text-gold-300 text-xs font-semibold rounded-full">Guide</span>
          <h1 className="text-3xl sm:text-4xl font-heading font-bold text-white mt-4 leading-tight">
            Traduction assermentée d&apos;un acte de mariage : tout ce qu&apos;il faut savoir
          </h1>
          <p className="text-navy-300 text-sm mt-4">Mis à jour le 9 avril 2026 · 7 min de lecture</p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 prose prose-navy max-w-none">
          <p className="text-lg text-navy-600 leading-relaxed">
            L&apos;<strong>acte de mariage</strong> fait partie des documents d&apos;état civil les plus fréquemment soumis à
            une traduction assermentée. Mariage mixte, regroupement familial, naturalisation, déménagement à
            l&apos;étranger ou succession internationale : les situations qui l&apos;imposent sont nombreuses et souvent
            urgentes. Ce guide vous explique exactement ce dont vous avez besoin — sans vous faire perdre de temps.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Dans quels cas faut-il une traduction assermentée d&apos;acte de mariage ?</h2>
          <p className="text-navy-600 leading-relaxed">
            Une traduction assermentée est exigée chaque fois qu&apos;une administration française ou étrangère doit
            vérifier officiellement votre situation matrimoniale. Voici les situations les plus courantes :
          </p>
          <ul className="space-y-2 not-prose">
            {[
              "Mariage en France lorsque l'un des époux est étranger (consultation préalable à la mairie)",
              "Demande de naturalisation ou acquisition de la nationalité française",
              "Demande de titre de séjour ou de regroupement familial",
              "Obtention d'un visa long séjour pour un conjoint étranger",
              "Constitution d'un dossier de succession internationale",
              "Reconnaissance du mariage à l'étranger (expatriation, retraite hors de France)",
              "Démarches consulaires ou ambassadorielles",
              "Changement de nom après mariage auprès d'une administration étrangère",
              "Procédure de divorce devant une juridiction étrangère",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-navy-600">
                <CheckCircle className="w-4 h-4 text-gold-500 mt-1 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-heading font-bold text-navy-900 mt-8">Acte de mariage français à l&apos;étranger ou acte étranger en France : deux situations distinctes</h2>
          <p className="text-navy-600 leading-relaxed">
            C&apos;est un point que beaucoup de demandeurs confondent, et qui peut bloquer un dossier entier.
          </p>
          <p className="text-navy-600 leading-relaxed">
            <strong>Cas 1 — Vous êtes marié en France et vous avez besoin de faire reconnaître ce mariage à l&apos;étranger.</strong>{" "}
            Votre acte de mariage français doit être traduit par un traducteur assermenté dans la langue du pays
            destinataire. Selon le pays, une apostille de la Cour d&apos;appel compétente peut également être nécessaire
            (voir plus bas).
          </p>
          <p className="text-navy-600 leading-relaxed">
            <strong>Cas 2 — Vous êtes marié à l&apos;étranger et vous devez faire reconnaître ce mariage en France.</strong>{" "}
            Votre acte de mariage étranger doit être traduit en français par un traducteur assermenté. Selon le pays
            d&apos;origine du document, une légalisation ou une apostille peut être demandée au préalable par
            l&apos;administration française.
          </p>
          <p className="text-navy-600 leading-relaxed">
            Dans les deux cas, la traduction doit être réalisée par un traducteur inscrit sur la liste officielle d&apos;une
            Cour d&apos;appel française. Une traduction faite par un traducteur non assermenté — ou pire, par une application
            en ligne — ne sera pas acceptée.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Quelle version de l&apos;acte de mariage faut-il fournir ?</h2>
          <p className="text-navy-600 leading-relaxed">
            En France, l&apos;acte de mariage existe en deux versions : la <strong>copie intégrale</strong> et
            l&apos;<strong>extrait avec ou sans filiation</strong>. La grande majorité des administrations — préfectures,
            consulats, notaires — exigent la <strong>copie intégrale</strong>, qui reprend toutes les mentions en marge
            (divorce, séparation de corps, changement de régime matrimonial, etc.).
          </p>
          <p className="text-navy-600 leading-relaxed">
            Vérifiez toujours auprès de l&apos;organisme destinataire la version exacte qu&apos;il accepte avant de
            commander votre traduction. Fournir l&apos;extrait alors que la copie intégrale est requise entraîne
            systématiquement un rejet du dossier.
          </p>
          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3 not-prose my-6">
            <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <p className="text-amber-800 text-sm leading-relaxed">
              <strong>Fraîcheur du document :</strong> certaines administrations exigent un acte de mariage datant de
              moins de 3 à 6 mois. Vérifiez ce délai avant de demander l&apos;acte en mairie — si l&apos;acte est trop
              ancien, vous devrez en redemander un et refaire la traduction.
            </p>
          </div>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Comment se déroule la traduction assermentée d&apos;un acte de mariage ?</h2>
          <p className="text-navy-600 leading-relaxed">
            La procédure est simple et peut se faire entièrement à distance :
          </p>
          <ol className="space-y-3 text-navy-600 leading-relaxed">
            <li>
              <strong>1. Envoi du document.</strong> Transmettez une copie scannée ou une photo lisible de votre acte
              de mariage. Pas besoin d&apos;envoyer l&apos;original à ce stade.
            </li>
            <li>
              <strong>2. Devis gratuit.</strong> Nous vous retournons un devis précis sous quelques heures, sans
              engagement.
            </li>
            <li>
              <strong>3. Traduction par un traducteur assermenté.</strong> Le traducteur retranscrit intégralement le
              document — y compris toutes les mentions marginales — en respectant fidèlement la mise en page originale.
              Il appose son cachet officiel et sa signature, qui confèrent à la traduction sa valeur légale.
            </li>
            <li>
              <strong>4. Livraison.</strong> Vous recevez la traduction en PDF par email, et par courrier postal si
              l&apos;original papier est requis.
            </li>
          </ol>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Prix d&apos;une traduction assermentée d&apos;acte de mariage</h2>
          <p className="text-navy-600 leading-relaxed">
            Le tarif dépend de la longueur du document et de la langue. Pour un acte de mariage standard (1 à 2 pages),
            comptez entre <strong>60 et 120 €</strong> selon la combinaison linguistique. Les langues rares (arabe,
            chinois, japonais, russe) sont facturées légèrement plus cher que les langues européennes courantes
            (anglais, espagnol, italien, portugais, allemand).
          </p>
          <p className="text-navy-600 leading-relaxed">
            Le délai standard est de <strong>2 à 3 jours ouvrables</strong>. Une option express sous 24h est
            disponible si votre dossier est urgent.
          </p>

          <h2 className="text-2xl font-heading font-bold text-navy-900">Faut-il une apostille en plus de la traduction ?</h2>
          <p className="text-navy-600 leading-relaxed">
            L&apos;apostille et la traduction assermentée sont deux démarches distinctes et complémentaires. L&apos;apostille
            est un cachet officiel apposé par le greffe de la Cour d&apos;appel sur l&apos;<em>original</em> du document ; elle
            certifie l&apos;authenticité de la signature de l&apos;officier d&apos;état civil. La traduction assermentée, elle,
            certifie la fidélité de la traduction au document original.
          </p>
          <p className="text-navy-600 leading-relaxed">
            Si le pays destinataire est signataire de la{" "}
            <strong>Convention de La Haye de 1961</strong> (ce qui couvre la quasi-totalité des pays), l&apos;apostille
            suffit à attester l&apos;authenticité du document. Pour les pays non signataires (certains pays d&apos;Afrique ou
            d&apos;Asie du Sud-Est), une légalisation consulaire peut être requise à la place.
          </p>
          <p className="text-navy-600 leading-relaxed">
            Demandez systématiquement à l&apos;administration destinataire si elle exige l&apos;apostille, la traduction, ou les
            deux. Dans le doute, mieux vaut prévoir les deux dès le départ pour éviter un aller-retour.
          </p>

          <div className="not-prose bg-navy-50 border border-navy-100 rounded-xl p-6 my-8">
            <p className="text-xs font-semibold text-navy-400 uppercase tracking-wide mb-3">À lire aussi — Documents d&apos;état civil</p>
            <ul className="space-y-2">
              <li><Link href="/blog/traduction-acte-de-naissance" className="text-gold-600 hover:text-gold-700 font-medium text-sm hover:underline">Traduction assermentée d&apos;un acte de naissance →</Link></li>
              <li><Link href="/blog/apostille-traduction-assermentee" className="text-gold-600 hover:text-gold-700 font-medium text-sm hover:underline">Apostille et traduction assermentée : guide pratique →</Link></li>
              <li><Link href="/traduction-documents-officiels" className="text-gold-600 hover:text-gold-700 font-medium text-sm hover:underline">Tous nos services de traduction de documents officiels →</Link></li>
            </ul>
          </div>

          <BlogCTA />

          <h2 className="text-2xl font-heading font-bold text-navy-900">Questions fréquentes</h2>

          <h3 className="text-lg font-semibold text-navy-800">Un notaire peut-il traduire un acte de mariage ?</h3>
          <p className="text-navy-600 leading-relaxed">
            Non. Un notaire n&apos;est pas habilité à produire une traduction assermentée. Seul un traducteur expert
            inscrit sur la liste officielle d&apos;une Cour d&apos;appel française dispose de cette habilitation. Certains
            notaires proposent de faire appel à des traducteurs pour leurs clients, mais la traduction reste le fait
            du traducteur assermenté, pas du notaire.
          </p>

          <h3 className="text-lg font-semibold text-navy-800">Faut-il une traduction assermentée pour se marier en France avec une personne étrangère ?</h3>
          <p className="text-navy-600 leading-relaxed">
            Oui, si votre futur conjoint dispose d&apos;un acte de naissance ou d&apos;autres documents d&apos;état civil dans une
            langue étrangère, la mairie exigera leur traduction par un traducteur assermenté avant de publier les bans.
            En cas de mariage à l&apos;étranger d&apos;un ressortissant français, le consulat français pourra également demander
            la traduction de documents étrangers.
          </p>

          <h3 className="text-lg font-semibold text-navy-800">La traduction assermentée est-elle reconnue dans tous les pays ?</h3>
          <p className="text-navy-600 leading-relaxed">
            Une traduction réalisée par un traducteur assermenté auprès d&apos;une Cour d&apos;appel française est reconnue par
            les administrations françaises et généralement acceptée par les autorités étrangères qui la demandent.
            Cependant, certains pays exigent que la traduction soit réalisée par un traducteur local agréé par leurs
            propres autorités. Renseignez-vous toujours auprès de l&apos;administration du pays destinataire avant de
            commander.
          </p>

          <h3 className="text-lg font-semibold text-navy-800">Peut-on envoyer une copie numérique de l&apos;acte ?</h3>
          <p className="text-navy-600 leading-relaxed">
            Oui. Un scan ou une photo de bonne qualité suffit pour la réalisation de la traduction. La traduction
            assermentée finale vous sera délivrée en version numérique (PDF signé et cacheté). Si l&apos;administration
            destinataire exige un original papier, nous vous envoyons la version imprimée par courrier.
          </p>

          <h3 className="text-lg font-semibold text-navy-800">Quelle est la durée de validité d&apos;une traduction assermentée d&apos;acte de mariage ?</h3>
          <p className="text-navy-600 leading-relaxed">
            La traduction assermentée elle-même n&apos;a pas de date d&apos;expiration. En revanche, certaines administrations
            exigent que <em>l&apos;acte original</em> soit récent (3 à 6 mois). Si vous devez renouveler l&apos;acte, la
            traduction devra l&apos;être aussi. Conservez toujours votre traduction : elle peut vous resservir pour des
            démarches ultérieures si l&apos;acte original reste le même.
          </p>

          <h3 className="text-lg font-semibold text-navy-800">Quel est le délai pour obtenir une traduction urgente ?</h3>
          <p className="text-navy-600 leading-relaxed">
            Nous proposons un service express avec livraison sous <strong>24 heures</strong> pour les actes de mariage
            standard. Pour les dossiers très urgents, contactez-nous directement par téléphone ou email pour que nous
            évaluions la faisabilité selon la langue et la disponibilité du traducteur.
          </p>
        </div>
      </section>
    </article>
  );
}
