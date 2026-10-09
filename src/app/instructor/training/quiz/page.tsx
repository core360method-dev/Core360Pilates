import type { Metadata } from "next";
import Link from "next/link";
import { Quiz } from "./Quiz";

export const metadata: Metadata = { title: "Self-Check Quiz" };

export default function QuizPage() {
  return (
    <div className="container narrow">
      <p>
        <Link href="/instructor/training">← Trainee center</Link>
      </p>
      <h1>Self-check quiz</h1>
      <p className="muted">
        Safety, cueing, populations, and the Core 360 philosophy. Answers and explanations appear
        after you submit.
      </p>
      <Quiz />
    </div>
  );
}
