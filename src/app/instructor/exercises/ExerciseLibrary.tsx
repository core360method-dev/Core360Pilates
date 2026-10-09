"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { equipmentLabels } from "@/data/collections";
import { categoryLabels, libraryExercises } from "@/data/instructor/exercises";
import { populationGuides } from "@/data/instructor/populations";

const ALL = "all";

export function ExerciseLibrary() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(ALL);
  const [population, setPopulation] = useState(ALL);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return libraryExercises.filter(
      (e) =>
        (category === ALL || e.category === category) &&
        (population === ALL || e.precautions.some((p) => p.population === population)) &&
        (!q ||
          e.name.toLowerCase().includes(q) ||
          e.aliases.some((a) => a.toLowerCase().includes(q)) ||
          e.primaryMuscles.some((m) => m.toLowerCase().includes(q))),
    );
  }, [query, category, population]);

  return (
    <>
      <div className="filters">
        <label>
          Search
          <input
            type="search"
            value={query}
            placeholder="Exercise or muscle"
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <label>
          Category
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value={ALL}>All</option>
            {Object.entries(categoryLabels).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <label>
          Has precautions for
          <select value={population} onChange={(e) => setPopulation(e.target.value)}>
            <option value={ALL}>Any population</option>
            {populationGuides.map((p) => (
              <option key={p.slug} value={p.slug}>
                {p.title}
              </option>
            ))}
          </select>
        </label>
      </div>

      <p className="muted" aria-live="polite">
        {filtered.length} {filtered.length === 1 ? "exercise" : "exercises"}
      </p>

      <div className="grid">
        {filtered.map((e) => (
          <Link key={e.id} href={`/instructor/exercises/${e.id}`} className="card">
            <div className="eyebrow">{categoryLabels[e.category]}</div>
            <h3>{e.name}</h3>
            <p>{e.purpose}</p>
            <div className="card-footer">
              {e.equipment.map((eq) => (
                <span key={eq} className="tag clay">
                  {equipmentLabels[eq]}
                </span>
              ))}
              {e.precautions.some((p) => p.population !== "general") && (
                <span className="tag">⚠ Population notes</span>
              )}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
