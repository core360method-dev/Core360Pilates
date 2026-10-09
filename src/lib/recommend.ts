import type { Concern, Energy, Equipment, Goal, Session, Stiffness } from "../data/types.ts";

export interface CheckIn {
  energy: Energy;
  stiffness: Stiffness;
  goals: Goal[];
  /** Equipment the user has access to today. "none" is always implied. */
  equipment: Equipment[];
  /** Maximum session length in minutes, or null for any length. */
  maxMinutes: number | null;
  concern: Concern | null;
}

export interface Recommendation {
  session: Session;
  score: number;
  reasons: string[];
}

/** Whether every piece of equipment a session needs is available. */
export function hasEquipmentFor(session: Session, available: Equipment[]): boolean {
  const kit = new Set<Equipment>([...available, "none"]);
  return session.equipment.every((e) => kit.has(e));
}

export function scoreSession(session: Session, checkIn: CheckIn): Recommendation {
  let score = 0;
  const reasons: string[] = [];

  if (session.energy.includes(checkIn.energy)) {
    score += 3;
    reasons.push(`Suits ${checkIn.energy} energy days`);
  } else if (checkIn.energy === "low" && session.intensity === 3) {
    score -= 5;
  }
  if (checkIn.energy === "high" && session.intensity === 3) {
    score += 1;
  }

  if (session.stiffness.includes(checkIn.stiffness)) {
    score += 2;
    if (checkIn.stiffness === "very") reasons.push("Eases stiffness gently");
  } else if (checkIn.stiffness === "very" && session.intensity >= 2) {
    score -= 2;
  }

  const matchedGoals = checkIn.goals.filter((g) => session.goals.includes(g));
  score += matchedGoals.length * 2;
  if (matchedGoals.length > 0) {
    reasons.push(`Focuses on ${matchedGoals.join(", ").replace(/-/g, " ")}`);
  }

  if (checkIn.concern) {
    if (session.concerns?.includes(checkIn.concern)) {
      score += 6;
      reasons.push("Designed for your recovery focus");
    } else if (session.intensity === 3) {
      score -= 6;
    } else if (session.intensity === 2) {
      score -= 1;
    }
  }

  return { session, score, reasons };
}

/**
 * Rank sessions for a check-in. Sessions that need unavailable equipment or
 * run longer than the user's time are excluded entirely.
 */
export function recommend(sessions: Session[], checkIn: CheckIn, limit = 3): Recommendation[] {
  return sessions
    .filter((s) => hasEquipmentFor(s, checkIn.equipment))
    .filter((s) => checkIn.maxMinutes === null || s.minutes <= checkIn.maxMinutes)
    .map((s) => scoreSession(s, checkIn))
    .sort((a, b) => b.score - a.score || a.session.intensity - b.session.intensity)
    .slice(0, limit);
}
