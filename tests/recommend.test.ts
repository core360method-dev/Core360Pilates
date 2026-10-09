import { test } from "node:test";
import assert from "node:assert/strict";
import { sessions } from "../src/data/sessions.ts";
import { hasEquipmentFor, recommend, type CheckIn } from "../src/lib/recommend.ts";

const base: CheckIn = {
  energy: "medium",
  stiffness: "a-little",
  goals: [],
  equipment: ["mat", "chair", "reformer"],
  maxMinutes: null,
  concern: null,
};

test("only recommends sessions the user has equipment for", () => {
  const results = recommend(sessions, { ...base, equipment: [] }, 50);
  assert.ok(results.length > 0);
  for (const r of results) assert.deepEqual(r.session.equipment, ["none"]);
});

test("respects the time limit", () => {
  const results = recommend(sessions, { ...base, maxMinutes: 15 }, 50);
  assert.ok(results.length > 0);
  for (const r of results) assert.ok(r.session.minutes <= 15);
});

test("low energy never gets an energizing session first", () => {
  const [top] = recommend(sessions, { ...base, energy: "low", stiffness: "very" });
  assert.ok(top.session.intensity < 3);
});

test("high energy with strength goal favors an energizing session", () => {
  const [top] = recommend(sessions, {
    ...base,
    energy: "high",
    stiffness: "loose",
    goals: ["strength", "core"],
    equipment: ["mat"],
  });
  assert.equal(top.session.id, "ready-to-work");
});

test("a recovery concern surfaces the matching recovery session", () => {
  const [top] = recommend(sessions, { ...base, energy: "low", concern: "breast-surgery" });
  assert.equal(top.session.id, "breast-surgery-early-mobility");
  const [back] = recommend(sessions, { ...base, concern: "back" });
  assert.equal(back.session.id, "back-care-foundations");
});

test("a recovery concern keeps energizing sessions out of the top picks", () => {
  const results = recommend(sessions, { ...base, energy: "high", concern: "shoulder" });
  for (const r of results) assert.ok(r.session.intensity < 3);
});

test("hasEquipmentFor treats 'none' as always available", () => {
  const noKit = sessions.find((s) => s.equipment.includes("none"))!;
  assert.ok(hasEquipmentFor(noKit, []));
  const reformer = sessions.find((s) => s.equipment.includes("reformer"))!;
  assert.ok(!hasEquipmentFor(reformer, ["mat"]));
});
