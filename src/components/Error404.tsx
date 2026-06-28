import React from "react";
import { motion } from "motion/react";
import { Swords, Compass, HelpCircle, ArrowLeft } from "lucide-react";

export default function Error404() {
  // Deterministic particles for cinematic atmosphere
  const particles = Array.from({ length: 25 }).map((_, i) => ({
    id: i,
    left: `${(i * 17) % 100}%`,
    delay: -((i * 13) % 15),
    duration: ((i * 11) % 10) + 12,
    size: ((i * 7) % 3) + 1.5,
  }));

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden py-16 px-4 bg-[#030303]">
      
      {/* 1. Background Image with Slow Zoom & Pan Animation */}
      <div 
        className="absolute inset-0 bg-cover bg-center select-none pointer-events-none scale-105"
        style={{ 
          backgroundImage: "url('/wallpapers/cover.jpeg')",
          animation: "slowPan 28s infinite alternate ease-in-out",
          filter: "brightness(0.2) contrast(1.1) saturate(0.85)"
        }}
      />

      {/* 2. Dark Cinematic Vignette & Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#030303] via-[#030303]/40 to-[#030303]/90 pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient(circle at center, transparent 30%, rgba(0,0,0,0.85) 100%) pointer-events-none" />

      {/* 3. Floating Ashes & Embers Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10 hidden md:block">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute bottom-0 rounded-full bg-[#c5a059]"
            style={{
              left: p.left,
              width: p.size,
              height: p.size,
              boxShadow: "0 0 6px #c5a059",
              opacity: 0.5,
              willChange: "transform, opacity",
            }}
            animate={{
              y: ["0vh", "-100vh"],
              x: ["0px", p.id % 2 === 0 ? "35px" : "-35px"],
              opacity: [0, 0.7, 0.7, 0]
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              delay: p.delay,
              ease: "linear"
            }}
          />
        ))}
      </div>

      {/* 4. Royal Decree 404 Scroll Card */}
      <div className="relative z-20 w-full max-w-4xl bg-[#050505]/85 border border-[#c5a05922] backdrop-blur-md shadow-[0_25px_60px_rgba(0,0,0,0.95)]">
        
        {/* Double internal border */}
        <div className="absolute inset-1 border border-double border-[#c5a05915] pointer-events-none" />

        {/* Gold Corner Ornaments */}
        <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#c5a05955]" />
        <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#c5a05955]" />
        <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#c5a05955]" />
        <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#c5a05955]" />

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 items-stretch min-h-[460px]">
          
          {/* Left Side: Game Logo & 404 Status */}
          <div className="md:col-span-5 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden select-none">
            {/* Subtle light pulse behind the logo */}
            <div className="absolute w-48 h-48 bg-[#c5a059]/5 rounded-full blur-[60px] animate-pulse pointer-events-none" />
            
            <img 
              src="/logo3.svg" 
              alt="Crest Logo" 
              className="h-32 sm:h-40 w-auto filter drop-shadow-[0_0_15px_rgba(197,160,89,0.55)] relative z-10 hover:scale-105 transition-transform duration-500"
            />
            
            <div className="mt-6 relative z-10">
              <span className="font-mono text-[#c5a059]/40 text-xs tracking-[0.4em] uppercase block">
                CÓDICE DE EXILIO
              </span>
              <h1 className="font-serif text-5xl sm:text-6xl text-[#c5a059] tracking-widest font-extrabold mt-1">
                404
              </h1>
              <div className="flex items-center justify-center gap-2 mt-2">
                <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#c5a05944]" />
                <span className="font-serif text-[9px] tracking-[0.25em] text-[#c5a059cc] uppercase font-bold">
                  SENDERO PERDIDO
                </span>
                <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#c5a05944]" />
              </div>
            </div>
          </div>

          {/* Right Side: Royal Decree Exile Message & Redirection */}
          <div className="md:col-span-7 border-t md:border-t-0 md:border-l border-[#c5a05922] p-8 sm:p-12 flex flex-col justify-between relative bg-gradient-to-br from-transparent to-[#c5a059]/[0.01]">
            
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Compass className="w-4 h-4 text-[#c5a059]" />
                <span className="font-mono text-[9px] sm:text-[10px] tracking-[0.3em] text-[#c5a059] uppercase font-bold">
                  DECRETO REAL IMPERIAL V-104
                </span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl text-white tracking-widest uppercase font-semibold">
                LAS NIEBLAS DE LA CENIZA TE HAN ATRAPADO
              </h2>

              <p className="font-serif text-sm sm:text-base italic text-[#c5a059cc] border-l-2 border-[#c5a05955] pl-4 py-1 leading-relaxed">
                "Has cruzado las fronteras del Reino sin consagración. Los Jardines Marchitos no recuerdan tu nombre, y las sierras de las Mazmorras del Eco aguardan a los extraviados."
              </p>

              <p className="font-sans text-xs sm:text-sm text-[#999] leading-relaxed tracking-wide">
                La reliquia espiritual del Corazón del Bosque ha ocultado el camino que buscas. Retrocede, caballero maldito, antes de que las cenizas petrifiquen tu espada por completo.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#c5a05911] flex flex-col sm:flex-row items-center gap-4">
              <a 
                href="/" 
                className="w-full sm:w-auto flex items-center justify-center gap-3 px-6 py-3 border border-[#c5a059] bg-[#c5a0590c] hover:bg-[#c5a05922] text-[#c5a059] hover:text-white font-serif text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300 shadow-[0_0_15px_rgba(197,160,89,0.15)] group cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                <span>Retornar al Sendero Seguro</span>
              </a>

              <div className="hidden sm:flex items-center gap-2 text-[9px] text-[#444] font-mono tracking-widest uppercase">
                <Swords className="w-3.5 h-3.5 text-[#c5a059]/30" />
                <span>VALTHERIA REGISTRIES</span>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Styled animation keyframes for slow background panning */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slowPan {
          0% { transform: scale(1.05) translate(0px, 0px); }
          50% { transform: scale(1.10) translate(2% -1%); }
          100% { transform: scale(1.05) translate(-1% 1%); }
        }
      `}} />
    </div>
  );
}
