"use client";

import Link from "next/link";
import { getSession } from "@/data/sessions";
import { currentStreak, usePractice } from "@/lib/practice";
import { SessionCard } from "@/components/SessionCard";

const feelLabels: Record<number, string> = {
  1: "😣 Worse",
  2: "😕 A bit worse",
  3: "😐 Same",
  4: "🙂 Better",
  5: "😊 Much better",
};

export function MyPractice() {
  const { favorites, history, clearHistory } = usePractice();
  const favoriteSessions = favorites.flatMap((id) => getSession(id) ?? []);
  const totalMinutes = history.reduce((sum, h) => sum + (getSession(h.sessionId)?.minutes ?? 0), 0);
  const rated = history.filter((h) => h.feelAfter !== null);
  const feltBetter = rated.filter((h) => (h.feelAfter ?? 0) >= 4).length;

  return (
    <>
      <div className="stats">
        <div className="stat">
          <div className="value">{history.length}</div>
          <div className="label">Sessions completed</div>
        </div>
        <div className="stat">
          <div className="value">{totalMinutes}</div>
          <div className="label">Minutes moved</div>
        </div>
        <div className="stat">
          <div className="value">{currentStreak(history)}</div>
          <div className="label">Day streak</div>
        </div>
        <div className="stat">
          <div className="value">
            {rated.length ? `${Math.round((feltBetter / rated.length) * 100)}%` : "—"}
          </div>
          <div className="label">Felt better after</div>
        </div>
      </div>

      <section className="section">
        <h2>Saved sessions</h2>
        {favoriteSessions.length === 0 ? (
          <p className="muted">
            Tap &ldquo;♡ Save&rdquo; on any session to keep it here.{" "}
            <Link href="/sessions">Browse sessions →</Link>
          </p>
        ) : (
          <div className="grid">
            {favoriteSessions.map((s) => (
              <SessionCard key={s.id} session={s} showCollection />
            ))}
          </div>
        )}
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Recent activity</h2>
          {history.length > 0 && (
            <button
              type="button"
              className="btn ghost"
              onClick={() => {
                if (window.confirm("Clear your session history? This can't be undone.")) {
                  clearHistory();
                }
              }}
            >
              Clear history
            </button>
          )}
        </div>
        {history.length === 0 ? (
          <p className="muted">
            No sessions yet. <Link href="/check-in">Find one that fits today →</Link>
          </p>
        ) : (
          <ul className="history">
            {history.slice(0, 30).map((h) => {
              const s = getSession(h.sessionId);
              return (
                <li key={h.completedAt}>
                  <span>
                    {s ? <Link href={`/sessions/${s.id}`}>{s.title}</Link> : h.sessionId}
                    <span className="muted">
                      {" "}
                      ·{" "}
                      {new Date(h.completedAt).toLocaleDateString(undefined, {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </span>
                  {h.feelAfter !== null && <span>{feelLabels[h.feelAfter]}</span>}
                </li>
              );
            })}
          </ul>
        )}
      </section>
    </>
  );
}
