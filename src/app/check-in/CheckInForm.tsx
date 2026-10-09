"use client";

import { useState } from "react";
import {
  concernLabels,
  energyLabels,
  equipmentLabels,
  goalLabels,
  stiffnessLabels,
} from "@/data/collections";
import { sessions } from "@/data/sessions";
import type { Concern, Energy, Equipment, Goal, Stiffness } from "@/data/types";
import { recommend, type CheckIn, type Recommendation } from "@/lib/recommend";
import { SessionCard } from "@/components/SessionCard";

const energyOptions: { value: Energy; emoji: string }[] = [
  { value: "low", emoji: "🌙" },
  { value: "medium", emoji: "⛅" },
  { value: "high", emoji: "☀️" },
];
const stiffnessOptions: Stiffness[] = ["loose", "a-little", "very"];
const goalOptions: Goal[] = [
  "mobility",
  "strength",
  "balance",
  "posture",
  "core",
  "stress-relief",
  "everyday-function",
];
const equipmentOptions: Equipment[] = ["mat", "chair", "reformer"];
const concernOptions: Concern[] = ["breast-surgery", "shoulder", "back", "returning"];

export function CheckInForm() {
  const [energy, setEnergy] = useState<Energy>("medium");
  const [stiffness, setStiffness] = useState<Stiffness>("a-little");
  const [goals, setGoals] = useState<Goal[]>([]);
  const [equipment, setEquipment] = useState<Equipment[]>(["mat"]);
  const [maxMinutes, setMaxMinutes] = useState<number | null>(null);
  const [concern, setConcern] = useState<Concern | null>(null);
  const [results, setResults] = useState<Recommendation[] | null>(null);

  function toggle<T>(list: T[], value: T): T[] {
    return list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const checkIn: CheckIn = { energy, stiffness, goals, equipment, maxMinutes, concern };
    setResults(recommend(sessions, checkIn));
    requestAnimationFrame(() =>
      document.getElementById("results")?.scrollIntoView({ behavior: "smooth" }),
    );
  }

  return (
    <>
      <form className="checkin" onSubmit={onSubmit}>
        <fieldset>
          <legend>How is your energy?</legend>
          <div className="choices">
            {energyOptions.map((o) => (
              <label key={o.value} className="choice">
                <input
                  type="radio"
                  name="energy"
                  checked={energy === o.value}
                  onChange={() => setEnergy(o.value)}
                />
                <span>
                  <span aria-hidden>{o.emoji}</span> {energyLabels[o.value]}
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend>How stiff do you feel?</legend>
          <div className="choices">
            {stiffnessOptions.map((s) => (
              <label key={s} className="choice">
                <input
                  type="radio"
                  name="stiffness"
                  checked={stiffness === s}
                  onChange={() => setStiffness(s)}
                />
                <span>{stiffnessLabels[s]}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend>What would you like to work on?</legend>
          <p className="hint">Choose any that apply.</p>
          <div className="choices">
            {goalOptions.map((g) => (
              <label key={g} className="choice">
                <input
                  type="checkbox"
                  checked={goals.includes(g)}
                  onChange={() => setGoals(toggle(goals, g))}
                />
                <span>{goalLabels[g]}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend>Are you working through anything?</legend>
          <p className="hint">Optional. We&apos;ll favor gentle, adaptable sessions.</p>
          <div className="choices">
            <label className="choice">
              <input
                type="radio"
                name="concern"
                checked={concern === null}
                onChange={() => setConcern(null)}
              />
              <span>Nothing specific</span>
            </label>
            {concernOptions.map((c) => (
              <label key={c} className="choice">
                <input
                  type="radio"
                  name="concern"
                  checked={concern === c}
                  onChange={() => setConcern(c)}
                />
                <span>{concernLabels[c]}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend>What do you have today?</legend>
          <p className="hint">Equipment-free sessions are always included.</p>
          <div className="choices">
            {equipmentOptions.map((eq) => (
              <label key={eq} className="choice">
                <input
                  type="checkbox"
                  checked={equipment.includes(eq)}
                  onChange={() => setEquipment(toggle(equipment, eq))}
                />
                <span>{equipmentLabels[eq]}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend>How much time?</legend>
          <div className="choices">
            {[
              { label: "15 minutes", value: 15 },
              { label: "Up to 20 minutes", value: null },
            ].map((t) => (
              <label key={t.label} className="choice">
                <input
                  type="radio"
                  name="time"
                  checked={maxMinutes === t.value}
                  onChange={() => setMaxMinutes(t.value)}
                />
                <span>{t.label}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <button type="submit" className="btn">
          Find my session
        </button>
      </form>

      {results && (
        <section id="results" className="section" style={{ marginTop: 48 }}>
          <h2>Your sessions for today</h2>
          {results.length === 0 ? (
            <p className="muted">
              No sessions match that equipment and time. Try adding equipment or choosing a longer
              time.
            </p>
          ) : (
            <div className="grid">
              {results.map((r, i) => (
                <SessionCard key={r.session.id} session={r.session} showCollection>
                  {i === 0 && <span className="tag sage">Best match</span>}
                  {r.reasons.length > 0 && (
                    <ul className="reasons">
                      {r.reasons.map((reason) => (
                        <li key={reason}>{reason}</li>
                      ))}
                    </ul>
                  )}
                </SessionCard>
              ))}
            </div>
          )}
        </section>
      )}
    </>
  );
}
