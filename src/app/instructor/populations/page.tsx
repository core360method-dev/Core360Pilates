import type { Metadata } from "next";
import Link from "next/link";
import { populationGuides } from "@/data/instructor/populations";

export const metadata: Metadata = { title: "Population Guides" };

export default function PopulationsPage() {
  return (
    <div className="container">
      <h1>Population guides</h1>
      <p className="muted narrow">
        Teaching considerations for the clients Core 360 serves. Each guide covers goals, what to
        favor, what to modify or avoid, red flags that need referral, and practical teaching tips.
      </p>
      <div className="grid">
        {populationGuides.map((p) => (
          <Link key={p.slug} href={`/instructor/populations/${p.slug}`} className="card">
            <h3>{p.title}</h3>
            <p>{p.summary}</p>
            <div className="card-footer">
              <span className="tag clay">{p.redFlags.length} red flags</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
