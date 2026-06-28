export interface Faction {
  id: string;
  name: string;
  title: string;
  leader: string; // Will contain their story role/alignment
  description: string;
  detailedLore: string;
  emblem: string; // Lucide icon identifier
  accentColor: string;
  image: string;
  traits: string[];
  quote: string; // Narrative cinematic quote
}

export interface LoreKeyEvent {
  year: string;
  title: string;
  description: string;
  consequences: string;
}

export interface Screenshot {
  id: string;
  url: string;
  title: string;
  category: string;
  description: string;
}

export interface SurveyState {
  questions: {
    id: number;
    text: string;
    options: { value: string; label: string; desc?: string }[];
  }[];
  answers: Record<number, string>;
  isCompleted: boolean;
  playerName: string;
  playerClass: string;
}

export interface VoteResults {
  factionVotes: Record<string, number>;
  playerClassCount: Record<string, number>;
  totalVotes: number;
}
