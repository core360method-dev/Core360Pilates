import type { Metadata } from "next";
import Link from "next/link";
import { collections, equipmentLabels } from "@/data/collections";
import { getSessionsByCollection } from "@/data/sessions";

export const metadata: Metadata = { title: "Teach a Session" };

export default function TeachIndexPage() {
  return (
    <div className="container">
      <h1>Teach a session</h1>
      <p className="muted narrow">
        Every client session as a teaching plan: timing, set up, linked cueing notes, and the
        considerations to screen for before class. Print one or load it into the class planner.
      </p>
      {collections.map((c) => (
        <section key={c.slug} className="section">
          <h2>
            <span aria-hidden>{c.icon}</span> {c.title}
          </h2>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Session</th>
                <th scope="col">Length</th>
                <th scope="col">Equipment</th>
              </tr>
            </thead>
            <tbody>
              {getSessionsByCollection(c.slug).map((s) => (
                <tr key={s.id}>
                  <td>
                    <Link href={`/instructor/teach/${s.id}`}>{s.title}</Link>
                  </td>
                  <td>{s.minutes} min</td>
                  <td>{s.equipment.map((e) => equipmentLabels[e]).join(", ")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      ))}
    </div>
  );
}
