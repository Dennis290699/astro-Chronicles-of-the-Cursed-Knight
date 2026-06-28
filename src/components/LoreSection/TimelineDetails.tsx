import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldAlert, BookOpen } from "lucide-react";
import type { LoreKeyEvent } from "../../types";

interface TimelineDetailsProps {
  activeEvent: LoreKeyEvent;
  activeTimelineIndex: number;
}

const worldStates = [
  { label: "PAZ DIVINA", status: "Luz Absoluta y Crecimiento del Fresno", color: "text-[#c5a059] border-[#c5a059]/20 bg-[#c5a059]/5" },
  { label: "SOMBRA SUSURRANTE", status: "Corrupción Latente en los Cimientos", color: "text-[#a37a34] border-[#a37a34]/20 bg-[#a37a34]/5" },
  { label: "NEBULOSA DE CENIZA", status: "Petrificación Activa y Devastación", color: "text-red-500/80 border-red-500/20 bg-red-500/5" },
  { label: "TIERRA BALDÍA", status: "Plaga de Ceniza y Camino de Redención", color: "text-[#c5a059] border-[#c5a059]/20 bg-[#c5a059]/5" }
];

export default function TimelineDetails({ activeEvent, activeTimelineIndex }: TimelineDetailsProps) {
  const currentState = worldStates[activeTimelineIndex] || worldStates[0];

  return (
    <div className="md:col-span-8 bg-[#070707]/98 border border-[#c5a05922] hover:border-[#c5a05944] p-6 md:p-10 relative overflow-hidden transition-all duration-500 shadow-xl flex flex-col justify-between min-h-[300px]">
      
      {/* Subtle corner elements */}
      <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t border-l border-[#c5a05933]" />
      <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t border-r border-[#c5a05933]" />
      <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b border-l border-[#c5a05933]" />
      <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b border-r border-[#c5a05933]" />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeEvent.year}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          className="space-y-6 flex-grow"
        >
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#c5a05915] pb-5">
            <div className="flex items-center gap-3">
              <div className="p-2 border border-[#c5a05933] bg-[#050505]">
                <BookOpen className="w-4 h-4 text-[#c5a059]" />
              </div>
              <div>
                <p className="font-mono text-[9px] tracking-widest text-[#555] uppercase font-bold">REGISTRO CRONOLÓGICO</p>
                <h3 className="font-serif text-base tracking-widest uppercase font-semibold text-white mt-0.5">
                  {activeEvent.title}
                </h3>
              </div>
            </div>
            <span className="font-mono text-[10px] text-[#c5a059] font-bold border border-[#c5a05933] bg-[#c5a05910] px-3.5 py-1.5 self-start sm:self-center tracking-widest uppercase rounded-none">
              {activeEvent.year.split(" - ")[0]}
            </span>
          </div>

          {/* Description */}
          <p className="font-sans text-xs md:text-sm text-[#aaa] leading-relaxed tracking-wider uppercase font-light pt-2 pl-1">
            {activeEvent.description}
          </p>

          {/* World State indicator */}
          <div className="space-y-2 pt-4 border-t border-[#c5a05915]">
            <p className="font-sans text-[9px] font-bold text-[#c5a059] tracking-[0.25em] uppercase flex items-center gap-2">
              <ShieldAlert className="w-3.5 h-3.5 text-[#c5a059]" /> ESTADO DE VALTHERIA:
            </p>
            <div className={`flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 border rounded-none ${currentState.color}`}>
              <span className="font-mono text-[11px] font-bold tracking-widest">{currentState.label}</span>
              <span className="font-sans text-[9px] uppercase tracking-wider opacity-80">{currentState.status}</span>
            </div>
          </div>

          {/* Historic consequences Box */}
          <div className="bg-[#0b0b0b]/90 border border-[#c5a05915] p-5 mt-6 relative shadow-inner">
            <div className="absolute top-0 bottom-0 left-0 w-[3px] bg-[#c5a059]" />
            <p className="font-mono text-[9px] tracking-widest text-[#555] uppercase font-bold mb-1">CONSECUENCIA HISTÓRICA</p>
            <p className="font-serif text-xs md:text-[13px] tracking-widest text-[#f3e5ab] uppercase leading-relaxed">
              {activeEvent.consequences}
            </p>
          </div>

        </motion.div>
      </AnimatePresence>

    </div>
  );
}
