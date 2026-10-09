"use client";

import { useCallback, useSyncExternalStore } from "react";

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

const STORAGE_KEY = "core360.practice.v1";
const EMPTY: PracticeState = { favorites: [], history: [] };

const listeners = new Set<() => void>();
let cache: PracticeState | null = null;

function read(): PracticeState {
  if (cache) return cache;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed = raw ? (JSON.parse(raw) as Partial<PracticeState>) : {};
    cache = {
      favorites: Array.isArray(parsed.favorites) ? parsed.favorites : [],
      history: Array.isArray(parsed.history) ? parsed.history : [],
    };
  } catch {
    cache = EMPTY;
  }
  return cache;
}

function write(next: PracticeState) {
  cache = next;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // Storage may be unavailable (private mode); keep the in-memory copy.
  }
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  const onStorage = (e: StorageEvent) => {
    if (e.key === STORAGE_KEY) {
      cache = null;
      listener();
    }
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", onStorage);
  };
}

/** Saved favorites and completed sessions, persisted in this browser. */
export function usePractice() {
  const state = useSyncExternalStore(subscribe, read, () => EMPTY);

  const toggleFavorite = useCallback((sessionId: string) => {
    const current = read();
    const favorites = current.favorites.includes(sessionId)
      ? current.favorites.filter((id) => id !== sessionId)
      : [...current.favorites, sessionId];
    write({ ...current, favorites });
  }, []);

  const logCompletion = useCallback((sessionId: string, feelAfter: number | null) => {
    const current = read();
    const entry: CompletedSession = {
      sessionId,
      completedAt: new Date().toISOString(),
      feelAfter,
    };
    write({ ...current, history: [entry, ...current.history] });
  }, []);

  const clearHistory = useCallback(() => {
    write({ ...read(), history: [] });
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
