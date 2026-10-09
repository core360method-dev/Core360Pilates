import type { Metadata, Viewport } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Core 360 Method™ — Movement for Real Life",
    template: "%s · Core 360 Method™",
  },
  description:
    "Personalized 15–20 minute Pilates and movement sessions chosen by how you feel — for recovery, strength, mobility, and every stage of life.",
};

export const viewport: Viewport = {
  themeColor: "#3f5b48",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        <main>{children}</main>
        <footer className="site-footer">
          <div className="container">
            <p className="tagline">Core 360 Method™ — Movement for Real Life.</p>
            <p>
              Movement isn&apos;t about achieving perfection. It&apos;s about building strength,
              confidence, connection, and the freedom to participate more fully in life.
            </p>
            <p>
              Core 360 Method™ provides general movement education and is not a substitute for
              medical advice. Consult your healthcare provider before starting a new exercise
              program, especially if you are recovering from surgery or managing a health
              condition.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
