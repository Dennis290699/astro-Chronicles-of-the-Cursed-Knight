import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { SURVEY_QUESTIONS } from "../../data";
import SetupStep from "./SetupStep";
import QuestionWizard from "./QuestionWizard";
import ResultsPanel from "./ResultsPanel";

interface SurveyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface LocalResults {
  faithful: number;
  iron_ashes: number;
  abyss_defilers: number;
  total: number;
}

export default function SurveyModal({ isOpen, onClose }: SurveyModalProps) {
  const [playerName, setPlayerName] = useState("");
  const [playerClass, setPlayerClass] = useState("vanguard");
  
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(-1); // -1 is Name & Class Setup
  const [answers, setAnswers] = useState<Record<number, string>>({});
  
  const [isCompleted, setIsCompleted] = useState(false);
  const [alignment, setAlignment] = useState({ factionId: "", title: "", factionName: "" });
  
  const [pollResults, setPollResults] = useState<LocalResults>({
    faithful: 124,
    iron_ashes: 189,
    abyss_defilers: 142,
    total: 455
  });

  // Load baseline counts on Mount
  useEffect(() => {
    const saved = localStorage.getItem("cursed_knight_votes");
    if (saved) {
      try {
        setPollResults(JSON.parse(saved));
      } catch (err) {
        console.warn("Error reading local votes, using base", err);
      }
    }

    const savedCompleted = localStorage.getItem("cursed_knight_survey_completed");
    if (savedCompleted === "true") {
      setIsCompleted(true);
      const savedAlignment = localStorage.getItem("cursed_knight_player_alignment");
      if (savedAlignment) {
        try {
          setAlignment(JSON.parse(savedAlignment));
        } catch (e) {}
      }
    }
  }, []);

  // Lock background scroll when open
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

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) onClose();
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  const handleAnswerSelect = (optionValue: string) => {
    const qId = SURVEY_QUESTIONS[currentQuestionIdx].id;
    const updatedAnswers = { ...answers, [qId]: optionValue };
    setAnswers(updatedAnswers);
    
    if (currentQuestionIdx < SURVEY_QUESTIONS.length - 1) {
      setTimeout(() => {
        setCurrentQuestionIdx((prev) => prev + 1);
      }, 300);
    } else {
      setTimeout(() => {
        handleSubmit(updatedAnswers);
      }, 400);
    }
  };

  const handleSubmit = (finalAnswers: Record<number, string>) => {
    let faithfulScore = 0;
    let ironScore = 0;
    let abyssScore = 0;

    if (finalAnswers[1] === "exploration") faithfulScore += 1;
    if (finalAnswers[1] === "combat") ironScore += 1;
    if (finalAnswers[1] === "magic") abyssScore += 1;

    if (finalAnswers[2] === "faithful") faithfulScore += 2;
    if (finalAnswers[2] === "iron_ashes") ironScore += 2;
    if (finalAnswers[2] === "abyss_defilers") abyssScore += 2;

    if (finalAnswers[3] === "devotion") faithfulScore += 1.5;
    if (finalAnswers[3] === "iron") ironScore += 1.5;
    if (finalAnswers[3] === "forbidden_knowledge") abyssScore += 1.5;

    let factionId = "faithful";
    let factionName = "Sir Gareth (Redención)";
    let title = "Caballero de la Redención";

    if (ironScore > faithfulScore && ironScore > abyssScore) {
      factionId = "iron_ashes";
      factionName = "Eco de Elara (Santuario)";
      title = "Servidor del Eco de Elara";
    } else if (abyssScore > faithfulScore && abyssScore > ironScore) {
      factionId = "abyss_defilers";
      factionName = "Lord Malakor (Sombras)";
      title = "Acólito de Lord Malakor";
    }

    if (playerClass === "occultist") {
      title = title.replace("Caballero", "Explorador Sombra").replace("Servidor", "Guía de la Sombra").replace("Acólito", "Susurrador de Sombras");
    } else if (playerClass === "cleric") {
      title = title.replace("Caballero", "Clérigo del Fresno").replace("Servidor", "Oráculo del Eco").replace("Acólito", "Hechicero Oscuro");
    }

    const alignmentResult = { factionId, title, factionName };
    setAlignment(alignmentResult);

    const currentVotes = { ...pollResults };
    if (factionId === "faithful") currentVotes.faithful += 1;
    if (factionId === "iron_ashes") currentVotes.iron_ashes += 1;
    if (factionId === "abyss_defilers") currentVotes.abyss_defilers += 1;
    currentVotes.total += 1;

    setPollResults(currentVotes);
    localStorage.setItem("cursed_knight_votes", JSON.stringify(currentVotes));
    localStorage.setItem("cursed_knight_survey_completed", "true");
    localStorage.setItem("cursed_knight_player_alignment", JSON.stringify(alignmentResult));
    setIsCompleted(true);
  };

  const handleReset = () => {
    setCurrentQuestionIdx(-1);
    setAnswers({});
    setIsCompleted(false);
    setPlayerName("");
    localStorage.removeItem("cursed_knight_survey_completed");
    localStorage.removeItem("cursed_knight_player_alignment");
    setAlignment({ factionId: "", title: "", factionName: "" });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          
          {/* Backdrop blur overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-[#050505]/95 backdrop-blur-sm"
          />

          {/* Modal box with refined medieval frame */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 15 }}
            transition={{ type: "spring", damping: 28, stiffness: 220 }}
            className="relative w-full max-w-xl bg-[#080808]/98 border border-[#c5a05944] hover:border-[#c5a05999] rounded-none p-5 xs:p-7 md:p-10 z-10 max-h-[90vh] overflow-y-auto shadow-[0_30px_70px_rgba(0,0,0,0.95)] hover:shadow-[0_0_50px_rgba(197,160,89,0.15)] transition-all duration-500"
          >
            {/* Elegant double-line medieval corners */}
            <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#c5a059]" />
            <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-[#c5a059]" />
            <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-[#c5a059]" />
            <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#c5a059]" />

            {/* Modal Header */}
            <div className="flex justify-between items-start border-b border-[#c5a05922] pb-5 mb-6">
              <div>
                <p className="font-sans text-[9px] text-[#c5a059] tracking-[0.3em] uppercase font-bold mb-1.5">
                  MANUAL DE REDENCIÓN DE VALTHERIA
                </p>
                <h3 className="font-serif text-lg md:text-xl text-white tracking-wider uppercase font-semibold">
                  JUICIO DEL CABALLERO MALDITO
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 border border-[#c5a05933] hover:border-[#c5a059] text-[#c5a059] hover:text-[#f3e5ab] rounded-none transition-all duration-300 cursor-pointer bg-black/40"
                aria-label="Cerrar modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Router */}
            {!isCompleted ? (
              <div>
                {currentQuestionIdx === -1 ? (
                  <SetupStep
                    playerName={playerName}
                    setPlayerName={setPlayerName}
                    playerClass={playerClass}
                    setPlayerClass={setPlayerClass}
                    onNext={() => setCurrentQuestionIdx(0)}
                  />
                ) : (
                  <QuestionWizard
                    question={SURVEY_QUESTIONS[currentQuestionIdx]}
                    totalQuestions={SURVEY_QUESTIONS.length}
                    currentIndex={currentQuestionIdx}
                    onSelectOption={handleAnswerSelect}
                    onBack={() => setCurrentQuestionIdx((prev) => prev - 1)}
                  />
                )}
              </div>
            ) : (
              <ResultsPanel
                playerName={playerName}
                alignment={alignment}
                pollResults={pollResults}
                onReset={handleReset}
              />
            )}

            {/* Footer stamp notice */}
            <div className="mt-6 text-center text-[9px] text-[#555] font-sans border-t border-[#c5a05933] pt-4 tracking-[0.2em] uppercase font-bold">
              SELLO DE AFILIACIÓN • CHRONICLES OF THE CURSED KNIGHT • PROJECT ARROW DEMO v1.0.0
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
