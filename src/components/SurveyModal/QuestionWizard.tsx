import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { BookOpen } from "lucide-react";

interface QuestionWizardProps {
  question: {
    id: number;
    text: string;
    options: { value: string; label: string; desc?: string }[];
  };
  totalQuestions: number;
  currentIndex: number;
  onSelectOption: (optionValue: string) => void;
  onBack: () => void;
}

export default function QuestionWizard({
  question,
  totalQuestions,
  currentIndex,
  onSelectOption,
  onBack
}: QuestionWizardProps) {
  const progressPercent = ((currentIndex) / totalQuestions) * 100;

  return (
    <div className="space-y-6">
      
      {/* Header and Progress Indicator */}
      <div className="space-y-3">
        <div className="flex justify-between items-center text-[9px] font-mono tracking-[0.25em] text-[#c5a059] font-bold uppercase">
          <span>DILEMA DEL DESTINO</span>
          <span>{currentIndex + 1} DE {totalQuestions}</span>
        </div>
        
        {/* Progress bar */}
        <div className="w-full bg-zinc-950 border border-zinc-900 h-1.5 rounded-none overflow-hidden relative">
          <div
            className="h-full bg-[#c5a059] transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / totalQuestions) * 100}%` }}
          />
        </div>
      </div>

      {/* Slide anim for Question block */}
      <AnimatePresence mode="wait">
        <motion.div
          key={question.id}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          {/* Question Text in illuminated block */}
          <div className="bg-[#080808] border border-[#c5a05915] p-5 relative">
            <div className="absolute top-0 bottom-0 left-0 w-[2px] bg-[#c5a059]" />
            <p className="font-serif text-sm md:text-base text-[#f3e5ab] tracking-wide uppercase leading-relaxed text-center">
              “{question.text}”
            </p>
          </div>

          {/* Options dilemma stack */}
          <div className="space-y-3">
            {question.options.map((option) => (
              <button
                key={option.value}
                onClick={() => onSelectOption(option.value)}
                className="w-full text-left p-4 bg-[#080808]/60 hover:bg-[#0c0c0c]/90 border border-[#c5a05915] hover:border-[#c5a059] transition-all rounded-none group cursor-pointer flex items-start gap-3.5"
              >
                <div className="w-4 h-4 rounded-none border border-[#c5a05933] group-hover:border-[#c5a059] bg-black shrink-0 mt-0.5 flex items-center justify-center transition-colors">
                  <div className="w-1.5 h-1.5 bg-[#c5a059] opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div>
                  <p className="font-serif text-xs md:text-[13px] text-white tracking-widest uppercase font-semibold group-hover:text-[#c5a059] transition-colors">
                    {option.label}
                  </p>
                  {option.desc && (
                    <p className="text-[10px] text-[#666] group-hover:text-[#aaa] font-sans tracking-wide mt-1 uppercase leading-snug transition-colors">
                      {option.desc}
                    </p>
                  )}
                </div>
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Back button */}
      {currentIndex > 0 && (
        <button
          onClick={onBack}
          className="font-sans text-[10px] uppercase tracking-widest text-[#777] hover:text-[#c5a059] transition-colors cursor-pointer block mx-auto underline pt-2"
        >
          REGRESAR AL DILEMA ANTERIOR
        </button>
      )}

    </div>
  );
}
