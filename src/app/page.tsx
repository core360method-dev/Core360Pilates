import Link from "next/link";
import { articleCollections, collections } from "@/data/collections";
import { getSession } from "@/data/sessions";
import { SessionCard } from "@/components/SessionCard";

const featuredIds = ["gentle-wake-up", "chair-pilates-full-body", "floor-to-standing"];

export default function HomePage() {
  const featured = featuredIds.map((id) => getSession(id)!);
  return (
    <div className="container">
      <section className="hero">
        <div className="eyebrow">A personalized Pilates &amp; wellness app</div>
        <h1>Movement for Real Life</h1>
        <p className="lead">
          Accessible, effective 15–20 minute sessions chosen by how you feel, what your body needs,
          and what you want to accomplish — for recovery, strength, mobility, and every stage of
          life.
        </p>
        <div className="btn-row">
          <Link href="/check-in" className="btn">
            How do you feel today?
          </Link>
          <Link href="/collections" className="btn secondary">
            Browse collections
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Signature collections</h2>
          <Link href="/collections">See all</Link>
        </div>
        <div className="grid">
          {collections.map((c) => (
            <Link key={c.slug} href={`/collections/${c.slug}`} className="card">
              <span className="icon" aria-hidden>
                {c.icon}
              </span>
              <h3>{c.title}</h3>
              <p>{c.tagline}</p>
            </Link>
          ))}
          {articleCollections.map((c) => (
            <Link key={c.slug} href={`/learn#${c.slug}`} className="card">
              <span className="icon" aria-hidden>
                {c.slug === "pilates-helps" ? "💡" : "💬"}
              </span>
              <h3>{c.title}</h3>
              <p>{c.tagline}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-head">
          <h2>Start here</h2>
          <Link href="/sessions">All sessions</Link>
        </div>
        <div className="grid">
          {featured.map((s) => (
            <SessionCard key={s.id} session={s} showCollection />
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Mat, reformer, chair, or nothing at all</h2>
        <p className="muted">
          Every session tells you exactly what you need. Choose mat, reformer, chair, or
          equipment-free options and filter by what you have today. Expert instruction, meaningful
          movement choices, and real-life applications — wherever you are.
        </p>
      </section>

      <section className="philosophy">
        <div className="eyebrow" style={{ color: "#f6e4da" }}>
          Our philosophy
        </div>
        <blockquote>
          Movement isn&apos;t about achieving perfection. It&apos;s about building strength,
          confidence, connection, and the freedom to participate more fully in life.
        </blockquote>
        <p>Core 360 Method™ — Movement for Real Life.</p>
      </section>
    </div>
  );
}
