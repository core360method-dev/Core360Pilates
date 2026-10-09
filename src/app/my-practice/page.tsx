import type { Metadata } from "next";
import { MyPractice } from "./MyPractice";

export const metadata: Metadata = { title: "My Practice" };

export default function MyPracticePage() {
  return (
    <div className="container">
      <h1>My practice</h1>
      <p className="muted">
        Your saved sessions and progress. Saved on this device — no account needed.
      </p>
      <MyPractice />
    </div>
  );
}
