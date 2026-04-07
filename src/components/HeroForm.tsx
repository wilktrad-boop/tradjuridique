"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight, FileText, Languages } from "lucide-react";

const documentTypes = [
  "Acte de naissance",
  "Acte de mariage",
  "Diplôme / Relevé de notes",
  "Permis de conduire",
  "Contrat commercial",
  "Statuts de société / Kbis",
  "Jugement / Décision",
  "Acte notarié",
  "Casier judiciaire",
  "Autre document",
];

const languages = [
  "Anglais",
  "Arabe",
  "Allemand",
  "Espagnol",
  "Italien",
  "Portugais",
  "Russe",
  "Chinois",
  "Japonais",
  "Néerlandais",
  "Polonais",
  "Turc",
  "Autre langue",
];

export function HeroForm() {
  const router = useRouter();
  const [docType, setDocType] = useState("");
  const [langFrom, setLangFrom] = useState("");
  const [langTo, setLangTo] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const params = new URLSearchParams();
    if (docType) params.set("document", docType);
    if (langFrom) params.set("de", langFrom);
    if (langTo) params.set("vers", langTo);
    router.push(`/devis?${params.toString()}`);
  }

  return (
    <div className="relative">
      {/* Glow effect */}
      <div className="absolute -inset-1 bg-gradient-to-br from-gold-400/20 to-gold-600/10 rounded-2xl blur-xl" />
      <div className="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-2xl">
        <p className="text-white font-semibold text-lg mb-1">Devis gratuit en 2 minutes</p>
        <p className="text-navy-300 text-sm mb-6">Sans engagement · Réponse sous 24h</p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Document type */}
          <div>
            <label className="flex items-center gap-1.5 text-navy-200 text-xs font-medium mb-1.5">
              <FileText className="w-3.5 h-3.5" />
              Type de document
            </label>
            <select
              value={docType}
              onChange={(e) => setDocType(e.target.value)}
              className="w-full bg-navy-800/60 border border-white/15 text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400/50 appearance-none cursor-pointer"
            >
              <option value="" className="bg-navy-900">Sélectionnez un document</option>
              {documentTypes.map((d) => (
                <option key={d} value={d} className="bg-navy-900">{d}</option>
              ))}
            </select>
          </div>

          {/* Languages */}
          <div>
            <label className="flex items-center gap-1.5 text-navy-200 text-xs font-medium mb-1.5">
              <Languages className="w-3.5 h-3.5" />
              Langues
            </label>
            <div className="grid grid-cols-2 gap-2">
              <select
                value={langFrom}
                onChange={(e) => setLangFrom(e.target.value)}
                className="bg-navy-800/60 border border-white/15 text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400/50 appearance-none cursor-pointer"
              >
                <option value="" className="bg-navy-900">De…</option>
                <option value="Français" className="bg-navy-900">Français</option>
                {languages.map((l) => (
                  <option key={l} value={l} className="bg-navy-900">{l}</option>
                ))}
              </select>
              <select
                value={langTo}
                onChange={(e) => setLangTo(e.target.value)}
                className="bg-navy-800/60 border border-white/15 text-white rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gold-400/50 focus:border-gold-400/50 appearance-none cursor-pointer"
              >
                <option value="" className="bg-navy-900">Vers…</option>
                <option value="Français" className="bg-navy-900">Français</option>
                {languages.map((l) => (
                  <option key={l} value={l} className="bg-navy-900">{l}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="mt-2 w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-gold-500/30 hover:shadow-gold-500/50"
          >
            Obtenir mon devis gratuit
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Trust micro-signals */}
        <div className="mt-5 pt-5 border-t border-white/10 grid grid-cols-3 gap-2 text-center">
          {[
            { value: "15 000+", label: "Documents" },
            { value: "30+", label: "Langues" },
            { value: "48h", label: "Délai moyen" },
          ].map((s) => (
            <div key={s.label}>
              <p className="text-gold-400 font-bold text-base">{s.value}</p>
              <p className="text-navy-400 text-xs">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
