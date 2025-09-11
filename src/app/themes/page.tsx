"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import LuxBG from "@/components/ui/LuxBG";

type IntlMessages = {
  common: {
    back: string;
    luxury: string;
    elegant: string;
    modern: string;
    sensual: string;
  };
  themes: {
    title: string;
    description: string;
    current: string;
  };
};

const themes = {
  luxury: { base: "#011d32", accent: "#0b2d46", text: "#e19a28" },
  elegant: { base: "#1a1a2e", accent: "#16213e", text: "#e94560" },
  modern: { base: "#0f0f23", accent: "#1e1e3f", text: "#ffffff" },
  sensual: { base: "#2d1b69", accent: "#4a2c7a", text: "#ff6b6b" },
};

export default function ThemesPage() {
  const t = useTranslations();
  const [currentTheme, setCurrentTheme] = useState<keyof typeof themes>("luxury");

  return (
    <LuxBG {...themes[currentTheme]}>
      {/* Navigation */}
      <div className="fixed top-6 left-6 z-50">
        <Link
          href="/"
          className="px-6 py-3 rounded-xl text-sm font-semibold bg-white/10 hover:bg-white/20 transition-all duration-300 ring-1 ring-white/20 hover:ring-white/40 backdrop-blur-sm shadow-lg hover:shadow-xl"
          style={{ color: themes[currentTheme].text }}
        >
          ← {t("common.back")}
        </Link>
      </div>

      {/* 4 boutons de sélection de thème */}
      <div className="fixed top-6 right-6 z-50 flex gap-3">
        {Object.entries(themes).map(([name, colors]) => (
          <button
            key={name}
            onClick={() => setCurrentTheme(name as keyof typeof themes)}
            className={`px-5 py-3 rounded-xl text-sm font-bold transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-xl hover:scale-105 ${
              currentTheme === name
                ? "ring-2 ring-white/60 bg-white/25"
                : "bg-white/10 hover:bg-white/20 ring-1 ring-white/20"
            }`}
            style={{ color: colors.text }}
          >
            {t(`common.${name}` as keyof IntlMessages)}
          </button>
        ))}
      </div>

      {/* Contenu principal */}
      <div className="flex min-h-screen items-center justify-center p-8">
        <div className="text-center max-w-6xl">
          <h1 className="text-7xl font-bold mb-8 bg-gradient-to-r from-white via-current to-current bg-clip-text text-transparent drop-shadow-lg">
            {t("themes.title")}
          </h1>
          <p className="text-2xl opacity-90 mb-12 font-light">{t("themes.description")}</p>

          {/* Affichage du thème actuel */}
          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-8 border border-white/30 shadow-2xl max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">
              {t("themes.current")} :{" "}
              <span className="text-yellow-300">
                {t(`common.${currentTheme}` as keyof IntlMessages)}
              </span>
            </h2>
            <div className="space-y-4">
              <div className="flex items-center justify-center gap-4">
                <div
                  className="w-12 h-12 rounded-full border-2 border-white/30 shadow-lg"
                  style={{ backgroundColor: themes[currentTheme].base }}
                />
                <span className="text-lg">→</span>
                <div
                  className="w-12 h-12 rounded-full border-2 border-white/30 shadow-lg"
                  style={{ backgroundColor: themes[currentTheme].accent }}
                />
              </div>
              <p className="opacity-80 text-lg">
                {themes[currentTheme].base} → {themes[currentTheme].accent}
              </p>
            </div>
          </div>
        </div>
      </div>
    </LuxBG>
  );
}
