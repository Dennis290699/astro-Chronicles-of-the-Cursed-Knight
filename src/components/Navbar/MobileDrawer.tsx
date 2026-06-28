import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Landmark } from "lucide-react";
import StateOfPlagueWidget from "./StateOfPlagueWidget";

interface MobileDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  navMenuItems: { label: string; icon: any; href: string }[];
  handleScroll: (href: string) => void;
  onOpenDemo: () => void;
  onOpenSurvey: () => void;
}

export default function MobileDrawer({
  isOpen,
  onClose,
  navMenuItems,
  handleScroll,
  onOpenDemo,
  onOpenSurvey
}: MobileDrawerProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 z-[50] backdrop-blur-sm"
          />

          {/* Sidebar drawer panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 180 }}
            className="fixed top-0 right-0 h-full w-full max-w-[280px] xs:max-w-[320px] sm:max-w-[380px] bg-[#050505] border-l border-[#c5a05933] pt-24 px-6 xs:px-8 pb-10 z-[60] flex flex-col justify-between overflow-y-auto"
          >
            {/* Dedicated Close Button inside the Drawer */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 border border-[#c5a05933] hover:border-[#c5a059] text-[#c5a059] rounded-none transition-all cursor-pointer"
              aria-label="Cerrar menú"
            >
              <X className="w-4 h-4" />
            </button>

            <div>
              {/* Header inside drawer */}
              <div className="border-b border-[#c5a05933] pb-6 mb-8 text-center relative">
                <Landmark className="w-8 h-8 text-[#c5a059] mx-auto mb-3" />
                <h3 className="font-serif tracking-[0.2em] text-sm text-[#c5a059] uppercase">
                  MENÚ DE REINO
                </h3>
              </div>

              {/* Navigation menu routes */}
              <div className="space-y-4">
                {navMenuItems.map((item, index) => (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleScroll(item.href)}
                    className="w-full flex items-center gap-4 p-3 border border-[#c5a05922] bg-[#080808] hover:border-[#c5a059] text-left rounded-none group transition-all text-[#e0e0e0] hover:text-[#c5a059] cursor-pointer"
                  >
                    <div className="p-2 border border-[#c5a05922] bg-black">
                      <item.icon className="w-4 h-4 text-[#c5a059]" />
                    </div>
                    <div>
                      <p className="font-serif text-sm tracking-wide font-medium">
                        {item.label}
                      </p>
                      <p className="text-[10px] tracking-widest uppercase text-[#888] font-sans">
                        {item.label === "Inicio" ? "La portada del juego" : item.label === "El Lore" ? "Mitos e Historia" : "Capturas de Pantalla"}
                      </p>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Mini interactive prompt widget */}
              <StateOfPlagueWidget />
            </div>

            {/* Action buttons at the bottom of drawer */}
            <div className="mt-8 space-y-4 pt-6 border-t border-[#c5a05933]">
              <button
                disabled
                className="w-full py-3 border border-[#c5a059]/20 text-[#c5a059]/40 font-sans text-xs uppercase tracking-widest font-bold text-center cursor-not-allowed bg-transparent"
                title="Disponible en la Beta"
              >
                REALIZAR ENCUESTA (PRONTO)
              </button>
              
              <button
                onClick={() => {
                  onClose();
                  onOpenDemo();
                }}
                className="w-full py-3 bg-[#c5a059] hover:bg-[#b38d41] text-black font-sans text-xs uppercase tracking-widest font-bold transition-all cursor-pointer"
              >
                DESCARGAR DEMO
              </button>
              
              <div className="text-center space-y-0.5">
                <p className="text-[9px] text-[#c5a059]/60 tracking-widest uppercase font-sans font-semibold">
                  CHRONICLES OF THE CURSED KNIGHT
                </p>
                <p className="text-[8px] text-[#555] tracking-widest uppercase font-sans">
                  PROJECT ARROW DEMO V1.0.0
                </p>
              </div>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
