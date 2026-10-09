import type { ArticleCollection, Collection, Concern, Energy, Equipment, Goal, Stiffness } from "./types.ts";

export const collections: Collection[] = [
  {
    slug: "how-do-you-feel-today",
    title: "How Do You Feel Today?",
    tagline: "Workouts chosen by how your body feels right now.",
    description:
      "Low energy, stiff, restless, or ready to work — every day is different. These sessions are matched to your energy level, stiffness, mobility, and goals so you can move in a way that fits today, not an ideal version of you.",
    icon: "🌤️",
  },
  {
    slug: "movement-through-recovery",
    title: "Movement Through Recovery",
    tagline: "Adaptable Pilates for healing bodies.",
    description:
      "Thoughtful, gentle progressions for breast surgery recovery, shoulder limitations, back concerns, and returning to movement after time away. Every session includes modifications and clear guidance on when to pause.",
    icon: "🌱",
  },
  {
    slug: "strong-for-life",
    title: "Strong for Life",
    tagline: "Chair Pilates, balance, and strength for active aging.",
    description:
      "Functional strength, balance, and mobility for seniors and anyone who wants to stay independent and capable. Many sessions can be done seated or with a chair for support.",
    icon: "🪑",
  },
  {
    slug: "real-life-wins",
    title: "Real Life Wins",
    tagline: "Movement that makes everyday life easier.",
    description:
      "Reaching overhead, getting up off the floor, carrying groceries, sitting through a long flight — these sessions train the movements you actually use, so daily life feels lighter.",
    icon: "🏡",
  },
];

export const articleCollections: ArticleCollection[] = [
  {
    slug: "pilates-helps",
    title: "What Can Pilates Help Me With That I Didn't Know I Needed?",
    tagline: "The everyday benefits of intentional movement.",
    description:
      "Short reads on the surprising ways Pilates supports breathing, sleep, posture, balance, pelvic health, and confidence.",
  },
  {
    slug: "questions-people-are-afraid-to-ask",
    title: "Questions People Are Afraid to Ask",
    tagline: "Honest answers, no judgment.",
    description:
      "Real conversations about recovery, aging, body image, physical limitations, and rebuilding confidence.",
  },
];

export const equipmentLabels: Record<Equipment, string> = {
  mat: "Mat",
  reformer: "Reformer",
  chair: "Chair",
  none: "No equipment",
};

export const goalLabels: Record<Goal, string> = {
  mobility: "Mobility",
  strength: "Strength",
  balance: "Balance",
  posture: "Posture",
  recovery: "Recovery",
  "stress-relief": "Stress relief",
  core: "Core",
  "everyday-function": "Everyday function",
};

export const energyLabels: Record<Energy, string> = {
  low: "Low energy",
  medium: "Steady energy",
  high: "High energy",
};

export const stiffnessLabels: Record<Stiffness, string> = {
  loose: "Feeling loose",
  "a-little": "A little stiff",
  very: "Very stiff",
};

export const concernLabels: Record<Concern, string> = {
  "breast-surgery": "Breast surgery recovery",
  shoulder: "Shoulder limitations",
  back: "Back concerns",
  returning: "Returning to movement",
};

export const intensityLabels = { 1: "Gentle", 2: "Moderate", 3: "Energizing" } as const;

export function getCollection(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}

export function getArticleCollection(slug: string): ArticleCollection | undefined {
  return articleCollections.find((c) => c.slug === slug);
}
