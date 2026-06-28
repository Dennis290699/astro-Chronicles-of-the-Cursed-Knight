import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import SystemScanStep from "./SystemScanStep";
import DownloadHub from "./DownloadHub";

interface DemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DemoModal({ isOpen, onClose }: DemoModalProps) {
  const [scanComplete, setScanComplete] = useState(false);

  // Reset scan state when modal is opened/closed
  useEffect(() => {
    if (isOpen) {
      setScanComplete(false);
      
      // Lock background scrolling
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, [isOpen]);

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm"
          />

          {/* Modal Panel Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="relative w-full max-w-lg bg-[#050505] border-2 border-double border-[#c5a05988] p-6 sm:p-10 shadow-[inset_0_0_40px_rgba(0,0,0,0.9),0_25px_60px_rgba(0,0,0,0.95),0_0_30px_rgba(197,160,89,0.1)] z-10 rounded-none overflow-hidden"
          >
            {/* Dark medieval background texture */}
            <div 
              className="absolute inset-0 z-0 opacity-15 pointer-events-none mix-blend-luminosity bg-cover bg-center" 
              style={{ backgroundImage: "url('/wallpapers/footercover2.jpeg')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/95 to-black/90 z-0 pointer-events-none" />

            {/* Elegant Inner Border Frame */}
            <div className="absolute inset-1.5 border border-[#c5a05922] pointer-events-none z-10" />

            {/* Gilded Corner brackets */}
            <div className="absolute top-3.5 left-3.5 w-3.5 h-3.5 border-t-2 border-l-2 border-[#c5a059bb] z-20" />
            <div className="absolute top-3.5 right-3.5 w-3.5 h-3.5 border-t-2 border-r-2 border-[#c5a059bb] z-20" />
            <div className="absolute bottom-3.5 left-3.5 w-3.5 h-3.5 border-b-2 border-l-2 border-[#c5a059bb] z-20" />
            <div className="absolute bottom-3.5 right-3.5 w-3.5 h-3.5 border-b-2 border-r-2 border-[#c5a059bb] z-20" />

            {/* Absolute close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-30 p-2 border border-[#c5a05933] bg-black/80 hover:bg-[#c5a059] hover:text-black text-[#c5a059] hover:shadow-[0_0_15px_rgba(197,160,89,0.4)] rounded-none transition-all duration-300 cursor-pointer"
              aria-label="Cerrar modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modular steps rendering */}
            <div className="relative z-10">
              {!scanComplete ? (
                <SystemScanStep onScanComplete={() => setScanComplete(true)} />
              ) : (
                <DownloadHub />
              )}
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
