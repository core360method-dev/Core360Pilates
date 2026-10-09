import type { ExerciseCategory, LibraryExercise } from "./types.ts";

export const categoryLabels: Record<ExerciseCategory, string> = {
  breath: "Breath",
  "spinal-articulation": "Spinal articulation",
  core: "Core",
  "hip-and-leg": "Hip & leg",
  "back-extension": "Back extension",
  balance: "Balance",
  functional: "Functional",
  "upper-body": "Upper body",
};

export const libraryExercises: LibraryExercise[] = [
  {
    id: "lateral-breathing",
    name: "Lateral Breathing",
    aliases: [
      "Lateral breathing",
      "Constructive rest breathing",
      "Seated diaphragmatic breathing",
      "Breath with deep core",
      "Seated breathing & tall spine",
    ],
    category: "breath",
    equipment: ["none"],
    purpose:
      "Teaches three-dimensional rib expansion and connects the exhale to deep abdominal and pelvic floor engagement. The foundation for every other exercise.",
    primaryMuscles: ["Diaphragm", "Intercostals", "Transversus abdominis", "Pelvic floor"],
    setup:
      "Supine with knees bent and feet hip-width (or seated tall). Hands on the sides of the lower ribs.",
    cues: {
      breath: "Inhale through the nose into the sides and back of the ribs; exhale through pursed lips.",
      movement: [
        "Feel the ribs widen into your hands as you inhale.",
        "As you exhale, let the ribs knit toward each other and the lower belly draw gently in.",
        "Keep the shoulders and neck quiet throughout.",
      ],
      imagery: "The ribs open and close like an accordion or a jellyfish.",
    },
    commonFaults: [
      {
        fault: "Shoulders lift toward the ears on the inhale.",
        correction: "Place their hands on the lower ribs and cue 'breathe into my hands, not your shoulders.'",
      },
      {
        fault: "Forcing or bracing the abdominals so hard the breath becomes shallow.",
        correction: "Ask for 20–30% effort — 'zip up snug jeans', not 'suck in.'",
      },
      {
        fault: "Breath-holding during effort.",
        correction: "Have them count out loud or hiss on the exhale.",
      },
    ],
    regressions: ["Seated with back support", "Side-lying with a pillow between the knees"],
    progressions: [
      "Maintain lateral breath while moving the limbs (toe taps, arm floats)",
      "Use a resistance band around the ribs for feedback",
    ],
    precautions: [
      {
        population: "general",
        note: "If a client becomes lightheaded, return to natural breathing — the cue is a guide, not a rule.",
      },
    ],
    realLifeLink: "A calming, supportive breath for stressful moments and for lifting tasks.",
  },
  {
    id: "pelvic-curl",
    name: "Pelvic Curl / Bridge",
    aliases: ["Bridge", "Bridge peel-up", "Pelvic curl", "Single-leg bridge", "Bridging", "Bridging on the footbar"],
    category: "spinal-articulation",
    equipment: ["mat"],
    purpose:
      "Builds segmental spinal control and posterior chain strength; teaches hip extension without lumbar compensation.",
    primaryMuscles: ["Gluteus maximus", "Hamstrings", "Deep abdominals", "Spinal extensors"],
    setup: "Supine, knees bent, feet hip-width and parallel, arms long by the sides.",
    cues: {
      breath: "Exhale to curl up; inhale at the top; exhale to roll down.",
      movement: [
        "Tilt the pelvis to imprint the low back, then peel the spine off one bone at a time.",
        "Stop at the shoulder blades — weight stays between the shoulders, not on the neck.",
        "Roll down sequentially from the breastbone to the tailbone.",
      ],
      imagery: "Peel the spine off the mat like a strand of pearls lifting one bead at a time.",
    },
    commonFaults: [
      {
        fault: "Lifting the hips as one block (no articulation).",
        correction: "Cue a smaller range and slower tempo; place a hand under the spine as a target.",
      },
      {
        fault: "Over-arching at the top, ribs flaring.",
        correction: "Cue 'ribs heavy' and lower the hips until the front of the body is a long line.",
      },
      {
        fault: "Knees splaying out or collapsing in.",
        correction: "Place a small ball or block between the knees.",
      },
    ],
    regressions: ["Pelvic tilts only", "Hip lift a few inches without articulation"],
    progressions: ["Single-leg bridge", "Bridge with marching", "Feet on a ball or reformer footbar"],
    precautions: [
      {
        population: "osteoporosis",
        note: "Use a neutral-spine hip lift instead of full sequential articulation, which adds spinal flexion under load.",
      },
      {
        population: "breast-cancer-recovery",
        note: "Arms can rest palms up or on the belly if pressing into the mat pulls on the chest.",
      },
    ],
    realLifeLink: "Strong glutes for standing up, climbing stairs, and rolling over in bed.",
  },
  {
    id: "chest-lift",
    name: "Chest Lift",
    aliases: ["Chest lift"],
    category: "core",
    equipment: ["mat"],
    purpose: "Introduces abdominal flexion strength with a stable pelvis; prepares for the Hundred and Roll-Up.",
    primaryMuscles: ["Rectus abdominis", "Obliques", "Transversus abdominis"],
    setup: "Supine, knees bent, hands behind the head with elbows in peripheral vision.",
    cues: {
      breath: "Exhale to lift; inhale to hold; exhale to lower.",
      movement: [
        "Nod the chin slightly, then curl the head and shoulders until the shoulder blade tips leave the mat.",
        "Keep the pelvis still and the low back in neutral or a light imprint.",
        "Lower with control, head last.",
      ],
      imagery: "Hold a peach between the chin and chest — don't squash it.",
    },
    commonFaults: [
      {
        fault: "Pulling on the head and straining the neck.",
        correction: "Cue 'heavy head in the hands' and reduce the height of the lift.",
      },
      {
        fault: "Belly domes or pushes out.",
        correction: "Reduce range, and cue the exhale to draw the belly in before lifting.",
      },
    ],
    regressions: ["Head down, practice the exhale and abdominal draw-in only"],
    progressions: ["Hold the lift while extending one leg", "Add arm reaches (Hundred prep)"],
    precautions: [
      {
        population: "osteoporosis",
        note: "Avoid repeated loaded spinal flexion. Substitute a head-down core exercise such as toe taps.",
      },
      { population: "general", note: "Diastasis recti: watch for doming; regress if it appears." },
    ],
    realLifeLink: "Sitting up from lying down with less effort.",
  },
  {
    id: "the-hundred",
    name: "The Hundred",
    aliases: ["The Hundred"],
    category: "core",
    equipment: ["mat"],
    purpose: "Classical warm-up that builds abdominal endurance, breath control, and circulation.",
    primaryMuscles: ["Abdominals", "Hip flexors (isometric)", "Shoulder extensors"],
    setup: "Supine, legs in tabletop or extended at 45°, arms long just above the mat.",
    cues: {
      breath: "Inhale for 5 pumps, exhale for 5 pumps — 10 full cycles.",
      movement: [
        "Curl the head and shoulders up as in the Chest Lift.",
        "Pump the arms 2–4 inches with energy from the back of the arm, not the wrist.",
        "Keep the legs still and the low back stable.",
      ],
      imagery: "Splashing water with straight arms while the torso stays a calm island.",
    },
    commonFaults: [
      {
        fault: "Legs too low for the client's strength, low back arches.",
        correction: "Bring the legs to tabletop or place feet on the mat.",
      },
      {
        fault: "Neck fatigue.",
        correction: "Offer a head-down option and keep the arm pumps.",
      },
    ],
    regressions: ["Head down, feet on the mat", "Legs in tabletop"],
    progressions: ["Legs extended lower (only with stable pelvis)", "Add light hand weights"],
    precautions: [
      { population: "osteoporosis", note: "Teach head-down with feet on the mat or legs in tabletop." },
      { population: "shoulder-limitations", note: "Keep the arm pumps small and below shoulder height." },
    ],
    realLifeLink: "Trunk endurance for long days of standing and carrying.",
  },
  {
    id: "roll-up",
    name: "Roll-Up",
    aliases: ["Roll-up", "Roll-down to plank walkout", "Standing roll-down", "Seated roll-down"],
    category: "spinal-articulation",
    equipment: ["mat"],
    purpose: "Develops sequential spinal flexion, abdominal strength, and hamstring flexibility.",
    primaryMuscles: ["Rectus abdominis", "Obliques", "Hip flexors", "Hamstrings (lengthening)"],
    setup: "Supine with legs long and flexed at the ankles, arms reaching overhead or toward the ceiling.",
    cues: {
      breath: "Inhale to lift the arms and head; exhale to curl up and over; inhale to stack; exhale to roll down.",
      movement: [
        "Peel up one vertebra at a time — no momentum.",
        "Reach forward over the legs while scooping the belly back.",
        "Roll down by imprinting the low back first.",
      ],
      imagery: "Roll like a wheel over a carpet, each part of the spine touching in turn.",
    },
    commonFaults: [
      {
        fault: "Jerking up using momentum or the legs flying up.",
        correction: "Bend the knees, hold the backs of the thighs, and practice the half roll-back.",
      },
      {
        fault: "Flat spots in the spine (often the lumbar).",
        correction: "Use a strap around the feet for assistance; slow the tempo.",
      },
    ],
    regressions: ["Half roll-back holding the thighs", "Standing or seated roll-down"],
    progressions: ["Arms crossed over the chest", "Holding a light ball overhead"],
    precautions: [
      { population: "osteoporosis", note: "Contraindicated in loaded flexion form. Use standing roll-down in a short range or skip." },
      { population: "low-back-pain", note: "Acute disc symptoms: avoid. Offer neutral-spine core work instead." },
    ],
    realLifeLink: "Getting up out of bed and sitting up from the floor.",
  },
  {
    id: "single-leg-stretch",
    name: "Single-Leg Stretch",
    aliases: ["Single-leg stretch"],
    category: "core",
    equipment: ["mat"],
    purpose: "Trains coordination and trunk stability while the legs move reciprocally.",
    primaryMuscles: ["Abdominals", "Hip flexors", "Hip extensors"],
    setup: "Supine, head and shoulders curled up, one knee drawn in and the other leg extended.",
    cues: {
      breath: "Inhale for two switches, exhale for two switches.",
      movement: [
        "Outside hand to the ankle, inside hand to the knee of the bent leg.",
        "Switch legs with control; the pelvis stays still.",
        "Keep the extended leg at a height where the low back stays stable.",
      ],
      imagery: "The torso is a steady bowl; the legs are pistons moving under it.",
    },
    commonFaults: [
      { fault: "Rocking side to side.", correction: "Slow the tempo and raise the extended leg." },
      { fault: "Neck strain.", correction: "Head down, keep the leg pattern." },
    ],
    regressions: ["Head down", "Heel slides on the mat"],
    progressions: ["Lower the extended leg", "Double-leg stretch"],
    precautions: [{ population: "osteoporosis", note: "Head down only." }],
    realLifeLink: "Coordinated legs and a stable trunk for walking and stairs.",
  },
  {
    id: "toe-taps",
    name: "Toe Taps / Dead Bug Prep",
    aliases: ["Toe taps", "Tabletop toe taps", "Dead bug prep", "Heel slides", "Marching (supine)"],
    category: "core",
    equipment: ["mat"],
    purpose: "Head-down deep core stability; teaches dissociating hip movement from the pelvis and spine.",
    primaryMuscles: ["Transversus abdominis", "Obliques", "Hip flexors"],
    setup: "Supine in neutral spine, both legs in tabletop (or one foot on the mat to start).",
    cues: {
      breath: "Exhale to lower one foot; inhale to return.",
      movement: [
        "Hinge from the hip to tap the toe down, keeping the knee angle constant.",
        "Pelvis stays level — no rocking or arching.",
        "Ribs stay soft and heavy.",
      ],
      imagery: "A full cup of tea sits on your low belly — don't spill it.",
    },
    commonFaults: [
      { fault: "Low back arches as the foot lowers.", correction: "Reduce range; tap a block instead of the floor." },
      { fault: "Holding the breath.", correction: "Cue an audible exhale on each tap." },
    ],
    regressions: ["Heel slides", "Supine marching with one foot down"],
    progressions: ["Opposite arm reaches overhead (dead bug)", "Straight-leg lowers"],
    precautions: [
      { population: "general", note: "An excellent spine-friendly substitute for flexion-based core work." },
    ],
    realLifeLink: "Keeping the back steady while stepping into a car or bath.",
  },
  {
    id: "side-lying-leg-series",
    name: "Side-Lying Leg Series",
    aliases: [
      "Side-lying leg lifts",
      "Side-lying leg series",
      "Side-lying leg circles",
      "Side-lying clam",
      "Side-lying bent-knee lift",
      "Side leg lifts",
    ],
    category: "hip-and-leg",
    equipment: ["mat"],
    purpose: "Strengthens the lateral hip for pelvic stability, balance, and gait.",
    primaryMuscles: ["Gluteus medius", "Gluteus minimus", "Obliques", "Adductors"],
    setup: "Side-lying with hips and shoulders stacked, head on the arm or a pillow, legs slightly forward of the hips.",
    cues: {
      breath: "Exhale to lift; inhale to lower (or natural breath for circles).",
      movement: [
        "Lift the waist slightly off the mat to support the spine.",
        "Lift the top leg to hip height, reaching long out of the hip.",
        "The top hip stays stacked — don't roll back.",
      ],
      imagery: "Reach the leg out so far someone could slide a piece of paper under the waist.",
    },
    commonFaults: [
      { fault: "Rolling the top hip back to lift higher.", correction: "Back against a wall for feedback; lift lower." },
      { fault: "Hiking the hip toward the ribs.", correction: "Cue 'reach the leg away' rather than 'lift up.'" },
    ],
    regressions: ["Clams with knees bent", "Standing side leg lifts holding a chair"],
    progressions: ["Ankle weights", "Side-lying on the forearm", "Resistance band above the knees"],
    precautions: [
      { population: "shoulder-limitations", note: "Rest the head on a pillow instead of the bottom arm." },
      { population: "breast-cancer-recovery", note: "Lying on the surgical side may not be comfortable early on — offer standing side leg lifts." },
    ],
    realLifeLink: "A stable pelvis for walking, single-leg stance, and stepping sideways.",
  },
  {
    id: "swan-prep",
    name: "Swan Prep",
    aliases: ["Swan prep", "Prone rest on forearms", "Standing back extension"],
    category: "back-extension",
    equipment: ["mat"],
    purpose: "Builds thoracic extension strength to counter rounded posture.",
    primaryMuscles: ["Thoracic extensors", "Lower trapezius", "Glutes"],
    setup: "Prone, forehead down, hands by the shoulders, legs hip-width.",
    cues: {
      breath: "Inhale to lift; exhale to lower.",
      movement: [
        "Draw the shoulder blades gently down the back.",
        "Lift the head and chest a few inches, eyes on the mat ahead.",
        "Keep the lower belly lifted away from the mat.",
      ],
      imagery: "The breastbone glides forward and up like the bow of a ship.",
    },
    commonFaults: [
      { fault: "Pushing up with the arms into the low back.", correction: "Hover the hands or reduce height." },
      { fault: "Cranking the neck back.", correction: "Keep eyes down, back of the neck long." },
    ],
    regressions: ["Standing back extension at a wall", "Prone on forearms"],
    progressions: ["Hands hovering", "Arms reaching forward (Superman prep)"],
    precautions: [
      { population: "osteoporosis", note: "Extension in a gentle range is generally encouraged — a key posture exercise for this population." },
      { population: "low-back-pain", note: "Some backs prefer extension, some don't. Stop if pain increases or travels." },
      { population: "breast-cancer-recovery", note: "Prone may be uncomfortable after surgery or with reconstruction — use the standing version." },
    ],
    realLifeLink: "Standing tall and looking up without strain.",
  },
  {
    id: "swimming",
    name: "Swimming / Bird Dog",
    aliases: ["Swimming (modified)", "Bird dog", "Quadruped reach", "Quadruped knee hover"],
    category: "back-extension",
    equipment: ["mat"],
    purpose: "Cross-body stability and spinal extensor endurance with limb movement.",
    primaryMuscles: ["Multifidus", "Erector spinae", "Glutes", "Shoulder stabilizers"],
    setup: "Quadruped (bird dog) or prone (swimming) with a long neutral spine.",
    cues: {
      breath: "Exhale to reach; inhale to return.",
      movement: [
        "Reach the opposite arm and leg long rather than high.",
        "Keep the pelvis level — imagine a glass of water on the low back.",
        "Return with control and switch sides.",
      ],
      imagery: "Become as long as possible from fingertips to toes.",
    },
    commonFaults: [
      { fault: "Hip rotating up as the leg lifts.", correction: "Slide the leg along the floor first." },
      { fault: "Sagging between the shoulder blades.", correction: "Cue 'push the floor away.'" },
    ],
    regressions: ["Leg slides only", "Arm reaches only"],
    progressions: ["Prone swimming with tempo", "Knee hover hold"],
    precautions: [
      { population: "shoulder-limitations", note: "Quadruped loads the wrists and shoulders — use prone or standing versions if weight-bearing is restricted." },
      { population: "breast-cancer-recovery", note: "Avoid weight-bearing on the arms until cleared by the care team." },
    ],
    realLifeLink: "Reaching for something while keeping the back steady.",
  },
  {
    id: "spine-stretch-forward",
    name: "Spine Stretch Forward",
    aliases: ["Spine stretch forward", "Seated forward fold"],
    category: "spinal-articulation",
    equipment: ["mat"],
    purpose: "Spinal flexion mobility and hamstring length with an emphasis on sitting tall first.",
    primaryMuscles: ["Abdominals", "Spinal extensors (lengthening)", "Hamstrings"],
    setup: "Seated tall, legs slightly wider than hips, feet flexed, arms reaching forward.",
    cues: {
      breath: "Inhale to grow tall; exhale to round forward; inhale to restack.",
      movement: [
        "Nod the head and round forward one vertebra at a time.",
        "Keep the sit bones heavy and the belly scooping back.",
        "Restack from the base of the spine up.",
      ],
      imagery: "Round up and over a large beach ball in your lap.",
    },
    commonFaults: [
      { fault: "Slumping before moving (can't sit tall).", correction: "Elevate the hips on a cushion; bend the knees." },
      { fault: "Hinging from the hips without spinal flexion.", correction: "Cue 'curve, don't fold.'" },
    ],
    regressions: ["Seated on a cushion with bent knees", "Seated on a chair"],
    progressions: ["Arms overhead", "Hold at the bottom for an extra breath"],
    precautions: [
      { population: "osteoporosis", note: "Avoid end-range flexion. Teach the 'sit tall' and the first few degrees only." },
    ],
    realLifeLink: "Reaching your feet to put on socks and shoes.",
  },
  {
    id: "sit-to-stand",
    name: "Sit-to-Stand",
    aliases: ["Sit-to-stand", "Chair squats", "Mini squats", "Supported squats", "Front hold squat"],
    category: "functional",
    equipment: ["chair"],
    purpose: "Functional lower-body strength — one of the strongest predictors of independence.",
    primaryMuscles: ["Quadriceps", "Glutes", "Hamstrings", "Core"],
    setup: "Seated toward the front of a sturdy chair (against a wall), feet hip-width, slightly behind the knees.",
    cues: {
      breath: "Exhale to stand; inhale to sit.",
      movement: [
        "Hinge forward — nose over toes.",
        "Press evenly through the whole foot to stand tall.",
        "Reach the hips back and sit down slowly, without dropping.",
      ],
      imagery: "Stand up like you're being drawn up by a string from the crown of your head.",
    },
    commonFaults: [
      { fault: "Knees collapsing inward.", correction: "Band above the knees or cue 'knees over the second toe.'" },
      { fault: "Plopping down.", correction: "Count 3 seconds down; use a higher seat." },
      { fault: "Not leaning forward enough (falling back).", correction: "Cue 'nose over toes' and model it." },
    ],
    regressions: ["Higher seat or cushion", "Use hands on armrests or thighs"],
    progressions: ["Arms crossed", "Slower lowering", "Lower seat", "Hold a weight at the chest"],
    precautions: [
      { population: "active-aging", note: "Position the chair against a wall and stay within arm's reach for clients with fall risk." },
    ],
    realLifeLink: "Getting out of chairs, cars, and off the toilet independently.",
  },
  {
    id: "single-leg-stance",
    name: "Single-Leg Stance & Tandem Balance",
    aliases: ["Single-leg stand", "Tandem stance", "Heel-to-toe walk", "Clock reaches", "Weight shifts", "Foot tripod"],
    category: "balance",
    equipment: ["chair"],
    purpose: "Static and dynamic balance training to reduce fall risk.",
    primaryMuscles: ["Foot intrinsics", "Ankle stabilizers", "Gluteus medius", "Core"],
    setup: "Standing beside a sturdy chair or counter, with light fingertip support.",
    cues: {
      breath: "Breathe naturally; long exhales help settle wobbles.",
      movement: [
        "Find the foot tripod: big toe, little toe, heel.",
        "Shift weight to one foot and lift the other a few inches.",
        "Grow tall, gaze soft and level.",
      ],
      imagery: "Roots growing down from the standing foot; the crown lifting toward the sky.",
    },
    commonFaults: [
      { fault: "Gripping the support with full weight.", correction: "Progress from two hands → one hand → fingertip → hover." },
      { fault: "Hip hiking or leaning the trunk.", correction: "Lift the foot lower; cue 'level headlights' on the pelvis." },
    ],
    regressions: ["Staggered stance", "Feet together", "Two-hand support"],
    progressions: ["Eyes closed (with support)", "Head turns", "Unstable surface", "Clock reaches"],
    precautions: [
      { population: "active-aging", note: "Clear the floor, have the client wear supportive shoes, and stand on their weaker side." },
      { population: "osteoporosis", note: "Balance is a priority — a fall is the main fracture risk. Always provide support." },
    ],
    realLifeLink: "Stepping over a curb, climbing stairs, and putting on pants standing up.",
  },
  {
    id: "hip-hinge",
    name: "Hip Hinge",
    aliases: ["Hip hinge with dowel or broom", "Good mornings", "Deadlift with a bag", "Bent-over rows (light weight)"],
    category: "functional",
    equipment: ["none"],
    purpose: "Teaches bending from the hips with a neutral spine — the foundation of safe lifting.",
    primaryMuscles: ["Glutes", "Hamstrings", "Spinal extensors (isometric)"],
    setup: "Standing, feet hip-width, dowel or broom along the spine touching the head, mid-back, and tailbone.",
    cues: {
      breath: "Inhale to hinge; exhale to stand.",
      movement: [
        "Soften the knees and push the hips back.",
        "Keep all three points of contact with the dowel.",
        "Squeeze the glutes to return to standing.",
      ],
      imagery: "Close a car door with your hips while your hands are full.",
    },
    commonFaults: [
      { fault: "Rounding the low back (dowel leaves the tailbone).", correction: "Reduce depth; cue 'hips back, chest proud.'" },
      { fault: "Squatting instead of hinging.", correction: "Stand a foot from a wall and reach the hips back to touch it." },
    ],
    regressions: ["Hands on thighs, small hinge", "Hip hinge to a wall"],
    progressions: ["Hold a bag (deadlift)", "Single-leg hinge with support"],
    precautions: [
      { population: "osteoporosis", note: "Strongly recommended: teaching a neutral-spine hinge protects the spine during daily lifting." },
      { population: "low-back-pain", note: "Start unloaded; progress load only when pain-free." },
    ],
    realLifeLink: "Lifting laundry baskets, grocery bags, and grandkids safely.",
  },
  {
    id: "wall-push-up",
    name: "Wall Push-Up",
    aliases: ["Wall push-ups", "Wall slides", "Wall angels (partial)"],
    category: "upper-body",
    equipment: ["none"],
    purpose: "Upper-body pushing strength and scapular control with adjustable load.",
    primaryMuscles: ["Pectorals", "Triceps", "Serratus anterior", "Core"],
    setup: "Standing an arm's length from a wall, hands at chest height and slightly wider than shoulders.",
    cues: {
      breath: "Inhale to lower; exhale to press away.",
      movement: [
        "Body moves as one long plank from head to heels.",
        "Elbows angle back about 45°, not straight out to the sides.",
        "Press the wall away and let the shoulder blades glide around the ribs at the top.",
      ],
      imagery: "A plank of wood leaning toward the wall and back.",
    },
    commonFaults: [
      { fault: "Hips sagging or piking.", correction: "Step closer to the wall; cue 'zip up the front.'" },
      { fault: "Shoulders shrugging.", correction: "Cue 'long neck, wide collarbones.'" },
    ],
    regressions: ["Stand closer to the wall", "Smaller range"],
    progressions: ["Counter push-up", "Kneeling push-up", "Full push-up"],
    precautions: [
      { population: "breast-cancer-recovery", note: "Upper-body loading only once cleared; begin with low volume and monitor for swelling or heaviness in the arm." },
      { population: "shoulder-limitations", note: "Keep hands below shoulder height and the range pain-free." },
    ],
    realLifeLink: "Pushing yourself up from the floor or a bed; opening heavy doors.",
  },
  {
    id: "reformer-footwork",
    name: "Reformer Footwork",
    aliases: ["Footwork series (toes, arches, heels)", "Parallel heels", "Single-leg press", "Calf raises", "Heel raises"],
    category: "hip-and-leg",
    equipment: ["reformer"],
    purpose: "Warm-up and leg strength with alignment feedback; teaches the client the machine.",
    primaryMuscles: ["Quadriceps", "Hamstrings", "Glutes", "Calves"],
    setup:
      "Supine on the carriage, head on the headrest, feet on the footbar. Typical springs: medium-heavy (adjust to client and machine).",
    cues: {
      breath: "Exhale to press out; inhale to return (or vice versa — be consistent).",
      movement: [
        "Neutral pelvis, ribs soft.",
        "Press to straight legs without locking the knees.",
        "Return slower than you press — resist the springs.",
      ],
      imagery: "Push the floor away while the carriage glides like a train on a track.",
    },
    commonFaults: [
      { fault: "Hyperextending the knees.", correction: "Cue 'long legs, soft knees' and slow the end range." },
      { fault: "Carriage slamming home.", correction: "Lighter springs; count 3 on the return." },
      { fault: "Pelvis tucking.", correction: "Small towel under the sacrum for neutral feedback." },
    ],
    regressions: ["Lighter springs", "Shorter range"],
    progressions: ["Single-leg", "Tempo changes", "Lighter springs for more control demand"],
    precautions: [
      { population: "active-aging", note: "Assist getting on and off the carriage; lock the carriage or use the stopper while mounting." },
      { population: "general", note: "Always check springs and stoppers before the client loads the machine." },
    ],
    realLifeLink: "Stair climbing and walking uphill.",
  },
];

export function getLibraryExercise(id: string): LibraryExercise | undefined {
  return libraryExercises.find((e) => e.id === id);
}

const aliasIndex = new Map<string, LibraryExercise>(
  libraryExercises.flatMap((e) => e.aliases.map((a) => [a.toLowerCase(), e] as const)),
);

/** Find the teaching notes for an exercise name used in a client session. */
export function findLibraryExerciseByName(name: string): LibraryExercise | undefined {
  return aliasIndex.get(name.toLowerCase());
}
