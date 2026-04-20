"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const services = [
  { name: "Traduction Assermentée", href: "/traduction-assermentee" },
  { name: "Traduction Certifiée", href: "/traduction-certifiee" },
  { name: "Documents Officiels", href: "/traduction-documents-officiels" },
  { name: "Traduction Immigration", href: "/traduction-immigration" },
  { name: "Cabinets & Notaires", href: "/traduction-juridique-cabinets" },
  { name: "Traduction Entreprise", href: "/traduction-entreprise" },
  { name: "Apostille", href: "/apostille" },
  { name: "Paris & IDF", href: "/traducteur-assermente-paris" },
  { name: "Lyon & AuRA", href: "/traducteur-assermente-lyon" },
  { name: "Montpellier & Occitanie", href: "/traducteur-assermente-montpellier" },
];

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Services", href: "#", children: services },
  { name: "Langues", href: "/langues" },
  { name: "Tarifs", href: "/tarifs" },
  { name: "FAQ", href: "/faq" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-navy-100 shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex items-center justify-center w-12 h-12 bg-navy-800 rounded-lg group-hover:bg-navy-700 transition-colors">
              <span className="text-gold-400 font-heading font-bold text-xl">ATJ</span>
            </div>
            <div className="hidden sm:block">
              <p className="text-navy-800 font-heading font-bold text-lg leading-tight">
                Agence de Traduction
              </p>
              <p className="text-gold-600 text-xs font-semibold tracking-wider uppercase">
                Juridique
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navigation.map((item) =>
              item.children ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-navy-700 hover:text-navy-900 rounded-lg hover:bg-navy-50 transition-colors">
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {servicesOpen && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-xl shadow-xl border border-navy-100 py-2 animate-in fade-in slide-in-from-top-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-3 text-sm text-navy-700 hover:bg-navy-50 hover:text-navy-900 transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-navy-700 hover:text-navy-900 rounded-lg hover:bg-navy-50 transition-colors"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/devis"
              className="inline-flex items-center px-6 py-2.5 bg-gold-500 hover:bg-gold-600 text-white font-semibold text-sm rounded-lg transition-colors shadow-md shadow-gold-500/20"
            >
              Devis gratuit
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-navy-700 hover:bg-navy-50"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden pb-6 border-t border-navy-100 mt-2 pt-4">
            <div className="flex flex-col gap-1">
              {navigation.map((item) =>
                item.children ? (
                  <div key={item.name}>
                    <button
                      onClick={() => setServicesOpen(!servicesOpen)}
                      className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-navy-700 rounded-lg hover:bg-navy-50"
                    >
                      {item.name}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
                      />
                    </button>
                    {servicesOpen && (
                      <div className="ml-4 flex flex-col gap-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="px-4 py-2 text-sm text-navy-600 hover:text-navy-900 rounded-lg hover:bg-navy-50"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="px-4 py-3 text-sm font-medium text-navy-700 rounded-lg hover:bg-navy-50"
                  >
                    {item.name}
                  </Link>
                )
              )}
              <Link
                href="/devis"
                onClick={() => setMobileOpen(false)}
                className="mt-4 mx-4 text-center px-6 py-3 bg-gold-500 hover:bg-gold-600 text-white font-semibold text-sm rounded-lg transition-colors"
              >
                Devis gratuit
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
