import { NextIntlClientProvider } from "next-intl";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Boutique Sextoys Homme",
    template: "%s | Boutique Sextoys Homme",
  },
  description:
    "Boutique en ligne spécialisée dans les sextoys pour hommes. Qualité, discrétion et satisfaction garanties.",
  keywords: ["sextoys", "hommes", "boutique", "e-commerce", "qualité"],
  authors: [{ name: "Boutique Sextoys" }],
  creator: "Boutique Sextoys",
  publisher: "Boutique Sextoys",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://boutique-sextoys.com",
    title: "Boutique Sextoys Homme",
    description: "Boutique en ligne spécialisée dans les sextoys pour hommes",
    siteName: "Boutique Sextoys",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boutique Sextoys Homme",
    description: "Boutique en ligne spécialisée dans les sextoys pour hommes",
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const messages = (await import("@/messages/fr.json")).default;

  return (
    <html lang="fr" className={GeistSans.className}>
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
