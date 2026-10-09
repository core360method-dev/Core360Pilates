"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { equipmentLabels } from "@/data/collections";
import { findLibraryExerciseByName, getLibraryExercise, libraryExercises } from "@/data/instructor/exercises";
import { getSession, sessions } from "@/data/sessions";
import { newId, plansStore, type ClassPlan, type PlanItem } from "@/lib/instructorStore";

function blankPlan(): ClassPlan {
  return {
    id: newId(),
    title: "Untitled class",
    audience: "",
    equipment: "",
    focus: "",
    items: [],
    updatedAt: new Date().toISOString(),
  };
}

function planFromSession(sessionId: string): ClassPlan | null {
  const s = getSession(sessionId);
  if (!s) return null;
  return {
    ...blankPlan(),
    title: `${s.title} (customized)`,
    equipment: s.equipment.map((e) => equipmentLabels[e]).join(", "),
    focus: s.summary,
    items: s.blocks.flatMap((b) =>
      b.exercises.map((ex) => ({
        key: newId(),
        exerciseId: findLibraryExerciseByName(ex.name)?.id ?? null,
        name: ex.name,
        minutes: Math.round((b.minutes / b.exercises.length) * 10) / 10,
        notes: `${b.title} · ${ex.dose} · ${ex.cue}`,
      })),
    ),
  };
}

