import type { Equipment } from "../types.ts";

export type ExerciseCategory =
  | "breath"
  | "spinal-articulation"
  | "core"
  | "hip-and-leg"
  | "back-extension"
  | "balance"
  | "functional"
  | "upper-body";

export type PopulationSlug =
  | "breast-cancer-recovery"
  | "osteoporosis"
  | "low-back-pain"
  | "shoulder-limitations"
  | "active-aging";

export interface FaultCorrection {
  fault: string;
  correction: string;
}

export interface LibraryExercise {
  id: string;
  name: string;
  /** Names this exercise appears under in client sessions. */
  aliases: string[];
  category: ExerciseCategory;
  equipment: Equipment[];
  purpose: string;
  primaryMuscles: string[];
  setup: string;
  cues: {
    breath: string;
    movement: string[];
    imagery: string;
  };
  commonFaults: FaultCorrection[];
  regressions: string[];
  progressions: string[];
  precautions: { population: PopulationSlug | "general"; note: string }[];
  realLifeLink: string;
}

export interface PopulationGuide {
  slug: PopulationSlug;
  title: string;
  summary: string;
  overview: string;
  goals: string[];
  favor: string[];
  modifyOrAvoid: string[];
  redFlags: string[];
  teachingTips: string[];
  relatedSessionIds: string[];
  relatedExerciseIds: string[];
}

export interface QuizQuestion {
  id: string;
  topic: string;
  question: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}
