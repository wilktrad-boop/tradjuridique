"use client";

import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contact@agence-traduction-juridique.fr",
    href: "mailto:contact@agence-traduction-juridique.fr",
  },
  {
    icon: Phone,
    title: "Téléphone",
    value: "06 75 67 12 60",
    href: "tel:+33675671260",
  },
  {
    icon: MapPin,
    title: "Adresse",
    value: "Paris, France",
    href: null,
  },
  {
    icon: Clock,
    title: "Horaires",
    value: "Lun-Sam : 9h-18h",
    href: null,
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <section className="relative bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 py-20 lg:py-28 overflow-hidden">
        <Image
          src="/images/contact-office.webp"
          alt=""
          fill
          className="object-cover opacity-15 mix-blend-luminosity"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/90 to-navy-900/80" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white mb-6">
            <span className="text-gold-400">Contactez</span>-nous
          </h1>
          <p className="text-lg text-navy-200 max-w-2xl mx-auto">
            Une question sur nos services de traduction juridique à Paris ? Notre cabinet est à votre
            disposition pour vous accompagner dans toutes vos démarches.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-heading font-bold text-navy-900 mb-8">
                Nos coordonnées
              </h2>
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-navy-800 rounded-xl flex items-center justify-center shrink-0">
                      <info.icon className="w-5 h-5 text-gold-400" />
                    </div>
                    <div>
                      <p className="text-sm text-navy-500 font-medium">{info.title}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-navy-900 font-semibold hover:text-gold-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-navy-900 font-semibold">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8 rounded-xl overflow-hidden">
                <Image
                  src="/images/contact-office.webp"
                  alt="Bureau ATJ - Agence de Traduction Juridique"
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover rounded-xl"
                />
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl p-8 border border-navy-100 shadow-sm">
                <h2 className="text-2xl font-heading font-bold text-navy-900 mb-6">
                  Envoyez-nous un message
                </h2>
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                    <p className="text-green-800 font-semibold text-lg mb-2">
                      Message envoyé avec succès !
                    </p>
                    <p className="text-green-600">
                      Notre équipe vous répondra dans les plus brefs délais.
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
                    className="space-y-6"
                  >
                    <input type="hidden" name="_subject" value="Nouveau message - ATJ Contact" />
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-navy-700 mb-2">
                          Nom complet *
                        </label>
                        <input
                          name="nom"
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-navy-200 rounded-lg text-navy-900 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-colors"
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
                          className="w-full px-4 py-3 border border-navy-200 rounded-lg text-navy-900 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-colors"
                          placeholder="votre@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        name="telephone"
                        type="tel"
                        className="w-full px-4 py-3 border border-navy-200 rounded-lg text-navy-900 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-colors"
                        placeholder="01 23 45 67 89"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">
                        Objet *
                      </label>
                      <select
                        name="objet"
                        required
                        className="w-full px-4 py-3 border border-navy-200 rounded-lg text-navy-900 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-colors"
                      >
                        <option value="">Sélectionnez un objet</option>
                        <option>Demande d&apos;information</option>
                        <option>Demande de devis</option>
                        <option>Suivi de commande</option>
                        <option>Réclamation</option>
                        <option>Autre</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-navy-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-navy-200 rounded-lg text-navy-900 focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-colors resize-none"
                        placeholder="Décrivez votre besoin..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-colors shadow-md shadow-gold-500/20"
                    >
                      Envoyer le message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
