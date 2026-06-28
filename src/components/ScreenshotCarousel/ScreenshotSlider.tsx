import React, { useState, useEffect, useRef } from "react";
import type { Screenshot } from "../../types";

interface ScreenshotSliderProps {
  screenshots: Screenshot[];
  onOpenLightbox: (index: number) => void;
}

export default function ScreenshotSlider({
  screenshots,
  onOpenLightbox
}: ScreenshotSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [translateY, setTranslateY] = useState(0);
  
  const containerRef = useRef<HTMLDivElement>(null);

  // Autoplay intervals (paused on hover)
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % screenshots.length);
    }, 4500); // 4.5 seconds slide interval
    return () => clearInterval(interval);
  }, [isHovered, screenshots.length]);

  // Optimized Scroll Parallax logic
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Check if container is visible in viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Calculate percentage of scroll coverage relative to viewport
        const totalHeight = windowHeight + rect.height;
        const scrolledPercentage = (windowHeight - rect.top) / totalHeight;
        
        // Translate image slowly to create the parallax effect (moves -45px to 45px)
        const parallaxOffset = (scrolledPercentage - 0.5) * 90;
        setTranslateY(parallaxOffset);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Trigger initial calculation
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getRealmName = (id: string) => {
    switch (id) {
      case "sc1":
        return "JARDINES MARCHITOS";
      case "sc2":
        return "MAZMORRAS DEL ECO";
      case "sc3":
        return "TORRE MARCHITA";
      case "sc4":
        return "CHRONICLES";
      default:
        return "VALTHERIA";
    }
  };

  const activeScreenshot = screenshots[currentIndex];

  return (
    <div className="w-full relative">
      {/* Main Full-Bleed Image Frame with Parallax and Hover Actions */}
      <div
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => onOpenLightbox(currentIndex)}
        className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden cursor-pointer group border-t border-b border-white/5"
      >
        {/* Layered Crossfading Images for Smooth Entrance/Exit Transitions */}
        {screenshots.map((screen, idx) => {
          const isActive = idx === currentIndex;
          return (
            <img
              key={screen.id}
              src={screen.url}
              alt={screen.title}
              className="absolute w-full h-[120%] top-[-10%] left-0 object-cover pointer-events-none select-none"
              style={{
                opacity: isActive ? 1 : 0,
                transform: `translateY(${translateY}px) scale(${isHovered ? 1.04 : 1.0})`,
                transition: "opacity 1200ms cubic-bezier(0.4, 0, 0.2, 1), transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94), scale 1.8s cubic-bezier(0.1, 0.8, 0.2, 1)",
                zIndex: isActive ? 1 : 0,
              }}
              referrerPolicy="no-referrer"
            />
          );
        })}

        {/* Ambient Darkened Overlay - Fades in on hover to improve readability of title */}
        <div className="absolute inset-0 bg-black/35 group-hover:bg-[#030303]/60 z-10 transition-all duration-[1200ms] ease-out" />

        {/* Stylized Center Realm Title on Hover (Similar to ELLE logo style) */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-[800ms] ease-out pointer-events-none select-none px-6 sm:px-12 text-center">
          {/* Main Title - Massive elegant serif lettering styled responsively to prevent border overflow */}
          <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7vw] max-w-[90%] text-white tracking-[0.22em] uppercase font-light drop-shadow-[0_10px_25px_rgba(0,0,0,0.9)] transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700 ease-out leading-none">
            {getRealmName(activeScreenshot.id)}
          </h2>
          
          {/* Subtle Decorative Gold Underline */}
          <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-[#c5a059] to-transparent mt-6 opacity-0 group-hover:opacity-80 transition-opacity duration-[1200ms] ease-out" />
          
          {/* Category Subtext */}
          <span className="font-mono text-[9px] tracking-[0.5em] text-[#c5a059] uppercase mt-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] opacity-0 group-hover:opacity-90 transition-opacity duration-[1200ms] ease-out">
            {activeScreenshot.category}
          </span>
        </div>

        {/* Cinematic Frame Border Overlay (Visible on Hover) */}
        <div className="absolute inset-8 border border-white/5 group-hover:border-white/10 z-10 pointer-events-none transition-all duration-[1200ms] ease-out rounded-none" />
        
        {/* Small Corner Accents (Fade in slightly on hover) */}
        <div className="absolute top-12 left-12 w-3.5 h-3.5 border-t border-l border-[#c5a059]/40 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-[1200ms]" />
        <div className="absolute top-12 right-12 w-3.5 h-3.5 border-t border-r border-[#c5a059]/40 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-[1200ms]" />
        <div className="absolute bottom-12 left-12 w-3.5 h-3.5 border-b border-l border-[#c5a059]/40 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-[1200ms]" />
        <div className="absolute bottom-12 right-12 w-3.5 h-3.5 border-b border-r border-[#c5a059]/40 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-[1200ms]" />
      </div>
    </div>
  );
}
