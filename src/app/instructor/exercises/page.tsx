import type { Metadata } from "next";
import { ExerciseLibrary } from "./ExerciseLibrary";

export const metadata: Metadata = { title: "Exercise Library" };

export default function ExercisesPage() {
  return (
    <div className="container">
      <h1>Exercise library</h1>
      <p className="muted narrow">
        Foundational Core 360 exercises with full teaching notes. Use the population filter to
        find exercises that need special handling for a client.
      </p>
      <ExerciseLibrary />
    </div>
  );
}
