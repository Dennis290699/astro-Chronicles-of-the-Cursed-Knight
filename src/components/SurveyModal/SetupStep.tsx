import React from "react";
import { User, Shield, Swords, Flame } from "lucide-react";

interface SetupStepProps {
  playerName: string;
  setPlayerName: (name: string) => void;
  playerClass: string;
  setPlayerClass: (cls: string) => void;
  onNext: () => void;
}

const archetypes = [
  { id: "vanguard", label: "Caballero Guardián", icon: Shield, desc: "Fuerza y defensa con armadura pesada y escudo.", color: "#c5a059" },
  { id: "cleric", label: "Clérigo del Fresno", icon: Swords, desc: "Sanación espiritual y soporte en combate rúnico.", color: "#a37a34" },
  { id: "occultist", label: "Explorador Sombra", icon: Flame, desc: "Ataque rápido y letal utilizando magia necrótica de ceniza.", color: "#8a6f27" }
];

export default function SetupStep({
  playerName,
  setPlayerName,
  playerClass,
  setPlayerClass,
  onNext
}: SetupStepProps) {
  const isFormValid = playerName.trim().length >= 3 && playerClass !== "";

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && isFormValid) {
      onNext();
    }
  };

  return (
    <div className="space-y-6 text-left">
      <p className="text-[11px] text-[#a0a0a0] font-sans leading-relaxed uppercase tracking-wider">
        El Reino exige registrar tu genealogía antes de emprender el viaje de redención en Valtheria. Elige con prudencia tu designación y entrenamiento de combate inicial.
      </p>

      {/* Name Input */}
      <div className="space-y-2.5">
        <label className="block text-[10px] font-sans tracking-[0.25em] text-[#c5a059] uppercase font-bold">
          1. NOMBRE DE TU CAMPEÓN:
        </label>
        <div className="relative">
          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#c5a059]/50" />
          <input
            type="text"
            value={playerName}
            onChange={(e) => setPlayerName(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Sir Gareth de Valtheria"
            maxLength={25}
            className="w-full bg-black border border-[#c5a05933] focus:border-[#c5a059] text-[#dfdfdb] rounded-none py-3.5 pl-12 pr-4 text-xs font-sans uppercase tracking-[0.1em] placeholder-[#555] outline-none transition-all focus:shadow-[0_0_15px_rgba(197,160,89,0.1)]"
          />
        </div>
      </div>

      {/* Archetype Choice Grid */}
      <div className="space-y-3">
        <label className="block text-[10px] font-sans tracking-[0.25em] text-[#c5a059] uppercase font-bold">
          2. ARQUETIPO DE COMBATE:
        </label>
        <div className="grid grid-cols-1 gap-3">
          {archetypes.map((arch) => {
            const isSelected = playerClass === arch.id;
            return (
              <button
                key={arch.id}
                onClick={() => setPlayerClass(arch.id)}
                className={`p-4 border text-left rounded-none transition-all duration-300 flex flex-col justify-between cursor-pointer relative group/item overflow-hidden ${
                  isSelected
                    ? "border-[#c5a059] bg-[#c5a059]/10 shadow-[0_0_20px_rgba(197,160,89,0.05)] scale-[1.01]"
                    : "border-[#c5a05911] bg-black hover:border-[#c5a05944]"
                }`}
              >
                <div className="flex justify-between items-center w-full relative z-10">
                  <span className={`font-serif text-sm tracking-widest uppercase font-medium ${
                    isSelected ? "text-[#c5a059]" : "text-[#dfdfdb]/80 group-hover/item:text-[#dfdfdb]"
                  }`}>
                    {arch.label}
                  </span>
                  <div className="p-1 border border-[#c5a05922] rounded-none shrink-0" style={{ color: isSelected ? arch.color : "#c5a059" }}>
                    <arch.icon className="w-4 h-4 shrink-0" />
                  </div>
                </div>
                <p className="text-[10px] text-[#888] font-sans uppercase tracking-wider mt-1.5 leading-relaxed relative z-10">
                  {arch.desc}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Next Button */}
      <div className="pt-5 border-t border-[#c5a05922] overflow-hidden">
        <button
          onClick={onNext}
          disabled={!isFormValid}
          className={`w-full py-4 font-sans text-[10px] uppercase font-bold tracking-widest transition-all duration-300 rounded-none cursor-pointer ${
            isFormValid
              ? "bg-[#c5a059] hover:bg-[#b38d41] text-black shadow-[0_4px_12px_rgba(197,160,89,0.2)] hover:shadow-[0_4px_20px_rgba(197,160,89,0.35)]"
              : "bg-[#111] border border-[#c5a05911] text-[#444] cursor-not-allowed"
          }`}
        >
          COMENZAR EXAMEN
        </button>
      </div>

    </div>
  );
}
