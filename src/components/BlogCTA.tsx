import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function BlogCTA() {
  return (
    <div className="my-12 bg-gradient-to-r from-navy-800 to-navy-900 rounded-2xl p-8 lg:p-10 text-center">
      <h3 className="text-2xl font-heading font-bold text-white mb-4">
        Besoin d&apos;une traduction juridique ?
      </h3>
      <p className="text-navy-200 mb-6 max-w-lg mx-auto">
        Nos traducteurs assermentés sont à votre disposition. Devis gratuit sous 2 heures.
      </p>
      <Link
        href="/devis"
        className="inline-flex items-center gap-2 px-8 py-4 bg-gold-500 hover:bg-gold-600 text-white font-semibold rounded-lg transition-all shadow-lg shadow-gold-500/25"
      >
        Demander un devis gratuit <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  );
}
