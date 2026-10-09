import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getCollection, goalLabels } from "@/data/collections";
import { getSession, sessions } from "@/data/sessions";
import { SessionMeta } from "@/components/SessionCard";
import { FavoriteButton } from "@/components/FavoriteButton";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return sessions.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const session = getSession(id);
  return { title: session?.title ?? "Session", description: session?.summary };
}

export default async function SessionPage({ params }: Props) {
  const { id } = await params;
  const session = getSession(id);
  if (!session) notFound();
  const collection = getCollection(session.collection);

  return (
    <div className="container narrow">
      {collection && (
        <p>
          <Link href={`/collections/${collection.slug}`}>← {collection.title}</Link>
        </p>
      )}
      <h1>{session.title}</h1>
      <p className="muted">{session.summary}</p>

      <div className="meta-row">
        <SessionMeta session={session} />
        {session.goals.map((g) => (
          <span key={g} className="tag">
            {goalLabels[g]}
          </span>
        ))}
      </div>

      <div className="btn-row">
        <Link href={`/sessions/${session.id}/play`} className="btn">
          ▶ Start session
        </Link>
        <FavoriteButton sessionId={session.id} />
      </div>

      {session.realLifeWin && (
        <div className="win">
          <strong>Real life win:</strong> {session.realLifeWin}
        </div>
      )}

      {session.considerations.length > 0 && (
        <div className="notice" role="note">
          <h3>Before you begin</h3>
          <ul>
            {session.considerations.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </div>
      )}

      {session.blocks.map((block) => (
        <section key={block.title} className="block">
          <div className="block-head">
            <h3>{block.title}</h3>
            <span className="muted">{block.minutes} min</span>
          </div>
          {block.exercises.map((ex) => (
            <div key={ex.name} className="exercise">
              <div className="name">
                {ex.name} <span className="dose">· {ex.dose}</span>
              </div>
              <div>{ex.cue}</div>
              {ex.modify && <div className="modify">Modify: {ex.modify}</div>}
            </div>
          ))}
        </section>
      ))}

      <p className="disclaimer">
        Listen to your body. Effort is expected; sharp pain, numbness, or dizziness is a signal to
        stop. This session is general movement guidance and not medical advice.
      </p>
    </div>
  );
}
