"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/instructor", label: "Hub", exact: true },
  { href: "/instructor/exercises", label: "Exercise Library" },
  { href: "/instructor/populations", label: "Populations" },
  { href: "/instructor/teach", label: "Teach a Session" },
  { href: "/instructor/planner", label: "Class Planner" },
  { href: "/instructor/training", label: "Trainee Center" },
];

export function InstructorNav() {
  const pathname = usePathname();
  return (
    <nav className="subnav no-print" aria-label="Instructor">
      <div className="container">
        <span className="subnav-label">Instructor &amp; Trainee</span>
        {links.map((l) => {
          const active = l.exact ? pathname === l.href : pathname.startsWith(l.href);
          return (
            <Link key={l.href} href={l.href} aria-current={active ? "page" : undefined}>
              {l.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
