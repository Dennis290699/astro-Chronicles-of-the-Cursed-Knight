import type { Faction, LoreKeyEvent, Screenshot } from "./types";

export const FACTIONS: Faction[] = [
  {
    id: "faithful",
    name: "Sir Gareth",
    title: "El Caballero Maldito",
    leader: "Héroe de la Orden Caída",
    description: "Antiguo caballero de la Orden de los Guardianes de Eldergrove, condenado por descuidar su puesto bajo la ilusión de Lord Malakor en la Noche de la Ceniza.",
    detailedLore: "Sir Gareth vaga maldito con la piel agrietada y un brillo necrótico. Su única esperanza de redención es adentrarse en los Jardines Marchitos, evadir las sierras y pinchos de las Mazmorras del Eco, y ascender a la Torre del Hechicero para recuperar los fragmentos del Corazón del Bosque y romper su maldición.",
    emblem: "ShieldAlert",
    accentColor: "#c5a059", // Aged gold
    image: "/wallpapers/characters/SirGareth.jpeg",
    traits: ["Combate a Distancia (Arco)", "Doble Salto", "Maniobra de Evasión (Dash)"],
    quote: "¿Puede una flecha de luz atravesar la noche eterna de mi propia culpa?"
  },
  {
    id: "iron_ashes",
    name: "Eco de Elara",
    title: "Sacerdotisa y Eco Espiritual",
    leader: "Oráculo del Eco del Fresno",
    description: "Gran Sacerdotisa de Eldergrove que sacrificó su forma física para contener el colapso total del bosque y atar su alma a los checkpoints sagrados.",
    detailedLore: "Al manifestarse en las estatuas espirituales de los checkpoints, el Eco de Elara purifica la corrupción de Sir Gareth. Ella restaura su vitalidad y le permite intercambiar los Diamantes de Almas recolectados por mejoras permanentes de salud máxima y daño de flechas.",
    emblem: "Swords",
    accentColor: "#a37a34", // Bronze-gold
    image: "/wallpapers/characters/Elara.jpeg",
    traits: ["Santuario Checkpoint", "Restauración de Vida (HP)", "Intercambio de Almas"],
    quote: "Mi cuerpo se ha vuelto polvo, pero mi plegaria resonará en cada rincón del Fresno sagrado."
  },
  {
    id: "abyss_defilers",
    name: "Lord Malakor",
    title: "El Hechicero Oscuro",
    leader: "El Destructor de Eldergrove",
    description: "El Archimago Real cuya obsesión por fusionar el Corazón del Bosque con la magia de las sombras de los abismos desató la Noche de la Ceniza.",
    detailedLore: "Lord Malakor reina desde el observatorio de la Torre Marchita. Espera pacientemente que Sir Gareth reúna todos los fragmentos del Corazón del Bosque para arrebatárselos y completar su ritual de transmutación de sombras, sellando para siempre el destino de Valtheria.",
    emblem: "Flame",
    accentColor: "#8a6f27", // Dark gold
    image: "/wallpapers/characters/LordMalakor.jpeg",
    traits: ["Magia de Ceniza", "Lanzador de Hechizos", "Batalla en Múltiples Fases"],
    quote: "El Corazón del Bosque es solo la semilla; yo plantaré el árbol de una era sin fin."
  }
];

