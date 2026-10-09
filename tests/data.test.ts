import { test } from "node:test";
import assert from "node:assert/strict";
import { sessions } from "../src/data/sessions.ts";
import { articles } from "../src/data/articles.ts";
import { collections, articleCollections } from "../src/data/collections.ts";

test("session ids are unique", () => {
  const ids = sessions.map((s) => s.id);
  assert.equal(new Set(ids).size, ids.length);
});

test("sessions are 15–20 minutes and blocks add up to the total", () => {
  for (const s of sessions) {
    assert.ok(s.minutes >= 15 && s.minutes <= 20, `${s.id} is ${s.minutes} min`);
    const sum = s.blocks.reduce((n, b) => n + b.minutes, 0);
    assert.equal(sum, s.minutes, `${s.id} blocks total ${sum}`);
    for (const b of s.blocks) assert.ok(b.exercises.length > 0, `${s.id}/${b.title} is empty`);
  }
});

test("every session belongs to a known collection and every collection has sessions", () => {
  const slugs = new Set(collections.map((c) => c.slug));
  for (const s of sessions) assert.ok(slugs.has(s.collection), s.id);
  for (const c of collections) {
    assert.ok(sessions.some((s) => s.collection === c.slug), `${c.slug} has no sessions`);
  }
});

test("all equipment types are represented", () => {
  for (const e of ["mat", "reformer", "chair", "none"] as const) {
    assert.ok(sessions.some((s) => s.equipment.includes(e)), `no ${e} session`);
  }
});

test("articles have unique slugs, known collections, and valid related sessions", () => {
  const slugs = articles.map((a) => a.slug);
  assert.equal(new Set(slugs).size, slugs.length);
  const collectionSlugs = new Set(articleCollections.map((c) => c.slug));
  const sessionIds = new Set(sessions.map((s) => s.id));
  for (const a of articles) {
    assert.ok(collectionSlugs.has(a.collection), a.slug);
    for (const id of a.relatedSessionIds) assert.ok(sessionIds.has(id), `${a.slug} → ${id}`);
  }
});
