"use client";

import { createLocalStore } from "./localStore";
import type { HourCategory } from "../data/instructor/training";

export interface PlanItem {
  key: string;
  /** Library exercise id, or null for a custom item. */
  exerciseId: string | null;
  name: string;
  minutes: number;
  notes: string;
}

export interface ClassPlan {
  id: string;
  title: string;
  audience: string;
  equipment: string;
  focus: string;
  items: PlanItem[];
  updatedAt: string;
}

export interface HourEntry {
  id: string;
  date: string;
  category: HourCategory;
  hours: number;
  note: string;
}

export const plansStore = createLocalStore<ClassPlan[]>("core360.instructor.plans.v1", [], (raw) =>
  Array.isArray(raw) ? (raw as ClassPlan[]) : [],
);

export const hoursStore = createLocalStore<HourEntry[]>("core360.instructor.hours.v1", [], (raw) =>
  Array.isArray(raw) ? (raw as HourEntry[]) : [],
);

export function newId(): string {
  return Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
}
