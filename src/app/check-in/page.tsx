import type { Metadata } from "next";
import { CheckInForm } from "./CheckInForm";

export const metadata: Metadata = { title: "How Do You Feel Today?" };

export default function CheckInPage() {
  return (
    <div className="container narrow">
      <div className="eyebrow">Daily check-in</div>
      <h1>How do you feel today?</h1>
      <p className="muted">
        Answer a few quick questions and we&apos;ll suggest sessions that fit your energy, your
        body, and your goals — today.
      </p>
      <CheckInForm />
    </div>
  );
}
