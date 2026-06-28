import React from "react";
import { Shield, Swords, Flame, Sparkles } from "lucide-react";
import type { Faction } from "../../types";

interface FactionCardProps {
  faction: Faction;
  isActive: boolean;
  onClick: () => void;
}

const getEmblemIcon = (emblemName: string) => {
  switch (emblemName) {
    case "ShieldAlert":
      return Shield;
    case "Swords":
      return Swords;
    case "Flame":
      return Flame;
    default:
      return Sparkles;
  }
};

export default function FactionCard({ faction, isActive, onClick }: FactionCardProps) {
  const Icon = getEmblemIcon(faction.emblem);
  
  const themeColors = 
    faction.id === "faithful" ? { bgActive: "bg-gradient-to-br from-[#c5a059]/15 to-[#c5a059]/5", borderActive: "border-[#c5a059]", glow: "shadow-[0_0_35px_rgba(197,160,89,0.25)]" } :
    faction.id === "iron_ashes" ? { bgActive: "bg-gradient-to-br from-[#a37a34]/15 to-[#a37a34]/5", borderActive: "border-[#a37a34]", glow: "shadow-[0_0_35px_rgba(163,122,52,0.25)]" } :
    { bgActive: "bg-gradient-to-br from-[#8a6f27]/15 to-[#8a6f27]/5", borderActive: "border-[#8a6f27]", glow: "shadow-[0_0_35px_rgba(138,111,39,0.25)]" };

  return (
    <button
      onClick={onClick}
      className={`relative text-left p-6 border rounded-none transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between h-[170px] group ${
        isActive
          ? `${themeColors.bgActive} ${themeColors.borderActive} ${themeColors.glow} scale-[1.03] z-10`
          : "border-[#c5a05915] bg-[#070707]/90 hover:bg-[#0c0c0c] hover:border-[#c5a05933] hover:shadow-[0_15px_35px_rgba(0,0,0,0.9)]"
      }`}
    >
      {/* Decorative medieval frame outline inside card */}
      <div className={`absolute inset-1.5 border transition-all duration-500 ${
        isActive ? "border-current/20" : "border-[#c5a05908] group-hover:border-[#c5a05911]"
      }`} style={{ color: faction.accentColor }} />

      {/* Decorative corner points in the inner frame */}
      <div className={`absolute top-1.5 left-1.5 w-1 h-1 transition-all ${isActive ? "bg-current" : "bg-transparent"}`} style={{ color: faction.accentColor }} />
      <div className={`absolute top-1.5 right-1.5 w-1 h-1 transition-all ${isActive ? "bg-current" : "bg-transparent"}`} style={{ color: faction.accentColor }} />
      <div className={`absolute bottom-1.5 left-1.5 w-1 h-1 transition-all ${isActive ? "bg-current" : "bg-transparent"}`} style={{ color: faction.accentColor }} />
      <div className={`absolute bottom-1.5 right-1.5 w-1 h-1 transition-all ${isActive ? "bg-current" : "bg-transparent"}`} style={{ color: faction.accentColor }} />

      {/* Background faint giant emblem overlay for cinematic atmosphere */}
      <div className="absolute right-0 bottom-0 translate-x-4 translate-y-4 opacity-5 group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none">
        <Icon className="w-28 h-28 text-white" />
      </div>

      {/* Header containing Icon & Title */}
      <div className="flex justify-between items-start w-full relative z-10">
        <div className="flex items-center gap-3">
          <div className={`p-2.5 border rounded-none transition-all duration-300 ${
            isActive ? "border-current bg-current/5" : "border-[#c5a05922] bg-black/60 group-hover:border-[#c5a05955]"
          }`} style={{ color: isActive ? faction.accentColor : "#c5a059" }}>
            <Icon className="w-4 h-4 shrink-0 transition-transform duration-500 group-hover:scale-110" />
          </div>
          <div>
            <p className="font-sans text-[8px] tracking-[0.3em] text-[#555] uppercase font-bold">LEYENDA</p>
            <h4 className={`font-serif text-sm tracking-wider uppercase font-semibold transition-colors duration-300 ${
              isActive ? "text-white" : "text-[#777] group-hover:text-white"
            }`}>
              {faction.name}
            </h4>
          </div>
        </div>
        
        {/* Glowing status jewel */}
        <div className="w-1.5 h-1.5 rounded-full transition-all duration-500" 
          style={{ 
            backgroundColor: faction.accentColor,
            boxShadow: isActive ? `0 0 10px ${faction.accentColor}, 0 0 20px ${faction.accentColor}` : "none",
            opacity: isActive ? 1 : 0.25
          }} 
        />
      </div>

      {/* Description snippet */}
      <p className="text-[10px] text-[#666] group-hover:text-[#999] font-sans uppercase leading-relaxed tracking-wider mt-3 line-clamp-2 transition-colors duration-300 relative z-10 pl-1">
        {faction.description}
      </p>

      {/* Bottom accent slide-in line */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[2px] transition-all duration-500 scale-x-0 group-hover:scale-x-100"
        style={{ backgroundColor: faction.accentColor }}
      />
    </button>
  );
}
