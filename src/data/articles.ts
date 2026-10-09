import type { Article } from "./types.ts";

export const articles: Article[] = [
  // ─── What Can Pilates Help Me With That I Didn't Know I Needed? ─────
  {
    slug: "breathing-better",
    collection: "pilates-helps",
    title: "Breathing Better (Yes, You Can Train It)",
    summary: "How Pilates breathing can ease tension, support your core, and calm a busy mind.",
    readMinutes: 3,
    body: [
      "Most of us breathe shallowly into the upper chest, especially when stressed or sitting for long periods. Pilates teaches lateral breathing — expanding the ribs to the sides and back — which gives the diaphragm room to work.",
      "Better breathing does more than you might expect. A long, slow exhale signals the nervous system to settle, which is why many people feel calmer after even a short session. The diaphragm also works together with the deep abdominals and pelvic floor, so breathing well is part of a strong, supportive core.",
      "Try it now: place your hands on the sides of your ribs. Inhale through the nose and feel your hands move apart. Exhale through pursed lips and feel the ribs draw together. Five breaths like this is a reset you can do anywhere.",
    ],
    relatedSessionIds: ["calm-the-restless", "gentle-wake-up"],
  },
  {
    slug: "sleep-and-movement",
    collection: "pilates-helps",
    title: "Moving Well to Sleep Well",
    summary: "Gentle evening movement can help your body and mind wind down.",
    readMinutes: 3,
    body: [
      "Physical tension and a racing mind are two of the most common reasons people struggle to fall asleep. Slow, intentional movement addresses both.",
      "Gentle spinal mobility releases tension held in the back and hips after a day of sitting. Pairing movement with longer exhales shifts the body toward its rest-and-digest state.",
      "Keep evening sessions calm — save the energizing workouts for earlier in the day. A 15-minute flow like Calm the Restless, followed by a few minutes with your legs up the wall, is a simple bedtime ritual.",
    ],
    relatedSessionIds: ["calm-the-restless", "seated-mobility"],
  },
  {
    slug: "balance-is-a-skill",
    collection: "pilates-helps",
    title: "Balance Is a Skill, Not a Trait",
    summary: "Balance can improve at any age with the right practice.",
    readMinutes: 4,
    body: [
      "Many people believe that losing balance is simply part of getting older. The truth is that balance is a skill made of strength, reflexes, joint awareness, and confidence — and every one of those can be trained.",
      "Pilates builds the deep core and hip strength that keep you upright, and it sharpens body awareness so you notice and correct small wobbles before they become stumbles.",
      "Start with support. Practicing single-leg stands next to a counter or chair for just a few minutes a day can make a measurable difference over a few weeks.",
    ],
    relatedSessionIds: ["balance-builder", "functional-strength-standing"],
  },
  {
    slug: "posture-without-perfection",
    collection: "pilates-helps",
    title: "Posture Without Perfection",
    summary: "There's no single 'perfect' posture — but there is a body that can move between positions comfortably.",
    readMinutes: 3,
    body: [
      "Good posture isn't about holding yourself rigidly upright all day. It's about having the strength and mobility to change positions easily and to sit or stand tall without effort when you want to.",
      "Pilates strengthens the muscles that support your spine and opens the areas that tend to get tight — like the chest and hip flexors — so tall posture becomes your body's comfortable default rather than something you have to force.",
      "The best posture is your next posture. Move often, and let your practice make every position feel easier.",
    ],
    relatedSessionIds: ["steady-core-reset", "reach-overhead"],
  },
  {
    slug: "pelvic-floor-basics",
    collection: "pilates-helps",
    title: "The Pelvic Floor: Your Core's Foundation",
    summary: "Why the pelvic floor matters for everyone, at every stage of life.",
    readMinutes: 4,
    body: [
      "The pelvic floor is a group of muscles at the base of your core. It supports your organs, helps control the bladder and bowel, and works with your breath and deep abdominals to stabilize your spine.",
      "Leaking when you cough or laugh, low back discomfort, or a feeling of heaviness can all be connected to pelvic floor function. These are common, but they're not something you simply have to live with.",
      "Pilates breathing and deep core work naturally include the pelvic floor. If you have specific symptoms, a pelvic health physical therapist is a wonderful partner alongside your Pilates practice.",
    ],
    relatedSessionIds: ["back-care-foundations", "steady-core-reset"],
  },

  // ─── Questions People Are Afraid to Ask ─────────────────────────────
  {
    slug: "am-i-too-old-to-start",
    collection: "questions-people-are-afraid-to-ask",
    title: "Am I too old to start Pilates?",
    summary: "Short answer: no. Here's how to begin wherever you are.",
    readMinutes: 3,
    body: [
      "Pilates is one of the most adaptable forms of exercise there is. Movements can be done lying down, seated in a chair, standing with support, or on equipment that assists you.",
      "Starting later in life often means you bring more patience and body awareness than younger beginners. Progress may look like getting out of a chair more easily, feeling steadier on stairs, or simply having less stiffness in the morning — and those are real wins.",
      "Begin with the Strong for Life collection, go at your own pace, and check with your healthcare provider if you have specific medical concerns.",
    ],
    relatedSessionIds: ["chair-pilates-full-body", "seated-mobility"],
  },
  {
    slug: "body-doesnt-look-like-instructor",
    collection: "questions-people-are-afraid-to-ask",
    title: "What if my body doesn't look like a Pilates instructor's?",
    summary: "Pilates is for every body. Your practice doesn't need to look like anyone else's.",
    readMinutes: 3,
    body: [
      "Fitness images often show one narrow body type. That can make it easy to feel like you don't belong before you even start.",
      "Pilates is about how movement feels and what it lets you do — not how it looks. Every exercise can be adjusted for different body sizes, shapes, and proportions, and modifications are a tool, not a lesser version.",
      "You belong here exactly as you are. Measure progress by how you feel, how you move, and what you can do in your everyday life.",
    ],
    relatedSessionIds: ["gentle-wake-up", "steady-core-reset"],
  },
  {
    slug: "afraid-of-hurting-myself",
    collection: "questions-people-are-afraid-to-ask",
    title: "I'm afraid I'll hurt myself. How do I know what's safe?",
    summary: "How to tell the difference between effort, discomfort, and pain.",
    readMinutes: 4,
    body: [
      "Fear of injury is one of the most common reasons people avoid exercise — especially after surgery, an injury, or a scare. That fear is understandable and worth listening to.",
      "A useful guide: effort (muscles working, breathing harder) is expected. Mild stretching discomfort that eases as you move is usually okay. Sharp, pinching, or radiating pain, numbness, or tingling means stop and modify or skip that movement.",
      "Every Core 360 session lists considerations and modifications. Start with gentle sessions, use the easier option first, and build confidence gradually. If you're recovering from surgery or managing a condition, get guidance from your healthcare provider about what's appropriate for you.",
    ],
    relatedSessionIds: ["back-care-foundations", "returning-to-movement"],
  },
  {
    slug: "after-breast-surgery",
    collection: "questions-people-are-afraid-to-ask",
    title: "When can I move again after breast surgery?",
    summary: "What to know about returning to movement after mastectomy, lumpectomy, or reconstruction.",
    readMinutes: 5,
    body: [
      "Every surgery and every body is different, so your surgeon or care team is the best source for timing and restrictions. Many people are encouraged to begin gentle range-of-motion work early in recovery, while heavier lifting and strenuous upper-body work usually wait longer.",
      "Early movement often focuses on breathing, posture, and gently restoring shoulder range of motion. Later phases add strength — first for the lower body and core, then gradually for the arms and chest.",
      "It's also completely normal to feel disconnected from your body or nervous about moving. Go slowly, celebrate small changes, and ask about a referral to a physical therapist who specializes in breast cancer recovery or lymphedema if you have concerns.",
    ],
    relatedSessionIds: ["breast-surgery-early-mobility", "shoulder-friendly-strength"],
  },
  {
    slug: "cant-get-on-the-floor",
    collection: "questions-people-are-afraid-to-ask",
    title: "What if I can't get down on the floor?",
    summary: "You can still do a complete Pilates practice — and work toward the floor if you want to.",
    readMinutes: 3,
    body: [
      "Many people avoid Pilates because they think it all happens on a mat. Chair Pilates and standing work offer a full-body practice without ever getting down on the floor.",
      "If getting up and down from the floor is a goal, it can be trained step by step — starting with squats and lunges with support, then half-kneeling, and eventually the full transition. The Down to the Floor & Back Up session walks you through it.",
      "There's no rush. Choose what feels safe today.",
    ],
    relatedSessionIds: ["chair-pilates-full-body", "floor-to-standing"],
  },
  {
    slug: "lost-confidence",
    collection: "questions-people-are-afraid-to-ask",
    title: "I used to be active and I've lost my confidence. Where do I start?",
    summary: "Rebuilding trust in your body after illness, injury, or a long break.",
    readMinutes: 4,
    body: [
      "Losing fitness after time away can bring up frustration and even grief. Comparing yourself to who you used to be is natural — but it can make starting again feel harder.",
      "Start with sessions that feel almost too easy. Early wins build trust, and trust builds consistency. Two or three short sessions a week is a strong beginning.",
      "Notice what improves: a little more energy, an easier flight of stairs, a better night's sleep. Confidence returns through evidence, and every session adds some.",
    ],
    relatedSessionIds: ["returning-to-movement", "gentle-wake-up"],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

export function getArticlesByCollection(slug: string): Article[] {
  return articles.filter((a) => a.collection === slug);
}
