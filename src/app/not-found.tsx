import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container narrow">
      <h1>Page not found</h1>
      <p className="muted">That page doesn&apos;t exist — but there&apos;s plenty of movement here.</p>
      <Link href="/check-in" className="btn">
        How do you feel today?
      </Link>
    </div>
  );
}
