import type { Metadata } from "next";
import Link from "next/link";
import { HoursLog } from "./HoursLog";

export const metadata: Metadata = { title: "Training Hours" };

export default function HoursPage() {
  return (
    <div className="container">
      <p>
        <Link href="/instructor/training">← Trainee center</Link>
      </p>
      <h1>Training hours</h1>
      <p className="muted narrow">
        Track observation, self-practice, and practice-teaching hours toward certification.
        Targets shown are defaults — follow your training program&apos;s requirements. Entries are
        saved on this device; export a CSV to share with your mentor.
      </p>
      <HoursLog />
    </div>
  );
}
