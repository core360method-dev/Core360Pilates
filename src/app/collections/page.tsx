import type { Metadata } from "next";
import Link from "next/link";
import { articleCollections, collections } from "@/data/collections";
import { getSessionsByCollection } from "@/data/sessions";
import { getArticlesByCollection } from "@/data/articles";

export const metadata: Metadata = { title: "Collections" };

export default function CollectionsPage() {
  return (
    <div className="container">
      <h1>Signature collections</h1>
      <p className="muted">
        Movement and education organized around real needs — how you feel, what you&apos;re
        recovering from, and what you want to do more easily.
      </p>

      <section className="section">
        <h2>Move</h2>
        <div className="grid">
          {collections.map((c) => (
            <Link key={c.slug} href={`/collections/${c.slug}`} className="card">
              <span className="icon" aria-hidden>
                {c.icon}
              </span>
              <h3>{c.title}</h3>
              <p>{c.description}</p>
              <div className="card-footer">
                <span className="tag sage">
                  {getSessionsByCollection(c.slug).length} sessions
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Learn</h2>
        <div className="grid">
          {articleCollections.map((c) => (
            <Link key={c.slug} href={`/learn#${c.slug}`} className="card">
              <h3>{c.title}</h3>
              <p>{c.description}</p>
              <div className="card-footer">
                <span className="tag sage">{getArticlesByCollection(c.slug).length} reads</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
