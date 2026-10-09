import type { Metadata } from "next";
import { Suspense } from "react";
import { ClassPlanner } from "./ClassPlanner";

export const metadata: Metadata = { title: "Class Planner" };

export default function PlannerPage() {
  return (
    <div className="container narrow">
      <h1 className="no-print">Class planner</h1>
      <p className="muted no-print">
        Build and time a 15–20 minute class, add your own cues and notes, and print it to teach
        from. Plans are saved on this device.
      </p>
      <Suspense fallback={<p className="muted">Loading planner…</p>}>
        <ClassPlanner />
      </Suspense>
    </div>
  );
}
