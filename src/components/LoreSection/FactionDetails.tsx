import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { Quote, Sparkles } from "lucide-react";
import type { Faction } from "../../types";

interface FactionDetailsProps {
  activeFactionData: Faction;
}

export default function FactionDetails({ activeFactionData }: FactionDetailsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-stretch justify-center bg-[#070707]/98 border border-[#c5a05922] hover:border-[#c5a05955] rounded-none p-6 md:p-12 relative overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.95)] transition-all duration-700">
      
      {/* Elegant outer corner brackets with majestic double lines */}
      <div className="absolute top-4 left-4 w-7 h-7 border-t-2 border-l-2 border-[#c5a05933]" />
      <div className="absolute top-4 right-4 w-7 h-7 border-t-2 border-r-2 border-[#c5a05933]" />
      <div className="absolute bottom-4 left-4 w-7 h-7 border-b-2 border-l-2 border-[#c5a05933]" />
      <div className="absolute bottom-4 right-4 w-7 h-7 border-b-2 border-r-2 border-[#c5a05933]" />

      {/* Left Column: Interactive Portrait of the Legend */}
      <div className="col-span-1 md:col-span-5 relative group overflow-hidden border border-[#c5a05922] hover:border-[#c5a05944] transition-all duration-500 shadow-xl flex flex-col justify-end min-h-[400px]">
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent z-10 opacity-95"></div>
        
        {/* Corner detailing inside the picture frame */}
        <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-[#c5a059] z-20 transition-transform duration-500 group-hover:-translate-x-1 group-hover:-translate-y-1" />
        <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-[#c5a059] z-20 transition-transform duration-500 group-hover:translate-x-1 group-hover:translate-y-1" />

        <motion.img
          key={activeFactionData.id}
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          src={activeFactionData.image}
          alt={activeFactionData.name}
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.04] transition-all duration-[6000ms] ease-out"
        />
        
        <div className="relative z-20 p-6 md:p-8">
          <span className="font-mono text-[9px] tracking-[0.25em] text-[#c5a059] font-bold uppercase block mb-1">
            ALINEACIÓN EN HISTORIA
          </span>
          <h4 className="font-serif text-lg md:text-xl text-white tracking-widest font-semibold uppercase drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]">
            {activeFactionData.leader}
          </h4>
          <div className="h-[2px] w-12 bg-[#c5a059] mt-2 transition-all duration-500 group-hover:w-24" />
        </div>
      </div>

      {/* Right Column: Descriptions, Quote & Game Inscriptions */}
      <div className="col-span-1 md:col-span-7 flex flex-col justify-between">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFactionData.id}
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -25 }}
            transition={{ duration: 0.5 }}
            className="space-y-6 flex flex-col justify-between h-full"
          >
            <div className="space-y-5">
              <div>
                <span 
                  className="font-mono text-[9px] font-bold tracking-[0.25em] uppercase px-3 py-1.5 border rounded-none inline-block mb-3.5"
                  style={{ 
                    color: activeFactionData.accentColor,
                    borderColor: `${activeFactionData.accentColor}33`,
                    backgroundColor: `${activeFactionData.accentColor}10`
                  }}
                >
                  {activeFactionData.title}
                </span>
                <h3 className="font-serif text-2xl md:text-4xl text-white tracking-widest uppercase font-semibold">
                  {activeFactionData.name}
                </h3>
              </div>

              <p className="font-sans text-xs md:text-[13px] text-[#aaa] leading-relaxed tracking-wider uppercase font-light pl-1">
                {activeFactionData.detailedLore}
              </p>
            </div>

            {/* Cinematic quote box in place of RPG stats */}
            <div className="relative bg-[#050505]/85 border border-[#c5a05915] p-6 md:p-8 rounded-none my-4 flex items-center shadow-inner overflow-hidden group/quote">
              {/* Giant gold quote icon watermark */}
              <Quote className="absolute right-4 bottom-2 w-28 h-28 text-[#c5a059]/5 pointer-events-none group-hover/quote:scale-110 transition-transform duration-700" />
              
              <div className="relative z-10 border-l-2 border-[#c5a059] pl-5 md:pl-6">
                <p className="font-serif text-xs md:text-sm text-[#f3e5ab] italic tracking-wider leading-relaxed uppercase">
                  “ {activeFactionData.quote} ”
                </p>
                <p className="font-sans text-[8px] text-[#555] tracking-[0.25em] uppercase font-bold mt-3">
                  — Inscripción del Códice, Registro del Fresno
                </p>
              </div>
            </div>

            {/* Design & Abilities (Clean and elegant gameplay connection) */}
            <div className="space-y-3">
              <h5 className="font-sans text-[9px] font-bold text-[#c5a059] tracking-[0.25em] uppercase flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" /> DESIGNIOS Y HABILIDADES
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {activeFactionData.traits.map((trait) => (
                  <div
                    key={trait}
                    className="flex items-center gap-3 p-3.5 bg-black/60 border border-[#c5a05915] hover:border-[#c5a05944] hover:shadow-[0_0_15px_rgba(197,160,89,0.1)] transition-all duration-300 rounded-none group/trait"
                  >
                    <div className="w-1.5 h-1.5 rotate-45 bg-[#c5a059]/40 group-hover/trait:bg-[#c5a059] transition-colors duration-300 shrink-0" />
                    <span className="font-sans text-[10px] uppercase tracking-wider text-[#d0d0d0] font-semibold transition-colors group-hover/trait:text-[#f3e5ab]">
                      {trait}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

    </div>
  );
}
