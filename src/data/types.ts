export type Equipment = "mat" | "reformer" | "chair" | "none";

export type Energy = "low" | "medium" | "high";

export type Stiffness = "loose" | "a-little" | "very";

export type Goal =
  | "mobility"
  | "strength"
  | "balance"
  | "posture"
  | "recovery"
  | "stress-relief"
  | "core"
  | "everyday-function";

export type Concern = "breast-surgery" | "shoulder" | "back" | "returning";

export type CollectionSlug =
  | "how-do-you-feel-today"
  | "movement-through-recovery"
  | "strong-for-life"
  | "real-life-wins";

export type ArticleCollectionSlug = "pilates-helps" | "questions-people-are-afraid-to-ask";

export interface Exercise {
  name: string;
  /** e.g. "8 slow reps" or "45 seconds" */
  dose: string;
  cue: string;
  /** An easier or alternative option. */
  modify?: string;
}

export interface SessionBlock {
  title: string;
  minutes: number;
  exercises: Exercise[];
}

export interface Session {
  id: string;
  title: string;
  collection: CollectionSlug;
  minutes: number;
  equipment: Equipment[];
  /** 1 = gentle, 2 = moderate, 3 = energizing */
  intensity: 1 | 2 | 3;
  goals: Goal[];
  energy: Energy[];
  stiffness: Stiffness[];
  /** Recovery concerns this session is specifically designed for. */
  concerns?: Concern[];
  summary: string;
  /** The everyday activity this session makes easier. */
  realLifeWin?: string;
  considerations: string[];
  blocks: SessionBlock[];
}

export interface Collection {
  slug: CollectionSlug;
  title: string;
  tagline: string;
  description: string;
  icon: string;
}

export interface Article {
  slug: string;
  collection: ArticleCollectionSlug;
  title: string;
  summary: string;
  readMinutes: number;
  body: string[];
  relatedSessionIds: string[];
}

export interface ArticleCollection {
  slug: ArticleCollectionSlug;
  title: string;
  tagline: string;
  description: string;
}
