import React from "react";

type LuxBGProps = {
  base?: string;
  accent?: string;
  text?: string;
  children?: React.ReactNode;
};

export default function LuxBG({
  base = "#011d32",
  accent = "#0b2d46",
  text = "#e19a28",
  children,
}: LuxBGProps) {
  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        color: text,
        background: `
          linear-gradient(135deg, ${base} 0%, ${accent} 50%, ${base} 100%),
          radial-gradient(circle at 20% 80%, ${accent}40 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, ${accent}30 0%, transparent 50%)
        `,
        backgroundSize: "100% 100%, 100% 100%, 100% 100%",
        backgroundPosition: "0 0, 0 0, 0 0",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Overlay subtil pour la profondeur */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 50% 50%, transparent 0%, ${base}20 100%)`,
        }}
      />

      {/* Contenu */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
