"use client";

import { useSyncExternalStore } from "react";

export interface LocalStore<T> {
  get(): T;
  set(next: T): void;
  use(): T;
}

/**
 * A tiny localStorage-backed store shared across components and tabs.
 * `normalize` repairs whatever was parsed from storage into a valid T.
 */
export function createLocalStore<T>(key: string, empty: T, normalize: (raw: unknown) => T): LocalStore<T> {
  const listeners = new Set<() => void>();
  let cache: T | null = null;

  function get(): T {
    if (cache) return cache;
    try {
      const raw = window.localStorage.getItem(key);
      cache = raw ? normalize(JSON.parse(raw)) : empty;
    } catch {
      cache = empty;
    }
    return cache;
  }

  function set(next: T) {
    cache = next;
    try {
      window.localStorage.setItem(key, JSON.stringify(next));
    } catch {
      // Storage may be unavailable (private mode); keep the in-memory copy.
    }
    listeners.forEach((l) => l());
  }

  function subscribe(listener: () => void) {
    listeners.add(listener);
    const onStorage = (e: StorageEvent) => {
      if (e.key === key) {
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

  return {
    get,
    set,
    use: () => useSyncExternalStore(subscribe, get, () => empty),
  };
}
