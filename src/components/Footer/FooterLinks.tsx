import React from "react";
import { Shield, Scroll, Compass, Sparkles } from "lucide-react";

export default function FooterLinks() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 w-full max-w-5xl border border-[#c5a05922] bg-black/60 backdrop-blur-md p-8 md:p-10 mb-12 relative overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.9)]">
      {/* Subtle inner corner guides */}
      <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-[#c5a05944]" />
      <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-[#c5a05944]" />
      <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-[#c5a05944]" />
      <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-[#c5a05944]" />

      <div className="flex flex-col gap-4 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-2 border-b border-[#c5a05922] pb-2">
          <Shield className="w-3.5 h-3.5 text-[#c5a059]" />
          <h5 className="text-[#c5a059] font-serif text-[11px] tracking-[0.2em] uppercase font-bold">El Reino</h5>
        </div>
        <div className="flex flex-col gap-2.5 text-[10px] uppercase font-sans tracking-widest text-[#888]">
          <a href="#hero" className="hover:text-white hover:translate-x-1 transition-all duration-300">Inicio</a>
          <a href="#lore" className="hover:text-white hover:translate-x-1 transition-all duration-300">Las Facciones</a>
          <a href="#lore" className="hover:text-white hover:translate-x-1 transition-all duration-300">Cronología de Ámbar</a>
        </div>
      </div>

      <div className="flex flex-col gap-4 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-2 border-b border-[#c5a05922] pb-2">
          <Scroll className="w-3.5 h-3.5 text-[#c5a059]" />
          <h5 className="text-[#c5a059] font-serif text-[11px] tracking-[0.2em] uppercase font-bold">Archivos</h5>
        </div>
        <div className="flex flex-col gap-2.5 text-[10px] uppercase font-sans tracking-widest text-[#888]">
          <a href="#gallery" className="hover:text-white hover:translate-x-1 transition-all duration-300">Galería de Fieles</a>
          <a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300">Banda Sonora Rúnica</a>
          <a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300">pergaminos de Prensa</a>
        </div>
      </div>

      <div className="flex flex-col gap-4 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-2 border-b border-[#c5a05922] pb-2">
          <Compass className="w-3.5 h-3.5 text-[#c5a059]" />
          <h5 className="text-[#c5a059] font-serif text-[11px] tracking-[0.2em] uppercase font-bold">Soporte</h5>
        </div>
        <div className="flex flex-col gap-2.5 text-[10px] uppercase font-sans tracking-widest text-[#888]">
          <a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300">Códice de Preguntas</a>
          <a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300">Comunidad de Gremios</a>
          <a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300">Foro de Caballeros</a>
        </div>
      </div>

      <div className="flex flex-col gap-4 text-center md:text-left">
        <div className="flex items-center justify-center md:justify-start gap-2 border-b border-[#c5a05922] pb-2">
          <Sparkles className="w-3.5 h-3.5 text-[#c5a059]" />
          <h5 className="text-[#c5a059] font-serif text-[11px] tracking-[0.2em] uppercase font-bold">Jurídico</h5>
        </div>
        <div className="flex flex-col gap-2.5 text-[10px] uppercase font-sans tracking-widest text-[#888]">
          <a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300">Decretos de Servicio</a>
          <a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300">Sigilo de Privacidad</a>
          <a href="#" className="hover:text-white hover:translate-x-1 transition-all duration-300">EULA del Manifiesto</a>
        </div>
      </div>
    </div>
  );
}
