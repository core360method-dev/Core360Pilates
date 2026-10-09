import type { QuizQuestion } from "./types.ts";

export const teachingPrinciples = [
  {
    title: "Meet people where they are",
    body: "Start from how the client feels today — energy, stiffness, pain, and confidence — not from a fixed routine. Check in at the start of every session.",
  },
  {
    title: "Choice over correction",
    body: "Offer two or three options for each exercise and let clients choose. Choice builds autonomy and confidence; a modification is never a lesser version.",
  },
  {
    title: "Connect to real life",
    body: "Name the everyday activity each exercise supports. 'This helps you get up off the floor' is more motivating than 'this works your glutes.'",
  },
  {
    title: "Breath leads movement",
    body: "Use the exhale for effort, and never let a breath cue become a source of stress. A client who is breathing naturally is better than one holding their breath to 'get it right.'",
  },
  {
    title: "Quality, then quantity",
    body: "Control and alignment come before range, load, or repetitions. Progress one variable at a time.",
  },
  {
    title: "Know your scope",
    body: "We teach movement; we don't diagnose or treat. Screen, respect medical restrictions, and refer when red flags appear.",
  },
];

export const cueingFramework = [
  {
    step: "1. Set up",
    detail: "Position, alignment, and equipment. Give these before movement starts.",
    example: "Lie on your back, knees bent, feet hip-width apart.",
  },
  {
    step: "2. Breathe",
    detail: "Link breath to the phase of movement.",
    example: "Inhale to prepare; exhale as you lift.",
  },
  {
    step: "3. Move",
    detail: "One clear action cue at a time — short and specific.",
    example: "Peel your spine up one bone at a time.",
  },
  {
    step: "4. Refine",
    detail: "Once the pattern is established, add one refinement — imagery, a focus point, or a correction.",
    example: "Imagine a string of pearls lifting off the mat.",
  },
];

export const cueTypes = [
  { type: "Verbal", detail: "Clear, concise instruction. Prefer positive language ('lengthen') over negative ('don't slump')." },
  { type: "Visual", detail: "Demonstrate, then observe. Mirror for groups." },
  { type: "Imagery", detail: "Metaphors that convey the quality of movement. Test which ones land with each client." },
  {
    type: "Tactile",
    detail: "Light touch to guide direction — only with explicit consent, asked each time, and never near surgical sites or sensitive areas.",
  },
  { type: "Proprioceptive props", detail: "Balls, bands, blocks, or a wall to give feedback without touch." },
];

export const screeningQuestions = [
  "How are you feeling today — energy, stiffness, pain (0–10)?",
  "Any new injuries, surgeries, or diagnoses since we last met?",
  "Has your doctor or therapist given you any movement restrictions?",
  "Do you know your bone density status? Any history of fractures?",
  "Any dizziness, falls, or near-falls recently?",
  "Any changes in medication?",
  "Is there something specific you'd like to be able to do more easily?",
];

export const scopeOfPractice = {
  within: [
    "Teaching movement and exercise",
    "Modifying exercises based on client feedback and medical restrictions",
    "General education about movement and its benefits",
    "Screening for red flags and referring",
  ],
  outside: [
    "Diagnosing conditions or injuries",
    "Prescribing treatment for a medical condition",
    "Overriding a provider's restrictions",
    "Giving nutrition or medication advice beyond general guidelines",
  ],
};

/** Default certification hour targets — adjust to match your training program. */
export const defaultHourTargets = {
  observation: 50,
  "self-practice": 100,
  "practice-teaching": 100,
} as const;

export type HourCategory = keyof typeof defaultHourTargets;

