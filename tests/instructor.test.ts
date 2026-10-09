import { test } from "node:test";
import assert from "node:assert/strict";
import { sessions } from "../src/data/sessions.ts";
import { findLibraryExerciseByName, libraryExercises } from "../src/data/instructor/exercises.ts";
import { populationGuides } from "../src/data/instructor/populations.ts";
import { quizQuestions } from "../src/data/instructor/training.ts";

const sessionExerciseNames = new Set(
  sessions.flatMap((s) => s.blocks.flatMap((b) => b.exercises.map((e) => e.name.toLowerCase()))),
);

test("library exercise ids are unique and every alias maps to one exercise", () => {
  const ids = libraryExercises.map((e) => e.id);
  assert.equal(new Set(ids).size, ids.length);
  const aliases = libraryExercises.flatMap((e) => e.aliases.map((a) => a.toLowerCase()));
  assert.equal(new Set(aliases).size, aliases.length, "an alias is listed under two exercises");
});

test("every alias is an exercise name actually used in a client session", () => {
  for (const e of libraryExercises) {
    for (const a of e.aliases) {
      assert.ok(sessionExerciseNames.has(a.toLowerCase()), `${e.id}: "${a}" not found in any session`);
    }
  }
});

test("session exercise names resolve to their teaching notes", () => {
  assert.equal(findLibraryExerciseByName("The Hundred")?.id, "the-hundred");
  assert.equal(findLibraryExerciseByName("sit-to-stand")?.id, "sit-to-stand");
  assert.equal(findLibraryExerciseByName("Not an exercise"), undefined);
});

test("precautions reference known populations", () => {
  const slugs = new Set<string>(populationGuides.map((p) => p.slug));
  for (const e of libraryExercises) {
    for (const p of e.precautions) {
      assert.ok(p.population === "general" || slugs.has(p.population), `${e.id}: ${p.population}`);
    }
  }
});

test("population guides link to existing sessions and exercises", () => {
  const sessionIds = new Set(sessions.map((s) => s.id));
  const exerciseIds = new Set(libraryExercises.map((e) => e.id));
  for (const g of populationGuides) {
    assert.ok(g.redFlags.length > 0, `${g.slug} has no red flags`);
    for (const id of g.relatedSessionIds) assert.ok(sessionIds.has(id), `${g.slug} → session ${id}`);
    for (const id of g.relatedExerciseIds) assert.ok(exerciseIds.has(id), `${g.slug} → exercise ${id}`);
  }
});

test("quiz questions have valid answers", () => {
  const ids = quizQuestions.map((q) => q.id);
  assert.equal(new Set(ids).size, ids.length);
  for (const q of quizQuestions) {
    assert.ok(q.answerIndex >= 0 && q.answerIndex < q.options.length, q.id);
  }
});
