import Link from "next/link";
import { equipmentLabels, getCollection, intensityLabels } from "@/data/collections";
import type { Session } from "@/data/types";

export function SessionMeta({ session }: { session: Session }) {
  return (
    <>
      <span className="tag sage">{session.minutes} min</span>
      <span className="tag">{intensityLabels[session.intensity]}</span>
      {session.equipment.map((e) => (
        <span key={e} className="tag clay">
          {equipmentLabels[e]}
        </span>
      ))}
    </>
  );
}

export function SessionCard({
  session,
  showCollection = false,
  children,
}: {
  session: Session;
  showCollection?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <Link href={`/sessions/${session.id}`} className="card">
      {showCollection && (
        <div className="eyebrow">{getCollection(session.collection)?.title}</div>
      )}
      <h3>{session.title}</h3>
      <p>{session.summary}</p>
      {children}
      <div className="card-footer">
        <SessionMeta session={session} />
      </div>
    </Link>
  );
}
