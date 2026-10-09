import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { collections, getCollection } from "@/data/collections";
import { getSessionsByCollection } from "@/data/sessions";
import { SessionCard } from "@/components/SessionCard";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: getCollection(slug)?.title ?? "Collection" };
}

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params;
  const collection = getCollection(slug);
  if (!collection) notFound();
  const items = getSessionsByCollection(slug);

  return (
    <div className="container">
      <p>
        <Link href="/collections">← All collections</Link>
      </p>
      <span className="icon" aria-hidden style={{ fontSize: "2.5rem" }}>
        {collection.icon}
      </span>
      <h1>{collection.title}</h1>
      <p className="muted narrow">{collection.description}</p>

      {slug === "how-do-you-feel-today" && (
        <div className="win">
          <strong>Not sure where to start?</strong> Take the quick check-in and we&apos;ll match a
          session to how you feel right now.{" "}
          <Link href="/check-in">Start the check-in →</Link>
        </div>
      )}

      <div className="grid" style={{ marginTop: 24 }}>
        {items.map((s) => (
          <SessionCard key={s.id} session={s} />
        ))}
      </div>
    </div>
  );
}
