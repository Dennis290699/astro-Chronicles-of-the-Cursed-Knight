import React, { useEffect } from "react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import type { Screenshot } from "../../types";

interface ScreenshotLightboxProps {
  screenshot: Screenshot;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function ScreenshotLightbox({
  screenshot,
  onClose,
  onPrev,
  onNext
}: ScreenshotLightboxProps) {
  // Capture keyboard keys for closing/navigating the lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    
    // Lock background scroll
    document.body.style.overflow = "hidden";
    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 bg-black/98 z-[100] backdrop-blur-md flex flex-col justify-between p-6">
      
      {/* 1. Header controls */}
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto z-10">
        <div>
          <span className="font-mono text-[9px] tracking-[0.25em] text-[#c5a059] font-bold uppercase">
            VISOR SACRO DE CAPTURAS
          </span>
          <h4 className="font-serif text-sm md:text-base text-white tracking-widest uppercase font-semibold mt-1">
            {screenshot.title}
          </h4>
        </div>
        
        <button
          onClick={onClose}
          className="p-3 border border-[#c5a05933] hover:border-[#c5a059] text-[#c5a059] hover:text-[#f3e5ab] bg-transparent rounded-none transition-all cursor-pointer flex items-center gap-2 text-[10px] font-sans uppercase tracking-[0.2em] font-medium"
        >
          <X className="w-4 h-4" />
          <span>Cerrar</span>
        </button>
      </div>

      {/* 2. Middle slide viewer */}
      <div className="flex-grow flex items-center justify-center relative w-full max-w-6xl mx-auto my-4 group">
        
        {/* Navigation arrows (Overlay hover styles) */}
        <button
          onClick={onPrev}
          className="absolute left-2 md:left-4 z-20 p-4 border border-[#c5a05922] hover:border-[#c5a059] text-[#c5a059] bg-black/60 hover:bg-black/90 transition-all rounded-none cursor-pointer"
          aria-label="Captura anterior"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={onNext}
          className="absolute right-2 md:right-4 z-20 p-4 border border-[#c5a05922] hover:border-[#c5a059] text-[#c5a059] bg-black/60 hover:bg-black/90 transition-all rounded-none cursor-pointer"
          aria-label="Captura siguiente"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* The Image itself with Gilded Border Frame */}
        <div className="relative max-h-[70vh] max-w-[85vw] border border-[#c5a05944] p-1 sm:p-2 bg-[#0c0c0c] box-gold-glow flex items-center justify-center">
          <div className="absolute top-4 left-4 w-3.5 h-3.5 border-t border-l border-[#c5a059]" />
          <div className="absolute top-4 right-4 w-3.5 h-3.5 border-t border-r border-[#c5a059]" />
          <div className="absolute bottom-4 left-4 w-3.5 h-3.5 border-b border-l border-[#c5a059]" />
          <div className="absolute bottom-4 right-4 w-3.5 h-3.5 border-b border-r border-[#c5a059]" />

          <img
            src={screenshot.url}
            alt={screenshot.title}
            className="object-contain max-h-[66vh] max-w-[80vw]"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>

      {/* 3. Footer info panel */}
      <div className="w-full max-w-4xl mx-auto text-center border-t border-[#c5a05922] pt-6 pb-2 z-10 space-y-2">
        <div className="flex justify-center items-center gap-3">
          <span className="font-mono text-[9px] font-bold tracking-[0.2em] px-2.5 py-1 border border-[#c5a05933] bg-[#c5a05910] text-[#c5a059] uppercase">
            {screenshot.category}
          </span>
          <span className="text-[#555] font-sans text-xs">•</span>
          <span className="font-sans text-[11px] text-[#888] uppercase tracking-wider">
            {screenshot.description}
          </span>
        </div>
        <p className="text-[9px] text-[#555] tracking-widest font-sans uppercase">
          USA LAS FLECHAS DE TU TECLADO PARA NAVEGAR • ESC PARA CERRAR
        </p>
      </div>

    </div>
  );
}
