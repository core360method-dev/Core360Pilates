import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, getArticle } from "@/data/articles";
import { getArticleCollection } from "@/data/collections";
import { getSession } from "@/data/sessions";
import { SessionCard } from "@/components/SessionCard";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  return { title: article?.title ?? "Article", description: article?.summary };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  const collection = getArticleCollection(article.collection);
  const related = article.relatedSessionIds.flatMap((id) => getSession(id) ?? []);

  return (
    <div className="container narrow">
      <p>
        <Link href={`/learn#${article.collection}`}>← {collection?.title ?? "Learn"}</Link>
      </p>
      <h1>{article.title}</h1>
      <p className="muted">{article.readMinutes} min read</p>
      <article className="article-body">
        {article.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </article>

      {related.length > 0 && (
        <section className="section" style={{ marginTop: 40 }}>
          <h2>Try it</h2>
          <div className="grid">
            {related.map((s) => (
              <SessionCard key={s.id} session={s} showCollection />
            ))}
          </div>
        </section>
      )}

      <p className="disclaimer">
        This article is general education and not a substitute for advice from your healthcare
        provider.
      </p>
    </div>
  );
}