export const hourCategoryLabels: Record<HourCategory, string> = {
  observation: "Observation",
  "self-practice": "Self-practice",
  "practice-teaching": "Practice teaching",
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    topic: "Osteoporosis",
    question: "Which exercise is most appropriate for a client with osteoporosis?",
    options: ["Roll-Up", "Criss-Cross", "Toe Taps in neutral spine", "Rolling Like a Ball"],
    answerIndex: 2,
    explanation:
      "Neutral-spine core work avoids loaded spinal flexion. Roll-Up, Criss-Cross, and rolling exercises flex the spine under load.",
  },
  {
    id: "q2",
    topic: "Breast cancer recovery",
    question: "A client six weeks after a mastectomy reports new heaviness and swelling in their arm. What do you do?",
    options: [
      "Increase arm exercises to improve circulation",
      "Stop upper-body work and advise them to contact their care team",
      "Massage the arm",
      "Have them continue but use lighter weights",
    ],
    answerIndex: 1,
    explanation:
      "New swelling or heaviness can be a sign of lymphedema and should be assessed by the care team. Treatment is outside our scope.",
  },
  {
    id: "q3",
    topic: "Red flags",
    question: "Which symptom requires urgent medical referral for a client with back pain?",
    options: [
      "Stiffness in the morning that eases with movement",
      "Mild soreness the day after class",
      "Numbness in the saddle area or new bladder changes",
      "Tight hamstrings",
    ],
    answerIndex: 2,
    explanation: "Saddle numbness and bladder or bowel changes can indicate cauda equina syndrome, a medical emergency.",
  },
  {
    id: "q4",
    topic: "Cueing",
    question: "In the Core 360 cueing framework, what comes first?",
    options: ["Set up", "Imagery", "Breath", "Correction"],
    answerIndex: 0,
    explanation: "Set up → Breathe → Move → Refine. Clients need a safe starting position before anything else.",
  },
  {
    id: "q5",
    topic: "Tactile cues",
    question: "When is it appropriate to use a hands-on cue?",
    options: [
      "Any time the client's form is off",
      "Only after asking for and receiving consent, away from sensitive or surgical areas",
      "Only with clients you've known for a long time",
      "Never",
    ],
    answerIndex: 1,
    explanation: "Always ask each time. Props and verbal cues are good alternatives when touch isn't appropriate.",
  },
  {
    id: "q6",
    topic: "Balance",
    question: "Where should you stand when spotting an older client during single-leg balance work?",
    options: ["In front, demonstrating", "Across the room", "Behind them, not touching", "On their weaker side, within arm's reach"],
    answerIndex: 3,
    explanation: "Standing on the weaker side within reach lets you respond if they lose balance.",
  },
  {
    id: "q7",
    topic: "Progression",
    question: "A client has mastered wall push-ups. What's the best next step?",
    options: ["Full push-ups on the floor", "Plank holds for 2 minutes", "Weighted push-ups", "Counter-height push-ups"],
    answerIndex: 3,
    explanation: "Progress one variable at a time — lowering the incline slightly increases load gradually.",
  },
  {
    id: "q8",
    topic: "Scope of practice",
    question: "A client asks whether their shoulder pain is a rotator cuff tear. You should:",
    options: [
      "Do some tests to find out",
      "Tell them it's probably just tight",
      "Explain that you can't diagnose and suggest they see a doctor or physical therapist",
      "Give them a rotator cuff rehab program",
    ],
    answerIndex: 2,
    explanation: "Diagnosis is outside a Pilates instructor's scope. Refer, and adapt the session in the meantime.",
  },
  {
    id: "q9",
    topic: "Breath",
    question: "A client becomes lightheaded during lateral breathing. What do you do?",
    options: [
      "Have them return to natural breathing and rest",
      "Encourage deeper breaths",
      "Have them hold their breath briefly",
      "Move on to the next exercise faster",
    ],
    answerIndex: 0,
    explanation: "Breathing cues are a guide. Over-breathing can cause lightheadedness — return to natural breath.",
  },
  {
    id: "q10",
    topic: "Core 360 philosophy",
    question: "Which statement best reflects the Core 360 Method™?",
    options: [
      "Every client should eventually master the classical repertoire",
      "Modifications are temporary until the client can do the 'real' exercise",
      "Movement should be chosen based on how the client feels and what they need for real life",
      "Intensity is the best measure of a good session",
    ],
    answerIndex: 2,
    explanation: "Movement isn't about perfection — it's about strength, confidence, and participating more fully in life.",
  },
];
