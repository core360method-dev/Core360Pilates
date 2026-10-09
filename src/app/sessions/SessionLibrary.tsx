"use client";

import { useMemo, useState } from "react";
import { collections, equipmentLabels, goalLabels, intensityLabels } from "@/data/collections";
import { sessions } from "@/data/sessions";
import type { Equipment, Goal } from "@/data/types";
import { SessionCard } from "@/components/SessionCard";

const ALL = "all";

export function SessionLibrary() {
  const [collection, setCollection] = useState<string>(ALL);
  const [equipment, setEquipment] = useState<string>(ALL);
  const [goal, setGoal] = useState<string>(ALL);
  const [intensity, setIntensity] = useState<string>(ALL);
  const [minutes, setMinutes] = useState<string>(ALL);

  const filtered = useMemo(
    () =>
      sessions.filter(
        (s) =>
          (collection === ALL || s.collection === collection) &&
          (equipment === ALL || s.equipment.includes(equipment as Equipment)) &&
          (goal === ALL || s.goals.includes(goal as Goal)) &&
          (intensity === ALL || String(s.intensity) === intensity) &&
          (minutes === ALL || String(s.minutes) === minutes),
      ),
    [collection, equipment, goal, intensity, minutes],
  );

  const reset = () => {
    setCollection(ALL);
    setEquipment(ALL);
    setGoal(ALL);
    setIntensity(ALL);
    setMinutes(ALL);
  };

  return (
    <>
      <div className="filters">
        <label>
          Collection
          <select value={collection} onChange={(e) => setCollection(e.target.value)}>
            <option value={ALL}>All</option>
            {collections.map((c) => (
              <option key={c.slug} value={c.slug}>
                {c.title}
              </option>
            ))}
          </select>
        </label>
        <label>
          Equipment
          <select value={equipment} onChange={(e) => setEquipment(e.target.value)}>
            <option value={ALL}>Any</option>
            {Object.entries(equipmentLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <label>
          Focus
          <select value={goal} onChange={(e) => setGoal(e.target.value)}>
            <option value={ALL}>Any</option>
            {Object.entries(goalLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <label>
          Intensity
          <select value={intensity} onChange={(e) => setIntensity(e.target.value)}>
            <option value={ALL}>Any</option>
            {Object.entries(intensityLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <label>
          Length
          <select value={minutes} onChange={(e) => setMinutes(e.target.value)}>
            <option value={ALL}>Any</option>
            <option value="15">15 min</option>
            <option value="20">20 min</option>
          </select>
        </label>
      </div>

      <p className="muted" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "session" : "sessions"}
      </p>

      {filtered.length === 0 ? (
        <div className="card">
          <p>No sessions match those filters.</p>
          <div>
            <button type="button" className="btn secondary" onClick={reset}>
              Clear filters
            </button>
          </div>
        </div>
      ) : (
        <div className="grid">
          {filtered.map((s) => (
            <SessionCard key={s.id} session={s} showCollection />
          ))}
        </div>
      )}
    </>
  );
}