export const LORE_TIMELINE: LoreKeyEvent[] = [
  {
    year: "Era del Esplendor - Reino de Valtheria",
    title: "El Florecimiento de Eldergrove",
    description: "El Corazón del Bosque mantiene el equilibrio espiritual y vital en Valtheria. Los elfos y humanos conviven bajo la protección de los caballeros guardianes.",
    consequences: "Prosperidad absoluta y florecimiento de las artes místicas."
  },
  {
    year: "La Traición - Lord Malakor",
    title: "La Obsesión de las Sombras",
    description: "Obsesionado por superar los límites de la magia elfica, el Archimago Malakor traza un plan para fusionar el Corazón del Bosque con el abismo oscuro.",
    consequences: "División silenciosa en el consejo real y distracción de la guardia."
  },
  {
    year: "El Cataclismo - La Noche de la Ceniza",
    title: "El Corazón del Bosque Roto",
    description: "Malakor engaña a Sir Gareth y destruye la reliquia sagrada. Una onda expansiva de ceniza necrótica barre el reino, petrificando y corrompiendo todo a su paso.",
    consequences: "Eldergrove colapsa; Gareth es maldito y Elara se sacrifica como un eco."
  },
  {
    year: "Presente - Viaje de Redención",
    title: "El Despertar de la Ceniza",
    description: "Sir Gareth despierta con su arco en los Jardines Marchitos. Guiado por el Eco de Elara, debe reclamar los fragmentos del Corazón del Bosque y derrotar a Malakor.",
    consequences: "La profecía dicta que solo el arquero maldito romperá la plaga de ceniza."
  }
];

export const SCREENSHOTS: Screenshot[] = [
  {
    id: "sc1",
    url: "/wallpapers/levels/Jardines-Marchitos.jpeg",
    title: "Jardines Marchitos",
    category: "Nivel Inicial",
    description: "El primer nivel del juego. Plataformas de piedra cubiertas de vegetación decadente bajo la luz pálida de la luna."
  },
  {
    id: "sc2",
    url: "/wallpapers/levels/Mazmorras_del_Eco_subterráneas.jpeg",
    title: "Mazmorras del Eco",
    category: "Peligros y Plataformas",
    description: "Subterráneos repletos de sierras mecánicas, pinchos estáticos y plataformas inestables que ponen a prueba la agilidad."
  },
  {
    id: "sc3",
    url: "/wallpapers/levels/Torre_del_Hechicero.jpeg",
    title: "La Torre Marchita",
    category: "Combate Final",
    description: "El ascenso vertical hacia el observatorio de Lord Malakor, esquivando trampas de proyectiles y hordas de esqueletos."
  },
  {
    id: "sc4",
    url: "/wallpapers/cover.jpeg",
    title: "Chronicles of the Cursed Knight",
    category: "Arte de Portada",
    description: "Ilustración oficial del juego: Sir Gareth con su arco y la imponente figura de Lord Malakor en las sombras."
  }
];

export const SURVEY_QUESTIONS = [
  {
    id: 1,
    text: "¿Cuál es tu táctica principal al enfrentarte a los peligros en las Mazmorras del Eco?",
    options: [
      { value: "exploration", label: "Estudio y Precisión", desc: "Calcular el movimiento de las sierras y saltar con timing exacto." },
      { value: "combat", label: "Acción Directa", desc: "Usar el Dash en pleno aire para saltar peligros y disparar flechas en movimiento." },
      { value: "magic", label: "Aprovechar las Sombras", desc: "Esperar a pie firme y confiar en la purificación espiritual para mitigar errores." }
    ]
  },
  {
    id: 2,
    text: "Si encuentras a un camarada guardián consumido por la ceniza necrótica, ¿qué acción tomas?",
    options: [
      { value: "faithful", label: "Expiación Rápida", desc: "Derrotarlo a distancia para liberar su alma y recolectar sus Diamantes de Almas." },
      { value: "iron_ashes", label: "Aprender del Suceso", desc: "Estudiar el patrón de su corrupción para evitar cometer sus mismos errores." },
      { value: "abyss_defilers", label: "Canalizar su Fuerza", desc: "Aceptar que la ceniza es parte del destino del reino y usar su energía para tus flechas." }
    ]
  },
  {
    id: 3,
    text: "¿Cuál consideras que es la clave para restaurar el Reino de Valtheria?",
    options: [
      { value: "devotion", label: "El Deber de Sir Gareth", desc: "La penitencia, el combate incansable y la recuperación de cada fragmento roto." },
      { value: "iron", label: "El Eco Purificador de Elara", desc: "Consagrar los checkpoints y mejorar de manera permanente a través del sacrificio." },
      { value: "forbidden_knowledge", label: "El Vínculo del Corazón", desc: "Entender el ritual de Malakor para revertir la petrificación desde su origen." }
    ]
  }
];