export function ClassPlanner() {
  const plans = plansStore.use();
  const [activeId, setActiveId] = useState<string | null>(null);
  const [addExercise, setAddExercise] = useState(libraryExercises[0].id);
  const [template, setTemplate] = useState("");
  const params = useSearchParams();
  const router = useRouter();
  const imported = useRef(false);

  const active = plans.find((p) => p.id === activeId) ?? plans[0] ?? null;

  function savePlans(next: ClassPlan[]) {
    plansStore.set(next);
  }

  function createPlan(plan: ClassPlan) {
    savePlans([plan, ...plansStore.get()]);
    setActiveId(plan.id);
  }

  useEffect(() => {
    const from = params.get("from");
    if (!from || imported.current) return;
    imported.current = true;
    const plan = planFromSession(from);
    if (plan) createPlan(plan);
    router.replace("/instructor/planner");
  }, [params]);

  function update(patch: Partial<ClassPlan>) {
    if (!active) return;
    const updated = { ...active, ...patch, updatedAt: new Date().toISOString() };
    savePlans(plansStore.get().map((p) => (p.id === active.id ? updated : p)));
  }

  function updateItem(key: string, patch: Partial<PlanItem>) {
    if (!active) return;
    update({ items: active.items.map((i) => (i.key === key ? { ...i, ...patch } : i)) });
  }

  function moveItem(index: number, delta: number) {
    if (!active) return;
    const items = [...active.items];
    const target = index + delta;
    if (target < 0 || target >= items.length) return;
    [items[index], items[target]] = [items[target], items[index]];
    update({ items });
  }

  function deletePlan() {
    if (!active || !window.confirm(`Delete "${active.title}"?`)) return;
    savePlans(plansStore.get().filter((p) => p.id !== active.id));
    setActiveId(null);
  }

  const total = active ? Math.round(active.items.reduce((n, i) => n + (Number(i.minutes) || 0), 0) * 10) / 10 : 0;

  return (
    <>
      <div className="planner-bar no-print">
        <label>
          Your plans
          <select
            value={active?.id ?? ""}
            onChange={(e) => setActiveId(e.target.value)}
            disabled={plans.length === 0}
          >
            {plans.length === 0 && <option value="">No saved plans yet</option>}
            {plans.map((p) => (
              <option key={p.id} value={p.id}>
                {p.title}
              </option>
            ))}
          </select>
        </label>
        <button type="button" className="btn" onClick={() => createPlan(blankPlan())}>
          + New blank plan
        </button>
        <label>
          Or start from a Core 360 session
          <select
            value={template}
            onChange={(e) => {
              const plan = planFromSession(e.target.value);
              if (plan) createPlan(plan);
              setTemplate("");
            }}
          >
            <option value="">Choose a session…</option>
            {sessions.map((s) => (
              <option key={s.id} value={s.id}>
                {s.title} ({s.minutes} min)
              </option>
            ))}
          </select>
        </label>
      </div>

      {!active ? (
        <div className="card">
          <h3>Build your first class</h3>
          <p>
            Start a blank plan or customize a Core 360 session. Plans save automatically on this
            device.
          </p>
        </div>
      ) : (
        <div className="plan">
          <div className="plan-fields">
            <label className="field wide">
              Class title
              <input value={active.title} onChange={(e) => update({ title: e.target.value })} />
            </label>
            <label className="field">
              Audience
              <input
                value={active.audience}
                placeholder="e.g. Active agers, small group"
                onChange={(e) => update({ audience: e.target.value })}
              />
            </label>
            <label className="field">
              Equipment
              <input
                value={active.equipment}
                placeholder="e.g. Mat, chair"
                onChange={(e) => update({ equipment: e.target.value })}
              />
            </label>
            <label className="field wide">
              Focus &amp; real life win
              <textarea
                rows={2}
                value={active.focus}
                placeholder="What will clients be able to do more easily?"
                onChange={(e) => update({ focus: e.target.value })}
              />
            </label>
          </div>

          <div className="section-head" style={{ marginTop: 24 }}>
            <h2>Sequence</h2>
            <span className={`tag ${total > 20 ? "clay" : "sage"}`}>
              Total: {total} min {total > 20 ? "· over 20 min" : ""}
            </span>
          </div>

          {active.items.length === 0 && <p className="muted">Add exercises below to build your sequence.</p>}

          <ol className="plan-items">
            {active.items.map((item, i) => {
              const lib = item.exerciseId ? getLibraryExercise(item.exerciseId) : undefined;
              return (
                <li key={item.key} className="plan-item">
                  <div className="plan-item-main">
                    <input
                      aria-label="Exercise name"
                      className="plan-name"
                      value={item.name}
                      onChange={(e) => updateItem(item.key, { name: e.target.value })}
                    />
                    <label className="minutes">
                      <input
                        type="number"
                        min={0}
                        step={0.5}
                        aria-label="Minutes"
                        value={item.minutes}
                        onChange={(e) => updateItem(item.key, { minutes: Number(e.target.value) })}
                      />
                      min
                    </label>
                  </div>
                  <textarea
                    aria-label="Notes and cues"
                    rows={2}
                    value={item.notes}
                    placeholder="Cues, springs, modifications…"
                    onChange={(e) => updateItem(item.key, { notes: e.target.value })}
                  />
                  <div className="plan-item-actions no-print">
                    {lib && (
                      <Link href={`/instructor/exercises/${lib.id}`} className="small-link">
                        Teaching notes
                      </Link>
                    )}
                    <button type="button" className="link-btn" onClick={() => moveItem(i, -1)} disabled={i === 0}>
                      ↑ Up
                    </button>
                    <button
                      type="button"
                      className="link-btn"
                      onClick={() => moveItem(i, 1)}
                      disabled={i === active.items.length - 1}
                    >
                      ↓ Down
                    </button>
                    <button
                      type="button"
                      className="link-btn danger"
                      onClick={() => update({ items: active.items.filter((x) => x.key !== item.key) })}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              );
            })}
          </ol>

          <div className="planner-bar no-print">
            <label>
              Add from library
              <select value={addExercise} onChange={(e) => setAddExercise(e.target.value)}>
                {libraryExercises.map((e) => (
                  <option key={e.id} value={e.id}>
                    {e.name}
                  </option>
                ))}
              </select>
            </label>
            <button
              type="button"
              className="btn secondary"
              onClick={() => {
                const lib = getLibraryExercise(addExercise)!;
                update({
                  items: [
                    ...active.items,
                    { key: newId(), exerciseId: lib.id, name: lib.name, minutes: 2, notes: lib.cues.movement[0] },
                  ],
                });
              }}
            >
              Add exercise
            </button>
            <button
              type="button"
              className="btn ghost"
              onClick={() =>
                update({
                  items: [...active.items, { key: newId(), exerciseId: null, name: "New exercise", minutes: 2, notes: "" }],
                })
              }
            >
              + Custom item
            </button>
          </div>

          <div className="btn-row no-print" style={{ marginTop: 24 }}>
            <button type="button" className="btn" onClick={() => window.print()}>
              🖨 Print plan
            </button>
            <button type="button" className="btn ghost danger" onClick={deletePlan}>
              Delete plan
            </button>
          </div>
        </div>
      )}
    </>
  );
}
