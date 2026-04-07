import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agence-traduction-juridique.fr"),
  title: {
    default: "ATJ - Agence de Traduction Juridique | Traducteurs Assermentés",
    template: "%s | ATJ - Agence de Traduction Juridique",
  },
  description:
    "ATJ, votre agence de traduction juridique spécialisée. Traducteurs assermentés, traductions certifiées conformes de documents officiels, contrats et actes juridiques en plus de 30 langues.",
  keywords: [
    "traduction juridique",
    "traducteur assermenté",
    "traduction assermentée",
    "traduction certifiée",
    "agence traduction juridique",
    "traduction document officiel",
    "traduction légale",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://agence-traduction-juridique.fr",
    siteName: "ATJ - Agence de Traduction Juridique",
    title: "ATJ - Agence de Traduction Juridique | Traducteurs Assermentés",
    description:
      "Traductions juridiques certifiées par des traducteurs assermentés. Documents officiels, contrats, actes notariés en plus de 30 langues.",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 675,
        alt: "ATJ - Agence de Traduction Juridique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://agence-traduction-juridique.fr",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Script
          src="https://app.rybbit.io/api/script.js"
          data-site-id="undefined"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
