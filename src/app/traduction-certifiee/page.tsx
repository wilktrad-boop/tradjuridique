import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { FileCheck, ArrowRight, CheckCircle, Shield, Award, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Traduction Certifiée Conforme | Documents Officiels",
  description:
    "Service de traduction certifiée conforme à l'original. Traduction de documents officiels avec attestation de conformité pour administrations et organismes. Devis gratuit.",
  alternates: { canonical: "https://agence-traduction-juridique.fr/traduction-certifiee" },
};

export default function TraductionCertifieePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Traduction Certifiée Conforme",
            provider: {
              "@type": "ProfessionalService",
              name: "ATJ - Agence de Traduction Juridique",
            },
            description: "Service de traduction certifiée conforme à l'original.",
            areaServed: "FR",
            serviceType: "Traduction certifiée",
          }),
        }}
      />

      {/* Hero */}
      <section className="relative bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 py-20 lg:py-28 overflow-hidden">
        <Image
          src="/images/service-certifiee.webp"
          alt=""
          fill
          className="object-cover opacity-10 mix-blend-luminosity"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-900/95 to-navy-900/70" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-500/10 border border-gold-500/20 rounded-full mb-6">
              <FileCheck className="w-4 h-4 text-gold-400" />
              <span className="text-gold-300 text-sm font-medium">Certifiée conforme</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-heading font-bold text-white leading-tight mb-6">
              Traduction <span className="text-gold-400">certifiée</span> conforme à l&apos;original
            </h1>
            <p className="text-lg text-navy-200 leading-relaxed mb-8">
              Nos traductions certifiées attestent de la fidélité et de la conformité de la
              traduction par rapport au document original. Acceptées par les administrations et
              organismes officiels.
            </p>
            <Link
              href="/devis"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-gold-500/25"
            >
              Demander un devis gratuit <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-heading font-bold text-navy-900 mb-6">
                Qu&apos;est-ce qu&apos;une traduction certifiée ?
              </h2>
              <div className="prose prose-navy max-w-none">
                <p className="text-navy-600 leading-relaxed mb-4">
                  Une traduction certifiée conforme est un document traduit accompagné d&apos;une
                  attestation signée par le traducteur professionnel, garantissant que la traduction
                  est fidèle et complète par rapport au document original.
                </p>
                <p className="text-navy-600 leading-relaxed mb-4">
                  Cette certification est souvent exigée par les administrations, universités et
                  organismes officiels pour les documents étrangers. Elle diffère de la traduction
                  assermentée car elle n&apos;est pas nécessairement réalisée par un traducteur inscrit
                  auprès d&apos;un tribunal.
                </p>
                <p className="text-navy-600 leading-relaxed">
                  Chez ATJ, toutes nos traductions certifiées sont réalisées par des traducteurs
                  professionnels spécialistes du droit, garantissant une qualité irréprochable.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              {[
                {
                  icon: Shield,
                  title: "Attestation de conformité",
                  desc: "Chaque traduction est accompagnée d'une attestation signée certifiant la conformité à l'original.",
                },
                {
                  icon: Award,
                  title: "Traducteurs experts",
                  desc: "Des traducteurs spécialistes du domaine juridique, avec une maîtrise parfaite de la terminologie légale.",
                },
                {
                  icon: Clock,
                  title: "Délais compétitifs",
                  desc: "Livraison standard sous 3-5 jours, service express disponible sous 24-48h.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-5 bg-navy-50 rounded-2xl p-6"
                >
                  <div className="w-12 h-12 bg-navy-800 rounded-xl flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-gold-400" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-navy-900 mb-1">{item.title}</h3>
                    <p className="text-navy-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Différences */}
      <section className="bg-navy-50/50 py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-heading font-bold text-navy-900 mb-12 text-center">
            Traduction certifiée vs traduction assermentée
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-navy-100 shadow-sm">
              <div className="w-12 h-12 bg-gold-100 rounded-xl flex items-center justify-center mb-5">
                <FileCheck className="w-6 h-6 text-gold-600" />
              </div>
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-4">
                Traduction certifiée
              </h3>
              <ul className="space-y-3">
                {[
                  "Attestation de conformité du traducteur",
                  "Acceptée par la plupart des organismes",
                  "Réalisée par un traducteur professionnel",
                  "Tarifs plus accessibles",
                  "Idéale pour universités et entreprises",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-gold-500 mt-0.5 shrink-0" />
                    <span className="text-navy-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-navy-100 shadow-sm">
              <div className="w-12 h-12 bg-navy-100 rounded-xl flex items-center justify-center mb-5">
                <Shield className="w-6 h-6 text-navy-700" />
              </div>
              <h3 className="text-xl font-heading font-bold text-navy-900 mb-4">
                Traduction assermentée
              </h3>
              <ul className="space-y-3">
                {[
                  "Valeur légale officielle",
                  "Traducteur inscrit auprès de la Cour d'appel",
                  "Cachet et numéro d'inscription",
                  "Obligatoire pour procédures judiciaires",
                  "Reconnue par les tribunaux",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-navy-500 mt-0.5 shrink-0" />
                    <span className="text-navy-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/traduction-assermentee"
                className="inline-flex items-center gap-1 mt-4 text-gold-600 font-semibold text-sm"
              >
                En savoir plus <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-navy-800 to-navy-900">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-heading font-bold text-white mb-6">
            Besoin d&apos;une traduction certifiée conforme ?
          </h2>
          <p className="text-navy-200 text-lg mb-8">
            Obtenez un devis gratuit en quelques minutes. Notre équipe vous conseille sur le type
            de traduction adapté à vos besoins.
          </p>
          <Link
            href="/devis"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-gold-500/25"
          >
            Demander un devis gratuit <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
