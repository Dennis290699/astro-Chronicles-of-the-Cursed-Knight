import React, { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { Download, Landmark } from "lucide-react";
import FloatingSparks from "./FloatingSparks";

interface HeroSectionProps {
  onOpenDemo: () => void;
  onOpenSurvey: () => void;
}

export default function HeroSection({ onOpenDemo, onOpenSurvey }: HeroSectionProps) {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sy = window.scrollY;
          // Only perform calculations if the hero is visible in the viewport area
          if (sy < window.innerHeight * 1.3) {
            if (backgroundRef.current) {
              backgroundRef.current.style.transform = `translate3d(0, ${sy * 0.35}px, 0)`;
            }
            if (contentRef.current) {
              contentRef.current.style.transform = `translate3d(0, ${sy * 0.08}px, 0)`;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Trigger initial positioning calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between items-center text-center overflow-hidden bg-[#050505]"
    >
      {/* 1. Parallax Layer: Deep Atmospheric Background (Forest / Mist / Ruins) */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 z-0 scale-105 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(5, 5, 5, 0.3) 0%, rgba(5, 5, 5, 0.9) 70%, rgba(5, 5, 5, 1) 100%), url('/wallpapers/cover01.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center 40%",
          willChange: "transform",
        }}
      />

      {/* 2. Ambient Gold Lighting & Vignette */}
      <div className="absolute inset-0 z-10 bg-radial-gradient from-transparent via-[#050505]/40 to-[#050505] pointer-events-none" />

      {/* Static golden aura directly behind the main titles (no pulse animation to avoid distraction) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-[#c5a059]/10 rounded-full blur-[100px] sm:blur-[160px] pointer-events-none z-10" />

      {/* 3. Floating Amber/Gold Ash Particles (Atmospheric Ember simulation) */}
      <FloatingSparks />

      {/* 4. Decorative Frame Borders (Responsive & elegant medieval lines) */}
      <div className="absolute top-24 left-4 right-4 bottom-4 sm:left-6 sm:right-6 sm:bottom-6 border border-[#c5a05922] pointer-events-none z-20 rounded-none transition-all duration-300">
        {/* Subtle decorative corners */}
        <div className="absolute top-0 left-0 w-16 h-[1px] bg-gradient-to-r from-[#c5a059] to-transparent" />
        <div className="absolute top-0 left-0 w-[1px] h-16 bg-gradient-to-b from-[#c5a059] to-transparent" />

        <div className="absolute top-0 right-0 w-16 h-[1px] bg-gradient-to-l from-[#c5a059] to-transparent" />
        <div className="absolute top-0 right-0 w-[1px] h-16 bg-gradient-to-b from-[#c5a059] to-transparent" />

        <div className="absolute bottom-0 left-0 w-16 h-[1px] bg-gradient-to-r from-[#c5a059] to-transparent" />
        <div className="absolute bottom-0 left-0 w-[1px] h-16 bg-gradient-to-t from-[#c5a059] to-transparent" />

        <div className="absolute bottom-0 right-0 w-16 h-[1px] bg-gradient-to-l from-[#c5a059] to-transparent" />
        <div className="absolute bottom-0 right-0 w-[1px] h-16 bg-gradient-to-t from-[#c5a059] to-transparent" />
      </div>

      {/* Spacer for Header */}
      <div className="h-28" />

      {/* Main Portada Typography and Action Buttons Container */}
      <div
        ref={contentRef}
        className="relative z-25 max-w-4xl px-6 flex flex-col items-center justify-center flex-grow py-10"
        style={{
          willChange: "transform",
        }}
      >

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, letterSpacing: "0.08em", filter: "blur(10px)" }}
          animate={{ opacity: 1, letterSpacing: "0.15em", filter: "blur(0px)" }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="font-serif text-3xl xs:text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[92px] text-transparent bg-clip-text bg-gradient-to-b from-[#ffffff] via-[#e5e5e5] to-[#b3b3b3] uppercase leading-none select-none relative drop-shadow-[0_0_40px_rgba(197,160,89,0.15)] pl-[0.15em] font-black"
        >
          CHRONICLES
        </motion.h1>

        {/* Secondary Title Part */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="font-sans text-[10px] sm:text-xs md:text-sm tracking-[0.45em] text-[#c5a059] uppercase mt-2 font-bold select-none text-center"
        >
          OF THE CURSED KNIGHT
        </motion.span>

        {/* Golden Emblem details below the title */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: "100%" }}
          transition={{ duration: 1.8, delay: 0.4 }}
          className="flex items-center justify-center gap-4 my-6 w-full max-w-[140px] xs:max-w-[200px] md:max-w-[340px]"
        >
          <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent to-[#c5a05933]" />
          <div className="rotate-45 border border-[#c5a05944] p-1.5 bg-black/60">
            <div className="w-1.5 h-1.5 bg-[#c5a059]" />
          </div>
          <div className="h-[1px] flex-grow bg-gradient-to-l from-transparent to-[#c5a05933]" />
        </motion.div>

        {/* Subtitle / Epic Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="font-serif text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl text-[#f3e5ab] tracking-[0.12em] sm:tracking-[0.16em] uppercase text-center max-w-2xl px-4 mb-10 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)]"
        >
          “Cuando el Corazón del Bosque se quiebre... la ceniza necrótica lo consumirá todo.”
        </motion.p>

        {/* THE TWO MAIN ACTION BUTTONS WITH ENHANCED CUSTOM INTERACTION */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full max-w-xl z-30 px-4 mt-2"
        >
          {/* 1. BUTTON: Download PC Demo (Premium Ancient Gilded Slate style) */}
          <button
            onClick={onOpenDemo}
            className="group relative w-full sm:w-1/2 py-4 px-6 bg-black border-2 border-[#c5a059] text-[#c5a059] font-sans text-xs uppercase tracking-[0.25em] font-bold rounded-none transition-all duration-300 hover:text-black hover:bg-[#c5a059] hover:shadow-[0_0_30px_rgba(197,160,89,0.35)] cursor-pointer overflow-hidden"
          >
            {/* Corner crosshairs/brackets inside the button */}
            <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-[#c5a059]/60 group-hover:border-black transition-colors duration-300" />
            <div className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-[#c5a059]/60 group-hover:border-black transition-colors duration-300" />
            <div className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-[#c5a059]/60 group-hover:border-black transition-colors duration-300" />
            <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-[#c5a059]/60 group-hover:border-black transition-colors duration-300" />

            {/* Elegant light sheen slide effect on hover */}
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1200ms] ease-out pointer-events-none" />

            <span className="relative flex items-center justify-center gap-2.5">
              <Download className="w-4 h-4 transition-transform duration-300 group-hover:translate-y-[2px]" />
              BAJAR DEMO PC
            </span>
          </button>

          {/* 2. BUTTON: Join the Realm (Elegant Obsidian Glass style with corner gaps) */}
          <button
            disabled
            className="group relative w-full sm:w-1/2 py-4 px-6 bg-[#0c0c0c]/40 border border-[#c5a05911] text-[#c5a059]/30 font-sans text-xs uppercase tracking-[0.25em] font-bold rounded-none cursor-not-allowed overflow-hidden"
            title="Disponible en la Beta"
          >
            <span className="relative flex items-center justify-center gap-2.5">
              <Landmark className="w-4 h-4 opacity-40" />
              UNIRSE AL REINO (PRONTO)
            </span>
          </button>
        </motion.div>
      </div>

      {/* Bottom info ticker */}
      <div className="relative z-20 w-full bg-[#080808]/95 border-t border-[#c5a05911] px-6 py-5 flex flex-col md:flex-row justify-between items-center text-[10px] text-[#888] font-sans uppercase tracking-[0.2em] max-w-7xl gap-3">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-[#c5a059]"></span>
          <span className="text-[#c5a059] font-bold">ESTADO: DEMO ALPHA PÚBLICA DISPONIBLE</span>
        </div>
        <div className="hidden md:flex gap-6 text-[#777]">
          <span>PLATAFORMA: PC (STEAM DECK RECOMENDADO)</span>
          <span className="text-[#c5a05922]">•</span>
          <span>IDIOMAS: CASTELLANO, ENGLISH</span>
        </div>
        <div className="text-[#c5a059]/80 font-medium tracking-[0.15em]">
          NOMBRE EN CLAVE: PROJECT ARROW
        </div>
      </div>
    </section>
  );
}
