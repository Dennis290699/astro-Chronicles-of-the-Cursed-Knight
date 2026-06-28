import React from "react";
import { Award, BarChart3, RotateCcw } from "lucide-react";

interface LocalResults {
  faithful: number;
  iron_ashes: number;
  abyss_defilers: number;
  total: number;
}

interface ResultsPanelProps {
  playerName: string;
  alignment: { factionId: string; title: string; factionName: string };
  pollResults: LocalResults;
  onReset: () => void;
}

export default function ResultsPanel({
  playerName,
  alignment,
  pollResults,
  onReset
}: ResultsPanelProps) {
  const fPct = Math.round((pollResults.faithful / pollResults.total) * 100) || 30;
  const iPct = Math.round((pollResults.iron_ashes / pollResults.total) * 100) || 40;
  const aPct = Math.round((pollResults.abyss_defilers / pollResults.total) * 100) || 30;

  return (
    <div className="space-y-6 text-left">
      {/* Personalized Champion alignment banner */}
      <div className="p-6 md:p-8 bg-black border border-[#c5a05944] hover:border-[#c5a059aa] rounded-none text-center relative overflow-hidden transition-all duration-500 shadow-[0_15px_30px_rgba(0,0,0,0.8)]">
        {/* Subtle decorative internal border */}
        <div className="absolute inset-1.5 border border-[#c5a05911] pointer-events-none" />
        <div className="absolute top-3 left-3 w-2.5 h-2.5 border-t border-l border-[#c5a05988]" />
        <div className="absolute top-3 right-3 w-2.5 h-2.5 border-t border-r border-[#c5a05988]" />
        <div className="absolute bottom-3 left-3 w-2.5 h-2.5 border-b border-l border-[#c5a05988]" />
        <div className="absolute bottom-3 right-3 w-2.5 h-2.5 border-b border-r border-[#c5a05988]" />

        <Award className="w-10 h-10 text-[#c5a059] mx-auto mb-4 animate-bounce" />
        
        <p className="text-[9px] tracking-[0.3em] text-[#c5a059] font-sans font-bold uppercase">
          JUICIO REAL EN VALTHERIA
        </p>
        <h4 className="font-serif text-white text-xl font-bold tracking-widest mt-1.5 uppercase">
          {playerName || "Peregrino sin Nombre"}
        </h4>
        <div className="my-3 text-center h-[1px] w-24 bg-[#c5a05933] mx-auto"></div>
        
        <p className="font-serif text-2xl text-[#c5a059] tracking-widest uppercase mt-4 font-semibold drop-shadow-[0_0_15px_rgba(197,160,89,0.2)]">
          {alignment.title}
        </p>
        
        <p className="text-[11px] text-[#a0a0a0] font-sans mt-3.5 max-w-sm mx-auto leading-relaxed uppercase tracking-wider">
          Tu juicio ha finalizado. Tu alma está fuertemente alineada con la senda de:<br />
          <span className="font-serif text-white tracking-widest block mt-2 text-sm">{alignment.factionName}</span>.
        </p>
      </div>

      {/* Community Poll Results */}
      <div className="space-y-4 pt-5 border-t border-[#c5a05922]">
        <div className="flex justify-between items-center text-[9px] font-sans tracking-[0.25em] font-bold text-[#c5a059]">
          <span className="flex items-center gap-1.5 uppercase">
            <BarChart3 className="w-3.5 h-3.5 animate-pulse" />
            RESULTADOS GLOBALES DE LA COMUNIDAD
          </span>
          <span className="uppercase">{pollResults.total} CABALLEROS JUZGADOS</span>
        </div>

        <div className="space-y-4">
          {/* 1. Faithful */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-[10px] font-sans font-bold uppercase tracking-wider text-[#dfdfdb]">
              <span>Sir Gareth</span>
              <span className="text-[#c5a059]">{fPct}% ({pollResults.faithful} votos)</span>
            </div>
            <div className="h-3 bg-black border border-[#c5a05922] rounded-none relative overflow-hidden">
              <div
                style={{ width: `${fPct}%` }}
                className="h-full bg-gradient-to-r from-[#c5a059]/40 to-[#c5a059] transition-all duration-1000"
              />
            </div>
          </div>

          {/* 2. Iron Ashes */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-[10px] font-sans font-bold uppercase tracking-wider text-[#dfdfdb]">
              <span>Eco de Elara</span>
              <span className="text-[#c5a059]">{iPct}% ({pollResults.iron_ashes} votos)</span>
            </div>
            <div className="h-3 bg-black border border-[#c5a05922] rounded-none relative overflow-hidden">
              <div
                style={{ width: `${iPct}%` }}
                className="h-full bg-gradient-to-r from-[#c5a059]/40 to-[#c5a059] transition-all duration-1000"
              />
            </div>
          </div>

          {/* 3. Abyss Defilers */}
          <div className="space-y-1.5">
            <div className="flex justify-between text-[10px] font-sans font-bold uppercase tracking-wider text-[#dfdfdb]">
              <span>Lord Malakor</span>
              <span className="text-[#c5a059]">{aPct}% ({pollResults.abyss_defilers} votos)</span>
            </div>
            <div className="h-3 bg-black border border-[#c5a05922] rounded-none relative overflow-hidden">
              <div
                style={{ width: `${aPct}%` }}
                className="h-full bg-gradient-to-r from-[#c5a059]/40 to-[#c5a059] transition-all duration-1000"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Reset button */}
      <div className="flex justify-between items-center pt-4 border-t border-[#c5a05933] text-[10px] tracking-wider uppercase font-sans font-bold">
        <span className="text-[#555]">
          ¿Quieres reescribir tu destino?
        </span>
        <button
          onClick={onReset}
          className="flex items-center gap-1.5 px-3 py-1.5 border border-[#c5a05933] text-[#888] hover:text-[#c5a059] hover:border-[#c5a059] rounded-none bg-black transition-all cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>REINICIAR VOTOS</span>
        </button>
      </div>

    </div>
  );
}
