"use client";

import { useCallback } from "react";
import { createLocalStore } from "./localStore";

export interface CompletedSession {
  sessionId: string;
  completedAt: string;
  /** 1 (worse) – 5 (much better) */
  feelAfter: number | null;
}

export interface PracticeState {
  favorites: string[];
  history: CompletedSession[];
}

const store = createLocalStore<PracticeState>(
  "core360.practice.v1",
  { favorites: [], history: [] },
  (raw) => {
    const parsed = (raw ?? {}) as Partial<PracticeState>;
    return {
      favorites: Array.isArray(parsed.favorites) ? parsed.favorites : [],
      history: Array.isArray(parsed.history) ? parsed.history : [],
    };
  },
);

/** Saved favorites and completed sessions, persisted in this browser. */
export function usePractice() {
  const state = store.use();

  const toggleFavorite = useCallback((sessionId: string) => {
    const current = store.get();
    const favorites = current.favorites.includes(sessionId)
      ? current.favorites.filter((id) => id !== sessionId)
      : [...current.favorites, sessionId];
    store.set({ ...current, favorites });
  }, []);

  const logCompletion = useCallback((sessionId: string, feelAfter: number | null) => {
    const current = store.get();
    const entry: CompletedSession = {
      sessionId,
      completedAt: new Date().toISOString(),
      feelAfter,
    };
    store.set({ ...current, history: [entry, ...current.history] });
  }, []);

  const clearHistory = useCallback(() => {
    store.set({ ...store.get(), history: [] });
  }, []);

  return { ...state, toggleFavorite, logCompletion, clearHistory };
}

/** Consecutive days (ending today or yesterday) with at least one session. */
export function currentStreak(history: CompletedSession[], now = new Date()): number {
  const days = new Set(history.map((h) => new Date(h.completedAt).toDateString()));
  const cursor = new Date(now);
  if (!days.has(cursor.toDateString())) cursor.setDate(cursor.getDate() - 1);
  let streak = 0;
  while (days.has(cursor.toDateString())) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}
