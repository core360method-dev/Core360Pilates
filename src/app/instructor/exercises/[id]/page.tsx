import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { equipmentLabels } from "@/data/collections";
import { categoryLabels, getLibraryExercise, libraryExercises } from "@/data/instructor/exercises";
import { populationTitles } from "@/data/instructor/populations";
import { sessions } from "@/data/sessions";
import { PrintButton } from "@/components/PrintButton";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return libraryExercises.map((e) => ({ id: e.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return { title: getLibraryExercise(id)?.name ?? "Exercise" };
}

export default async function ExercisePage({ params }: Props) {
  const { id } = await params;
  const ex = getLibraryExercise(id);
  if (!ex) notFound();

  const aliases = new Set(ex.aliases.map((a) => a.toLowerCase()));
  const usedIn = sessions.filter((s) =>
    s.blocks.some((b) => b.exercises.some((e) => aliases.has(e.name.toLowerCase()))),
  );

  return (
    <div className="container narrow">
      <p className="no-print">
        <Link href="/instructor/exercises">← Exercise library</Link>
      </p>
      <div className="eyebrow">{categoryLabels[ex.category]}</div>
      <h1>{ex.name}</h1>
      <p className="muted">{ex.purpose}</p>
      <div className="meta-row">
        {ex.equipment.map((eq) => (
          <span key={eq} className="tag clay">
            {equipmentLabels[eq]}
          </span>
        ))}
        {ex.primaryMuscles.map((m) => (
          <span key={m} className="tag">
            {m}
          </span>
        ))}
      </div>
      <PrintButton />

      <section className="block">
        <h2>Set up</h2>
        <p>{ex.setup}</p>
      </section>

      <section className="block">
        <h2>Cueing</h2>
        <dl className="cue-list">
          <dt>Breath</dt>
          <dd>{ex.cues.breath}</dd>
          <dt>Movement</dt>
          <dd>
            <ol>
              {ex.cues.movement.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ol>
          </dd>
          <dt>Imagery</dt>
          <dd>&ldquo;{ex.cues.imagery}&rdquo;</dd>
        </dl>
      </section>

      <section className="block">
        <h2>Common faults &amp; corrections</h2>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">You see</th>
              <th scope="col">Try</th>
            </tr>
          </thead>
          <tbody>
            {ex.commonFaults.map((f) => (
              <tr key={f.fault}>
                <td>{f.fault}</td>
                <td>{f.correction}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="block two-col">
        <div>
          <h2>Regressions</h2>
          <ul>
            {ex.regressions.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Progressions</h2>
          <ul>
            {ex.progressions.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </section>

      {ex.precautions.length > 0 && (
        <div className="notice" role="note">
          <h3>Precautions</h3>
          <ul>
            {ex.precautions.map((p) => (
              <li key={p.note}>
                <strong>
                  {p.population === "general" ? (
                    "General"
                  ) : (
                    <Link href={`/instructor/populations/${p.population}`}>
                      {populationTitles[p.population]}
                    </Link>
                  )}
                  :
                </strong>{" "}
                {p.note}
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className="win">
        <strong>Real life link:</strong> {ex.realLifeLink}
      </div>

      {usedIn.length > 0 && (
        <section className="block no-print">
          <h2>Used in client sessions</h2>
          <ul>
            {usedIn.map((s) => (
              <li key={s.id}>
                <Link href={`/instructor/teach/${s.id}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
