import React from "react";
import type { LoreKeyEvent } from "../../types";

interface TimelineSelectorProps {
  timeline: LoreKeyEvent[];
  activeTimelineIndex: number;
  onSelectTimeline: (index: number) => void;
}

export default function TimelineSelector({
  timeline,
  activeTimelineIndex,
  onSelectTimeline
}: TimelineSelectorProps) {
  return (
    <div className="md:col-span-4 flex flex-row md:flex-col justify-start gap-4 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 scrollbar-thin">
      {timeline.map((event, index) => {
        const isActive = index === activeTimelineIndex;
        return (
          <button
            key={event.year}
            onClick={() => onSelectTimeline(index)}
            className={`w-full max-w-[280px] md:max-w-none shrink-0 text-left p-5 border transition-all duration-300 relative group cursor-pointer ${
              isActive
                ? "bg-gradient-to-r from-[#c5a059]/10 to-transparent border-[#c5a059] shadow-[0_0_20px_rgba(197,160,89,0.15)]"
                : "bg-transparent border-[#c5a05911] hover:border-[#c5a05944] hover:bg-black/30"
            }`}
          >
            {/* Visual active indicator bar */}
            <div 
              className={`absolute top-0 bottom-0 left-0 w-[3px] transition-all duration-300 ${
                isActive ? "bg-[#c5a059] shadow-[0_0_10px_#c5a059]" : "bg-transparent"
              }`} 
            />
            
            {/* Corner brackets inside active item */}
            {isActive && (
              <>
                <div className="absolute top-1 right-1 w-1.5 h-1.5 border-t border-r border-[#c5a059]/60" />
                <div className="absolute bottom-1 right-1 w-1.5 h-1.5 border-b border-r border-[#c5a059]/60" />
              </>
            )}

            <p className={`font-mono text-[9px] tracking-[0.25em] font-bold uppercase transition-colors ${
              isActive ? "text-[#c5a059]" : "text-[#555] group-hover:text-[#888]"
            }`}>
              {event.year.split(" - ")[0]}
            </p>
            <h4 className={`font-serif text-xs md:text-sm tracking-widest uppercase font-semibold mt-1 transition-colors ${
              isActive ? "text-white" : "text-[#777] group-hover:text-[#aaa]"
            }`}>
              {event.year.split(" - ")[1]}
            </h4>
          </button>
        );
      })}
    </div>
  );
}
