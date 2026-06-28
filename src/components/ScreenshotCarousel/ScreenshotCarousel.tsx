import React, { useState } from "react";
import { SCREENSHOTS } from "../../data";
import ScreenshotSlider from "./ScreenshotSlider";
import ScreenshotLightbox from "./ScreenshotLightbox";

export default function ScreenshotCarousel() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const handlePrevLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! - 1 + SCREENSHOTS.length) % SCREENSHOTS.length);
  };

  const handleNextLightbox = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! + 1) % SCREENSHOTS.length);
  };

  return (
    <section id="gallery" className="relative w-full bg-[#050505] overflow-hidden border-t border-b border-[#c5a05922]">
      
      {/* Decorative ambient lighting element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-[#c5a059]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Full-width container with no margins or horizontal padding */}
      <div className="relative z-10 w-full">
        
        {/* Full-bleed Carousel Slider */}
        <ScreenshotSlider
          screenshots={SCREENSHOTS}
          onOpenLightbox={(index) => setLightboxIndex(index)}
        />

      </div>

      {/* Screen Lightbox overlay */}
      {lightboxIndex !== null && (
        <ScreenshotLightbox
          screenshot={SCREENSHOTS[lightboxIndex]}
          onClose={() => setLightboxIndex(null)}
          onPrev={handlePrevLightbox}
          onNext={handleNextLightbox}
        />
      )}

    </section>
  );
}
