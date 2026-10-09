"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/check-in", label: "How Do You Feel?" },
  { href: "/collections", label: "Collections" },
  { href: "/sessions", label: "All Sessions" },
  { href: "/learn", label: "Learn" },
  { href: "/my-practice", label: "My Practice" },
  { href: "/instructor", label: "For Instructors", className: "nav-instructor" },
];

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="site-header">
      <div className="container">
        <Link href="/" className="brand">
          Core 360 Method™
          <small>Movement for Real Life</small>
        </Link>
        <nav className="nav" aria-label="Main">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={link.className}
              aria-current={pathname.startsWith(link.href) ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
