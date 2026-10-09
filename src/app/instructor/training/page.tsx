import type { Metadata } from "next";
import Link from "next/link";
import {
  cueingFramework,
  cueTypes,
  scopeOfPractice,
  screeningQuestions,
  teachingPrinciples,
} from "@/data/instructor/training";

export const metadata: Metadata = { title: "Trainee Center" };

export default function TrainingPage() {
  return (
    <div className="container">
      <div className="eyebrow">Teacher training</div>
      <h1>Trainee center</h1>
      <p className="muted narrow">
        The foundations of teaching the Core 360 Method™. Study the principles, practice the
        cueing framework, track your hours, and check your knowledge.
      </p>
      <div className="btn-row" style={{ marginBottom: 40 }}>
        <Link href="/instructor/training/hours" className="btn">
          Log my hours
        </Link>
        <Link href="/instructor/training/quiz" className="btn secondary">
          Take the self-check quiz
        </Link>
      </div>

      <section className="section">
        <h2>Core 360 teaching principles</h2>
        <div className="grid">
          {teachingPrinciples.map((p, i) => (
            <div key={p.title} className="card">
              <div className="eyebrow">Principle {i + 1}</div>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>The cueing framework</h2>
        <p className="muted">Layer cues in this order. Give one new cue at a time.</p>
        <div className="grid">
          {cueingFramework.map((c) => (
            <div key={c.step} className="card">
              <h3>{c.step}</h3>
              <p>{c.detail}</p>
              <p>
                <em>&ldquo;{c.example}&rdquo;</em>
              </p>
            </div>
          ))}
        </div>
        <h3 style={{ marginTop: 32 }}>Types of cues</h3>
        <table className="table">
          <tbody>
            {cueTypes.map((c) => (
              <tr key={c.type}>
                <th scope="row">{c.type}</th>
                <td>{c.detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="section two-col">
        <div>
          <h2>Client screening</h2>
          <p className="muted">Ask at intake and briefly before every session.</p>
          <ol>
            {screeningQuestions.map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ol>
        </div>
        <div>
          <h2>Scope of practice</h2>
          <h3>Within our scope</h3>
          <ul>
            {scopeOfPractice.within.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <h3>Refer out</h3>
          <ul>
            {scopeOfPractice.outside.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <p>
            See each <Link href="/instructor/populations">population guide</Link> for specific red
            flags.
          </p>
        </div>
      </section>
    </div>
  );
}
