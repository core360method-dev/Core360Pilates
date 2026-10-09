import type { PopulationGuide } from "./types.ts";

export const populationGuides: PopulationGuide[] = [
  {
    slug: "breast-cancer-recovery",
    title: "Breast Cancer & Breast Surgery Recovery",
    summary: "Restoring range of motion, strength, and confidence after mastectomy, lumpectomy, or reconstruction.",
    overview:
      "Clients may be recovering from surgery, radiation, chemotherapy, or reconstruction, and may be managing fatigue, cording, or lymphedema risk. Surgical approach and timelines vary widely, so the client's surgeon or care team sets restrictions — your role is to work within them and help the client rebuild trust in their body.",
    goals: [
      "Restore comfortable shoulder range of motion (flexion, abduction, external rotation)",
      "Improve posture and reduce guarding through the chest and shoulders",
      "Rebuild lower-body and core strength while upper-body loading is restricted",
      "Gradually reintroduce upper-body strength once cleared",
      "Support energy management and emotional well-being",
    ],
    favor: [
      "Breathing and posture work",
      "Gentle active range of motion within cleared limits (table slides, wall walks)",
      "Lower-body and head-down core work",
      "Slow, progressive upper-body loading after clearance",
    ],
    modifyOrAvoid: [
      "Weight-bearing on the arms (planks, quadruped, push-ups) until cleared",
      "Prone positions if uncomfortable with incisions or reconstruction",
      "Lying on the surgical side early in recovery",
      "Pulling on drains or incisions; end-range stretching before cleared",
      "Sudden jumps in upper-body volume — progress gradually and monitor the arm",
    ],
    redFlags: [
      "New or increased swelling, heaviness, or tightness in the arm, hand, or chest (possible lymphedema)",
      "Redness, warmth, or drainage at an incision",
      "Fever or feeling unwell",
      "A tight, cord-like band in the armpit that limits movement (axillary web syndrome) — refer to the care team or a specialist PT",
      "Unusual fatigue, shortness of breath, or dizziness",
    ],
    teachingTips: [
      "Ask what restrictions the care team has given and what phase of treatment they are in — then write it on the class plan.",
      "Offer choices rather than corrections; many clients feel disconnected from their bodies after surgery.",
      "Avoid tactile cues near the chest or surgical areas; always ask permission before any touch.",
      "Celebrate functional wins: brushing hair, reaching a shelf, fastening a bra.",
      "Know your local oncology-trained physical therapists for referrals.",
    ],
    relatedSessionIds: ["breast-surgery-early-mobility", "shoulder-friendly-strength"],
    relatedExerciseIds: ["lateral-breathing", "pelvic-curl", "toe-taps", "wall-push-up"],
  },
  {
    slug: "osteoporosis",
    title: "Osteoporosis & Low Bone Density",
    summary: "Building strength and balance while protecting the spine from loaded flexion.",
    overview:
      "Low bone density raises fracture risk, particularly of the spine (vertebral compression fractures), hip, and wrist. Pilates can be excellent for posture, balance, and strength — but several classical exercises involve loaded spinal flexion, which should be avoided or modified. Falls are the main cause of fractures, so balance training is a priority.",
    goals: [
      "Improve posture and thoracic extension strength",
      "Build balance and reduce fall risk",
      "Strengthen hips and legs",
      "Teach safe movement patterns for daily life (hip hinge, log roll)",
    ],
    favor: [
      "Neutral-spine core work (toe taps, dead bug)",
      "Back extension (swan prep, swimming) in a comfortable range",
      "Balance training with support",
      "Standing and functional work (sit-to-stand, hip hinge)",
      "Weight-bearing exercise appropriate to the client",
    ],
    modifyOrAvoid: [
      "Loaded spinal flexion: roll-up, roll-over, teaser, chest lift with repetition, full spine stretch",
      "Combined flexion and rotation (e.g., criss-cross, saw)",
      "End-range rotation under load",
      "Rolling like a ball and other rolling exercises",
      "High-impact movement for clients with high fracture risk",
    ],
    redFlags: [
      "Sudden back pain, especially after a minor bump, bend, or cough (possible vertebral fracture) — stop and refer",
      "Loss of height or a change in posture",
      "Any fall during or before class",
    ],
    teachingTips: [
      "Ask whether the client knows their bone density results or has a history of fractures.",
      "Teach the log roll for getting on and off the mat.",
      "Swap flexion-based classical exercises for neutral-spine equivalents — and explain why, so clients carry it into daily life.",
      "Use 'tall spine' language rather than 'round down' in cueing.",
    ],
    relatedSessionIds: ["balance-builder", "functional-strength-standing", "carry-and-lift"],
    relatedExerciseIds: ["toe-taps", "swan-prep", "single-leg-stance", "hip-hinge", "sit-to-stand"],
  },
  {
    slug: "low-back-pain",
    title: "Low Back Pain",
    summary: "Reducing fear and rebuilding confident, varied movement for sensitive backs.",
    overview:
      "Most low back pain is non-specific and improves with graded, confident movement. Clients may fear movement, which can make pain worse. The goal is to restore variety and trust — not to find one 'perfect' posture. Clients with diagnosed disc, nerve, or structural conditions should follow their provider's guidance.",
    goals: [
      "Reduce fear of movement",
      "Restore comfortable spinal mobility in all directions as tolerated",
      "Build trunk and hip endurance",
      "Teach movement strategies for daily tasks",
    ],
    favor: [
      "Breathing and relaxation",
      "Neutral-spine stability with limb movement",
      "Gentle mobility in the client's comfortable directions",
      "Hip strength and hip hinge practice",
    ],
    modifyOrAvoid: [
      "Positions that increase or spread symptoms (pain traveling down a leg)",
      "Long holds in a single position — vary positions often",
      "High-load flexion during acute flare-ups",
    ],
    redFlags: [
      "Numbness in the saddle area, or new bladder or bowel changes — urgent medical referral",
      "Progressive leg weakness or foot drop",
      "Pain with fever, unexplained weight loss, or a history of cancer",
      "Severe night pain that doesn't change with position",
    ],
    teachingTips: [
      "Use reassuring language: 'your back is strong' rather than 'protect your back.'",
      "Use a traffic-light system: green = no pain change, yellow = mild and settles quickly, red = stop.",
      "Track symptoms the next day, not just during class.",
    ],
    relatedSessionIds: ["back-care-foundations", "returning-to-movement"],
    relatedExerciseIds: ["lateral-breathing", "toe-taps", "swimming", "hip-hinge", "pelvic-curl"],
  },
  {
    slug: "shoulder-limitations",
    title: "Shoulder Limitations",
    summary: "Working around and gently improving restricted or painful shoulders.",
    overview:
      "Shoulder limitations include rotator cuff issues, frozen shoulder, post-surgical restrictions, and general stiffness. The priorities are pain-free range, scapular control, and strength — while keeping the rest of the body working.",
    goals: [
      "Maintain overall fitness without aggravating the shoulder",
      "Improve scapular control and posture",
      "Gradually restore pain-free range and strength",
    ],
    favor: [
      "Lower-body and core work without arm weight-bearing",
      "Scapular setting and external rotation work",
      "Range of motion below shoulder height, progressing upward as tolerated",
    ],
    modifyOrAvoid: [
      "Weight-bearing on the hands (plank, quadruped) if painful",
      "Overhead loading",
      "Arm work behind the body (e.g., certain reformer straps) if painful",
      "Lying on the affected side",
    ],
    redFlags: [
      "Sudden loss of strength or the ability to lift the arm",
      "Night pain that disrupts sleep",
      "Pain or tingling radiating down the arm",
    ],
    teachingTips: [
      "Ask which movements bother the shoulder and plan around them.",
      "Offer pillows to support the arm in side-lying.",
      "Small ranges done well beat big ranges done painfully.",
    ],
    relatedSessionIds: ["shoulder-friendly-strength", "reach-overhead"],
    relatedExerciseIds: ["wall-push-up", "side-lying-leg-series", "toe-taps"],
  },
  {
    slug: "active-aging",
    title: "Seniors & Active Aging",
    summary: "Functional strength, balance, and confidence for independence at every age.",
    overview:
      "Older adults vary enormously — from marathon runners to clients who can't get on the floor. Train for function: getting up and down, balance, walking, carrying, and reaching. Chair and standing work make Pilates accessible to everyone.",
    goals: [
      "Maintain and build independence in daily tasks",
      "Reduce fall risk through balance and leg strength",
      "Preserve mobility and posture",
      "Build social connection and confidence",
    ],
    favor: [
      "Sit-to-stand and functional strength",
      "Balance training with support",
      "Chair Pilates for clients who can't use the floor",
      "Floor-transfer practice for those who can",
    ],
    modifyOrAvoid: [
      "Rapid position changes (supine to standing) — allow time to adjust to avoid dizziness",
      "Long periods lying flat for clients with reflux or breathing difficulties",
      "Loaded flexion if bone density is unknown or low",
    ],
    redFlags: [
      "Dizziness, chest pain, or unusual shortness of breath",
      "Recent fall or near-falls",
      "Sudden confusion or changes in balance",
    ],
    teachingTips: [
      "Use a sturdy chair against a wall; stand on the client's weaker side during balance work.",
      "Speak clearly, face the class, and demonstrate — not everyone hears well.",
      "Ask about medications that can affect balance or blood pressure.",
      "Connect every exercise to a daily-life task.",
    ],
    relatedSessionIds: ["chair-pilates-full-body", "balance-builder", "seated-mobility", "floor-to-standing"],
    relatedExerciseIds: ["sit-to-stand", "single-leg-stance", "hip-hinge", "reformer-footwork"],
  },
];

export const populationTitles = Object.fromEntries(
  populationGuides.map((p) => [p.slug, p.title]),
) as Record<PopulationGuide["slug"], string>;

export function getPopulationGuide(slug: string): PopulationGuide | undefined {
  return populationGuides.find((p) => p.slug === slug);
}
