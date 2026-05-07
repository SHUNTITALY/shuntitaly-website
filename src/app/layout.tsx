import type { Metadata } from "next";
import "./globals.css";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Shunt Italy",
  description:
    "Produzione shunt DC ad alta corrente fino a 100kA. Soluzioni custom in manganina con connessione Kelvin.",
  keywords: [
    "shunt",
    "shunt dc",
    "shunt alta corrente",
    "current shunt",
    "shunt 100kA",
    "manganin shunt"
  ],
  openGraph: {
    type: "website",
    locale: "it_IT",
    url: "https://www.shuntitaly.com",
    siteName: "Shunt Italy"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Shunt Italy",
              url: "https://www.shuntitaly.com",
              email: "info@shuntitaly.it",
              telephone: "+02 49425935",
              description:
                "Produzione di shunt DC ad alta corrente, shunt custom in manganina e soluzioni integrate su busbar.",
              areaServed: "Worldwide",
              knowsAbout: [
                "Shunt DC",
                "Shunt alta corrente",
                "Manganina",
                "Connessione Kelvin",
                "Busbar integrate",
                "Misura corrente continua"
              ]
            })
          }}
        />

        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}