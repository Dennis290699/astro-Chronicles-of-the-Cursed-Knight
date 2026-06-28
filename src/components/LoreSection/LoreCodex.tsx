import React, { useState } from "react";
import { Book, Feather, Scroll, Compass, Flame } from "lucide-react";

interface CodexChapter {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  author: string;
  parchmentText: string;
  accent: string;
}

const CODEX_CHAPTERS: CodexChapter[] = [
  {
    id: "ash-heart",
    title: "El Pacto del Fresno",
    subtitle: "Crónica de la Era del Esplendor",
    icon: Compass,
    author: "Escriba Real Valerius",
    accent: "#c5a059",
    parchmentText: "En el albor de la creación, cuando la piedra aún recordaba la voz primigenia de las estrellas, el primer soberano de Valtheria ascendió a las alturas del Fresno Sagrado. Allí, arrodillado sobre el manto de musgo intacto, ofreció su espada de plata a las ninfas protectoras del bosque a cambio de prosperidad eterna para sus descendientes. De las raíces más profundas del árbol brotó una lágrima de resina dorada pura que se solidificó en el Corazón de Eldergrove. El tratado fue sellado con un juramento inquebrantable: mientras el Corazón palpitara y se mantuviera resguardado en su santuario, las tierras no conocerían plagas ni decadencia. Los siglos transcurrieron bajo una paz dorada, hasta que la complacencia convirtió el respeto en olvido."
  },
  {
    id: "malakor-notes",
    title: "Las Notas de Malakor",
    subtitle: "Manuscrito Oculto en la Torre",
    icon: Flame,
    author: "Lord Malakor, Archimago Real",
    accent: "#a37a34",
    parchmentText: "Día 456 del Códice Oscuro. El Fresno no es una bendición infinita; sus raíces son grilletes que contienen el verdadero fluir de la magia antigua. He descubierto que si infundimos una sola chispa de esencia abisal en la savia sagrada, la energía resultante no solo sanará los cuerpos de los mortales, sino que doblará la voluntad de la materia misma a nuestro antojo. El Alto Consejo me tilda de blasfemo, ciego en su temor a lo desconocido. La ceniza no es muerte; es el residuo purificado tras el crisol del poder. Si el reino debe consumirse en fuego y ceniza necrótica para renacer con una fuerza imperecedera, yo mismo encenderé la llama."
  },
  {
    id: "knight-journal",
    title: "Diario del Cursed Knight",
    subtitle: "Páginas Rescatadas del Fuego",
    icon: Feather,
    author: "Sir Gareth, El Caballero Condenado",
    accent: "#8a6f27",
    parchmentText: "La noche en que Eldergrove cayó, el cielo tomó el color de una herida infectada. Vi a Malakor ascender las escaleras del santuario con el Corazón del Bosque entre sus manos cubiertas de runas oscuras. Mi arco estaba tenso, listo para atravesar su pecho. Sin embargo, una visión fantasmagórica con el rostro de mi difunta esposa se interpuso en mi mira, suplicándome piedad. Esa milésima de segundo de vacilación selló el destino de miles. El Corazón fue quebrado y la tormenta de ceniza necrótica barrió la arboleda, fundiendo mi armadura a mi propia carne y maldiciéndome con la inmortalidad del desterrado. Ahora vago entre ruinas, disparando flechas de luz mientras la plaga intenta devorar los últimos retazos de mi mente."
  },
  {
    id: "elara-prayer",
    title: "El Canto del Eco",
    subtitle: "Himno Sacro del Sacrificio",
    icon: Scroll,
    author: "Oráculo del Eco del Fresno",
    accent: "#c5a059",
    parchmentText: "Cuando la marea gris amenazó con petrificar el último brote del Fresno Sagrado, la Sacerdotisa Elara se arrodilló sobre el lecho del bosque. Con la ceniza necrótica subiendo por sus extremidades como piedra fría, entonó la plegaria prohibida de la atadura álmica. 'Que mi aliento sea la brisa que disipe el humo que ciega al caído. Que mi luz guíe sus pasos en la oscuridad eterna.' Su cuerpo físico se disolvió en filamentos de luz pura, uniendo su conciencia por siempre a los monumentos del reino. Su sacrificio no rompió la plaga, pero colocó los tótems de restauración, esperando el día en que las flechas del pecador redimido abran paso hacia la Torre del Hechicero."
  }
];

