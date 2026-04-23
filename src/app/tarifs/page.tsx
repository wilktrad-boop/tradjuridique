import Link from "next/link";
import type { Metadata } from "next";
import { Check, ArrowRight, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Tarifs Traduction Juridique | Prix Traduction Assermentée",
  description:
    "Découvrez nos tarifs pour la traduction juridique assermentée et certifiée. Prix compétitifs à partir de 45€/page. Devis gratuit et sans engagement.",
  alternates: { canonical: "https://www.agence-traduction-juridique.fr/tarifs" },
};

const plans = [
  {
    name: "Standard",
    price: "45",
    unit: "/ page",
    delay: "5 jours ouvrables",
    description: "Pour les projets sans urgence particulière.",
    features: [
      "Traduction par un traducteur assermenté",
      "Certification conforme à l'original",
      "Cachet et signature du traducteur",
      "Révision incluse",
      "Livraison numérique (PDF)",
      "Envoi postal en option",
    ],
    highlighted: false,
  },
  {
    name: "Express",
    price: "68",
    unit: "/ page",
    delay: "48 heures",
    description: "Traitement prioritaire pour les urgences.",
    features: [
      "Tout le forfait Standard",
      "Traitement prioritaire",
      "Livraison sous 48h",
      "Suivi personnalisé",
      "Livraison numérique + postale",
      "Interlocuteur dédié",
    ],
    highlighted: true,
  },
  {
    name: "Urgent",
    price: "90",
    unit: "/ page",
    delay: "24 heures",
    description: "Livraison le jour même ou le lendemain.",
    features: [
      "Tout le forfait Express",
      "Livraison sous 24h",
      "Service prioritaire absolu",
      "Disponibilité week-end",
      "Envoi recommandé inclus",
      "Support téléphonique direct",
    ],
    highlighted: false,
  },
];

export default function TarifsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-6">
            Nos <span className="text-gold-400">tarifs</span> de traduction juridique
          </h1>
          <p className="text-lg text-navy-200 max-w-2xl mx-auto">
            Des tarifs transparents et compétitifs pour des traductions juridiques de qualité
            professionnelle. Devis gratuit et sans engagement.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 border ${
                  plan.highlighted
                    ? "bg-navy-800 border-gold-500 shadow-xl shadow-gold-500/10 relative"
                    : "bg-white border-navy-100 shadow-sm"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold-500 text-white text-xs font-bold rounded-full uppercase tracking-wide">
                    Le plus demandé
                  </div>
                )}
                <h3
                  className={`text-xl font-heading font-bold mb-2 ${
                    plan.highlighted ? "text-white" : "text-navy-900"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`text-sm mb-6 ${plan.highlighted ? "text-navy-300" : "text-navy-500"}`}
                >
                  {plan.description}
                </p>
                <div className="mb-2">
                  <span
                    className={`text-4xl font-heading font-bold ${
                      plan.highlighted ? "text-gold-400" : "text-navy-900"
                    }`}
                  >
                    {plan.price}€
                  </span>
                  <span
                    className={`text-sm ${plan.highlighted ? "text-navy-300" : "text-navy-500"}`}
                  >
                    {plan.unit}
                  </span>
                </div>
                <p
                  className={`text-xs italic mb-2 ${plan.highlighted ? "text-navy-400" : "text-navy-400"}`}
                >
                  Selon la paire de langues et la complexité du document
                </p>
                <p
                  className={`text-sm mb-8 ${plan.highlighted ? "text-gold-300" : "text-gold-600"}`}
                >
                  Délai : {plan.delay}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check
                        className={`w-4 h-4 mt-0.5 shrink-0 ${
                          plan.highlighted ? "text-gold-400" : "text-gold-500"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          plan.highlighted ? "text-navy-200" : "text-navy-600"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/devis"
                  className={`block text-center py-3 rounded-lg font-semibold text-sm transition-colors ${
                    plan.highlighted
                      ? "bg-gold-500 hover:bg-gold-600 text-white"
                      : "bg-navy-800 hover:bg-navy-700 text-white"
                  }`}
                >
                  Demander un devis
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gold-50 rounded-2xl p-8 border border-gold-200">
            <div className="flex items-start gap-4">
              <AlertCircle className="w-6 h-6 text-gold-600 shrink-0 mt-0.5" />
              <div>
                <h3 className="font-heading font-bold text-navy-900 mb-2">
                  Tarifs indicatifs
                </h3>
                <p className="text-navy-600 text-sm leading-relaxed">
                  Ces tarifs sont donnés à titre indicatif. Le prix final dépend de la paire de
                  langues, de la complexité du document, du volume et du délai souhaité. Pour un
                  tarif précis, demandez un{" "}
                  <Link href="/devis" className="text-gold-600 font-semibold underline">
                    devis gratuit
                  </Link>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Volume discounts */}
      <section className="bg-navy-50/50 py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-navy-900 mb-6">
            Tarifs dégressifs pour les volumes importants
          </h2>
          <p className="text-navy-600 text-lg mb-10">
            Cabinets d&apos;avocats, notaires, entreprises : bénéficiez de tarifs préférentiels pour
            vos traductions juridiques régulières.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-gold-500/25"
          >
            Contactez-nous pour un tarif personnalisé <ArrowRight className="w-5 h-5" />
          </Link>
          <p className="mt-8 text-navy-500 text-sm">
            Consultez aussi notre guide détaillé :{" "}
            <Link href="/blog/prix-traduction-assermentee" className="text-gold-600 hover:underline font-medium">
              Prix d&apos;une traduction assermentée : tarifs et facteurs →
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
