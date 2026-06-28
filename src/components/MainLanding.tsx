import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import HeroSection from "./HeroSection/HeroSection";
import LoreSection from "./LoreSection/LoreSection";
import ScreenshotCarousel from "./ScreenshotCarousel/ScreenshotCarousel";
import Footer from "./Footer/Footer";
import DemoModal from "./DemoModal/DemoModal";
import SurveyModal from "./SurveyModal/SurveyModal";

export default function MainLanding() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [isSurveyOpen, setIsSurveyOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#050505] selection:bg-[#c5a059] selection:text-black">
      
      {/* Navigation Header */}
      <Navbar 
        onOpenDemo={() => setIsDemoOpen(true)} 
        onOpenSurvey={() => setIsSurveyOpen(true)} 
      />
      
      {/* Hero Portada */}
      <HeroSection 
        onOpenDemo={() => setIsDemoOpen(true)} 
        onOpenSurvey={() => setIsSurveyOpen(true)} 
      />
      
      {/* Lore & Codex Codex Factions/Timeline */}
      <LoreSection />
      
      {/* Screen Gallery Carousel */}
      <ScreenshotCarousel />
      
      {/* Footer copyright and ratings */}
      <Footer />
      
      {/* Demo Download Modal */}
      <DemoModal 
        isOpen={isDemoOpen} 
        onClose={() => setIsDemoOpen(false)} 
      />
      
      {/* Survey Morals Modal */}
      <SurveyModal 
        isOpen={isSurveyOpen} 
        onClose={() => setIsSurveyOpen(false)} 
      />
      
    </div>
  );
}
