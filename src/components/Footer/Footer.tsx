import React, { useEffect, useRef } from "react";
import { Swords } from "lucide-react";
import FooterLinks from "./FooterLinks";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const footerRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (footerRef.current) {
            const rect = footerRef.current.getBoundingClientRect();
            const viewportHeight = window.innerHeight;

            // If the footer starts entering the viewport
            if (rect.top < viewportHeight) {
              const scrolledIntoView = viewportHeight - rect.top;

              if (bgRef.current) {
                // Background image shifts to create a natural parallax depth (appearing further away)
                bgRef.current.style.transform = `translate3d(0, ${scrolledIntoView * 0.15}px, 0)`;
              }
              if (watermarkRef.current) {
                // Watermark logo shifts at a different speed for multi-layered depth
                watermarkRef.current.style.transform = `translate3d(0, ${scrolledIntoView * 0.06}px, 0)`;
              }
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer ref={footerRef} className="relative bg-[#030303] border-t border-[#c5a05933] py-20 px-6 lg:px-10 overflow-hidden">

      <div
        ref={bgRef}
        className="absolute -top-20 -bottom-20 left-0 right-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(3, 3, 3, 0.7) 0%, rgba(3, 3, 3, 0.35) 50%, rgba(3, 3, 3, 0.8) 100%), url('/wallpapers/footercover.jpeg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.65,
          willChange: "transform",
        }}
      />

      {/* Styles Injection for Footer animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes footerDriftUp {
          0% { transform: translateY(100px) translateX(0) rotate(0deg); opacity: 0; }
          15% { opacity: 0.8; }
          85% { opacity: 0.8; }
          100% { transform: translateY(-400px) translateX(80px) rotate(120deg); opacity: 0; }
        }
        @keyframes pulseGlow {
          0%, 100% { opacity: 0.45; transform: translate(-50%, -10%) scale(1); }
          50% { opacity: 0.8; transform: translate(-50%, -10%) scale(1.2); }
        }
        @media (min-width: 768px) {
          .footer-glow-pulse {
            animation: pulseGlow 12s infinite ease-in-out;
            will-change: opacity, transform;
          }
          .footer-particle {
            animation-name: footerDriftUp;
            will-change: transform;
          }
        }
      `}} />

      {/* Background Decorative Grid matching the game aesthetic */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(197,160,89,0.008)_1px,transparent_1px),linear-gradient(90deg,rgba(197,160,89,0.008)_1px,transparent_1px)] bg-[size:80px_80px] pointer-events-none opacity-60" />

      {/* Giant Background Watermark Logo for Royal Decree Aesthetic */}
      <div
        ref={watermarkRef}
        className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center overflow-hidden opacity-[0.15] scale-105"
        style={{ willChange: "transform" }}
      >
        <img
          src="/logo3.svg"
          alt=""
          className="w-[320px] xs:w-[480px] md:w-[680px] h-auto object-contain select-none"
        />
      </div>

      {/* Pulse Ambient background glow behind the brand */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#c5a059]/5 rounded-full blur-[100px] pointer-events-none footer-glow-pulse" />

      {/* Ambient Floating Ash and Ember Particles in the Footer - Hidden on Mobile */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden hidden md:block">
        {[...Array(24)].map((_, i) => {
          const size = (i * 7 % 4) + 2.5; // 2.5px to 5.5px
          const left = (i * 17 % 100); // 0% to 99%
          const delay = -((i * 13 % 15)); // 0s to -14s
          const duration = (i * 11 % 10) + 12; // 12s to 21s
          const isGold = i % 2 === 0;
          const particleColor = isGold ? '#c5a059' : '#c5a059'; // Gold and Fire Amber colors
          const glow = `0 0 8px ${particleColor}`;

          return (
            <div
              key={i}
              className="absolute bottom-0 rounded-full footer-particle"
              style={{
                width: `${size}px`,
                height: `${size}px`,
                backgroundColor: particleColor,
                boxShadow: glow,
                left: `${left}%`,
                animationName: "footerDriftUp",
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

      <div className="max-w-7xl mx-auto flex flex-col items-center relative z-10">

        {/* Upper Brand Badge - Spectacularly framed with medieval ornaments */}
        <div className="flex flex-col items-center text-center gap-4 mb-16 group select-none">
          <div className="relative p-6 flex items-center justify-center">
            {/* Pulsing golden background glow behind the logo */}
            <div className="absolute inset-0 bg-[#c5a059]/10 rounded-full blur-xl scale-75 group-hover:scale-110 transition-all duration-700 pointer-events-none" />

            {/* Double outer circles / ornamental frame */}
            <div className="absolute inset-0 border border-dashed border-[#c5a05944] rounded-full animate-spin-[60s]" />
            <div className="absolute inset-2 border border-double border-[#c5a05933] rounded-full" />

            <a href="#hero" className="relative z-10 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
              <img
                src="/logo3.svg"
                alt="Chronicles of the Cursed Knight Logo"
                className="h-20 sm:h-24 w-auto filter drop-shadow-[0_0_15px_rgba(197,160,89,0.6)]"
              />
            </a>
          </div>

          <div className="flex items-center gap-3 mt-2">
            <div className="h-[1px] w-8 bg-gradient-to-r from-transparent to-[#c5a05966]" />
            <span className="font-serif text-[10px] tracking-[0.3em] text-[#c5a059] uppercase font-bold">
              EL REINO DE VALTHERIA
            </span>
            <div className="h-[1px] w-8 bg-gradient-to-l from-transparent to-[#c5a05966]" />
          </div>
        </div>

        {/* Fictional Link Grid with elegant card-like divisions & medieval border detailing */}
        <FooterLinks />

        {/* Social Media Trigger Row with beautifully polished diamond buttons */}
        <SocialLinks />

        {/* Royal Decree Stamp and Legal Scroll Container */}
        <div className="relative border border-[#c5a05915] bg-[#070707]/90 p-8 md:p-10 max-w-4xl w-full text-center space-y-6 shadow-[inset_0_0_30px_rgba(0,0,0,0.8),0_10px_40px_rgba(0,0,0,0.85)] mt-4">
          {/* Corner Brackets */}
          <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#c5a05944]" />
          <div className="absolute top-1.5 right-1.5 w-3 h-3 border-t-2 border-r-2 border-[#c5a05944]" />
          <div className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b-2 border-l-2 border-[#c5a05944]" />
          <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#c5a05944]" />

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-[9px] text-[#c5a059] font-sans tracking-[0.22em] uppercase font-bold text-center">
            <span className="px-3 py-1.5 border border-[#c5a05944] bg-[#c5a0590a] text-[#c5a059] rounded-none shadow-[0_0_15px_rgba(197,160,89,0.2)]">
              ESRB T : VIOLENCIA DE FANTASÍA Y AMBIENTACIÓN GÓTICA
            </span>
            <span className="hidden xs:inline text-[#c5a059]/40">•</span>
            <span className="hover:text-white transition-colors duration-300">PROYECTO ARROW - GRUPO 5</span>
          </div>

          <p className="text-[10px] sm:text-[11px] text-[#c5a059cc] font-sans tracking-[0.16em] uppercase leading-relaxed max-w-3xl mx-auto">
            DESARROLLADO POR: J. ENRÍQUEZ • B. LOYA • J. NINABANDA • L. PERENGUEZ • D. TRUJILLO
          </p>

          <p className="text-[10px] text-[#777] font-sans tracking-[0.18em] uppercase leading-relaxed max-w-2xl mx-auto">
            © {currentYear} Project Arrow & Chronicles of the Cursed Knight. Cátedra de Proyecto de Videojuegos, Universidad Central del Ecuador. Todos los derechos reservados.
          </p>

          <div className="flex items-center justify-center gap-4 py-2">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[#c5a05933]" />
            <p className="text-[9px] text-[#555] font-mono tracking-[0.2em] uppercase flex items-center gap-2">
              <Swords className="w-3.5 h-3.5 text-[#c5a059]/40" />
              DECRETO REAL FORJADO CON PRECISIÓN GÓTICA MEDIEVAL EN TONOS ORO Y ACERO OSCURO.
            </p>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[#c5a05933]" />
          </div>
        </div>

      </div>
    </footer>
  );
}
