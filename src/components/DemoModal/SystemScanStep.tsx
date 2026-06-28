import React, { useState, useEffect } from "react";
import { ShieldCheck, Loader2 } from "lucide-react";

interface SystemScanStepProps {
  onScanComplete: () => void;
}

const scanSubtitles = [
  "Iniciando analizador de compatibilidad...",
  "Buscando rastros de la plaga en GPU...",
  "Analizando núcleos de CPU libres de ceniza...",
  "Comprobando integridad de memoria...",
  "Estabilizando canal de descarga...",
];

export default function SystemScanStep({ onScanComplete }: SystemScanStepProps) {
  const [progress, setProgress] = useState(0);
  const [subtitleIndex, setSubtitleIndex] = useState(0);

  useEffect(() => {
    // Progress interval
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          onScanComplete();
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    // Subtitles transition interval
    const subtitleInterval = setInterval(() => {
      setSubtitleIndex((prev) => (prev + 1) % scanSubtitles.length);
    }, 1200);

    return () => {
      clearInterval(interval);
      clearInterval(subtitleInterval);
    };
  }, [onScanComplete]);

  return (
    <div className="flex flex-col items-center justify-center py-12 text-center space-y-6">
      
      {/* Animated Gothic scanner ring */}
      <div className="relative w-24 h-24 flex items-center justify-center">
        {/* Glow behind the ring */}
        <div className="absolute inset-2 bg-[#c5a059]/5 rounded-full blur-md" />
        
        {/* Outer dashed spinning ring */}
        <div className="absolute inset-0 border border-dashed border-[#c5a05944] rounded-full animate-spin" style={{ animationDuration: "12s" }} />
        
        {/* Inner double border */}
        <div className="absolute inset-2 border border-double border-[#c5a05966] rounded-full rotate-45" />
        
        {/* Core spinning loader icon */}
        <Loader2 className="w-8 h-8 text-[#c5a059] animate-spin drop-shadow-[0_0_8px_rgba(197,160,89,0.5)]" />
      </div>

      <div className="space-y-2 max-w-sm">
        <p className="font-mono text-[9px] tracking-[0.25em] text-[#c5a059] font-bold uppercase">
          ANALIZADOR DE COMPATIBILIDAD
        </p>
        <h4 className="font-serif text-sm text-[#f3e5ab] tracking-widest uppercase font-medium h-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          {scanSubtitles[subtitleIndex]}
        </h4>
      </div>

      {/* Progress slider bar */}
      <div className="w-full max-w-xs space-y-2">
        <div className="w-full bg-black border border-[#c5a05933] h-3.5 p-[2.5px] shadow-[inset_0_0_12px_rgba(0,0,0,0.95)]">
          <div
            className="h-full bg-gradient-to-r from-[#c5a05988] to-[#c5a059] transition-all duration-75 ease-out shadow-[0_0_10px_rgba(197,160,89,0.4)]"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="font-mono text-xs text-[#c5a059] font-bold drop-shadow-[0_0_5px_rgba(0,0,0,0.5)]">
          {progress}%
        </p>
      </div>

      <p className="text-[10px] text-[#555] uppercase tracking-wider max-w-xs leading-relaxed">
        Esto tomará solo unos instantes mientras certificamos la compatibilidad de tu terminal con Valtheria.
      </p>

    </div>
  );
}
