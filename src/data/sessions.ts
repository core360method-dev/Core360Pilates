import type { Session } from "./types.ts";

export const sessions: Session[] = [
  // ─── How Do You Feel Today? ──────────────────────────────────────────
  {
    id: "gentle-wake-up",
    title: "Gentle Wake-Up",
    collection: "how-do-you-feel-today",
    minutes: 15,
    equipment: ["mat"],
    intensity: 1,
    goals: ["mobility", "stress-relief"],
    energy: ["low"],
    stiffness: ["a-little", "very"],
    summary:
      "For tired days. Slow breathing, easy spinal movement, and soft core activation to bring energy up without draining what you have.",
    realLifeWin: "Starting the day feeling awake instead of achy.",
    considerations: ["Stay on your back or side if getting up and down is hard today."],
    blocks: [
      {
        title: "Arrive & breathe",
        minutes: 4,
        exercises: [
          {
            name: "Constructive rest breathing",
            dose: "10 breaths",
            cue: "Lie on your back, knees bent. Breathe into the sides and back of your ribs, exhale slowly through the mouth.",
          },
          {
            name: "Pelvic rocks",
            dose: "10 slow reps",
            cue: "Gently tilt the pelvis to flatten then lightly arch the low back. Small and easy.",
          },
        ],
      },
      {
        title: "Wake the spine",
        minutes: 6,
        exercises: [
          {
            name: "Knee sways",
            dose: "8 each side",
            cue: "Let both knees drift side to side as far as feels good, keeping shoulders heavy.",
          },
          {
            name: "Bridge peel-up",
            dose: "6 reps",
            cue: "Roll the spine up one bone at a time, pause, roll down slowly.",
            modify: "Lift the hips only a few inches.",
          },
          {
            name: "Side-lying arm circles",
            dose: "5 each direction, each side",
            cue: "Draw a slow circle with the top arm, letting your eyes follow your hand.",
          },
        ],
      },
      {
        title: "Gentle core & close",
        minutes: 5,
        exercises: [
          {
            name: "Dead bug prep",
            dose: "6 each side",
            cue: "Float one leg to tabletop and back down while the ribs stay soft and heavy.",
            modify: "Slide the heel along the floor instead of lifting.",
          },
          {
            name: "Child's pose breathing",
            dose: "6 breaths",
            cue: "Sit back toward your heels and breathe into your back body.",
            modify: "Lie on your side with knees curled in.",
          },
        ],
      },
    ],
  },
  {
    id: "stiff-morning-unwind",
    title: "Stiff Morning Unwind",
    collection: "how-do-you-feel-today",
    minutes: 15,
    equipment: ["none"],
    intensity: 1,
    goals: ["mobility", "posture"],
    energy: ["low", "medium"],
    stiffness: ["very"],
    summary:
      "Standing and seated mobility for when everything feels tight. No floor work required.",
    realLifeWin: "Turning to check a blind spot or look over your shoulder with ease.",
    considerations: ["Move within a comfortable range — stiffness should ease, not sharpen."],
    blocks: [
      {
        title: "Warm the joints",
        minutes: 5,
        exercises: [
          {
            name: "Marching with arm swings",
            dose: "60 seconds",
            cue: "March gently in place and let the arms swing naturally.",
          },
          {
            name: "Shoulder rolls",
            dose: "8 each direction",
            cue: "Lift, roll back, and lower the shoulders in big slow circles.",
          },
          {
            name: "Ankle circles",
            dose: "8 each direction, each foot",
            cue: "Hold a counter or wall for balance.",
          },
        ],
      },
      {
        title: "Unwind the spine",
        minutes: 6,
        exercises: [
          {
            name: "Standing roll-down",
            dose: "5 reps",
            cue: "Nod the chin and roll down only as far as is comfortable, knees soft. Restack slowly.",
            modify: "Hands on thighs and roll halfway.",
          },
          {
            name: "Standing side bend",
            dose: "5 each side",
            cue: "Reach one arm overhead and lengthen up before bending sideways.",
          },
          {
            name: "Wall-supported rotation",
            dose: "6 each side",
            cue: "Stand sideways to a wall and turn your chest toward it, hands on the wall.",
          },
        ],
      },
      {
        title: "Open & settle",
        minutes: 4,
        exercises: [
          {
            name: "Doorway chest opener",
            dose: "3 x 20 seconds",
            cue: "Forearms on a door frame, step through gently until you feel the front of the chest open.",
          },
          {
            name: "Standing calf stretch",
            dose: "30 seconds each side",
            cue: "Hands on a wall, one foot back, heel heavy.",
          },
        ],
      },
    ],
  },
  {
    id: "steady-core-reset",
    title: "Steady Core Reset",
    collection: "how-do-you-feel-today",
    minutes: 20,
    equipment: ["mat"],
    intensity: 2,
    goals: ["core", "posture", "strength"],
    energy: ["medium"],
    stiffness: ["loose", "a-little"],
    summary:
      "Classic mat Pilates foundations at a steady pace. A great default when you feel 'okay' and want to feel better.",
    realLifeWin: "Sitting and standing taller through a long workday.",
    considerations: ["Keep the head down for curl-ups if your neck tires."],
    blocks: [
      {
        title: "Centering",
        minutes: 4,
        exercises: [
          {
            name: "Lateral breathing",
            dose: "8 breaths",
            cue: "Hands on the ribs; feel them widen as you inhale and draw together as you exhale.",
          },
          {
            name: "Imprint & release",
            dose: "8 reps",
            cue: "On exhale, draw the belly in and gently imprint the low back. Release on inhale.",
          },
        ],
      },
      {
        title: "Core foundations",
        minutes: 9,
        exercises: [
          {
            name: "Chest lift",
            dose: "10 reps",
            cue: "Exhale to curl the head and shoulders up, keeping space between chin and chest.",
            modify: "Support the head with your hands.",
          },
          {
            name: "Single-leg stretch",
            dose: "8 each side",
            cue: "Alternate drawing one knee in while the other leg reaches long.",
            modify: "Keep the head down and the reaching leg higher.",
          },
          {
            name: "Toe taps",
            dose: "8 each side",
            cue: "From tabletop, tap one toe to the floor while the pelvis stays still.",
          },
          {
            name: "Side-lying leg lifts",
            dose: "10 each side",
            cue: "Stack hips and lift the top leg to hip height, reaching it long.",
          },
        ],
      },
      {
        title: "Back strength & stretch",
        minutes: 7,
        exercises: [
          {
            name: "Swan prep",
            dose: "6 reps",
            cue: "Lying on your stomach, press lightly into the forearms to lift the chest, eyes down.",
          },
          {
            name: "Swimming (modified)",
            dose: "8 each side",
            cue: "Lift opposite arm and leg a few inches, reaching long rather than high.",
          },
          {
            name: "Spine stretch forward",
            dose: "5 reps",
            cue: "Sit tall and round forward from the head, as if over a beach ball.",
            modify: "Sit on a folded towel or cushion.",
          },
        ],
      },
    ],
  },
  {
    id: "ready-to-work",
    title: "Ready to Work",
    collection: "how-do-you-feel-today",
    minutes: 20,
    equipment: ["mat"],
    intensity: 3,
    goals: ["strength", "core"],
    energy: ["high"],
    stiffness: ["loose", "a-little"],
    summary:
      "For days with energy to spare. A flowing, full-body mat session that challenges strength, control, and endurance.",
    realLifeWin: "Having the strength reserve to say yes to a hike, a game, or a busy day.",
    considerations: ["Choose the modification whenever form slips — control beats reps."],
    blocks: [
      {
        title: "Warm-up flow",
        minutes: 4,
        exercises: [
          {
            name: "Roll-down to plank walkout",
            dose: "5 reps",
            cue: "Roll down, walk hands out to plank, walk back and roll up.",
            modify: "Walk out to a tabletop on your knees.",
          },
          {
            name: "Cat-cow",
            dose: "8 reps",
            cue: "Move the spine segment by segment between arching and rounding.",
          },
        ],
      },
      {
        title: "Strength circuit (×2)",
        minutes: 11,
        exercises: [
          {
            name: "The Hundred",
            dose: "100 pumps",
            cue: "Curl up, legs in tabletop or extended, pump the arms with 5 counts in, 5 out.",
            modify: "Head down, feet on the floor.",
          },
          {
            name: "Roll-up",
            dose: "6 reps",
            cue: "Articulate up and over, then roll down with control.",
            modify: "Half roll-back holding behind the thighs.",
          },
          {
            name: "Criss-cross",
            dose: "8 each side",
            cue: "Rotate from the ribs, not the elbows.",
          },
          {
            name: "Plank to side plank",
            dose: "4 each side",
            cue: "Rotate as one unit, stacking hips and shoulders.",
            modify: "Side plank on the bottom knee.",
          },
          {
            name: "Single-leg bridge",
            dose: "8 each side",
            cue: "Keep the pelvis level as you lift and lower.",
          },
        ],
      },
      {
        title: "Cool down",
        minutes: 5,
        exercises: [
          {
            name: "Saw",
            dose: "5 each side",
            cue: "Sit tall, twist, then reach the pinky past the opposite little toe.",
          },
          {
            name: "Hamstring stretch",
            dose: "30 seconds each side",
            cue: "On your back, hold behind the thigh or use a strap.",
          },
          {
            name: "Rest & breathe",
            dose: "6 breaths",
            cue: "Notice how your body feels compared to when you started.",
          },
        ],
      },
    ],
  },
  {
    id: "calm-the-restless",
    title: "Calm the Restless",
    collection: "how-do-you-feel-today",
    minutes: 15,
    equipment: ["none"],
    intensity: 1,
    goals: ["stress-relief", "mobility"],
    energy: ["medium", "high"],
    stiffness: ["loose", "a-little"],
    summary:
      "When your mind is busy and your body is buzzing. Rhythmic movement and long exhales help you downshift.",
    realLifeWin: "Falling asleep more easily after a stressful day.",
    considerations: [],
    blocks: [
      {
        title: "Shake it out",
        minutes: 4,
        exercises: [
          {
            name: "Rhythmic arm swings",
            dose: "60 seconds",
            cue: "Twist side to side and let the arms swing loosely around you.",
          },
          {
            name: "Heel bounces",
            dose: "45 seconds",
            cue: "Small gentle bounces through the heels; let the shoulders go soft.",
          },
        ],
      },
      {
        title: "Breath-led movement",
        minutes: 7,
        exercises: [
          {
            name: "Box breathing with arm sweeps",
            dose: "6 rounds",
            cue: "Inhale 4 as arms rise, hold 4, exhale 4 as arms lower, hold 4.",
          },
          {
            name: "Standing cat-cow",
            dose: "8 reps",
            cue: "Hands on thighs, round and lengthen the spine with your breath.",
          },
          {
            name: "Slow lunge reach",
            dose: "5 each side",
            cue: "Step back into a small lunge and reach both arms up on a long exhale.",
          },
        ],
      },
      {
        title: "Settle",
        minutes: 4,
        exercises: [
          {
            name: "Seated forward fold",
            dose: "6 breaths",
            cue: "Sit on a chair or the floor and fold forward, exhaling longer than you inhale.",
          },
          {
            name: "Legs up the wall (optional)",
            dose: "2 minutes",
            cue: "Lie down with legs resting up a wall or on a chair seat.",
          },
        ],
      },
    ],
  },
  {
    id: "reformer-flow",
    title: "Reformer Flow",
    collection: "how-do-you-feel-today",
    minutes: 20,
    equipment: ["reformer"],
    intensity: 2,
    goals: ["strength", "core", "mobility"],
    energy: ["medium", "high"],
    stiffness: ["loose", "a-little"],
    summary:
      "A balanced reformer session — footwork, arm work, and spinal mobility with supportive spring tension.",
    realLifeWin: "Climbing stairs with strong, coordinated legs.",
    considerations: ["Spring suggestions vary by machine; start lighter and adjust."],
    blocks: [
      {
        title: "Footwork",
        minutes: 6,
        exercises: [
          {
            name: "Footwork series (toes, arches, heels)",
            dose: "10 each position",
            cue: "Press the carriage out with control, return slower than you push.",
          },
          {
            name: "Calf raises",
            dose: "10 reps",
            cue: "Keep the legs straight and lift and lower through the heels.",
          },
        ],
      },
      {
        title: "Arms & core",
        minutes: 8,
        exercises: [
          {
            name: "Supine arm presses",
            dose: "10 reps",
            cue: "Lying down, press the straps toward the hips with long arms.",
          },
          {
            name: "Bridging on the footbar",
            dose: "8 reps",
            cue: "Peel the spine up, push the carriage out and in, roll down.",
          },
          {
            name: "Seated rows",
            dose: "8 reps",
            cue: "Sit tall facing the straps and draw the elbows back.",
          },
        ],
      },
      {
        title: "Stretch",
        minutes: 6,
        exercises: [
          {
            name: "Elephant",
            dose: "6 reps",
            cue: "Hands on the footbar, push the carriage back with a rounded spine.",
          },
          {
            name: "Kneeling hip flexor stretch",
            dose: "30 seconds each side",
            cue: "One knee on the carriage, front foot on the frame; let the carriage glide gently.",
          },
        ],
      },
    ],
  },

  // ─── Movement Through Recovery ──────────────────────────────────────
  {
    id: "breast-surgery-early-mobility",
    title: "Breast Surgery Recovery: Early Mobility",
    collection: "movement-through-recovery",
    minutes: 15,
    equipment: ["chair"],
    intensity: 1,
    goals: ["recovery", "mobility"],
    energy: ["low", "medium"],
    stiffness: ["a-little", "very"],
    concerns: ["breast-surgery", "shoulder"],
    summary:
      "Gentle, seated range-of-motion work to restore comfortable shoulder and chest movement after breast surgery.",
    realLifeWin: "Reaching to brush your hair or fasten clothing comfortably.",
    considerations: [
      "Begin only with clearance from your surgeon or care team and follow their lifting and range-of-motion limits.",
      "Avoid movement that pulls on drains or incisions.",
      "Stop and contact your care team if you notice new swelling, redness, or a feeling of heaviness in the arm.",
    ],
    blocks: [
      {
        title: "Breath & posture",
        minutes: 4,
        exercises: [
          {
            name: "Seated diaphragmatic breathing",
            dose: "8 breaths",
            cue: "Sit tall with feet flat; let the belly and ribs expand gently.",
          },
          {
            name: "Shoulder blade squeezes",
            dose: "8 reps",
            cue: "Gently draw shoulder blades back and down, hold 3 seconds, release.",
          },
        ],
      },
      {
        title: "Gentle range of motion",
        minutes: 7,
        exercises: [
          {
            name: "Shoulder shrugs & rolls",
            dose: "8 reps",
            cue: "Small, slow circles — no forcing.",
          },
          {
            name: "Table slides",
            dose: "8 reps",
            cue: "Hands on a towel on a table, slide forward as far as comfortable, then back.",
            modify: "Slide one hand at a time.",
          },
          {
            name: "Wall finger walks",
            dose: "5 reps each arm",
            cue: "Face a wall and walk the fingers upward only to the edge of comfort.",
          },
        ],
      },
      {
        title: "Open & rest",
        minutes: 4,
        exercises: [
          {
            name: "Seated hands-behind-head opener",
            dose: "5 reps",
            cue: "If allowed, place hands lightly behind the head and let the elbows open slowly.",
            modify: "Hands on shoulders instead.",
          },
          {
            name: "Neck release",
            dose: "3 breaths each side",
            cue: "Tip the ear toward the shoulder without lifting the shoulder.",
          },
        ],
      },
    ],
  },
  {
    id: "shoulder-friendly-strength",
    title: "Shoulder-Friendly Strength",
    collection: "movement-through-recovery",
    minutes: 20,
    equipment: ["mat"],
    intensity: 1,
    goals: ["recovery", "strength", "posture"],
    energy: ["low", "medium"],
    stiffness: ["loose", "a-little", "very"],
    concerns: ["shoulder", "breast-surgery"],
    summary:
      "Core and lower-body Pilates with no weight-bearing on the arms, plus gentle shoulder stability work.",
    realLifeWin: "Lifting a light bag onto a counter without guarding the shoulder.",
    considerations: [
      "No planks or weight-bearing on hands in this session.",
      "Keep shoulder movement pain-free; mild stretch is okay, sharp pain is not.",
    ],
    blocks: [
      {
        title: "Set the shoulders",
        minutes: 5,
        exercises: [
          {
            name: "Arms floats (supine)",
            dose: "8 reps",
            cue: "On your back, float arms toward the ceiling and lower them with control.",
            modify: "Keep elbows bent.",
          },
          {
            name: "Scapular reaches",
            dose: "8 reps",
            cue: "Arms to the ceiling, reach a little higher then let the shoulder blades settle.",
          },
        ],
      },
      {
        title: "Core without the arms",
        minutes: 9,
        exercises: [
          {
            name: "Heel slides",
            dose: "8 each side",
            cue: "Slide one heel away and back while the pelvis stays steady.",
          },
          {
            name: "Bridge",
            dose: "10 reps",
            cue: "Arms resting by your sides, palms up if more comfortable.",
          },
          {
            name: "Side-lying clam",
            dose: "12 each side",
            cue: "Rest your head on a pillow and keep the top arm relaxed on your hip.",
          },
          {
            name: "Side-lying leg circles",
            dose: "6 each direction",
            cue: "Small circles from the hip.",
          },
        ],
      },
      {
        title: "Shoulder stability",
        minutes: 6,
        exercises: [
          {
            name: "Seated external rotation",
            dose: "10 each side",
            cue: "Elbow at your side bent to 90°, rotate the forearm out a few inches and back.",
          },
          {
            name: "Wall angels (partial)",
            dose: "6 reps",
            cue: "Back against a wall, slide arms up only within a pain-free range.",
          },
        ],
      },
    ],
  },
  {
    id: "back-care-foundations",
    title: "Back Care Foundations",
    collection: "movement-through-recovery",
    minutes: 20,
    equipment: ["mat"],
    intensity: 1,
    goals: ["recovery", "core", "mobility"],
    energy: ["low", "medium"],
    stiffness: ["a-little", "very"],
    concerns: ["back"],
    summary:
      "Neutral-spine core work and gentle mobility to support a sensitive or recovering back.",
    realLifeWin: "Bending to load the dishwasher without bracing for pain.",
    considerations: [
      "If you have a diagnosed disc or nerve condition, check which movements your provider recommends.",
      "Skip any position that sends pain, tingling, or numbness down a leg.",
    ],
    blocks: [
      {
        title: "Find neutral",
        minutes: 5,
        exercises: [
          {
            name: "Neutral pelvis exploration",
            dose: "8 reps",
            cue: "Rock between tilts and settle in the middle — a small natural curve in the low back.",
          },
          {
            name: "Breath with deep core",
            dose: "8 breaths",
            cue: "Exhale and gently draw the lower belly in like zipping up snug jeans.",
          },
        ],
      },
      {
        title: "Stability",
        minutes: 9,
        exercises: [
          {
            name: "Marching (supine)",
            dose: "8 each side",
            cue: "Lift one foot an inch off the floor while the pelvis stays level.",
          },
          {
            name: "Bird dog",
            dose: "6 each side",
            cue: "On hands and knees, reach opposite arm and leg long, hold for a breath.",
            modify: "Only slide the leg back along the floor.",
          },
          {
            name: "Side-lying bent-knee lift",
            dose: "8 each side",
            cue: "Lie on your side with knees bent, lift both feet slightly to engage the side waist.",
          },
        ],
      },
      {
        title: "Ease & release",
        minutes: 6,
        exercises: [
          {
            name: "Knee hugs",
            dose: "6 breaths",
            cue: "Hug both knees toward the chest and rock gently.",
            modify: "One knee at a time.",
          },
          {
            name: "Gentle supine twist",
            dose: "5 each side",
            cue: "Lower the knees halfway to one side, pause, return.",
          },
          {
            name: "Prone rest on forearms",
            dose: "5 breaths",
            cue: "If comfortable, rest on your forearms and let the belly soften.",
          },
        ],
      },
    ],
  },
  {
    id: "returning-to-movement",
    title: "Returning to Movement",
    collection: "movement-through-recovery",
    minutes: 20,
    equipment: ["mat"],
    intensity: 2,
    goals: ["recovery", "strength", "core"],
    energy: ["medium"],
    stiffness: ["loose", "a-little"],
    concerns: ["returning"],
    summary:
      "A confidence-building bridge back to full workouts after illness, injury, or time away.",
    realLifeWin: "Feeling ready to rejoin a class, a walk group, or your old routine.",
    considerations: ["Repeat this session a few times before increasing intensity."],
    blocks: [
      {
        title: "Re-connect",
        minutes: 4,
        exercises: [
          {
            name: "Body scan breathing",
            dose: "6 breaths",
            cue: "Notice areas of tension and let each exhale soften one area.",
          },
          {
            name: "Pelvic curl",
            dose: "8 reps",
            cue: "Roll the spine up partway and down with control.",
          },
        ],
      },
      {
        title: "Build",
        minutes: 11,
        exercises: [
          {
            name: "Chest lift",
            dose: "8 reps",
            cue: "Curl up on exhale, lower on inhale.",
            modify: "Head stays down; just engage the deep core.",
          },
          {
            name: "Tabletop toe taps",
            dose: "8 each side",
            cue: "Tap one toe down with a stable pelvis.",
          },
          {
            name: "Quadruped knee hover",
            dose: "4 × 10 seconds",
            cue: "On hands and knees, lift the knees an inch and hold.",
          },
          {
            name: "Side-lying leg series",
            dose: "8 lifts + 8 circles each side",
            cue: "Long body, top hip stacked.",
          },
          {
            name: "Sit-to-stand",
            dose: "8 reps",
            cue: "From a chair or the edge of your mat, stand without using hands if possible.",
          },
        ],
      },
      {
        title: "Recover",
        minutes: 5,
        exercises: [
          {
            name: "Figure-four stretch",
            dose: "30 seconds each side",
            cue: "Ankle over opposite knee, draw legs toward you.",
          },
          {
            name: "Mermaid stretch",
            dose: "4 each side",
            cue: "Seated, reach one arm overhead and lean to open the side body.",
          },
        ],
      },
    ],
  },

  // ─── Strong for Life ────────────────────────────────────────────────
  {
    id: "chair-pilates-full-body",
    title: "Chair Pilates Full Body",
    collection: "strong-for-life",
    minutes: 20,
    equipment: ["chair"],
    intensity: 1,
    goals: ["strength", "core", "posture"],
    energy: ["low", "medium"],
    stiffness: ["loose", "a-little", "very"],
    concerns: ["returning", "back"],
    summary:
      "A complete Pilates session done seated or standing with a sturdy chair — no getting down on the floor.",
    realLifeWin: "Getting in and out of a car with less effort.",
    considerations: ["Use a sturdy chair without wheels, placed against a wall."],
    blocks: [
      {
        title: "Seated warm-up",
        minutes: 5,
        exercises: [
          {
            name: "Seated breathing & tall spine",
            dose: "6 breaths",
            cue: "Sit toward the front of the chair, feet hip-width, crown of the head lifting.",
          },
          {
            name: "Seated cat-cow",
            dose: "8 reps",
            cue: "Hands on thighs, round and arch the spine slowly.",
          },
          {
            name: "Seated twists",
            dose: "6 each side",
            cue: "Grow tall, then rotate the ribs, keeping knees forward.",
          },
        ],
      },
      {
        title: "Seated core & legs",
        minutes: 9,
        exercises: [
          {
            name: "Seated marching",
            dose: "10 each side",
            cue: "Lift one knee a few inches without leaning back.",
          },
          {
            name: "Seated lean-backs",
            dose: "8 reps",
            cue: "Arms crossed, lean back a few inches with a long spine, return.",
          },
          {
            name: "Seated leg extensions",
            dose: "10 each side",
            cue: "Straighten one knee and squeeze the thigh for 2 seconds.",
          },
          {
            name: "Sit-to-stand",
            dose: "8 reps",
            cue: "Nose over toes, press through the heels to stand, sit down slowly.",
            modify: "Use your hands on the armrests or thighs.",
          },
        ],
      },
      {
        title: "Standing with support",
        minutes: 6,
        exercises: [
          {
            name: "Chair-supported heel raises",
            dose: "12 reps",
            cue: "Hold the chair back, rise onto the balls of the feet, lower slowly.",
          },
          {
            name: "Side leg lifts",
            dose: "8 each side",
            cue: "Stand tall and lift one leg out to the side without leaning.",
          },
          {
            name: "Standing chest opener",
            dose: "5 breaths",
            cue: "Clasp hands behind you (or hold a towel) and gently open the chest.",
          },
        ],
      },
    ],
  },
  {
    id: "balance-builder",
    title: "Balance Builder",
    collection: "strong-for-life",
    minutes: 15,
    equipment: ["chair"],
    intensity: 2,
    goals: ["balance", "strength", "everyday-function"],
    energy: ["medium", "high"],
    stiffness: ["loose", "a-little"],
    summary:
      "Progressive balance training with a chair for support. Builds the reflexes and leg strength that help prevent falls.",
    realLifeWin: "Feeling steady on uneven sidewalks and stairs.",
    considerations: [
      "Always keep a hand on or near the chair.",
      "Practice near a wall or counter, with the floor clear of clutter.",
    ],
    blocks: [
      {
        title: "Ground the feet",
        minutes: 3,
        exercises: [
          {
            name: "Foot tripod",
            dose: "6 breaths",
            cue: "Feel weight through the big toe, little toe, and heel of each foot.",
          },
          {
            name: "Weight shifts",
            dose: "10 reps",
            cue: "Shift weight side to side, then front to back, slowly.",
          },
        ],
      },
      {
        title: "Static balance",
        minutes: 6,
        exercises: [
          {
            name: "Tandem stance",
            dose: "3 × 20 seconds each side",
            cue: "One foot directly in front of the other, hand on the chair.",
            modify: "Staggered stance with feet slightly apart.",
          },
          {
            name: "Single-leg stand",
            dose: "3 × 10–20 seconds each side",
            cue: "Lift one foot a few inches; light fingertip touch on the chair.",
          },
        ],
      },
      {
        title: "Dynamic balance",
        minutes: 6,
        exercises: [
          {
            name: "Heel-to-toe walk",
            dose: "2 lengths of a hallway",
            cue: "Walk along a wall or counter, placing one heel right in front of the other toes.",
          },
          {
            name: "Clock reaches",
            dose: "4 each side",
            cue: "Stand on one leg and tap the other toe forward, side, and back.",
          },
          {
            name: "Step-ups",
            dose: "8 each side",
            cue: "Step up onto the bottom stair holding the rail.",
          },
        ],
      },
    ],
  },
  {
    id: "functional-strength-standing",
    title: "Functional Strength",
    collection: "strong-for-life",
    minutes: 20,
    equipment: ["chair"],
    intensity: 2,
    goals: ["strength", "everyday-function", "balance"],
    energy: ["medium", "high"],
    stiffness: ["loose", "a-little"],
    summary:
      "Standing Pilates-inspired strength training for the muscles you use every day — legs, hips, back, and core.",
    realLifeWin: "Carrying groceries from the car in one trip.",
    considerations: ["Water bottles or light hand weights are optional."],
    blocks: [
      {
        title: "Warm-up",
        minutes: 4,
        exercises: [
          {
            name: "March & reach",
            dose: "60 seconds",
            cue: "March in place, reaching opposite arm forward.",
          },
          {
            name: "Mini squats",
            dose: "8 reps",
            cue: "Hands on the chair back, bend the knees slightly and stand.",
          },
        ],
      },
      {
        title: "Strength",
        minutes: 12,
        exercises: [
          {
            name: "Chair squats",
            dose: "10 reps",
            cue: "Sit back until you lightly touch the chair, then stand.",
          },
          {
            name: "Standing hip extension",
            dose: "10 each side",
            cue: "Hold the chair, reach one leg back without arching the low back.",
          },
          {
            name: "Wall push-ups",
            dose: "10 reps",
            cue: "Hands on a wall at chest height, lower the chest toward the wall as one long line.",
          },
          {
            name: "Bent-over rows (light weight)",
            dose: "10 each side",
            cue: "One hand on the chair, hinge forward, draw the elbow back.",
          },
          {
            name: "Standing side bends with weight",
            dose: "8 each side",
            cue: "Hold a weight on one side, bend away and return tall.",
          },
        ],
      },
      {
        title: "Cool down",
        minutes: 4,
        exercises: [
          {
            name: "Standing quad stretch",
            dose: "20 seconds each side",
            cue: "Hold the chair; use a towel around the ankle if needed.",
          },
          {
            name: "Seated hamstring stretch",
            dose: "20 seconds each side",
            cue: "Sit at the chair edge, one leg straight, hinge forward.",
          },
        ],
      },
    ],
  },
  {
    id: "seated-mobility",
    title: "Seated Mobility",
    collection: "strong-for-life",
    minutes: 15,
    equipment: ["chair"],
    intensity: 1,
    goals: ["mobility", "posture", "stress-relief"],
    energy: ["low"],
    stiffness: ["a-little", "very"],
    concerns: ["returning"],
    summary:
      "Entirely seated joint mobility from neck to ankles. Ideal on low-energy or high-stiffness days.",
    realLifeWin: "Reaching down to put on shoes and socks.",
    considerations: [],
    blocks: [
      {
        title: "Upper body",
        minutes: 6,
        exercises: [
          {
            name: "Neck turns & nods",
            dose: "5 each direction",
            cue: "Slow, small, and comfortable.",
          },
          {
            name: "Arm circles",
            dose: "8 each direction",
            cue: "Start small and grow the circles as the shoulders warm.",
          },
          {
            name: "Seated side reach",
            dose: "5 each side",
            cue: "Reach one arm overhead and lean to the opposite side.",
          },
        ],
      },
      {
        title: "Spine",
        minutes: 4,
        exercises: [
          {
            name: "Seated roll-down",
            dose: "5 reps",
            cue: "Nod the chin and roll forward over your thighs, then restack.",
          },
          {
            name: "Seated twist",
            dose: "5 each side",
            cue: "Hand on the opposite knee, rotate gently.",
          },
        ],
      },
      {
        title: "Lower body",
        minutes: 5,
        exercises: [
          {
            name: "Ankle pumps & circles",
            dose: "10 pumps + 5 circles each foot",
            cue: "Flex and point, then circle each ankle.",
          },
          {
            name: "Seated figure-four",
            dose: "20 seconds each side",
            cue: "Ankle on the opposite knee, lean forward gently.",
            modify: "Rest the ankle on the shin instead.",
          },
          {
            name: "Knee-to-chest (seated)",
            dose: "5 each side",
            cue: "Hug one knee in with a tall spine.",
          },
        ],
      },
    ],
  },
  {
    id: "reformer-supported-strength",
    title: "Reformer Supported Strength",
    collection: "strong-for-life",
    minutes: 20,
    equipment: ["reformer"],
    intensity: 2,
    goals: ["strength", "balance", "everyday-function"],
    energy: ["medium"],
    stiffness: ["loose", "a-little", "very"],
    summary:
      "The reformer's support makes strength training joint-friendly. Leg, hip, and back strength for active aging.",
    realLifeWin: "Rising from a low couch without pushing off with your hands.",
    considerations: ["Ask for help getting on and off the reformer if needed."],
    blocks: [
      {
        title: "Footwork",
        minutes: 7,
        exercises: [
          {
            name: "Parallel heels",
            dose: "10 reps",
            cue: "Press out through the heels, legs parallel, slow return.",
          },
          {
            name: "Single-leg press",
            dose: "8 each side",
            cue: "One foot on the bar, the other in tabletop.",
          },
          {
            name: "Heel raises",
            dose: "10 reps",
            cue: "Balls of feet on the bar, lift and lower the heels.",
          },
        ],
      },
      {
        title: "Strength",
        minutes: 9,
        exercises: [
          {
            name: "Bridging",
            dose: "8 reps",
            cue: "Feet on the bar, lift the hips and hold the carriage still.",
          },
          {
            name: "Side-lying leg press",
            dose: "8 each side",
            cue: "Lie on your side, press the carriage out with the bottom leg.",
          },
          {
            name: "Seated arm series",
            dose: "8 each",
            cue: "Sit tall: rows, chest expansion, and bicep curls.",
          },
        ],
      },
      {
        title: "Stretch",
        minutes: 4,
        exercises: [
          {
            name: "Standing lunge stretch",
            dose: "20 seconds each side",
            cue: "Hold the footbar and let the carriage glide back gently.",
          },
          {
            name: "Seated spine twist",
            dose: "4 each side",
            cue: "Sit tall and rotate with a long spine.",
          },
        ],
      },
    ],
  },

  // ─── Real Life Wins ─────────────────────────────────────────────────
  {
    id: "reach-overhead",
    title: "Reach the Top Shelf",
    collection: "real-life-wins",
    minutes: 15,
    equipment: ["none"],
    intensity: 1,
    goals: ["mobility", "posture", "everyday-function"],
    energy: ["low", "medium", "high"],
    stiffness: ["a-little", "very"],
    summary:
      "Open the upper back, shoulders, and side body so reaching overhead feels easy and pain-free.",
    realLifeWin: "Reaching the top shelf or putting a bag in the overhead bin.",
    considerations: ["If you have a shoulder injury, try Shoulder-Friendly Strength first."],
    blocks: [
      {
        title: "Upper back",
        minutes: 5,
        exercises: [
          {
            name: "Wall slides",
            dose: "8 reps",
            cue: "Forearms on a wall, slide up while keeping the ribs from flaring.",
          },
          {
            name: "Thread the needle (standing)",
            dose: "6 each side",
            cue: "Hands on a counter, reach one arm under and then up to the ceiling.",
          },
        ],
      },
      {
        title: "Shoulders & side body",
        minutes: 6,
        exercises: [
          {
            name: "Doorway lat stretch",
            dose: "20 seconds each side",
            cue: "Hold a door frame overhead and gently sink the hips away.",
          },
          {
            name: "Overhead reach with exhale",
            dose: "8 reps",
            cue: "Reach both arms up, exhale and keep the ribs down.",
          },
          {
            name: "Standing side bend",
            dose: "5 each side",
            cue: "Lengthen up before bending sideways.",
          },
        ],
      },
      {
        title: "Practice the win",
        minutes: 4,
        exercises: [
          {
            name: "Shelf reach practice",
            dose: "8 each arm",
            cue: "Reach to a high shelf with a light object; stand tall and keep the core gently engaged.",
          },
          {
            name: "Heel raise with reach",
            dose: "8 reps",
            cue: "Rise onto the toes as you reach high, lower slowly.",
          },
        ],
      },
    ],
  },
  {
    id: "floor-to-standing",
    title: "Down to the Floor & Back Up",
    collection: "real-life-wins",
    minutes: 20,
    equipment: ["mat"],
    intensity: 2,
    goals: ["strength", "mobility", "everyday-function"],
    energy: ["medium", "high"],
    stiffness: ["loose", "a-little"],
    summary:
      "Practice getting down to and up from the floor with control — a key skill for independence and play.",
    realLifeWin: "Getting down to play with grandkids or garden, and back up with confidence.",
    considerations: ["Keep a sturdy chair or couch nearby for support during transitions."],
    blocks: [
      {
        title: "Prepare",
        minutes: 5,
        exercises: [
          {
            name: "Supported squats",
            dose: "8 reps",
            cue: "Hold the chair and squat as low as is comfortable.",
          },
          {
            name: "Lunge holds",
            dose: "20 seconds each side",
            cue: "Hold the chair in a split stance, back knee lowering slightly.",
          },
        ],
      },
      {
        title: "Transitions",
        minutes: 10,
        exercises: [
          {
            name: "Half-kneel to stand",
            dose: "5 each side",
            cue: "From one knee down, press through the front foot to stand, using the chair as needed.",
          },
          {
            name: "Kneel to side-sit",
            dose: "4 each side",
            cue: "From kneeling, lower the hips to one side onto the floor.",
          },
          {
            name: "Floor to standing sequence",
            dose: "4 reps",
            cue: "Side-sit → hands and knees → half kneel → stand. Go slowly.",
            modify: "Use the chair seat to push up.",
          },
        ],
      },
      {
        title: "Strengthen",
        minutes: 5,
        exercises: [
          {
            name: "Bridge",
            dose: "10 reps",
            cue: "Drive through the heels to lift the hips.",
          },
          {
            name: "Quadruped reach",
            dose: "6 each side",
            cue: "Reach one arm forward, then one leg back.",
          },
        ],
      },
    ],
  },
  {
    id: "travel-ready",
    title: "Travel Ready",
    collection: "real-life-wins",
    minutes: 15,
    equipment: ["chair"],
    intensity: 1,
    goals: ["mobility", "stress-relief", "everyday-function"],
    energy: ["low", "medium"],
    stiffness: ["a-little", "very"],
    summary:
      "Seated and standing moves you can do before, during, or after a long flight or car ride.",
    realLifeWin: "Stepping off a long flight without the stiff back and swollen ankles.",
    considerations: ["On a plane, do the seated block only and keep movements small."],
    blocks: [
      {
        title: "In your seat",
        minutes: 6,
        exercises: [
          {
            name: "Ankle pumps",
            dose: "20 reps",
            cue: "Flex and point to keep circulation moving.",
          },
          {
            name: "Seated knee lifts",
            dose: "10 each side",
            cue: "Lift one knee, lower, alternate.",
          },
          {
            name: "Seated pelvic tilts",
            dose: "10 reps",
            cue: "Roll back and forward on your sit bones.",
          },
          {
            name: "Shoulder blade squeezes",
            dose: "10 reps",
            cue: "Draw the shoulder blades together, hold 3 seconds.",
          },
        ],
      },
      {
        title: "Standing break",
        minutes: 6,
        exercises: [
          {
            name: "Calf raises",
            dose: "15 reps",
            cue: "Hold a seat back or wall.",
          },
          {
            name: "Standing hip flexor stretch",
            dose: "20 seconds each side",
            cue: "Small split stance, tuck the pelvis slightly.",
          },
          {
            name: "Standing back extension",
            dose: "5 reps",
            cue: "Hands on low back, gently lift the chest upward.",
          },
        ],
      },
      {
        title: "Arrive",
        minutes: 3,
        exercises: [
          {
            name: "Neck release",
            dose: "3 breaths each side",
            cue: "Ear toward shoulder, then chin toward chest.",
          },
          {
            name: "Long exhale breathing",
            dose: "6 breaths",
            cue: "Inhale for 4, exhale for 6–8.",
          },
        ],
      },
    ],
  },
  {
    id: "carry-and-lift",
    title: "Lift, Carry & Hold",
    collection: "real-life-wins",
    minutes: 20,
    equipment: ["none"],
    intensity: 2,
    goals: ["strength", "core", "everyday-function"],
    energy: ["medium", "high"],
    stiffness: ["loose", "a-little"],
    summary:
      "Train your core and hips to lift and carry safely — laundry baskets, grandkids, groceries, and luggage.",
    realLifeWin: "Lifting a laundry basket or a small child without straining your back.",
    considerations: ["Use household objects you can lift comfortably — a light bag or water jug."],
    blocks: [
      {
        title: "Hinge practice",
        minutes: 5,
        exercises: [
          {
            name: "Hip hinge with dowel or broom",
            dose: "8 reps",
            cue: "Hold a broom along your spine; hinge forward keeping head, mid-back, and tailbone in contact.",
          },
          {
            name: "Good mornings",
            dose: "8 reps",
            cue: "Hands on hips, push hips back, return tall.",
          },
        ],
      },
      {
        title: "Lift & carry",
        minutes: 10,
        exercises: [
          {
            name: "Deadlift with a bag",
            dose: "10 reps",
            cue: "Bag between your feet; hinge, grip, exhale and stand.",
          },
          {
            name: "Suitcase carry",
            dose: "3 × 30 seconds each side",
            cue: "Hold a bag in one hand and walk tall without leaning.",
          },
          {
            name: "Front hold squat",
            dose: "8 reps",
            cue: "Hug a light object at your chest and squat to a chair.",
          },
          {
            name: "Standing anti-rotation press",
            dose: "8 each side",
            cue: "Hold an object at your chest and press it out without letting your torso turn.",
          },
        ],
      },
      {
        title: "Recover",
        minutes: 5,
        exercises: [
          {
            name: "Standing roll-down",
            dose: "4 reps",
            cue: "Release the spine slowly.",
          },
          {
            name: "Forearm stretch",
            dose: "20 seconds each side",
            cue: "Gently pull the fingers back with the opposite hand.",
          },
          {
            name: "Child's pose or seated fold",
            dose: "6 breaths",
            cue: "Rest and breathe.",
          },
        ],
      },
    ],
  },
];

export function getSession(id: string): Session | undefined {
  return sessions.find((s) => s.id === id);
}

export function getSessionsByCollection(slug: string): Session[] {
  return sessions.filter((s) => s.collection === slug);
}
