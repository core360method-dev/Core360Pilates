import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getLibraryExercise } from "@/data/instructor/exercises";
import { getPopulationGuide, populationGuides } from "@/data/instructor/populations";
import { getSession } from "@/data/sessions";
import { PrintButton } from "@/components/PrintButton";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return populationGuides.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: getPopulationGuide(slug)?.title ?? "Population guide" };
}

function List({ items }: { items: string[] }) {
  return (
    <ul>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}

export default async function PopulationPage({ params }: Props) {
  const { slug } = await params;
  const guide = getPopulationGuide(slug);
  if (!guide) notFound();
  const relatedSessions = guide.relatedSessionIds.flatMap((id) => getSession(id) ?? []);
  const relatedExercises = guide.relatedExerciseIds.flatMap((id) => getLibraryExercise(id) ?? []);

  return (
    <div className="container narrow">
      <p className="no-print">
        <Link href="/instructor/populations">← Population guides</Link>
      </p>
      <h1>{guide.title}</h1>
      <p className="muted">{guide.summary}</p>
      <PrintButton />
      <p style={{ marginTop: 20 }}>{guide.overview}</p>

      <section className="block">
        <h2>Goals</h2>
        <List items={guide.goals} />
      </section>

      <section className="block two-col">
        <div>
          <h2>Favor</h2>
          <List items={guide.favor} />
        </div>
        <div>
          <h2>Modify or avoid</h2>
          <List items={guide.modifyOrAvoid} />
        </div>
      </section>

      <div className="notice red-flags" role="note">
        <h3>🚩 Red flags — stop and refer</h3>
        <List items={guide.redFlags} />
      </div>

      <section className="block">
        <h2>Teaching tips</h2>
        <List items={guide.teachingTips} />
      </section>

      <section className="block two-col no-print">
        <div>
          <h2>Library exercises</h2>
          <ul>
            {relatedExercises.map((e) => (
              <li key={e.id}>
                <Link href={`/instructor/exercises/${e.id}`}>{e.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Client sessions to teach</h2>
          <ul>
            {relatedSessions.map((s) => (
              <li key={s.id}>
                <Link href={`/instructor/teach/${s.id}`}>{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <p className="disclaimer">
        General guidance for movement professionals. Follow the restrictions set by each
        client&apos;s healthcare providers and refer whenever you&apos;re unsure.
      </p>
    </div>
  );
}
