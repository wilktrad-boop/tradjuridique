"use client";

import { useState } from "react";
import { Shield, Clock, CheckCircle } from "lucide-react";

const langues = [
  "Anglais", "Espagnol", "Allemand", "Italien", "Portugais", "Arabe", "Chinois",
  "Russe", "Turc", "Japonais", "Néerlandais", "Polonais", "Roumain", "Autre",
];

const typesDocs = [
  "Acte de naissance",
  "Acte de mariage",
  "Permis de conduire",
  "Diplôme / Relevé de notes",
  "Casier judiciaire",
  "Contrat",
  "Statuts de société",
  "Jugement / Décision",
  "Acte notarié",
  "Procuration",
  "Autre document juridique",
];

export default function DevisPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-6">
            Demandez votre <span className="text-gold-400">devis gratuit</span>
          </h1>
          <p className="text-lg text-navy-200 max-w-2xl mx-auto">
            Remplissez le formulaire ci-dessous et recevez un devis détaillé pour votre
            traduction juridique sous 2 heures.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {[
              { icon: Shield, text: "Devis gratuit et sans engagement" },
              { icon: Clock, text: "Réponse sous 2 heures" },
              { icon: CheckCircle, text: "Confidentialité garantie" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-navy-300 text-sm">
                <item.icon className="w-4 h-4 text-gold-400" />
                {item.text}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl p-8 lg:p-12 border border-navy-100 shadow-sm">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-heading font-bold text-navy-900 mb-4">
                  Demande de devis envoyée !
                </h2>
                <p className="text-navy-600 max-w-md mx-auto">
                  Merci pour votre demande. Notre équipe vous enverra un devis détaillé sous 2
                  heures ouvrables.
                </p>
              </div>
            ) : (
              <form
                action="https://formspree.io/f/maqlnvog"
                method="POST"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  try {
                    const res = await fetch(form.action, {
                      method: "POST",
                      body: new FormData(form),
                      headers: { Accept: "application/json" },
                    });
                    if (res.ok) setSubmitted(true);
                  } catch {}
                }}
                className="space-y-8"
              >
                <input type="hidden" name="_subject" value="Nouveau devis - ATJ" />
                {/* Coordonnées */}
                <div>
                  <h2 className="text-xl font-heading font-bold text-navy-900 mb-6 pb-3 border-b border-navy-100">
                    Vos coordonnées
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        name="nom"
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-navy-200 rounded-lg text-navy-900 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none"
                        placeholder="Votre nom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">
                        Email *
                      </label>
                      <input
                        name="email"
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-navy-200 rounded-lg text-navy-900 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none"
                        placeholder="votre@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        name="telephone"
                        type="tel"
                        className="w-full px-4 py-3 border border-navy-200 rounded-lg text-navy-900 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none"
                        placeholder="01 23 45 67 89"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">
                        Société / Cabinet
                      </label>
                      <input
                        name="societe"
                        type="text"
                        className="w-full px-4 py-3 border border-navy-200 rounded-lg text-navy-900 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none"
                        placeholder="Nom de votre structure"
                      />
                    </div>
                  </div>
                </div>

                {/* Détails traduction */}
                <div>
                  <h2 className="text-xl font-heading font-bold text-navy-900 mb-6 pb-3 border-b border-navy-100">
                    Détails de la traduction
                  </h2>
                  <div className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-navy-700 mb-2">
                          Langue source *
                        </label>
                        <select
                          name="langue_source"
                          required
                          className="w-full px-4 py-3 border border-navy-200 rounded-lg text-navy-900 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none"
                        >
                          <option value="">Sélectionnez</option>
                          <option value="fr">Français</option>
                          {langues.map((l) => (
                            <option key={l} value={l}>{l}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy-700 mb-2">
                          Langue cible *
                        </label>
                        <select
                          name="langue_cible"
                          required
                          className="w-full px-4 py-3 border border-navy-200 rounded-lg text-navy-900 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none"
                        >
                          <option value="">Sélectionnez</option>
                          <option value="fr">Français</option>
                          {langues.map((l) => (
                            <option key={l} value={l}>{l}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">
                        Type de document *
                      </label>
                      <select
                        name="type_document"
                        required
                        className="w-full px-4 py-3 border border-navy-200 rounded-lg text-navy-900 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none"
                      >
                        <option value="">Sélectionnez le type de document</option>
                        {typesDocs.map((doc) => (
                          <option key={doc} value={doc}>{doc}</option>
                        ))}
                      </select>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-navy-700 mb-2">
                          Nombre de pages
                        </label>
                        <input
                          name="nombre_pages"
                          type="number"
                          min="1"
                          className="w-full px-4 py-3 border border-navy-200 rounded-lg text-navy-900 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none"
                          placeholder="Ex: 3"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-navy-700 mb-2">
                          Type de traduction *
                        </label>
                        <select
                          name="type_traduction"
                          required
                          className="w-full px-4 py-3 border border-navy-200 rounded-lg text-navy-900 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none"
                        >
                          <option value="">Sélectionnez</option>
                          <option>Traduction assermentée</option>
                          <option>Traduction certifiée</option>
                          <option>Traduction simple</option>
                          <option>Je ne sais pas (conseillez-moi)</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">
                        Délai souhaité
                      </label>
                      <select name="delai" className="w-full px-4 py-3 border border-navy-200 rounded-lg text-navy-900 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none">
                        <option>Standard (5 jours)</option>
                        <option>Express (48h)</option>
                        <option>Urgent (24h)</option>
                        <option>Pas d&apos;urgence</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">
                        Informations complémentaires
                      </label>
                      <textarea
                        name="informations"
                        rows={4}
                        className="w-full px-4 py-3 border border-navy-200 rounded-lg text-navy-900 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none resize-none"
                        placeholder="Précisez vos besoins, contexte, délais..."
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-colors shadow-md shadow-gold-500/20 text-lg"
                >
                  Recevoir mon devis gratuit
                </button>
                <p className="text-navy-400 text-xs text-center">
                  En soumettant ce formulaire, vous acceptez d&apos;être contacté par notre équipe.
                  Vos données sont traitées de manière confidentielle.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
