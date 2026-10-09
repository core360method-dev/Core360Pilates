import type { Metadata } from "next";
import Link from "next/link";
import { articleCollections } from "@/data/collections";
import { getArticlesByCollection } from "@/data/articles";

export const metadata: Metadata = { title: "Learn" };

export default function LearnPage() {
  return (
    <div className="container">
      <h1>Learn</h1>
      <p className="muted narrow">
        Understanding why you move makes it easier to keep moving. Short, honest reads to support
        your practice.
      </p>

      {articleCollections.map((c) => (
        <section key={c.slug} id={c.slug} className="section" style={{ scrollMarginTop: 96 }}>
          <div className="eyebrow">{c.tagline}</div>
          <h2>{c.title}</h2>
          <p className="muted">{c.description}</p>
          <div className="grid">
            {getArticlesByCollection(c.slug).map((a) => (
              <Link key={a.slug} href={`/learn/${a.slug}`} className="card">
                <h3>{a.title}</h3>
                <p>{a.summary}</p>
                <div className="card-footer">
                  <span className="tag">{a.readMinutes} min read</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
