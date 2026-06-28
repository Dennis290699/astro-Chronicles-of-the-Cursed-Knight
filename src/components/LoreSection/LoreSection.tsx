import React, { useState } from "react";
import { BookOpen } from "lucide-react";
import { FACTIONS, LORE_TIMELINE } from "../../data";
import FactionCard from "./FactionCard";
import FactionDetails from "./FactionDetails";
import TimelineSelector from "./TimelineSelector";
import TimelineDetails from "./TimelineDetails";
import LoreCodex from "./LoreCodex";

// Faction landscapes crossfades
const factionBgs: Record<string, string> = {
  faithful: "/wallpapers/backgrounds/Bg-Gareth.jpeg",
  iron_ashes: "/wallpapers/backgrounds/Bg-Elara.jpeg",
  abyss_defilers: "/wallpapers/backgrounds/Bg-Malakor.jpeg"
};

export default function LoreSection() {
  const [selectedFaction, setSelectedFaction] = useState("faithful");
  const [activeTimelineIndex, setActiveTimelineIndex] = useState(0);

  const activeFactionData = FACTIONS.find((f) => f.id === selectedFaction) || FACTIONS[0];
  const activeEvent = LORE_TIMELINE[activeTimelineIndex] || LORE_TIMELINE[0];

  return (
    <section id="lore" className="relative py-24 md:py-32 bg-[#030303] overflow-hidden border-t border-[#c5a05922]">

      {/* Styles Injection for Custom Keyframes */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes slowPan {
          0% { transform: scale(1.02) translate(0, 0); }
          50% { transform: scale(1.08) translate(-0.5%, -0.5%); }
          100% { transform: scale(1.02) translate(0, 0); }
        }
        @keyframes driftUp {
          0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; }
          15% { opacity: 0.75; }
          85% { opacity: 0.75; }
          100% { transform: translateY(-220px) translateX(60px) rotate(180deg); opacity: 0; }
        }
        @media (min-width: 768px) {
          .lore-slow-pan {
            animation: slowPan 40s infinite ease-in-out;
            will-change: transform;
          }
          .lore-particle {
            animation-name: driftUp;
            will-change: transform;
          }
        }
      `}} />

      {/* Dynamic Faction Background Overlay with Crossfade and Slow Pan */}
      <div className="absolute inset-0 z-0 pointer-events-none transition-all duration-1000 ease-out overflow-hidden">
        {Object.entries(factionBgs).map(([id, bgUrl]) => (
          <div
            key={id}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[1200ms] ease-out ${selectedFaction === id ? "lore-slow-pan opacity-100" : "opacity-0"
              }`}
            style={{
              backgroundImage: `linear-gradient(to bottom, rgba(3, 3, 3, 0.95) 0%, rgba(3, 3, 3, 0.5) 50%, rgba(3, 3, 3, 0.95) 100%), url('${bgUrl}')`,
              opacity: selectedFaction === id ? 0.38 : 0,
            }}
          />
        ))}
      </div>

      {/* Dynamic Radial Glow that shifts color according to selected legend */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-[1500ms] ease-out z-0"
        style={{
          background: `radial-gradient(circle at 50% 40%, ${activeFactionData.accentColor}25 0%, transparent 65%)`,
        }}
      />

      {/* Ambient Floating Ash and Ember Particles - Hidden on Mobile for peak performance */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden hidden md:block">
        {[...Array(80)].map((_, i) => {
          const size = (i * 7 % 3) + 2.5; // 2.5px to 4.5px
          const left = (i * 23 % 100);
          const top = (i * 37 % 100); // Distribute vertically across the entire section height
          const delay = -((i * 19 % 20));
          const duration = (i * 13 % 15) + 12; // 12s to 27s
          const isGold = i % 2 === 0;
          const particleColor = isGold ? '#c5a059' : '#c5a059'; // Gold and Fire Amber colors
          const glow = `0 0 8px ${particleColor}`;

          return (
            <div
              key={i}
              className="absolute rounded-full lore-particle"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: particleColor,
                boxShadow: glow,
                left: `${left}%`,
                top: `${top}%`,
                animationName: "driftUp",
                animationDuration: `${duration}s`,
                animationDelay: `${delay}s`,
                animationIterationCount: "infinite",
                animationTimingFunction: "linear",
                filter: "blur(0.5px)",
              }}
            />
          );
        })}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.35em] font-semibold text-[#c5a059]">
            EL CODEX DE VALTHERIA
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white tracking-widest uppercase font-semibold mt-4">
            MITOS Y LEYENDAS
          </h2>
          <div className="flex items-center justify-center gap-3.5 my-5">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#c5a059]" />
            <BookOpen className="w-4 h-4 text-[#c5a059]" />
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#c5a059]" />
          </div>
          <p className="font-sans text-xs sm:text-sm text-[#888] leading-relaxed uppercase tracking-wider">
            Explora las crónicas perdidas del Reino de Valtheria bajo el avance de la ceniza necrótica. Conoce los personajes clave y los hitos que marcaron el declive de Eldergrove.
          </p>
        </div>

        {/* ================= CODEX DE FACCIONES ================= */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-2.5 h-2.5 bg-[#c5a059] rotate-45" />
            <h3 className="font-serif text-lg md:text-xl text-[#f3e5ab] tracking-widest uppercase font-semibold">
              I. Personajes Clave y Leyendas
            </h3>
          </div>

          {/* Factions Cards Selector Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FACTIONS.map((faction) => (
              <FactionCard
                key={faction.id}
                faction={faction}
                isActive={selectedFaction === faction.id}
                onClick={() => setSelectedFaction(faction.id)}
              />
            ))}
          </div>

          {/* Faction Detail panel (Vault) */}
          <FactionDetails activeFactionData={activeFactionData} />
        </div>

        {/* Divider */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#c5a05922] to-transparent my-24" />

        {/* ================= LÍNEA DE TIEMPO INTERACTIVA ================= */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="w-2.5 h-2.5 bg-[#c5a059] rotate-45" />
            <h3 className="font-serif text-lg md:text-xl text-[#f3e5ab] tracking-widest uppercase font-semibold">
              II. El Registro Histórico de Valtheria
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">

            {/* Timeline eras milestone selection (Left Column) */}
            <TimelineSelector
              timeline={LORE_TIMELINE}
              activeTimelineIndex={activeTimelineIndex}
              onSelectTimeline={setActiveTimelineIndex}
            />

            {/* Manuscript Detailed Panel (Right Column) */}
            <TimelineDetails
              activeEvent={activeEvent}
              activeTimelineIndex={activeTimelineIndex}
            />

          </div>
        </div>

        {/* ================= INTERACTIVE LORE CODEX ================= */}
        <LoreCodex />

      </div>
    </section>
  );
}
