"use client";

import { usePractice } from "@/lib/practice";

export function FavoriteButton({ sessionId }: { sessionId: string }) {
  const { favorites, toggleFavorite } = usePractice();
  const saved = favorites.includes(sessionId);
  return (
    <button
      type="button"
      className="fav"
      aria-pressed={saved}
      onClick={() => toggleFavorite(sessionId)}
    >
      {saved ? "♥ Saved" : "♡ Save"}
    </button>
  );
}
