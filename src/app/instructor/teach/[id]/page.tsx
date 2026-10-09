import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { concernLabels, equipmentLabels, getCollection, goalLabels, intensityLabels } from "@/data/collections";
import { findLibraryExerciseByName } from "@/data/instructor/exercises";
import { screeningQuestions } from "@/data/instructor/training";
import { getSession, sessions } from "@/data/sessions";
import { PrintButton } from "@/components/PrintButton";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return sessions.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const s = getSession(id);
  return { title: s ? `Teach: ${s.title}` : "Teach" };
}

export default async function TeachSessionPage({ params }: Props) {
  const { id } = await params;
  const session = getSession(id);
  if (!session) notFound();
  const collection = getCollection(session.collection);

  let clock = 0;
  const imageryShown = new Set<string>();

  return (
    <div className="container">
      <p className="no-print">
        <Link href="/instructor/teach">← All sessions</Link>
      </p>
      <div className="eyebrow">Teaching plan · {collection?.title}</div>
      <h1>{session.title}</h1>
      <p className="muted narrow">{session.summary}</p>

      <div className="meta-row">
        <span className="tag sage">{session.minutes} min</span>
        <span className="tag">{intensityLabels[session.intensity]}</span>
        {session.equipment.map((e) => (
          <span key={e} className="tag clay">
            {equipmentLabels[e]}
          </span>
        ))}
        {session.goals.map((g) => (
          <span key={g} className="tag">
            {goalLabels[g]}
          </span>
        ))}
        {session.concerns?.map((c) => (
          <span key={c} className="tag clay">
            Designed for: {concernLabels[c]}
          </span>
        ))}
      </div>

      <div className="btn-row no-print">
        <PrintButton label="🖨 Print teaching plan" />
        <Link href={`/instructor/planner?from=${session.id}`} className="btn secondary">
          Customize in planner
        </Link>
        <Link href={`/sessions/${session.id}`} className="btn ghost">
          View client version
        </Link>
      </div>

      <div className="two-col" style={{ marginTop: 24 }}>
        <div className="notice" role="note">
          <h3>Screen before class</h3>
          <ul>
            {screeningQuestions.slice(0, 4).map((q) => (
              <li key={q}>{q}</li>
            ))}
          </ul>
        </div>
        <div className="notice" role="note">
          <h3>Session considerations</h3>
          {session.considerations.length > 0 ? (
            <ul>
              {session.considerations.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          ) : (
            <p style={{ margin: 0 }}>No special considerations beyond standard screening.</p>
          )}
        </div>
      </div>

      {session.realLifeWin && (
        <div className="win">
          <strong>Tell clients the real life win:</strong> {session.realLifeWin}
        </div>
      )}

      <table className="table plan-table">
        <thead>
          <tr>
            <th scope="col">Time</th>
            <th scope="col">Exercise</th>
            <th scope="col">Dose</th>
            <th scope="col">Key cue</th>
            <th scope="col">Option</th>
          </tr>
        </thead>
        {session.blocks.map((block) => {
          const start = clock;
          clock += block.minutes;
          return (
            <tbody key={block.title}>
              <tr className="plan-block">
                <th colSpan={5} scope="rowgroup">
                  {start}:00–{clock}:00 · {block.title}
                </th>
              </tr>
              {block.exercises.map((ex) => {
                const lib = findLibraryExerciseByName(ex.name);
                const showImagery = lib !== undefined && !imageryShown.has(lib.id);
                if (lib) imageryShown.add(lib.id);
                return (
                  <tr key={ex.name}>
                    <td className="muted">{Math.round((block.minutes / block.exercises.length) * 10) / 10}m</td>
                    <td>
                      <strong>{ex.name}</strong>
                      {lib && (
                        <div className="no-print">
                          <Link href={`/instructor/exercises/${lib.id}`} className="small-link">
                            Teaching notes →
                          </Link>
                        </div>
                      )}
                    </td>
                    <td>{ex.dose}</td>
                    <td>
                      {ex.cue}
                      {showImagery && <div className="muted small">Imagery: “{lib.cues.imagery}”</div>}
                    </td>
                    <td className="muted">{ex.modify ?? "—"}</td>
                  </tr>
                );
              })}
            </tbody>
          );
        })}
      </table>
    </div>
  );
}
