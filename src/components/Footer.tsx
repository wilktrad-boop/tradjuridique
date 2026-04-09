import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    { name: "Traduction Assermentée", href: "/traduction-assermentee" },
    { name: "Traduction Certifiée", href: "/traduction-certifiee" },
    { name: "Documents Officiels", href: "/traduction-documents-officiels" },
    { name: "Toutes les langues", href: "/langues" },
  ],
  agence: [
    { name: "Tarifs", href: "/tarifs" },
    { name: "Contact", href: "/contact" },
    { name: "Devis gratuit", href: "/devis" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-navy-900 text-navy-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-12 h-12 bg-navy-700 rounded-lg">
                <span className="text-gold-400 font-heading font-bold text-xl">ATJ</span>
              </div>
              <div>
                <p className="text-white font-heading font-bold text-lg leading-tight">
                  Agence de Traduction
                </p>
                <p className="text-gold-400 text-xs font-semibold tracking-wider uppercase">
                  Juridique
                </p>
              </div>
            </div>
            <p className="text-navy-300 text-sm leading-relaxed mb-6">
              Cabinet spécialiste de la traduction juridique assermentée et certifiée à Paris.
              Des traducteurs experts au service de vos documents officiels.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-4">Nos Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-navy-300 hover:text-gold-400 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Agence */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-4">L&apos;Agence</h3>
            <ul className="space-y-3">
              {footerLinks.agence.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-navy-300 hover:text-gold-400 text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-heading font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-gold-400 mt-0.5 shrink-0" />
                <a
                  href="mailto:contact@agence-traduction-juridique.fr"
                  className="text-navy-300 hover:text-gold-400 text-sm transition-colors"
                >
                  contact@agence-traduction-juridique.fr
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-gold-400 mt-0.5 shrink-0" />
                <a
                  href="tel:+33675671260"
                  className="text-navy-300 hover:text-gold-400 text-sm transition-colors"
                >
                  06 75 67 12 60
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 mt-0.5 shrink-0" />
                <span className="text-navy-300 text-sm">Paris, France</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Partner + credits */}
        <div className="border-t border-navy-700 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-navy-400">
          <p>
            Besoin de traduction technique ?{" "}
            <a
              href="https://www.traduction-technique.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 hover:text-gold-300 transition-colors"
            >
              Consultez notre partenaire
            </a>
          </p>
          <p>
            Découvrez le{" "}
            <a
              href="https://c-traduction.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold-400 hover:text-gold-300 transition-colors"
            >
              média spécialisé sur la traduction
            </a>
          </p>
          <p>
            Site réalisé par{" "}
            <a
              href="https://willypaul.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-navy-300 transition-colors"
            >
              willypaul.fr
            </a>
          </p>
        </div>

        {/* Bottom */}
        <div className="border-t border-navy-700 mt-6 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-navy-400 text-sm">
            &copy; {new Date().getFullYear()} ATJ - Agence de Traduction Juridique. Tous droits
            réservés.
          </p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="text-navy-400 hover:text-navy-300 text-sm transition-colors">
              Mentions légales
            </Link>
            <Link href="/politique-de-confidentialite" className="text-navy-400 hover:text-navy-300 text-sm transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