export default function LoreCodex() {
  const [activeChapterId, setActiveChapterId] = useState(CODEX_CHAPTERS[0].id);
  const [isSepiaMode, setIsSepiaMode] = useState(false);

  const activeChapter = CODEX_CHAPTERS.find((c) => c.id === activeChapterId) || CODEX_CHAPTERS[0];
  const IconComponent = activeChapter.icon;

  return (
    <div className="mt-28 border border-[#c5a05922] bg-[#050505]/60 backdrop-blur-md p-6 sm:p-10 relative overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.9)]">
      
      {/* Decorative corners */}
      <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t-2 border-l-2 border-[#c5a05944]" />
      <div className="absolute top-2 right-2 w-3.5 h-3.5 border-t-2 border-r-2 border-[#c5a05944]" />
      <div className="absolute bottom-2 left-2 w-3.5 h-3.5 border-b-2 border-l-2 border-[#c5a05944]" />
      <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b-2 border-r-2 border-[#c5a05944]" />

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 relative z-10">
        
        {/* Left Side: Chapters List & Options */}
        <div className="lg:w-1/3 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#c5a05922] pb-8 lg:pb-0 lg:pr-8">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Book className="w-5 h-5 text-[#c5a059]" />
              <h4 className="font-serif text-lg tracking-[0.2em] text-[#c5a059] uppercase font-bold">
                Códice del Reino
              </h4>
            </div>
            <p className="font-sans text-xs text-[#888] leading-relaxed uppercase tracking-wider mb-8">
              Documentos antiguos recuperados de la plaga de Eldergrove. Selecciona un fragmento de pergamino para revelar el trasfondo místico.
            </p>

            <div className="space-y-3.5">
              {CODEX_CHAPTERS.map((chapter) => {
                const ChipIcon = chapter.icon;
                const isActive = chapter.id === activeChapterId;
                return (
                  <button
                    key={chapter.id}
                    onClick={() => setActiveChapterId(chapter.id)}
                    className={`w-full flex items-center gap-4 p-3.5 border text-left transition-all duration-300 rounded-none cursor-pointer ${
                      isActive
                        ? "border-[#c5a059] bg-[#c5a05911] text-[#c5a059]"
                        : "border-[#c5a05911] bg-[#080808]/80 text-[#888] hover:border-[#c5a05944] hover:text-[#c5a059]"
                    }`}
                  >
                    <div className={`p-2 border transition-all ${
                      isActive ? "border-[#c5a059] bg-[#c5a05915]" : "border-[#c5a05911] bg-black"
                    }`}>
                      <ChipIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="font-serif text-sm tracking-wide font-bold">
                        {chapter.title}
                      </p>
                      <p className="text-[9px] tracking-widest uppercase opacity-70">
                        {chapter.subtitle}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Sepia Mode Toggle at bottom */}
          <div className="mt-8 pt-6 border-t border-[#c5a05911] flex items-center justify-between">
            <span className="font-sans text-[10px] text-[#888] tracking-widest uppercase">
              Modo Manuscrito (Sepia)
            </span>
            <button
              onClick={() => setIsSepiaMode(!isSepiaMode)}
              className={`w-10 h-5 rounded-full p-0.5 transition-colors duration-300 focus:outline-none cursor-pointer ${
                isSepiaMode ? "bg-[#c5a059]" : "bg-zinc-800"
              }`}
            >
              <div
                className={`w-4 h-4 rounded-full bg-black shadow-md transform transition-transform duration-300 ${
                  isSepiaMode ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Right Side: Interactive Parchment Content */}
        <div className="lg:w-2/3 flex flex-col justify-between">
          <div
            className={`p-6 sm:p-8 border border-[#c5a05933] transition-colors duration-500 relative min-h-[320px] flex flex-col justify-between ${
              isSepiaMode 
                ? "bg-[#e5d3b3] text-[#2b2013]" 
                : "bg-[#0b0b0b] text-[#d8d8d8]"
            }`}
            style={{
              backgroundImage: isSepiaMode 
                ? "radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.05) 100%)"
                : "radial-gradient(circle at center, rgba(197,160,89,0.02) 0%, transparent 100%)"
            }}
          >
            {/* Corner decorations for active parchment */}
            <div className={`absolute top-1.5 left-1.5 w-2 h-2 border-t border-l ${isSepiaMode ? "border-[#2b201344]" : "border-[#c5a05933]"}`} />
            <div className={`absolute top-1.5 right-1.5 w-2 h-2 border-t border-r ${isSepiaMode ? "border-[#2b201344]" : "border-[#c5a05933]"}`} />
            <div className={`absolute bottom-1.5 left-1.5 w-2 h-2 border-b border-l ${isSepiaMode ? "border-[#2b201344]" : "border-[#c5a05933]"}`} />
            <div className={`absolute bottom-1.5 right-1.5 w-2 h-2 border-b border-r ${isSepiaMode ? "border-[#2b201344]" : "border-[#c5a05933]"}`} />

            {/* Author Badge */}
            <div className="flex justify-between items-center border-b border-[#c5a05922] pb-4 mb-6">
              <div className="flex items-center gap-3">
                <IconComponent className={`w-5 h-5 ${isSepiaMode ? "text-[#5e4726]" : "text-[#c5a059]"}`} />
                <div>
                  <span className={`font-serif text-[10px] tracking-[0.25em] uppercase font-bold ${isSepiaMode ? "text-[#5e4726]" : "text-[#c5a059]"}`}>
                    {activeChapter.subtitle}
                  </span>
                  <p className={`font-sans text-[9px] tracking-wider uppercase opacity-75 mt-0.5 ${isSepiaMode ? "text-[#2b2013]" : "text-[#888]"}`}>
                    Autor: {activeChapter.author}
                  </p>
                </div>
              </div>
              <div className={`hidden sm:block text-[9px] font-sans tracking-widest uppercase border px-2 py-0.5 ${
                isSepiaMode ? "border-[#2b201333] text-[#2b201377]" : "border-[#c5a05922] text-[#c5a05944]"
              }`}>
                Valtheria.doc
              </div>
            </div>

            {/* Text Body with Dropcap */}
            <div className="flex-grow">
              <p className={`font-serif text-sm sm:text-base leading-relaxed tracking-wide text-justify ${
                isSepiaMode ? "font-serif text-[#3d2e1b]" : "text-[#bbb]"
              }`}>
                <span className={`float-left text-4xl sm:text-5xl font-extrabold mr-2 mt-1 leading-[0.8] ${
                  isSepiaMode ? "text-[#8c672b]" : "text-[#c5a059]"
                }`} style={{ fontFamily: "Cinzel, serif" }}>
                  {activeChapter.parchmentText.charAt(0)}
                </span>
                {activeChapter.parchmentText.slice(1)}
              </p>
            </div>

            {/* Bottom seal ornament */}
            <div className="flex justify-center mt-6 pt-4 border-t border-[#c5a05911]">
              <div className={`w-2.5 h-2.5 rotate-45 border ${
                isSepiaMode ? "border-[#2b201344] bg-[#8c672b]" : "border-[#c5a05933] bg-[#c5a0591a]"
              }`} />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
