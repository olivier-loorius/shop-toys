"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import LuxBG from "@/components/ui/LuxBG";

export default function HomePage() {
  const t = useTranslations();

  return (
    <LuxBG base="#011d32" accent="#0b2d46" text="#e19a28">
      {/* CTA vers les thèmes */}
      <div className="fixed top-6 right-6 z-50">
        <Link
          href="/themes"
          className="px-6 py-3 rounded-xl text-sm font-semibold bg-white/10 hover:bg-white/20 transition-all duration-300 ring-1 ring-white/20 hover:ring-white/40 backdrop-blur-sm shadow-lg hover:shadow-xl"
          style={{ color: "#e19a28" }}
        >
          🎨 {t("common.chooseTheme")}
        </Link>
      </div>

      {/* Contenu principal */}
      <div className="flex min-h-screen items-center justify-center p-8">
        <div className="text-center max-w-5xl">
          <h1 className="text-7xl font-bold mb-8 bg-gradient-to-r from-white via-yellow-200 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">
            {t("home.title")}
          </h1>
          <p className="text-2xl opacity-90 mb-12 font-light">{t("home.description")}</p>

          {/* CTA principal */}
          <Link
            href="/themes"
            className="inline-block px-10 py-5 rounded-2xl text-xl font-bold bg-white/15 hover:bg-white/25 transition-all duration-300 ring-2 ring-white/30 hover:ring-white/60 backdrop-blur-sm shadow-2xl hover:shadow-3xl hover:scale-105"
            style={{ color: "#e19a28" }}
          >
            🎭 {t("common.discoverThemes")}
          </Link>
        </div>
      </div>
    </LuxBG>
  );
}
