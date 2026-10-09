# Core 360 Method™ — Movement for Real Life

A personalized Pilates & wellness web app. Users choose accessible 15–20 minute sessions based on how they feel, what their bodies need, and what they want to accomplish.

## Features

- **How Do You Feel Today? check-in** (`/check-in`): pick energy, stiffness, goals, recovery focus, equipment, and time, and get ranked session matches with the reasons each was picked.
- **Signature collections**: How Do You Feel Today?, Movement Through Recovery, Strong for Life, and Real Life Wins.
- **Session library** (`/sessions`): filter by collection, equipment (mat, reformer, chair, none), focus, intensity, and length.
- **Session detail and guided player**: block-by-block exercises with cues, modifications, safety considerations, and the "real life win". The player has a timer, auto-advances, and asks "how do you feel now?" at the end.
- **Learn** (`/learn`): *What Can Pilates Help Me With That I Didn't Know I Needed?* and *Questions People Are Afraid to Ask*, with related sessions.
- **My Practice** (`/my-practice`): saved sessions, history, streak, total minutes, and the share of sessions you felt better after. Stored in the browser (no account needed).

## Instructor & Trainee Hub (`/instructor`)

A section for Core 360 instructors and teacher trainees, built on the same session content:

- **Exercise Library**: teaching notes for each foundational exercise, covering set up, breath/movement/imagery cues, common faults and corrections, regressions and progressions, precautions for each population, and the real-life link. You can search and filter by category or population.
- **Population Guides**: breast cancer recovery, osteoporosis, low back pain, shoulder limitations, and active aging. Each guide covers goals, what to favor and what to modify or avoid, red flags that need referral, and teaching tips.
- **Teach a Session**: every client session as a printable, timed teaching plan with pre-class screening and links to teaching notes.
- **Class Planner**: build plans from the library or from a Core 360 session, then reorder, time, annotate, save and print them (saved on this device).
- **Trainee Center**: teaching principles, the cueing framework (Set up → Breathe → Move → Refine), cue types, client screening, scope of practice, a training-hours log with CSV export, and a self-check quiz.

Instructor content lives in `src/data/instructor/`. Library exercises link to client sessions through their `aliases`, and the tests check that every alias matches an exercise name used in a session.

## Development

```bash
npm install
npm run dev        # http://localhost:3000
npm test           # data integrity + recommendation tests
npm run typecheck
npm run build
```

Requires Node 22+.

## Editing content

All content lives in `src/data/`:

- `sessions.ts`: workouts. Block minutes must add up to the session total (enforced by tests).
- `articles.ts`: educational reads.
- `collections.ts`: collection copy and labels.

The recommendation logic is in `src/lib/recommend.ts`.

## Deploying

The app builds to fully static pages and deploys as-is to Vercel (import the repo, no configuration needed).

---

*Core 360 Method™ provides general movement education and is not a substitute for medical advice.*
