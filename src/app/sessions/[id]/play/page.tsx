import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getSession, sessions } from "@/data/sessions";
import { SessionPlayer } from "./SessionPlayer";

type Props = { params: Promise<{ id: string }> };

export function generateStaticParams() {
  return sessions.map((s) => ({ id: s.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  return { title: getSession(id)?.title ?? "Session" };
}

export default async function PlayPage({ params }: Props) {
  const { id } = await params;
  const session = getSession(id);
  if (!session) notFound();

  return (
    <div className="container narrow">
      <p>
        <Link href={`/sessions/${session.id}`}>← {session.title} overview</Link>
      </p>
      <SessionPlayer session={session} />
    </div>
  );
}
