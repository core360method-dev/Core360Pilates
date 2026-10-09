"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Session } from "@/data/types";
import { usePractice } from "@/lib/practice";

interface Step {
  block: string;
  name: string;
  dose: string;
  cue: string;
  modify?: string;
  seconds: number;
}

/** Split each block's time evenly across its exercises. */
function buildSteps(session: Session): Step[] {
  return session.blocks.flatMap((block) => {
    const seconds = Math.round((block.minutes * 60) / block.exercises.length);
    return block.exercises.map((ex) => ({ block: block.title, ...ex, seconds }));
  });
}

function formatTime(total: number) {
  const m = Math.floor(total / 60);
  const s = total % 60;
  return `${m}:${String(s).padStart(2, "0")}`;
}

const feelings = [
  { value: 1, label: "Worse", emoji: "😣" },
  { value: 2, label: "A bit worse", emoji: "😕" },
  { value: 3, label: "About the same", emoji: "😐" },
  { value: 4, label: "Better", emoji: "🙂" },
  { value: 5, label: "Much better", emoji: "😊" },
];

export function SessionPlayer({ session }: { session: Session }) {
  const steps = useMemo(() => buildSteps(session), [session]);
  const [index, setIndex] = useState(0);
  const [remaining, setRemaining] = useState(steps[0].seconds);
  const [running, setRunning] = useState(false);
  const [finished, setFinished] = useState(false);
  const [logged, setLogged] = useState(false);
  const { logCompletion } = usePractice();

  const step = steps[index];
  const totalSeconds = steps.reduce((sum, s) => sum + s.seconds, 0);
  const elapsed =
    steps.slice(0, index).reduce((sum, s) => sum + s.seconds, 0) + (step.seconds - remaining);

  useEffect(() => {
    if (!running) return;
    const t = setInterval(() => setRemaining((r) => Math.max(0, r - 1)), 1000);
    return () => clearInterval(t);
  }, [running]);

  useEffect(() => {
    if (remaining > 0 || !running) return;
    if (index < steps.length - 1) {
      setIndex(index + 1);
      setRemaining(steps[index + 1].seconds);
    } else {
      setRunning(false);
      setFinished(true);
    }
  }, [remaining, running, index, steps]);

  function goTo(i: number) {
    setIndex(i);
    setRemaining(steps[i].seconds);
  }

  function finish(feelAfter: number | null) {
    logCompletion(session.id, feelAfter);
    setLogged(true);
  }

  if (finished) {
    return (
      <div className="player">
        <div className="eyebrow">Session complete</div>
        <h2>Well done.</h2>
        {logged ? (
          <>
            <p>Saved to your practice. Every session counts.</p>
            <div className="btn-row">
              <Link href="/my-practice" className="btn">
                View my practice
              </Link>
              <Link href="/check-in" className="btn secondary">
                Back to check-in
              </Link>
            </div>
          </>
        ) : (
          <>
            <p className="cue">How do you feel now compared to when you started?</p>
            <div className="choices" style={{ justifyContent: "center", marginBottom: 16 }}>
              {feelings.map((f) => (
                <button
                  key={f.value}
                  type="button"
                  className="btn secondary"
                  onClick={() => finish(f.value)}
                >
                  <span aria-hidden>{f.emoji}</span> {f.label}
                </button>
              ))}
            </div>
            <button type="button" className="btn ghost" onClick={() => finish(null)}>
              Skip and save
            </button>
          </>
        )}
      </div>
    );
  }

  return (
    <div className="player">
      <div className="eyebrow">
        {step.block} · {index + 1} of {steps.length}
      </div>
      <h2 className="current-name">{step.name}</h2>
      <div className="dose" style={{ color: "var(--clay)", fontWeight: 600 }}>
        {step.dose}
      </div>
      <div className="timer" aria-live="off">
        {formatTime(remaining)}
      </div>
      <p className="cue">{step.cue}</p>
      {step.modify && <p className="muted">Modify: {step.modify}</p>}

      <div
        className="progress"
        role="progressbar"
        aria-label="Session progress"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round((elapsed / totalSeconds) * 100)}
      >
        <div style={{ width: `${(elapsed / totalSeconds) * 100}%` }} />
      </div>

      <div className="btn-row">
        <button
          type="button"
          className="btn secondary"
          onClick={() => goTo(index - 1)}
          disabled={index === 0}
        >
          ← Back
        </button>
        <button type="button" className="btn" onClick={() => setRunning(!running)}>
          {running ? "❚❚ Pause" : elapsed === 0 ? "▶ Begin" : "▶ Resume"}
        </button>
        {index < steps.length - 1 ? (
          <button type="button" className="btn secondary" onClick={() => goTo(index + 1)}>
            Next →
          </button>
        ) : (
          <button
            type="button"
            className="btn secondary"
            onClick={() => {
              setRunning(false);
              setFinished(true);
            }}
          >
            Finish ✓
          </button>
        )}
      </div>

      {index < steps.length - 1 && (
        <p className="muted" style={{ marginTop: 20 }}>
          Up next: {steps[index + 1].name}
        </p>
      )}
    </div>
  );
}
