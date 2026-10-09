"use client";

import { useState } from "react";
import {
  defaultHourTargets,
  hourCategoryLabels,
  type HourCategory,
} from "@/data/instructor/training";
import { hoursStore, newId } from "@/lib/instructorStore";

const categories = Object.keys(defaultHourTargets) as HourCategory[];

function today() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
}

export function HoursLog() {
  const entries = hoursStore.use();
  const [date, setDate] = useState(today);
  const [category, setCategory] = useState<HourCategory>("observation");
  const [hours, setHours] = useState(1);
  const [note, setNote] = useState("");

  const totals = Object.fromEntries(
    categories.map((c) => [c, entries.filter((e) => e.category === c).reduce((n, e) => n + e.hours, 0)]),
  ) as Record<HourCategory, number>;

  function add(e: React.FormEvent) {
    e.preventDefault();
    if (!(hours > 0)) return;
    const entry = { id: newId(), date, category, hours, note: note.trim() };
    hoursStore.set([entry, ...hoursStore.get()].sort((a, b) => b.date.localeCompare(a.date)));
    setNote("");
  }

  function exportCsv() {
    const rows = [
      ["Date", "Category", "Hours", "Note"],
      ...entries.map((e) => [e.date, hourCategoryLabels[e.category], String(e.hours), e.note]),
    ];
    const csv = rows.map((r) => r.map((v) => `"${v.replace(/"/g, '""')}"`).join(",")).join("\n");
    const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
    const a = document.createElement("a");
    a.href = url;
    a.download = "core360-training-hours.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <>
      <div className="stats">
        {categories.map((c) => {
          const pct = Math.min(100, Math.round((totals[c] / defaultHourTargets[c]) * 100));
          return (
            <div key={c} className="stat">
              <div className="value">
                {totals[c]}
                <span className="muted small"> / {defaultHourTargets[c]} h</span>
              </div>
              <div className="label">{hourCategoryLabels[c]}</div>
              <div
                className="progress"
                role="progressbar"
                aria-label={`${hourCategoryLabels[c]} progress`}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={pct}
                style={{ margin: "10px 0 0" }}
              >
                <div style={{ width: `${pct}%` }} />
              </div>
            </div>
          );
        })}
      </div>

      <form className="card hours-form" onSubmit={add}>
        <h3>Log hours</h3>
        <div className="plan-fields">
          <label className="field">
            Date
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          </label>
          <label className="field">
            Type
            <select value={category} onChange={(e) => setCategory(e.target.value as HourCategory)}>
              {categories.map((c) => (
                <option key={c} value={c}>
                  {hourCategoryLabels[c]}
                </option>
              ))}
            </select>
          </label>
          <label className="field">
            Hours
            <input
              type="number"
              min={0.25}
              step={0.25}
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              required
            />
          </label>
          <label className="field wide">
            Notes
            <input
              value={note}
              placeholder="e.g. Observed Strong for Life class with mentor"
              onChange={(e) => setNote(e.target.value)}
            />
          </label>
        </div>
        <div>
          <button type="submit" className="btn">
            Add entry
          </button>
        </div>
      </form>

      <section className="section" style={{ marginTop: 32 }}>
        <div className="section-head">
          <h2>Entries</h2>
          {entries.length > 0 && (
            <button type="button" className="btn ghost" onClick={exportCsv}>
              Export CSV
            </button>
          )}
        </div>
        {entries.length === 0 ? (
          <p className="muted">No hours logged yet.</p>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Type</th>
                <th scope="col">Hours</th>
                <th scope="col">Notes</th>
                <th scope="col">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {entries.map((e) => (
                <tr key={e.id}>
                  <td>{e.date}</td>
                  <td>{hourCategoryLabels[e.category]}</td>
                  <td>{e.hours}</td>
                  <td>{e.note}</td>
                  <td>
                    <button
                      type="button"
                      className="link-btn danger"
                      onClick={() => hoursStore.set(hoursStore.get().filter((x) => x.id !== e.id))}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </>
  );
}
