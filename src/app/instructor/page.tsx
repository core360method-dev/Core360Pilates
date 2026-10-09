import Link from "next/link";
import { libraryExercises } from "@/data/instructor/exercises";
import { populationGuides } from "@/data/instructor/populations";
import { quizQuestions, teachingPrinciples } from "@/data/instructor/training";
import { sessions } from "@/data/sessions";

const tools = [
  {
    href: "/instructor/exercises",
    icon: "📖",
    title: "Exercise Library",
    body: "Teaching notes for each exercise: set up, cue layers, common faults and corrections, regressions, progressions, and precautions.",
    count: `${libraryExercises.length} exercises`,
  },
  {
    href: "/instructor/populations",
    icon: "🩺",
    title: "Population Guides",
    body: "Teaching considerations, what to favor and avoid, and red flags for the clients Core 360 serves.",
    count: `${populationGuides.length} guides`,
  },
  {
    href: "/instructor/teach",
    icon: "🎓",
    title: "Teach a Session",
    body: "Every client session as a printable teaching plan with timing and linked cueing notes.",
    count: `${sessions.length} sessions`,
  },
  {
    href: "/instructor/planner",
    icon: "🗂️",
    title: "Class Planner",
    body: "Build, time, save, and print your own class plans from the library or a Core 360 session.",
    count: "Saved on this device",
  },
  {
    href: "/instructor/training",
    icon: "🌿",
    title: "Trainee Center",
    body: "Core 360 teaching principles, cueing framework, scope of practice, client screening, and an hours log.",
    count: `${teachingPrinciples.length} principles`,
  },
  {
    href: "/instructor/training/quiz",
    icon: "✅",
    title: "Self-Check Quiz",
    body: "Test your knowledge of safety, cueing, populations, and the Core 360 philosophy.",
    count: `${quizQuestions.length} questions`,
  },
];

export default function InstructorHubPage() {
  return (
    <div className="container">
      <section className="hero instructor-hero">
        <div className="eyebrow">For instructors &amp; teacher trainees</div>
        <h1>Teach Movement for Real Life</h1>
        <p className="lead">
          The tools, teaching notes, and training resources behind the Core 360 Method™ — so you can
          meet every client where they are and teach with confidence.
        </p>
        <div className="btn-row">
          <Link href="/instructor/exercises" className="btn">
            Open the exercise library
          </Link>
          <Link href="/instructor/training" className="btn secondary">
            Start trainee center
          </Link>
        </div>
      </section>

      <div className="grid">
        {tools.map((t) => (
          <Link key={t.href} href={t.href} className="card">
            <span className="icon" aria-hidden>
              {t.icon}
            </span>
            <h3>{t.title}</h3>
            <p>{t.body}</p>
            <div className="card-footer">
              <span className="tag sage">{t.count}</span>
            </div>
          </Link>
        ))}
      </div>

      <p className="disclaimer">
        These materials support instructor education and do not replace a certified training
        program, medical guidance, or professional judgment. Always work within your scope of
        practice and any restrictions set by a client&apos;s healthcare providers.
      </p>
    </div>
  );
}
