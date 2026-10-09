# Core 360 Method™ — Movement for Real Life

A personalized Pilates & wellness web app. Users choose accessible 15–20 minute sessions based on how they feel, what their bodies need, and what they want to accomplish.

## Features

- **How Do You Feel Today? check-in** (`/check-in`): pick energy, stiffness, goals, recovery focus, equipment, and time, and get ranked session matches with the reasons each was picked.
- **Signature collections**: How Do You Feel Today?, Movement Through Recovery, Strong for Life, and Real Life Wins.
- **Session library** (`/sessions`): filter by collection, equipment (mat, reformer, chair, none), focus, intensity, and length.
- **Session detail and guided player**: block-by-block exercises with cues, modifications, safety considerations, and the "real life win". The player has a timer, auto-advances, and asks "how do you feel now?" at the end.
- **Learn** (`/learn`): *What Can Pilates Help Me With That I Didn't Know I Needed?* and *Questions People Are Afraid to Ask*, with related sessions.
- **My Practice** (`/my-practice`): saved sessions, history, streak, total minutes, and the share of sessions you felt better after. Stored in the browser (no account needed).

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
