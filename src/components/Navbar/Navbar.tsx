import React, { useState, useEffect } from "react";
import { Menu, X, Swords, Scroll, Image as ImageIcon } from "lucide-react";
import MobileDrawer from "./MobileDrawer";

interface NavbarProps {
  onOpenDemo: () => void;
  onOpenSurvey: () => void;
}

export default function Navbar({ onOpenDemo, onOpenSurvey }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScrollEvent = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScrollEvent);
    // Call once to initialize
    handleScrollEvent();
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  // Lock background body scroll when mobile menu drawer is open
  useEffect(() => {
    if (isOpen) {
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

  const navMenuItems = [
    { label: "Inicio", icon: Swords, href: "#hero" },
    { label: "El Lore", icon: Scroll, href: "#lore" },
    { label: "Galería", icon: ImageIcon, href: "#gallery" },
  ];

  const handleScroll = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <>
      {/* Top Header/Navbar with high-impact scroll transitions */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-4 xs:px-6 lg:px-10 flex items-center ${
        isScrolled 
          ? "h-16 bg-[#050505]/95 backdrop-blur-md border-b border-[#c5a05933] shadow-[0_4px_30px_rgba(0,0,0,0.8)]" 
          : "h-20 xs:h-24 bg-transparent border-b border-transparent"
      }`}>
        <div className="w-full max-w-7xl mx-auto flex md:grid md:grid-cols-3 items-center justify-between gap-4">
          
          {/* LEFT: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 justify-start">
            {navMenuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-sans text-[11px] uppercase tracking-[0.2em] font-medium text-[#e0e0e0]/80 hover:text-[#c5a059] transition-all relative py-1 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c5a059] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>

          {/* CENTER: Logo & Brand Typography */}
          <div className="flex md:justify-center items-center justify-center">
            <a href="#hero" className="flex items-center gap-2.5 sm:gap-3.5 group shrink-0 relative px-3 py-1.5 border border-transparent hover:border-[#c5a05922] transition-all duration-500">
              {/* Gold corners that show up on hover */}
              <div className="absolute top-1 left-1 w-1.5 h-1.5 border-t border-l border-[#c5a05988] opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-[#c5a05988] opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute bottom-1 left-1 w-1.5 h-1.5 border-b border-l border-[#c5a05988] opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-[#c5a05988] opacity-0 group-hover:opacity-100 transition-all duration-500" />
              
              <img 
                src="/logo3.svg" 
                alt="Chronicles of the Cursed Knight" 
                className="h-10 sm:h-12 w-auto transition-all duration-500 group-hover:scale-105 filter drop-shadow-[0_0_8px_rgba(197,160,89,0.55)]"
              />
              <div className="flex flex-col text-left">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="font-serif text-xs xs:text-sm sm:text-base tracking-[0.2em] sm:tracking-[0.25em] text-[#c5a059] uppercase transition-colors whitespace-nowrap font-bold">
                    CHRONICLES
                  </span>
                  <span className="hidden xs:inline-block px-1.5 py-0.5 border border-[#c5a05933] bg-[#c5a0590a] text-[#c5a059] text-[7px] tracking-[0.1em] font-sans font-bold uppercase rounded-sm">
                    PROJECT ARROW
                  </span>
                </div>
                <span className="font-sans text-[8px] sm:text-[9px] tracking-[0.15em] sm:tracking-[0.25em] text-[#c5a059]/60 uppercase whitespace-nowrap">
                  OF THE CURSED KNIGHT
                </span>
              </div>
            </a>
          </div>

          {/* RIGHT: Action Triggers (Desktop) / Hamburger Menu (Mobile) */}
          <div className="flex justify-end items-center gap-3 lg:gap-4">
            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center gap-3 lg:gap-4">
              <button
                disabled
                className="font-sans text-[10px] lg:text-[11px] uppercase tracking-[0.15em] lg:tracking-[0.2em] font-medium text-[#c5a059]/40 px-3 lg:px-4 py-2 border border-[#c5a05911] bg-transparent cursor-not-allowed whitespace-nowrap"
                title="Disponible en la Beta"
              >
                Encuesta (Pronto)
              </button>
              <button
                onClick={onOpenDemo}
                className="font-sans text-[10px] lg:text-[11px] uppercase tracking-[0.15em] lg:tracking-[0.2em] font-bold bg-[#c5a059] hover:bg-[#b38d41] text-black px-4 lg:px-5 py-2 transition-all cursor-pointer whitespace-nowrap"
              >
                Bajar Demo
              </button>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 border border-[#c5a05933] hover:border-[#c5a059] text-[#c5a059] rounded-none transition-all focus:outline-none z-50 cursor-pointer"
              aria-label="Abrir menú"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </header>

      {/* Collapsible Side Menu (Drawer / Panel Lateral) */}
      <MobileDrawer
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        navMenuItems={navMenuItems}
        handleScroll={handleScroll}
        onOpenDemo={onOpenDemo}
        onOpenSurvey={onOpenSurvey}
      />
    </>
  );
}
