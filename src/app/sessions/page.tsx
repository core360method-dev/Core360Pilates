import type { Metadata } from "next";
import { SessionLibrary } from "./SessionLibrary";

export const metadata: Metadata = { title: "All Sessions" };

export default function SessionsPage() {
  return (
    <div className="container">
      <h1>All sessions</h1>
      <p className="muted">
        Every session is 15–20 minutes. Filter by the equipment you have, what you want to work
        on, and how much energy you&apos;re bringing today.
      </p>
      <SessionLibrary />
    </div>
  );
}
