import React from "react";
import { ExternalLink, ShieldAlert } from "lucide-react";

export default function DownloadHub() {
  const mirrors = [
    { name: "MEGA", url: "#", size: "1.2 GB", desc: "Servidor recomendado de alta velocidad" },
    { name: "MediaFire", url: "#", size: "1.2 GB", desc: "Descarga rápida sin registros" },
    { name: "Google Drive", url: "#", size: "1.2 GB", desc: "Almacenamiento seguro en la nube de Google" },
  ];

  return (
    <div className="space-y-6 py-2 select-none">
      {/* Gilded logo and details */}
      <div className="text-center pb-3 border-b border-[#c5a05922]">
        <h3 className="font-serif text-lg text-[#f3e5ab] tracking-widest uppercase font-semibold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          PORTAL DE DESCARGAS
        </h3>
        <p className="font-sans text-[10px] text-[#666] tracking-widest uppercase mt-1">
          Chronicles of the Cursed Knight - Alpha Demo
        </p>
      </div>

      {/* Medieval decorative divider */}
      <div className="flex items-center justify-center gap-4 my-2">
        <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[#c5a05933]" />
        <div className="rotate-45 border border-[#c5a05944] p-1 bg-black/60">
          <div className="w-1 h-1 bg-[#c5a059]" />
        </div>
        <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[#c5a05933]" />
      </div>

      <p className="text-[11px] text-[#888] uppercase tracking-wider leading-relaxed text-center max-w-sm mx-auto">
        Elige un espejo seguro para descargar el archivo de instalación comprimido (.ZIP).
      </p>

      {/* Mirrors list */}
      <div className="space-y-3.5 pt-2">
        {mirrors.map((mirror) => (
          <a
            key={mirror.name}
            href={mirror.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between p-4 bg-zinc-950/80 border border-[#c5a05922] hover:border-[#c5a059] hover:bg-[#c5a05910] hover:shadow-[0_0_15px_rgba(197,160,89,0.15)] transition-all duration-300 rounded-none cursor-pointer text-left relative overflow-hidden block"
          >
            {/* Subtle inner corner brackets */}
            <div className="absolute top-0 left-0 w-1.5 h-1.5 border-t border-l border-[#c5a05933] group-hover:border-[#c5a059] transition-colors" />
            <div className="absolute top-0 right-0 w-1.5 h-1.5 border-t border-r border-[#c5a05933] group-hover:border-[#c5a059] transition-colors" />
            <div className="absolute bottom-0 left-0 w-1.5 h-1.5 border-b border-l border-[#c5a05933] group-hover:border-[#c5a059] transition-colors" />
            <div className="absolute bottom-0 right-0 w-1.5 h-1.5 border-b border-r border-[#c5a05933] group-hover:border-[#c5a059] transition-colors" />

            <div className="z-10">
              <h4 className="font-serif text-xs text-[#f3e5ab] tracking-widest uppercase font-bold group-hover:text-white transition-colors">
                ESPEJO: {mirror.name}
              </h4>
              <p className="font-sans text-[9px] text-[#555] group-hover:text-[#888] tracking-wide uppercase mt-1 transition-colors">
                {mirror.desc}
              </p>
            </div>
            
            <div className="flex items-center gap-3.5 z-10">
              <span className="font-mono text-[10px] text-[#c5a059] tracking-wider font-bold">
                {mirror.size}
              </span>
              <ExternalLink className="w-3.5 h-3.5 text-[#c5a059]/60 group-hover:text-[#c5a059] group-hover:translate-x-0.5 transition-all" />
            </div>
          </a>
        ))}
      </div>

      {/* Safety warning */}
      <div className="bg-[#080808]/90 border border-[#c5a05911] p-4 flex gap-3 text-left relative">
        <div className="absolute top-0 left-0 w-1 h-full bg-[#c5a059]/40" />
        <ShieldAlert className="w-4 h-4 text-[#c5a059] shrink-0 mt-0.5" />
        <div>
          <p className="font-serif text-[10px] text-[#c5a059] tracking-wider uppercase font-semibold">RECOMENDACIÓN DE SEGURIDAD</p>
          <p className="text-[9.5px] text-[#555] mt-1 leading-relaxed uppercase font-sans">
            Descomprime el archivo y ejecuta el ejecutable principal. Asegúrate de descargar únicamente desde estos enlaces oficiales.
          </p>
        </div>
      </div>
    </div>
  );
}
